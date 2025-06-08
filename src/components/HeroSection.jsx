import React from "react";

// Hero section with background image and main heading
const HeroSection = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070"
          alt="Mountain landscape"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(30, 58, 138, 0.4)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div
        style={{
          textAlign: "center",
          zIndex: 10,
          padding: "0 20px",
          color: "white",
        }}
      >
        <p
          style={{
            letterSpacing: "3px",
            fontSize: "18px",
            marginBottom: "20px",
          }}
        >
          COLLECT MOMENTS NOT THINGS
        </p>

        <h1
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            lineHeight: "1.2",
            marginBottom: "30px",
          }}
        >
          Custom Made Trips For <br />
          <span style={{ color: "#FDE047" }}>All Your Travel Needs</span>
        </h1>

        <button
          style={{
            backgroundColor: "white",
            color: "#1E3A8A",
            padding: "16px 40px",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "18px",
            border: "none",
            cursor: "pointer",
          }}
        >
          FIND HOW →
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
