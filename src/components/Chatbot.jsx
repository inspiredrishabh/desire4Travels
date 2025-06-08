import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "20px",
            width: "300px",
            height: "400px",
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            zIndex: 1000,
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              backgroundColor: "#2c3e50",
              color: "white",
              padding: "15px",
              borderRadius: "10px 10px 0 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Chat Support</span>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>

          {/* Chat Body */}
          <div
            style={{
              padding: "20px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#f0f0f0",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            >
              How may I help you, Sir?
            </div>
            <p style={{ color: "#666", fontSize: "14px" }}>
              Welcome to Desire4Travels! <br />
              We're here to help you plan your perfect trip.
            </p>
          </div>

          {/* Chat Input */}
          <div
            style={{
              padding: "15px",
              borderTop: "1px solid #eee",
            }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                outline: "none",
              }}
            />
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          backgroundColor: "#e74c3c",
          color: "white",
          border: "none",
          borderRadius: "50%",
          fontSize: "24px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          zIndex: 1001,
        }}
      >
        💬
      </button>

      {/* Notification Badge */}
      <div
        style={{
          position: "fixed",
          bottom: "55px",
          right: "55px",
          width: "20px",
          height: "20px",
          backgroundColor: "#e74c3c",
          color: "white",
          borderRadius: "50%",
          fontSize: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1002,
        }}
      >
        1
      </div>
    </div>
  );
};

export default Chatbot;
