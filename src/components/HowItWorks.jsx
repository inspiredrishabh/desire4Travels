import React from "react";

// Section explaining the booking process
const HowItWorks = () => {
  // Steps data
  const steps = [
    {
      step: "01",
      title: "Share Your Dreams",
      description:
        "Tell us about your ideal trip, preferences and expectations.",
    },
    {
      step: "02",
      title: "Get Custom Itinerary",
      description: "Our experts craft a personalized travel plan just for you.",
    },
    {
      step: "03",
      title: "Refine & Confirm",
      description:
        "Review your plan, request adjustments, and approve when perfect.",
    },
    {
      step: "04",
      title: "Travel Worry-Free",
      description: "Enjoy your journey with 24/7 support from our team.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#1E3A8A",
        color: "white",
        padding: "80px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Section title */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            How It Works
          </h2>
          <p
            style={{
              color: "#BFDBFE",
              fontSize: "18px",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Our simple 4-step process to create your perfect custom travel
            experience
          </p>
        </div>

        {/* Steps grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "rgba(30, 64, 175, 0.5)",
                padding: "32px",
                borderRadius: "12px",
                width: "250px",
              }}
            >
              <div
                style={{
                  fontSize: "42px",
                  fontWeight: "bold",
                  color: "#FACC15",
                  marginBottom: "16px",
                }}
              >
                {step.step}
              </div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  marginBottom: "12px",
                }}
              >
                {step.title}
              </h3>
              <p style={{ color: "#BFDBFE" }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
