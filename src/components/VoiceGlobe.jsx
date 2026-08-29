const dots = [
  { cx: 210, cy: 55, r: 4, delay: 0 },
  { cx: 340, cy: 120, r: 3, delay: 0.4 },
  { cx: 372, cy: 230, r: 5, delay: 0.8 },
  { cx: 300, cy: 355, r: 3, delay: 1.2 },
  { cx: 150, cy: 375, r: 4, delay: 1.6 },
  { cx: 55, cy: 280, r: 3, delay: 2 },
  { cx: 60, cy: 150, r: 4, delay: 2.4 },
  { cx: 150, cy: 60, r: 3, delay: 2.8 },
];

const VoiceGlobe = ({ size = 420 }) => {
  return (
    <div className="voice-globe" style={{ width: size, height: size }}>
      <svg viewBox="0 0 420 420" width="100%" height="100%" aria-hidden="true">
        <defs>
          <radialGradient id="vg-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E63D00" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#E63D00" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="210" cy="210" r="205" fill="url(#vg-glow)" />

        {/* globe grid */}
        <g className="vg-globe-grid" stroke="#E63D00" strokeOpacity="0.28" fill="none">
          <circle cx="210" cy="210" r="160" strokeDasharray="2 6" />
          <ellipse cx="210" cy="210" rx="160" ry="60" strokeDasharray="2 6" />
          <ellipse cx="210" cy="210" rx="160" ry="110" strokeDasharray="2 6" />
          <ellipse cx="210" cy="210" rx="60" ry="160" strokeDasharray="2 6" />
          <ellipse cx="210" cy="210" rx="110" ry="160" strokeDasharray="2 6" />
        </g>

        {/* connectivity dots */}
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.cx}
            cy={d.cy}
            r={d.r}
            fill="#E63D00"
            className="vg-dot"
            style={{ animationDelay: `${d.delay}s` }}
          />
        ))}

        {/* center orb */}
        <circle cx="210" cy="210" r="66" fill="#ffffff" stroke="#E63D00" strokeOpacity="0.25" />

        {/* voice waveform bars */}
        <g fill="#E63D00">
          <rect className="vg-bar" x="178" y="205" width="6" rx="3" height="10" />
          <rect className="vg-bar" x="192" y="196" width="6" rx="3" height="28" style={{ animationDelay: "0.15s" }} />
          <rect className="vg-bar" x="206" y="188" width="6" rx="3" height="44" style={{ animationDelay: "0.3s" }} />
          <rect className="vg-bar" x="220" y="196" width="6" rx="3" height="28" style={{ animationDelay: "0.45s" }} />
          <rect className="vg-bar" x="234" y="205" width="6" rx="3" height="10" style={{ animationDelay: "0.6s" }} />
        </g>
      </svg>

      <style>{`
        .voice-globe {
          position: relative;
          margin: 0 auto;
        }
        .vg-globe-grid {
          animation: vg-rotate 40s linear infinite;
          transform-origin: 210px 210px;
        }
        @keyframes vg-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .vg-dot {
          animation: vg-pulse 3s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes vg-pulse {
          0%, 100% { opacity: 0.35; r: var(--r, 3); }
          50% { opacity: 1; }
        }
        .vg-bar {
          animation: vg-wave 1.1s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes vg-wave {
          0%, 100% { transform: scaleY(0.55); }
          50% { transform: scaleY(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .vg-globe-grid, .vg-dot, .vg-bar { animation: none; }
        }
      `}</style>
    </div>
  );
};

export default VoiceGlobe;
