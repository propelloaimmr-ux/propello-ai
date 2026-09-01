import { motion } from 'framer-motion';
import {
  MdRecordVoiceOver,
  MdTrendingUp,
  MdIntegrationInstructions,
  MdCloudDone,
} from 'react-icons/md';

const featured = {
  icon: <MdRecordVoiceOver size={28} />,
  title: "Natural Conversations",
  description:
    "Engage users with humanlike tone, emotional nuance, and fluent multilingual support — in English, Hindi, and Hinglish.",
};

const benefits = [
  {
    icon: <MdTrendingUp size={24} />,
    title: "Boost Sales Faster",
    description: "Use NEPQ-style scripting and AI-driven follow-ups to close more leads at scale.",
  },
  {
    icon: <MdCloudDone size={24} />,
    title: "Scale Without Limits",
    description: "Run thousands of voice interactions daily without increasing headcount or effort.",
  },
  {
    icon: <MdIntegrationInstructions size={24} />,
    title: "Seamless Integration",
    description: "Instant setup with CRMs, helpdesks, and tools—no developer time required.",
  },
];

const waveBars = Array.from({ length: 22 }, (_, i) => 5 + Math.abs(Math.sin(i * 0.8)) * 20);

const Benefits = () => {
  return (
    <section id="benefits" className="benefits-section">
      <div className="section-backdrop" aria-hidden="true">
        <span className="backdrop-glow glow-a" />
        <span className="backdrop-glow glow-b" />
      </div>

      <h2 className="benefits-title gradient-text">Why Choose Propello AI?</h2>

      <div className="benefits-wrap">
        {/* Featured benefit */}
        <motion.div
          className="benefit-featured"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <div className="featured-left">
            <div className="benefit-icon-wrap">
              <span className="benefit-pulse-ring" />
              <span className="benefit-pulse-ring ring-delay" />
              <div className="benefit-icon">{featured.icon}</div>
            </div>
            <div>
              <h3 className="benefit-title">{featured.title}</h3>
              <p className="benefit-desc">{featured.description}</p>
            </div>
          </div>
          <div className="featured-wave" aria-hidden="true">
            {waveBars.map((h, i) => (
              <span key={i} className="wave-bar" style={{ height: `${h}px`, animationDelay: `${i * 0.05}s` }} />
            ))}
          </div>
        </motion.div>

        {/* Secondary benefits */}
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="benefit-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="benefit-icon-wrap small">
                <span className="benefit-pulse-ring" />
                <div className="benefit-icon small">{benefit.icon}</div>
              </div>
              <h3 className="benefit-title small">{benefit.title}</h3>
              <p className="benefit-desc">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .benefits-section {
          position: relative;
          overflow: hidden;
          padding: clamp(3rem, 6vw, 6rem) 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #ffffff;
          width: 100%;
          box-sizing: border-box;
        }

        .gradient-text {
          background: linear-gradient(90deg, #E63D00, #E66700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .benefits-title {
          position: relative;
          z-index: 1;
          font-size: clamp(2.2rem, 5vw, 3rem);
          font-weight: 800;
          margin-bottom: 2.8rem;
          text-align: center;
          width: 100%;
          max-width: 800px;
        }

        .benefits-wrap {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1100px;
          display: flex;
          flex-direction: column;
          gap: clamp(1rem, 3vw, 1.5rem);
        }

        .benefit-featured {
          background: #ffffff;
          border: 1px solid #e7e5e4;
          border-radius: 18px;
          box-shadow: 0 6px 22px rgba(28, 25, 23, 0.07);
          padding: clamp(1.6rem, 3vw, 2.5rem);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .featured-left {
          display: flex;
          align-items: center;
          gap: 1.3rem;
          flex: 1 1 320px;
        }

        .benefit-icon-wrap {
          position: relative;
          flex-shrink: 0;
          width: 66px;
          height: 66px;
        }

        .benefit-icon-wrap.small { width: 52px; height: 52px; }

        .benefit-pulse-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid #E63D00;
          animation: benefit-pulse 2.6s ease-out infinite;
        }

        .benefit-pulse-ring.ring-delay { animation-delay: 1.3s; }

        @keyframes benefit-pulse {
          0% { transform: scale(0.85); opacity: 0.55; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        .benefit-icon {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #E63D00, #E66700);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .benefit-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
          color: #1c1917;
        }

        .benefit-title.small { font-size: 1.1rem; }

        .benefit-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #57534e;
          margin: 0;
        }

        .featured-wave {
          display: flex;
          align-items: center;
          gap: 3px;
          height: 40px;
          flex: 0 0 220px;
          justify-content: flex-end;
        }

        .wave-bar {
          width: 4px;
          border-radius: 2px;
          background: linear-gradient(180deg, #E63D00, #ffb366);
          animation: benefit-wave 1.3s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes benefit-wave {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1); }
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(1rem, 3vw, 1.5rem);
        }

        .benefit-card {
          background: #ffffff;
          border: 1px solid #e7e5e4;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(28, 25, 23, 0.06);
          padding: clamp(1.3rem, 2vw, 1.8rem);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .benefit-card .benefit-icon-wrap { margin-bottom: 1rem; }

        @media (max-width: 860px) {
          .benefits-grid { grid-template-columns: 1fr; }
          .featured-wave { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Benefits;
