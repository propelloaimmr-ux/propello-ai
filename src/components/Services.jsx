import React from "react";
import { motion } from "framer-motion";
import VoiceFlowShowcase from "./VoiceFlowShowcase";
import {
  MdOutbound,
  MdMonetizationOn,
  MdSupportAgent,
  MdEnhancedEncryption,
  MdHub,
  MdQueryStats,
} from "react-icons/md";

const services = [
  {
    title: "Outbound AI Calling",
    description: "Automated outbound AI calls for seamless customer engagement.",
    icon: <MdOutbound size={40} />,
  },
  {
    title: "Sales AI Calling",
    description: "Boost conversions with AI-driven persuasive sales conversations.",
    icon: <MdMonetizationOn size={40} />,
  },
  {
    title: "Inbound AI Handling",
    description: "Manage WhatsApp, Email, Chatbot, and scheduling automatically.",
    icon: <MdSupportAgent size={40} />,
  },
  {
    title: "Data Security",
    description: "Enterprise-grade encryption and compliance for secure communications.",
    icon: <MdEnhancedEncryption size={40} />,
  },
  {
    title: "Omnichannel Automation",
    description: "Integrate AI across multiple platforms for effortless customer interaction.",
    icon: <MdHub size={40} />,
  },
  {
    title: "Custom Dashboards & Analytics",
    description: "Monitor AI call performance and customer engagement in real-time.",
    icon: <MdQueryStats size={40} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="section-backdrop" aria-hidden="true">
        <span className="backdrop-glow glow-a" />
        <span className="backdrop-glow glow-b" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="services-main"
      >
        <h2 className="gradient-text title-heading">Our Services</h2>
        <VoiceFlowShowcase />
        <div className="services-container">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              className="service-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              whileHover={{ y: -6 }}
            >
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.description}</p>
            </motion.div>
          ))}
          {/* Fill empty spaces if not divisible by 3 */}
          {services.length % 3 !== 0 &&
            Array.from({ length: 3 - (services.length % 3) }).map((_, i) => (
              <div key={`empty-${i}`} className="service-card empty-card"></div>
            ))}
        </div>
      </motion.div>

      <style>{`
        .services-section {
          position: relative;
          overflow: hidden;
          padding: 5rem 1rem;
          background: #ffffff;
          color: #333333;
          text-align: center;
        }

        .gradient-text {
          background: linear-gradient(90deg, #E63D00, #E66700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title-heading {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 2.8rem;
        }

        .services-main {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }

        .services-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .service-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 2rem 1.6rem;
          text-align: center;
          transition: box-shadow 0.3s ease;
          box-shadow: 0 4px 16px rgba(28, 25, 23, 0.06);
          border: 1px solid #e7e5e4;
          min-height: 260px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .service-card:hover {
          box-shadow: 0 16px 32px rgba(230, 61, 0, 0.14);
        }

        .service-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, #E63D00, #E66700);
          color: #ffffff;
          margin-bottom: 1.2rem;
        }

        .service-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1c1917;
        }

        .service-desc {
          font-size: 0.95rem;
          color: #555555;
          line-height: 1.5;
        }

        .empty-card {
          background: transparent;
          box-shadow: none;
          border: none;
        }

        @media (max-width: 1000px) {
          .services-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .title-heading {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 600px) {
          .services-container {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }

          .title-heading {
            font-size: 2rem;
          }

          .service-card {
            padding: 1.4rem 1rem;
          }

          .service-title {
            font-size: 1.1rem;
          }

          .service-desc {
            font-size: 0.88rem;
          }

          .service-icon {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
