import React from 'react';
import { motion } from 'framer-motion';
import {
  MdRecordVoiceOver,
  MdTrendingUp,
  MdIntegrationInstructions,
  MdCloudDone,
} from 'react-icons/md';

const benefits = [
  {
    icon: <MdRecordVoiceOver size={26} />,
    title: "Natural Conversations",
    description:
      "Engage users with humanlike tone, emotional nuance, and fluent multilingual support.",
  },
  {
    icon: <MdTrendingUp size={26} />,
    title: "Boost Sales Faster",
    description:
      "Use NEPQ-style scripting and AI-driven follow-ups to close more leads at scale.",
  },
  {
    icon: <MdCloudDone size={26} />,
    title: "Scale Without Limits",
    description:
      "Run thousands of voice interactions daily without increasing headcount or effort.",
  },
  {
    icon: <MdIntegrationInstructions size={26} />,
    title: "Seamless Integration",
    description:
      "Instant setup with CRMs, helpdesks, and tools—no developer time required.",
  },
];

const Benefits = () => {
  return (
    <section
      id="benefits"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(3rem, 6vw, 6rem) 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div className="section-backdrop" aria-hidden="true">
        <span className="backdrop-glow glow-a" />
        <span className="backdrop-glow glow-b" />
      </div>

      <h2
        style={{
          position: "relative",
          zIndex: 1,
          fontSize: "clamp(2.2rem, 5vw, 3rem)",
          fontWeight: 800,
          background: "linear-gradient(90deg, #E63D00, #E66700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "2.8rem",
          letterSpacing: "1px",
          userSelect: "none",
          textAlign: "center",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        Why Choose Propello AI?
      </h2>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "clamp(1rem, 3vw, 2rem)",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -5 }}
            style={{
              backgroundColor: "white",
              border: "1px solid #e7e5e4",
              boxShadow: "0 4px 16px rgba(28, 25, 23, 0.06)",
              padding: "clamp(1.4rem, 2vw, 2rem)",
              borderRadius: "16px",
              minHeight: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #E63D00, #E66700)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.1rem",
                color: "#fff",
              }}
            >
              {benefit.icon}
            </div>
            <h3
              style={{
                fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
                fontWeight: 600,
                marginBottom: "0.5rem",
                color: "#1c1917",
              }}
            >
              {benefit.title}
            </h3>
            <p
              style={{
                fontSize: "clamp(0.95rem, 2.5vw, 1rem)",
                lineHeight: 1.6,
                color: "#57534e",
                margin: 0,
              }}
            >
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
