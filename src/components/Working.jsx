import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaRocket, FaChartLine } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";

const steps = [
  { icon: <FaUserTie className="step-icon icon-select" />, num: "01", title: "Select Your Agent & Script", desc: "Pick your industry-ready AI agent and share your scripts. We convert them into dynamic conversations using NEPQ and business context." },
  { icon: <FaRocket className="step-icon icon-launch" />, num: "02", title: "Go Live Instantly", desc: "Our voice agents are trained and deployed within days." },
  { icon: <FaChartLine className="step-icon icon-track" />, num: "03", title: "Track, Improve, and Scale", desc: "Get access to live dashboards for analytics, sentiment analysis, and CRM-integrated actions to drive performance improvement." },
];

const Working = () => {
  return (
    <section id="working" className="working-section">
      <div className="section-backdrop" aria-hidden="true">
        <span className="backdrop-glow glow-a" />
        <span className="backdrop-glow glow-b" />
      </div>

      <div className="working-header">
        <h2 className="working-title gradient-text">How It Works</h2>
        <div className="title-gradient-line"></div>
      </div>

      <div className="steps-container">
        {steps.map((s, i) => (
          <React.Fragment key={s.num}>
            <motion.div
              className="step"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
            >
              <div className="step-icon-container">
                <span className="step-pulse-ring" />
                <span className="step-pulse-ring ring-delay" />
                <div className="step-icon-bg">{s.icon}</div>
                <div className="step-number">{s.num}</div>
              </div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-description">{s.desc}</p>
            </motion.div>

            {i < steps.length - 1 && (
              <div className="connector">
                <div className="connector-line">
                  <span className="connector-flow" />
                  <span className="connector-dot" />
                </div>
                <BsArrowRightShort className="arrow-icon" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <style>{`
        .working-section {
          padding: 5rem 1rem;
          font-family: var(--font-body);
          background: white;
          color: #333;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .working-header, .steps-container {
          position: relative;
          z-index: 1;
        }

        .working-header {
          margin-bottom: 3.5rem;
          position: relative;
          width: 100%;
          max-width: 1200px;
        }

        .working-title {
          font-size: 3rem;
          font-weight: 800;
          font-family: var(--font-heading);
          margin-bottom: 1rem;
        }

        .gradient-text {
          background: linear-gradient(90deg, #E63D00, #E66700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title-gradient-line {
          height: 4px;
          width: 120px;
          background: linear-gradient(90deg, #E63D00, #E66700);
          margin: 0 auto;
          border-radius: 2px;
        }

        .steps-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          max-width: 1200px;
          width: 100%;
          position: relative;
          gap: 1rem;
        }

        .step {
          flex: 1;
          min-width: 280px;
          max-width: 320px;
          padding: 2.5rem 2rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(230, 61, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .step:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(230, 61, 0, 0.2);
        }

        .step-icon-container {
          position: relative;
          margin-bottom: 1.5rem;
          width: 80px;
          height: 80px;
        }

        .step-pulse-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid #E63D00;
          animation: step-pulse 2.6s ease-out infinite;
          pointer-events: none;
        }

        .step-pulse-ring.ring-delay {
          animation-delay: 1.3s;
        }

        @keyframes step-pulse {
          0% { transform: scale(0.85); opacity: 0.6; }
          100% { transform: scale(1.45); opacity: 0; }
        }

        .step-icon-bg {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #E63D00, #E66700);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.8rem;
          box-shadow: 0 5px 15px rgba(230, 61, 0, 0.3);
        }

        .icon-select { animation: icon-breathe 2.4s ease-in-out infinite; }
        .icon-launch { animation: icon-launch 1.8s ease-in-out infinite; }
        .icon-track { animation: icon-track 2s ease-in-out infinite; }

        @keyframes icon-breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.12); }
        }

        @keyframes icon-launch {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(8deg); }
        }

        @keyframes icon-track {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        .step-number {
          position: absolute;
          top: -10px;
          right: -10px;
          background: white;
          color: #E66700;
          border: 2px solid #E66700;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .step-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #222;
          background: linear-gradient(90deg, #E63D00, #E66700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: var(--font-heading);
        }

        .step-description {
          font-size: 1rem;
          line-height: 1.7;
          color: #666;
        }

        .connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 1rem;
          position: relative;
          height: 100%;
          margin-top: 80px;
        }

        .arrow-icon {
          font-size: 2rem;
          color: #E66700;
          opacity: 0.6;
        }

        .connector-line {
          position: relative;
          width: 60px;
          height: 3px;
          border-radius: 2px;
          background: repeating-linear-gradient(
            90deg,
            rgba(230, 61, 0, 0.25) 0 6px,
            transparent 6px 12px
          );
          margin-bottom: 0.5rem;
          overflow: visible;
        }

        .connector-flow {
          position: absolute;
          inset: 0;
          border-radius: 2px;
          background: linear-gradient(90deg, transparent, #E63D00, transparent);
          background-size: 200% 100%;
          animation: connector-flow-move 1.8s linear infinite;
        }

        .connector-dot {
          position: absolute;
          top: 50%;
          left: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #E63D00;
          box-shadow: 0 0 8px 2px rgba(230, 61, 0, 0.6);
          transform: translate(-50%, -50%);
          animation: connector-dot-move 1.8s linear infinite;
        }

        @keyframes connector-flow-move {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @keyframes connector-dot-move {
          0% { left: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }

        @media (max-width: 1200px) {
          .steps-container {
            gap: 0.5rem;
          }

          .step {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 992px) {
          .steps-container {
            flex-wrap: wrap;
            gap: 2rem;
          }

          .step {
            max-width: 45%;
            min-width: 300px;
            margin-bottom: 1rem;
          }

          .connector {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .working-section {
            padding: 4rem 1rem;
          }

          .working-title {
            font-size: 2.5rem;
          }

          .steps-container {
            flex-direction: column;
            align-items: center;
            gap: 2.5rem;
          }

          .step {
            max-width: 100%;
            width: 100%;
            min-width: auto;
          }

          .connector {
            display: flex;
            height: auto;
            margin-top: 0;
            padding: 1rem 0;
            flex-direction: row;
            width: 100px;
          }

          .arrow-icon {
            transform: rotate(90deg);
            margin: 0 0.5rem;
          }

          .connector-line {
            width: 2px;
            height: 30px;
            background: repeating-linear-gradient(
              180deg,
              rgba(230, 61, 0, 0.25) 0 6px,
              transparent 6px 12px
            );
          }

          .connector-flow {
            background: linear-gradient(180deg, transparent, #E63D00, transparent);
            background-size: 100% 200%;
            animation: connector-flow-move-v 1.8s linear infinite;
          }

          .connector-dot {
            top: 0;
            left: 50%;
            animation: connector-dot-move-v 1.8s linear infinite;
          }

          @keyframes connector-flow-move-v {
            0% { background-position: 0 200%; }
            100% { background-position: 0 -200%; }
          }

          @keyframes connector-dot-move-v {
            0% { top: 0; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        }

        @media (max-width: 600px) {
          .working-title {
            font-size: 2rem;
          }

          .step {
            padding: 1.8rem 1.5rem;
          }

          .step-icon-container {
            width: 70px;
            height: 70px;
          }

          .step-icon-bg {
            font-size: 1.5rem;
          }

          .step-number {
            width: 30px;
            height: 30px;
            font-size: 0.8rem;
          }

          .step-title {
            font-size: 1.2rem;
          }

          .step-description {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .working-title {
            font-size: 1.8rem;
          }

          .step {
            padding: 1.5rem 1.2rem;
          }

          .step-title {
            font-size: 1.1rem;
          }

          .step-description {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Working;
