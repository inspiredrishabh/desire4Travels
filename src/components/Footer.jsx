import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      {/* Merchant Integration Section */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ marginBottom: "20px", fontSize: "24px" }}>
          For Merchant Integrations and Partnership
        </h3>

        {/* Contact Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          <button
            style={{
              backgroundColor: "transparent",
              border: "2px solid white",
              color: "white",
              padding: "12px 24px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            EMAIL US
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              border: "2px solid white",
              color: "white",
              padding: "12px 24px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            CALL US
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              border: "2px solid white",
              color: "white",
              padding: "12px 24px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            WRITE TO US
          </button>
        </div>

        {/* Social Media Icons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <span style={{ fontSize: "24px", cursor: "pointer" }}>📘</span>
          <span style={{ fontSize: "24px", cursor: "pointer" }}>📷</span>
          <span style={{ fontSize: "24px", cursor: "pointer" }}>🐦</span>
          <span style={{ fontSize: "24px", cursor: "pointer" }}>📌</span>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          borderTop: "1px solid #555",
          paddingTop: "20px",
          fontSize: "14px",
          color: "#bbb",
        }}
      >
        © 2018 Copyright: Desire4Travels
      </div>
    </footer>
  );
};

export default Footer;
