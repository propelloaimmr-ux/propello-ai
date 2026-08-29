import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MdPersonAddAlt,
  MdFilterAlt,
  MdReplay,
  MdSupportAgent,
  MdTrendingUp,
} from "react-icons/md";

const stats = [
  {
    icon: <MdPersonAddAlt />,
    value: 10,
    suffix: "%",
    label: "Improved Onboarding",
    description: "Improving onboarding & activating a customer by 5-10%",
  },
  {
    icon: <MdFilterAlt />,
    value: 3,
    suffix: "x",
    label: "Top Of The Funnel",
    description: "Increasing the customer top of the funnel by 3X",
  },
  {
    icon: <MdReplay />,
    value: 350,
    suffix: "%",
    label: "Customer Reactivation",
    description: "Reactivating churned customers by 350%",
  },
  {
    icon: <MdSupportAgent />,
    value: 95,
    suffix: "%",
    label: "Query Resolution",
    description: "Inbound customer calls, resolving 95% automatically",
  },
  {
    icon: <MdTrendingUp />,
    value: 150,
    suffix: "%",
    label: "Higher Upgrades",
    description: "Upsell & cross-sell reminders leading to higher conversion by 150%",
  },
];

const CountUp = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <h3 className="stat-number" ref={ref}>
      {display}
      {suffix}
    </h3>
  );
};

const StatsSection = () => {
  return (
    <section id="stats" className="stats-section">
      <div className="section-backdrop" aria-hidden="true">
        <span className="backdrop-glow glow-a" />
        <span className="backdrop-glow glow-b" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="stats-title gradient-text"
      >
        Numbers That Speak For Themselves
      </motion.h2>

      <div className="stats-grid">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="stat-card"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <div className="stat-icon">{s.icon}</div>
            <CountUp value={s.value} suffix={s.suffix} />
            <h4 className="stat-label">{s.label}</h4>
            <p className="stat-desc">{s.description}</p>
          </motion.div>
        ))}
      </div>

      <style>{`
        .stats-section {
          position: relative;
          overflow: hidden;
          width: 100%;
          padding: clamp(3rem, 6vw, 6rem) 1.25rem;
          background: #ffffff;
        }

        .gradient-text {
          background: linear-gradient(90deg, #E63D00, #E66700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stats-title {
          position: relative;
          z-index: 1;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .stats-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.6rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .stat-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid #e7e5e4;
          box-shadow: 0 4px 16px rgba(28, 25, 23, 0.06);
          display: flex;
          flex-direction: column;
        }

        .stat-card:hover {
          box-shadow: 0 16px 32px rgba(230, 61, 0, 0.14);
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #E63D00, #E66700);
          color: #fff;
          font-size: 1.35rem;
          margin-bottom: 1.25rem;
        }

        .stat-number {
          font-size: clamp(2.4rem, 6vw, 3.2rem);
          font-weight: 800;
          line-height: 1;
          margin: 0 0 0.6rem;
          background: linear-gradient(90deg, #E63D00, #E66700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-label {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1c1917;
          margin: 0 0 0.5rem;
        }

        .stat-desc {
          font-size: 0.92rem;
          color: #57534e;
          line-height: 1.55;
          margin: 0;
        }

        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;
