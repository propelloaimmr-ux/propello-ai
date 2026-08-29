// Stylized dot-matrix world map. Continents are approximated as overlapping
// ellipses (not real geo data) and sampled on a jittered grid so the coastline
// reads as an organic dotted edge rather than a hard geometric shape.
const CONTINENTS = [
  // North America
  { cx: 150, cy: 115, rx: 125, ry: 68 },
  { cx: 185, cy: 175, rx: 105, ry: 48 },
  { cx: 172, cy: 222, rx: 48, ry: 34 },
  // South America
  { cx: 262, cy: 282, rx: 65, ry: 58 },
  { cx: 250, cy: 368, rx: 38, ry: 68 },
  // Europe
  { cx: 485, cy: 128, rx: 65, ry: 46 },
  // Africa
  { cx: 500, cy: 218, rx: 88, ry: 48 },
  { cx: 498, cy: 318, rx: 66, ry: 66 },
  // Middle East
  { cx: 560, cy: 188, rx: 55, ry: 38 },
  // Russia / North Asia
  { cx: 660, cy: 108, rx: 220, ry: 46 },
  // India
  { cx: 600, cy: 228, rx: 42, ry: 42 },
  // China / East Asia
  { cx: 680, cy: 175, rx: 78, ry: 48 },
  // SE Asia
  { cx: 700, cy: 258, rx: 55, ry: 28 },
  // Japan
  { cx: 760, cy: 168, rx: 18, ry: 28 },
  // Australia
  { cx: 730, cy: 338, rx: 65, ry: 38 },
];

const HIGHLIGHTS = [
  { x: 600, y: 235, label: "India" },
  { x: 185, y: 175, label: "USA" },
  { x: 485, y: 128, label: "Europe" },
  { x: 680, y: 175, label: "APAC" },
  { x: 262, y: 282, label: "LatAm" },
];

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function pointInEllipse(x, y, e) {
  const dx = (x - e.cx) / e.rx;
  const dy = (y - e.cy) / e.ry;
  return dx * dx + dy * dy <= 1;
}

function generateDots() {
  const rand = seededRandom(42);
  const dots = [];
  const step = 7;
  for (let x = 0; x <= 1000; x += step) {
    for (let y = 0; y <= 500; y += step) {
      const jx = x + (rand() - 0.5) * step * 0.5;
      const jy = y + (rand() - 0.5) * step * 0.5;
      const inLand = CONTINENTS.some((e) => pointInEllipse(jx, jy, e));
      if (inLand && rand() > 0.08) {
        dots.push({ x: jx, y: jy, r: rand() > 0.85 ? 2 : 1.3 });
      }
    }
  }
  return dots;
}

const DOTS = generateDots();

const WorldMapDots = ({ className = "" }) => {
  return (
    <svg
      className={`world-map-dots ${className}`}
      viewBox="0 0 1000 500"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {DOTS.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="currentColor" />
      ))}
      {HIGHLIGHTS.map((h) => (
        <g key={h.label}>
          <circle cx={h.x} cy={h.y} r="9" fill="#E63D00" opacity="0.18" className="wmd-pulse" />
          <circle cx={h.x} cy={h.y} r="4" fill="#E63D00" />
        </g>
      ))}
      <style>{`
        .wmd-pulse {
          transform-origin: center;
          transform-box: fill-box;
          animation: wmd-pulse 2.4s ease-out infinite;
        }
        @keyframes wmd-pulse {
          0% { transform: scale(0.6); opacity: 0.35; }
          100% { transform: scale(2.4); opacity: 0; }
        }
      `}</style>
    </svg>
  );
};

export default WorldMapDots;
