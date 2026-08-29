import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

// Keep this content in sync with the FAQPage JSON-LD in index.html —
// AI/search engines cross-check visible text against structured data.
const faqs = [
  {
    question: "What is Propello AI?",
    answer:
      "Propello AI is a humanlike conversational voice AI platform for businesses. It handles outbound sales calls, inbound customer support, and omnichannel engagement across Voice, WhatsApp, SMS, and Email, powered by NEPQ-style sales psychology and real-time call analytics.",
  },
  {
    question: "How is Propello AI different from Siri, Alexa, or Google Assistant?",
    answer:
      "Propello AI is built specifically for businesses, not personal devices. It integrates directly with your CRM, can handle large volumes of simultaneous calls, and speaks fluently in English, Hindi, and Hinglish, which consumer voice assistants are not designed to do.",
  },
  {
    question: "What languages does Propello AI's voice agent speak?",
    answer:
      "Propello AI's voice agents converse naturally in English, Hindi, and Hinglish, adapting tone and context in real time for both Indian and global audiences.",
  },
  {
    question: "How long does it take to deploy an AI voice agent with Propello AI?",
    answer:
      "Most businesses go live within 48 hours. You select an industry-ready agent and share your sales or support scripts, and Propello AI converts them into dynamic, NEPQ-based conversations with no coding required.",
  },
  {
    question: "Do I need technical or coding skills to use Propello AI?",
    answer:
      "No. Propello AI is a no-code platform. You can train your voice agent with your own FAQs and workflows through a simple interface and go live without any development work.",
  },
  {
    question: "Is Propello AI available 24/7?",
    answer:
      "Yes. Propello AI's voice agents are always on, handling inbound and outbound calls, WhatsApp, SMS, and email around the clock without adding headcount.",
  },
  {
    question: "Can Propello AI integrate with my existing CRM and tools?",
    answer:
      "Yes. Propello AI connects with your CRM, helpdesk, and business tools, with custom dashboards to track call performance, sentiment, and conversions in real time.",
  },
  {
    question: "How does Propello AI protect customer data?",
    answer:
      "Propello AI uses enterprise-grade end-to-end encryption and role-based access controls, and is registered with DPIIT, MSME, and MCA in India in compliance with Indian data privacy requirements.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="faqs" className="faq-section">
      <div className="faq-container">
        <h2 className="gradient-text title-heading">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`} key={item.question}>
                <h3>
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => toggle(index)}
                  >
                    <span>{item.question}</span>
                    <MdExpandMore className="faq-icon" />
                  </button>
                </h3>
                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer"
                  role="region"
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          padding: 3rem 1rem 5rem;
          background: #ffffff;
          color: #333333;
          font-family: 'Segoe UI', sans-serif;
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
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
          text-align: center;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          background: #f9f9ff;
          border: 1px solid #e3e7fd;
          border-radius: 16px;
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }

        .faq-item.open {
          box-shadow: 0 10px 24px rgba(230, 103, 0, 0.12);
        }

        .faq-item h3 {
          margin: 0;
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 1.3rem 1.6rem;
          text-align: left;
          font-size: 1.1rem;
          font-weight: 600;
          color: #222222;
          font-family: inherit;
        }

        .faq-icon {
          flex-shrink: 0;
          font-size: 1.6rem;
          color: #E63D00;
          transition: transform 0.3s ease;
        }

        .faq-item.open .faq-icon {
          transform: rotate(180deg);
        }

        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.3s ease;
        }

        .faq-item.open .faq-answer {
          grid-template-rows: 1fr;
        }

        .faq-answer p {
          overflow: hidden;
          margin: 0;
          padding: 0 1.6rem;
          font-size: 1rem;
          line-height: 1.6;
          color: #555555;
        }

        .faq-item.open .faq-answer p {
          padding: 0 1.6rem 1.4rem;
        }

        @media (max-width: 600px) {
          .title-heading {
            font-size: 2rem;
          }

          .faq-question {
            padding: 1.1rem 1.2rem;
            font-size: 1rem;
          }

          .faq-item.open .faq-answer p {
            padding: 0 1.2rem 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
