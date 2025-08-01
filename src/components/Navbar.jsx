import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState, useEffect } from "react";
import { signInWithGoogle, auth } from "../firebaseAuth";
import ForgotPassword from "./ForgotPassword";
import { useNavigate } from "react-router-dom";

export default function Navbar({ activeSection, user, setUser }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const navigate = useNavigate();
  
  const navItems = [
    { id: "home", label: "Home" },
    { id: "definition", label: "Features" },
    { id: "services", label: "Our Services" },
    { id: "products", label: "Our Products" },
    { id: "working", label: "How it Works" },
    { id: "benefits", label: "Key Benefits" },
    { id: "contact", label: "Contact Us" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      let currentUser;
      if (showSignUp) {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        currentUser = { email: cred.user.email };
        alert("Sign up successful!");
      } else {
        const cred = await signInWithEmailAndPassword(auth, email, password);
        currentUser = { email: cred.user.email };
        alert("Login successful!");
      }
      setUser(currentUser);
      localStorage.setItem("user", JSON.stringify(currentUser));
      resetModal();
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const googleUser = await signInWithGoogle();
      const gUser = { email: googleUser.email, name: googleUser.displayName };
      setUser(gUser);
      localStorage.setItem("user", JSON.stringify(gUser));
      alert(`Welcome ${gUser.name || gUser.email}`);
      resetModal();
      navigate("/dashboard");
    } catch (error) {
      alert("Google Sign-In failed: " + error.message);
    }
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setShowSignUp(false);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const logoUrl = "/FullLogo_whitebackground.png";

  // Styles
  const styles = {
    navbarWrapper: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "110px", // Increased height
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "white",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      zIndex: 2000,
      padding: "0 30px",
      paddingLeft: "10px",
      paddingRight: "30px",
    },
    leftSection: {
      display: "flex",
      alignItems: "center",
    },
   logoBar: {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start", // <- Align logo to left inside the div
  height: "100%",
  cursor: "pointer",
  paddingLeft: "0", // <- Optional: remove any unwanted padding
},

    logoImg: {
      height: "auto",
      width: "200px", 
      maxHeight: "110px", 
      objectFit: "contain",
      transition: "transform 0.2s ease",
      '@media (max-width: 768px)': {
        width: '200px',
      },
      '@media (max-width: 480px)': {
        width: '200px',
      },
    },
    rightSection: {
      display: "flex",
      alignItems: "center",
      gap: "30px",
    },
    navItems: {
      display: isMobile ? "none" : "flex",
      alignItems: "center",
      gap: "25px", // Increased gap between nav items
    },
    navBtn: {
      background: "transparent",
      border: "none",
      color: "#333",
      cursor: "pointer",
      fontSize: "18px", // Increased font size
      padding: "10px 0", // Increased padding
      transition: "all 0.2s ease",
      userSelect: "none",
      outline: "none",
      fontWeight: "500",
      position: "relative",
      '&:hover': {
        color: "#FF6D00", // Brighter orange
      },
    },
    activeBtn: {
      fontWeight: "600",
      color: "#FF6D00", // Brighter orange
      '&::after': {
        content: '""',
        position: "absolute",
        bottom: "-5px",
        left: "0",
        width: "100%",
        height: "3px", // Thicker underline
        background: "#FF6D00", // Solid orange
      },
    },
    authButtons: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    signInBtn: {
      background: "#FF6D00", // Solid orange
      color: "white",
      border: "none",
      padding: "14px 30px", // Increased padding
      borderRadius: "30px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "18px", // Increased font size
      transition: "all 0.3s ease",
      userSelect: "none",
      outline: "none",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      '&:hover': {
        transform: "translateY(-2px)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        background: "#FF8500", // Lighter orange on hover
      },
    },
    hamburger: {
      display: isMobile ? "flex" : "none",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      fontSize: "30px",
      color: "#FF6D00", // Orange color
      zIndex: 9999,
      padding: "8px",
      background: "rgba(255, 109, 0, 0.1)",
      borderRadius: "50%",
    },
    mobileMenu: {
      position: "fixed",
      top: "110px", // Adjusted to match navbar height
      left: 0,
      right: 0,
      background: "white",
      padding: "20px 30px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      userSelect: "none",
      zIndex: 9999,
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      animation: "slideDown 0.3s ease-out",
    },
    mobileNavBtn: {
      background: "transparent",
      border: "none",
      color: "#333",
      cursor: "pointer",
      fontSize: "20px", // Increased font size
      padding: "14px 20px", // Increased padding
      transition: "all 0.3s ease",
      userSelect: "none",
      outline: "none",
      textAlign: "left",
      fontWeight: "500",
      '&:hover': {
        color: "#FF6D00",
      },
    },
    mobileActiveBtn: {
      fontWeight: "600",
      color: "#FF6D00",
      borderLeft: "4px solid #FF6D00", // Thicker border
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 3000,
    },
    modalContent: {
      backgroundColor: "white",
      padding: "30px",
      borderRadius: "15px",
      width: isMobile ? "90%" : "420px",
      boxShadow: "0 5px 25px rgba(255, 109, 0, 0.3)", // Orange shadow
      color: "#333",
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
    },
    formGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "600",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "12px 15px",
      borderRadius: "8px",
      border: "1.5px solid #ddd",
      backgroundColor: "#f9f9f9",
      color: "#333",
      fontSize: "15px",
      outline: "none",
      transition: "border 0.3s ease",
      '&:focus': {
        borderColor: "#FF6D00",
        boxShadow: "0 0 0 2px rgba(255,109,0,0.2)",
      },
    },
    modalBtn: {
      background: "#FF6D00",
      border: "none",
      padding: "14px 20px",
      borderRadius: "30px",
      color: "white",
      fontWeight: "600",
      cursor: "pointer",
      fontSize: "16px",
      width: "100%",
      marginTop: "15px",
      userSelect: "none",
      outline: "none",
      transition: "all 0.3s ease",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      '&:hover': {
        transform: "translateY(-2px)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        background: "#FF8500",
      },
    },
    switchText: {
      color: "#FF6D00",
      cursor: "pointer",
      marginTop: "15px",
      textAlign: "center",
      userSelect: "none",
      fontWeight: "600",
      fontSize: "15px",
      transition: "all 0.2s ease",
      '&:hover': {
        textDecoration: "underline",
      },
    },
    forgotPassword: {
      color: "#FF6D00",
      cursor: "pointer",
      marginTop: "10px",
      textAlign: "center",
      userSelect: "none",
      fontWeight: "600",
      fontSize: "15px",
      transition: "all 0.2s ease",
      '&:hover': {
        color: "#FF8500",
        textDecoration: "underline",
      },
    },
    tooltip: {
      position: 'absolute',
      top: '100%',
      right: 0,
      marginTop: '10px',
      background: "#FF6D00",
      color: 'white',
      boxShadow: '0 4px 20px rgba(255, 109, 0, 0.3)',
      padding: '12px 16px',
      borderRadius: '10px',
      width: isMobile ? '180px' : '220px',
      fontSize: isMobile ? '13px' : '14px',
      zIndex: 9999,
      animation: 'fadeIn 0.3s ease-out',
    },
    tooltipArrow: {
      position: 'absolute',
      top: '-8px',
      right: '20px',
      width: '0',
      height: '0',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderBottom: '10px solid #FF6D00',
    },
    tooltipHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '6px'
    },
    tooltipClose: {
      position: 'absolute',
      top: '6px',
      right: '6px',
      background: 'transparent',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      fontSize: '14px',
    }
  };

  return (
    <>
      {/* Navbar wrapper */}
      <div style={styles.navbarWrapper}>
        {/* Logo on left */}
        <div style={styles.logoBar} onClick={scrollToTop}>
          <img 
            src={logoUrl} 
            alt="Company Logo" 
            style={styles.logoImg} 
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>

        {/* Right section with nav items and auth buttons */}
        <div style={styles.rightSection}>
          {/* Navigation items (desktop) */}
          <div style={styles.navItems}>
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                style={{
                  ...styles.navBtn,
                  ...(activeSection === id ? styles.activeBtn : {}),
                }}
                aria-current={activeSection === id ? "page" : undefined}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Auth buttons */}
          <div style={styles.authButtons}>
            {/* Mobile menu button */}
            {isMobile && (
              <div
                onClick={() => setMenuOpen(!menuOpen)}
                style={styles.hamburger}
                aria-label="Toggle menu"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setMenuOpen(!menuOpen);
                }}
              >
                ☰
              </div>
            )}

            {/* Sign In button with tooltip */}
            <div style={{ position: 'relative' }}>
              <button
                style={styles.signInBtn}
                onClick={() => {
                  setIsModalOpen(true);
                  setShowTooltip(false);
                }}
                aria-label="Sign in"
              >
                Sign In
              </button>
              
              {showTooltip && (
                <div style={styles.tooltip}>
                  <div style={styles.tooltipArrow} />
                  <div style={styles.tooltipHeader}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 16V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 8H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Quick Access</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.4' }}>
                    Click here to login or create an account
                  </p>
                  <button 
                    onClick={() => setShowTooltip(false)}
                    style={styles.tooltipClose}
                    aria-label="Close tooltip"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobile && menuOpen && (
          <div style={styles.mobileMenu}>
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                style={{
                  ...styles.mobileNavBtn,
                  ...(activeSection === id ? styles.mobileActiveBtn : {}),
                }}
                aria-current={activeSection === id ? "page" : undefined}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {/* Modal for login/signup */}
        {isModalOpen && (
          <div
            style={styles.modalOverlay}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalTitle"
            onClick={resetModal}
            tabIndex={-1}
          >
            <div
              style={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
              tabIndex={0}
            >
              {showForgotPassword ? (
                <ForgotPassword onBack={() => setShowForgotPassword(false)} />
              ) : (
                <>
                  <h2
                    id="modalTitle"
                    style={{ 
                      textAlign: "center", 
                      marginBottom: "20px",
                      color: "#FF6D00",
                      fontSize: "26px",
                      fontWeight: "700"
                    }}
                  >
                    {showSignUp ? "Create Account" : "Welcome Back"}
                  </h2>

                  <form onSubmit={handleEmailSubmit}>
                    {showSignUp && (
                      <div style={styles.formGroup}>
                        <label htmlFor="username" style={styles.label}>
                          Username
                        </label>
                        <input
                          type="text"
                          id="username"
                          style={styles.input}
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                          autoFocus={showSignUp}
                        />
                      </div>
                    )}
                    <div style={styles.formGroup}>
                      <label htmlFor="email" style={styles.label}>
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        style={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoFocus={!showSignUp}
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label htmlFor="password" style={styles.label}>
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        style={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" style={styles.modalBtn}>
                      {showSignUp ? "Sign Up" : "Sign In"}
                    </button>
                    <div style={{ textAlign: "center", margin: "20px 0" }}>
                      <button
                        type="button"
                        onClick={handleGoogleLogin}
                        style={{
                          ...styles.modalBtn,
                          background: "white",
                          color: "#333",
                          border: "1px solid #ddd",
                          '&:hover': {
                            background: "#f5f5f5",
                          },
                        }}
                      >
                        Continue with Google
                      </button>
                    </div>

                    {/* Forgot Password Link */}
                    {!showSignUp && (
                      <p
                        style={styles.forgotPassword}
                        onClick={() => {
                          setShowForgotPassword(true);
                          setShowSignUp(false);
                        }}
                      >
                        Forgot Password?
                      </p>
                    )}
                  </form>

                  {/* Switch between sign in/sign up */}
                  <p
                    style={styles.switchText}
                    onClick={() => {
                      setShowSignUp(!showSignUp);
                      setUsername("");
                      setEmail("");
                      setPassword("");
                    }}
                  >
                    {showSignUp
                      ? "Already have an account? Sign In"
                      : "Don't have an account? Sign Up"}
                  </p>

                  <p
                    style={{
                      ...styles.switchText,
                      marginTop: "10px",
                      color: "#888",
                    }}
                    onClick={resetModal}
                  >
                    Close
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Global styles */}
      <style jsx global>{`
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}