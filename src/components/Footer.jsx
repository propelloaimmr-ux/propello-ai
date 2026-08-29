import { useState } from "react";
import {
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaArrowLeft,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const socialIcons = [
    { icon: <FaXTwitter />, url: "https://x.com/Propello_AI" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/propello.ai/" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/company/106969732/admin/analytics/followers/" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@Propello_AI" },
  ];

  const productLinks = [
    { id: "definition", label: "Features" },
    { id: "services", label: "Our Services" },
    { id: "working", label: "How it Works" },
    { id: "benefits", label: "Key Benefits" },
  ];

  const companyLinks = [
    { id: "stats", label: "Track Record" },
    { id: "faqs", label: "FAQs" },
    { id: "contact", label: "Contact Us" },
  ];

  const trustBadges = [
    { src: "/DPIIT-logo-trans.png", alt: "DPIIT Registered" },
    { src: "/MSME_logo.jpg", alt: "MSME Registered" },
    { src: "/MCALogo.png", alt: "MCA Registered" },
  ];

  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#F8F9FF",
    color: "#333",
    padding: "2rem",
    borderRadius: "20px",
    boxShadow: "0 0 40px rgba(230, 103, 0, 0.2)",
    zIndex: 1000,
    maxWidth: "90%",
    width: "450px",
    maxHeight: "70vh",
    overflowY: "auto",
    border: "1px solid rgba(230, 61, 0, 0.2)"
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 999,
  };

  const backButtonStyle = {
    background: "none",
    border: "none",
    color: "#E66700",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "pointer",
    marginBottom: "1rem",
    fontSize: "0.9rem",
    fontWeight: "600",
    transition: "all 0.3s ease",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.9rem 1rem",
    marginBottom: "1rem",
    background: "#F1F3FF",
    border: "1px solid rgba(230, 103, 0, 0.3)",
    borderRadius: "10px",
    color: "#333",
    fontSize: "0.95rem",
    outline: "none",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    width: "100%",
    padding: "0.9rem",
    background: "linear-gradient(90deg, #E63D00, #E66700)",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "0.95rem",
    marginTop: "0.5rem",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(230, 103, 0, 0.3)",
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", username, password);
    setShowAdminLogin(false);
    setUsername("");
    setPassword("");
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {showPrivacy && (
        <>
          <div style={overlayStyle} onClick={() => setShowPrivacy(false)} />
          <div style={modalStyle}>
            <button style={backButtonStyle} onClick={() => setShowPrivacy(false)}>
              <FaArrowLeft /> Back
            </button>
            <h2 style={{
              marginBottom: "1.5rem",
              fontSize: "1.5rem",
              background: "linear-gradient(90deg, #E63D00, #E66700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Privacy Policy
            </h2>
            <div style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
              <p><strong style={{ color: "#E66700" }}>Your Privacy, Our Priority</strong><br />
                We do not store sensitive data beyond need. All interactions are encrypted. We comply with Indian privacy laws.</p>
            </div>
          </div>
        </>
      )}

      {showAdminLogin && (
        <>
          <div style={overlayStyle} onClick={() => setShowAdminLogin(false)} />
          <div style={modalStyle}>
            <button style={backButtonStyle} onClick={() => setShowAdminLogin(false)}>
              <FaArrowLeft /> Back
            </button>
            <h2 style={{
              marginBottom: "1.5rem",
              fontSize: "1.5rem",
              background: "linear-gradient(90deg, #E63D00, #E66700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Admin Login
            </h2>
            <form onSubmit={handleAdminLogin}>
              <div>
                <label htmlFor="username" style={{ display: "block", marginBottom: "0.5rem", color: "#E66700", fontWeight: "500" }}>Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={inputStyle}
                  placeholder="Enter admin username"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" style={{ display: "block", marginBottom: "0.5rem", color: "#E66700", fontWeight: "500" }}>Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={inputStyle}
                  placeholder="Enter password"
                  required
                />
              </div>
              <button type="submit" style={buttonStyle}>Login</button>
            </form>
          </div>
        </>
      )}

      <footer className="site-footer">
        <div className="footer-dotgrid" aria-hidden="true" />
        <div className="footer-glow" aria-hidden="true" />

        <div className="footer-inner">
          <div className="footer-top">
            {/* Brand column */}
            <div className="footer-col footer-brand">
              <div className="footer-logo-badge" onClick={scrollToTop} role="button" tabIndex={0}>
                <img src="/FullLogo_whitebackground.png" alt="Propello AI" />
              </div>
              <p className="footer-tagline">
                Humanlike conversational voice AI for outbound sales, inbound
                support, and omnichannel engagement — built for modern businesses.
              </p>
              <div className="footer-socials">
                {socialIcons.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Social link"
                    className="footer-social-link"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Product column */}
            <div className="footer-col">
              <h4 className="footer-heading">Product</h4>
              <ul className="footer-links">
                {productLinks.map((link) => (
                  <li key={link.id}>
                    <button onClick={() => scrollToId(link.id)}>{link.label}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company column */}
            <div className="footer-col">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                {companyLinks.map((link) => (
                  <li key={link.id}>
                    <button onClick={() => scrollToId(link.id)}>{link.label}</button>
                  </li>
                ))}
                <li>
                  <button onClick={() => setShowPrivacy(true)}>Privacy Policy</button>
                </li>
                <li>
                  <button onClick={() => setShowAdminLogin(true)}>Admin Login</button>
                </li>
              </ul>
            </div>

            {/* Get in touch column */}
            <div className="footer-col footer-contact-col">
              <h4 className="footer-heading">Get in Touch</h4>
              <a href="tel:+918850477716" className="footer-contact-line">
                <FaPhone /> <span>+91 8850477716</span>
              </a>
              <a href="mailto:hello@propelloai.in" className="footer-contact-line">
                <FaEnvelope /> <span>hello@propelloai.in</span>
              </a>
              <button className="footer-cta" onClick={scrollToTop}>
                Get Started Free
              </button>
            </div>
          </div>

          {/* Trust badges */}
          <div className="footer-badges">
            {trustBadges.map((badge) => (
              <div key={badge.alt} className="footer-badge-chip">
                <img src={badge.src} alt={badge.alt} />
                <span>{badge.alt}</span>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <span>Made with ❤️ in India</span>
            <span>© {new Date().getFullYear()} Propello AI. All rights reserved</span>
          </div>
        </div>

        <style>{`
          .site-footer {
            position: relative;
            width: 100%;
            margin-top: 2rem;
            padding: 5rem 1.5rem 2.5rem;
            background: #1c1917;
            color: #d6d3d1;
            overflow: hidden;
            box-sizing: border-box;
          }

          .footer-dotgrid {
            position: absolute;
            inset: 0;
            background-image: radial-gradient(rgba(230, 61, 0, 0.35) 1px, transparent 1px);
            background-size: 26px 26px;
            -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%);
            mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%);
            opacity: 0.5;
            pointer-events: none;
          }

          .footer-glow {
            position: absolute;
            top: -220px;
            left: 50%;
            transform: translateX(-50%);
            width: 720px;
            height: 420px;
            background: radial-gradient(closest-side, rgba(230, 61, 0, 0.35), transparent);
            filter: blur(10px);
            animation: footerGlowDrift 10s ease-in-out infinite alternate;
            pointer-events: none;
          }

          @keyframes footerGlowDrift {
            from { transform: translateX(-58%) scale(1); opacity: 0.7; }
            to { transform: translateX(-42%) scale(1.15); opacity: 1; }
          }

          .footer-inner {
            position: relative;
            z-index: 1;
            width: 100%;
            max-width: 1280px;
            margin: 0 auto;
          }

          .footer-top {
            display: grid;
            grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
            gap: 2.5rem;
            padding-bottom: 3rem;
          }

          .footer-col { min-width: 0; }

          .footer-logo-badge {
            display: inline-flex;
            background: #ffffff;
            border-radius: 12px;
            padding: 0.6rem 1rem;
            cursor: pointer;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }

          .footer-logo-badge img {
            height: 32px;
            width: auto;
            display: block;
          }

          .footer-tagline {
            margin: 1.2rem 0 1.5rem;
            font-size: 0.92rem;
            line-height: 1.7;
            color: #a8a29e;
            max-width: 340px;
          }

          .footer-socials {
            display: flex;
            gap: 0.75rem;
          }

          .footer-social-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 38px;
            height: 38px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.06);
            color: #E66700;
            font-size: 1.05rem;
            transition: all 0.25s ease;
          }

          .footer-social-link:hover {
            background: #E63D00;
            color: #fff;
            transform: translateY(-2px);
          }

          .footer-heading {
            color: #fff;
            font-size: 0.95rem;
            font-weight: 600;
            letter-spacing: 0.3px;
            margin: 0 0 1.2rem;
          }

          .footer-links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 0.85rem;
          }

          .footer-links button {
            background: none;
            border: none;
            padding: 0;
            color: #a8a29e;
            font-size: 0.92rem;
            cursor: pointer;
            text-align: left;
            transition: color 0.2s ease;
          }

          .footer-links button:hover {
            color: #ff8a5c;
          }

          .footer-contact-col {
            display: flex;
            flex-direction: column;
          }

          .footer-contact-line {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            color: #a8a29e;
            font-size: 0.92rem;
            margin-bottom: 0.9rem;
            transition: color 0.2s ease;
          }

          .footer-contact-line:hover {
            color: #ff8a5c;
          }

          .footer-contact-line svg {
            color: #E66700;
            flex-shrink: 0;
          }

          .footer-cta {
            margin-top: 0.5rem;
            align-self: flex-start;
            background: #E63D00;
            color: #fff;
            border: none;
            border-radius: 10px;
            padding: 0.75rem 1.4rem;
            font-weight: 600;
            font-size: 0.92rem;
            cursor: pointer;
            box-shadow: 0 4px 16px rgba(230, 61, 0, 0.35);
            transition: background 0.25s ease, transform 0.25s ease;
          }

          .footer-cta:hover {
            background: #ff8a5c;
            transform: translateY(-2px);
          }

          .footer-badges {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            padding: 2rem 0;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
          }

          .footer-badge-chip {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 999px;
            padding: 0.4rem 0.9rem 0.4rem 0.4rem;
          }

          .footer-badge-chip img {
            height: 22px;
            width: 22px;
            object-fit: contain;
            border-radius: 50%;
            background: #fff;
          }

          .footer-badge-chip span {
            font-size: 0.78rem;
            color: #a8a29e;
          }

          .footer-bottom {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 0.5rem;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            font-size: 0.82rem;
            color: #78716c;
          }

          @media (max-width: 1024px) {
            .footer-top {
              grid-template-columns: 1fr 1fr;
              row-gap: 2.5rem;
            }
          }

          @media (max-width: 600px) {
            .site-footer { padding: 4rem 1.25rem 2rem; }
            .footer-top { grid-template-columns: 1fr; text-align: left; }
            .footer-tagline { max-width: 100%; }
            .footer-bottom { justify-content: center; text-align: center; }
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;
