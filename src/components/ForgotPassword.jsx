// components/ForgotPassword.jsx
import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseconfig";

export default function ForgotPassword({ onBack }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email, {
        url: "https://www.propelloai.in/reset-password",
      });
      setMessage("Password reset email sent! Check your inbox.");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div
      style={{
        color: "#333",
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(230, 103, 0, 0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "1.8rem",
          background: "linear-gradient(135deg, #e63d00, #e66700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "700",
        }}
      >
        Forgot Password
      </h2>
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "12px 15px",
            width: "100%",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            backgroundColor: "#f9f9f9",
            color: "#333",
            fontSize: "1rem",
            outline: "none",
            transition: "all 0.3s ease",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px",
            width: "100%",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #e63d00, #e66700)",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            color: "white",
            fontSize: "1rem",
            transition: "all 0.3s ease",
          }}
        >
          Send Reset Link
        </button>
      </form>
      {message && (
        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            color: message.includes("Error") ? "#e63d00" : "#e66700",
            fontWeight: "500",
          }}
        >
          {message}
        </p>
      )}
      <p
        onClick={onBack}
        style={{
          background: "linear-gradient(135deg, #e63d00, #e66700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          cursor: "pointer",
          marginTop: "15px",
          textAlign: "center",
          fontWeight: "600",
          transition: "all 0.3s ease",
        }}
      >
        Back to Login
      </p>
    </div>
  );
}