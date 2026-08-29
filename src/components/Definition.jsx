import {
  MdRecordVoiceOver,
  MdPsychologyAlt,
  MdAnalytics,
  MdConnectWithoutContact,
  MdRocketLaunch,
  MdSecurity,
} from "react-icons/md";
import { motion } from "framer-motion";
import VoiceGlobe from "./VoiceGlobe";

const Definition = () => {
  const features = [
    {
      icon: <MdRecordVoiceOver size={22} />,
      title: "Humanlike Conversations",
      description:
        "Realistic AI that speaks naturally, understands context, and adapts tone.",
    },
    {
      icon: <MdPsychologyAlt size={22} />,
      title: "Sales Psychology Engine",
      description:
        "Built-in NEPQ-style logic to guide buyers with persuasive dialogues.",
    },
    {
      icon: <MdAnalytics size={22} />,
      title: "Smart Call Analytics",
      description:
        "Get real-time data on sentiment, intent, and conversion performance.",
    },
    {
      icon: <MdConnectWithoutContact size={22} />,
      title: "Omnichannel Presence",
      description:
        "Connect via Voice, WhatsApp, SMS, and Email — all in one platform.",
    },
    {
      icon: <MdRocketLaunch size={22} />,
      title: "Instant Deployment",
      description:
        "Go live in 48 hours. No technical setup or coding skills required.",
    },
    {
      icon: <MdSecurity size={22} />,
      title: "Enterprise-Grade Security",
      description:
        "Your data is protected with end-to-end encryption and role-based access.",
    },
  ];

  return (
    <section className="definition-section" id="definition">
      <div className="section-backdrop" aria-hidden="true">
        <span className="backdrop-glow glow-a" />
        <span className="backdrop-glow glow-b" />
      </div>

      <div className="definition-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="definition-intro"
        >
          <h2 className="gradient-text title-heading">What is Propello AI?</h2>
          <p className="definition-answer">
            Propello AI is a humanlike conversational voice AI platform that helps businesses run outbound
            sales calls, handle inbound customer support, and engage customers across Voice, WhatsApp, SMS,
            and Email &mdash; all from one no-code platform, live in as little as 48 hours.
          </p>
        </motion.div>

        <div className="definition-split">
          <div className="definition-visual">
            <VoiceGlobe size={380} />
          </div>

          <div className="feature-list">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="feature-row"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-desc">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .definition-section {
          position: relative;
          padding: 5rem 1rem;
          background: #ffffff;
          color: #333333;
          overflow: hidden;
        }

        .gradient-text {
          background: linear-gradient(90deg, #E63D00, #E66700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title-heading {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          margin-bottom: 1.2rem;
          text-align: center;
        }

        .definition-container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }

        .definition-intro {
          text-align: center;
        }

        .definition-answer {
          max-width: 760px;
          margin: 0 auto 3.5rem;
          font-size: 1.1rem;
          line-height: 1.7;
          color: #444444;
        }

        .definition-split {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 3rem;
          align-items: center;
        }

        .definition-visual {
          display: flex;
          justify-content: center;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .feature-row {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          border-radius: 12px;
          transition: background 0.25s ease;
        }

        .feature-row:hover {
          background: #faf5f2;
        }

        .feature-icon {
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: #fff1eb;
          color: #E63D00;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-title {
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: #1c1917;
        }

        .feature-desc {
          font-size: 0.92rem;
          color: #57534e;
          line-height: 1.55;
          margin: 0;
        }

        @media (max-width: 900px) {
          .definition-split {
            grid-template-columns: 1fr;
          }
          .definition-visual {
            order: -1;
          }
        }

        @media (max-width: 480px) {
          .title-heading { font-size: 1.9rem; }
        }
      `}</style>
    </section>
  );
};

export default Definition;
