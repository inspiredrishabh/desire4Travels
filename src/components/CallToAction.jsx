import React from "react";

// Call to action section with background image
const CallToAction = () => {
  return (
    <div
      style={{
        position: "relative",
        padding: "100px 0",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(30, 58, 138, 0.7)",
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 20px",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "bold",
            color: "white",
            marginBottom: "24px",
          }}
        >
          Ready to Begin Your Adventure?
        </h2>
        <p
          style={{
            fontSize: "20px",
            color: "#BFDBFE",
            marginBottom: "40px",
          }}
        >
          Let us create a tailored journey that matches your travel dreams and
          budget.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              backgroundColor: "#F59E0B",
              color: "#1E3A8A",
              padding: "16px 32px",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "18px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Plan My Trip
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              color: "white",
              padding: "16px 32px",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "18px",
              border: "2px solid white",
              cursor: "pointer",
            }}
          >
            Contact an Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
