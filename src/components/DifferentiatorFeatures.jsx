import React from "react";

// Section highlighting unique features
const DifferentiatorFeatures = () => {
  // Features data (3 left side, 3 right side)
  const features = [
    {
      id: 1,
      title: "100% Tailor made trips",
      description:
        "We can get anything you want for your Holiday requirement let it be Rafting over a Volcano.",
    },
    {
      id: 2,
      title: "Security",
      description:
        "Your Security is one of our major concern. We have developed all of it to make your travel secure.",
    },
    {
      id: 3,
      title: "Best Price",
      description:
        "We value your money as you do. We provide you a luxurious experience without making you pay through your nose.",
    },
    {
      id: 4,
      title: "24/7 On Call Support",
      description:
        "We love to listen to your queries and resolve them. On Call support 24 hours and 7 Days a week.",
    },
    {
      id: 5,
      title: "Privacy and ND",
      description:
        "Your happy moments are safe with us. We do not disclose any of our customer data to anyone.",
    },
    {
      id: 6,
      title: "Made in India",
      description:
        "We are just started. We need your support. We are 100% made in India.",
    },
  ];

  return (
    <div
      style={{
        padding: "80px 0",
        backgroundColor: "#F8FAFC",
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
              color: "#1E3A8A",
              marginBottom: "16px",
            }}
          >
            What makes us <span style={{ color: "#1E293B" }}>different</span>{" "}
            from others?
          </h2>
          <div
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#2563EB",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          ></div>
        </div>

        {/* Three-column layout */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Left column features */}
          <div style={{ width: "30%" }}>
            {features.slice(0, 3).map((feature) => (
              <div key={feature.id} style={{ marginBottom: "40px" }}>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      backgroundColor: "#2563EB",
                      borderRadius: "50%",
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      marginRight: "16px",
                      marginTop: "4px",
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#1E293B",
                        marginBottom: "8px",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p style={{ color: "#64748B" }}>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center image */}
          <div
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                width: "250px",
                height: "300px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                clipPath:
                  "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
              }}
            >
              <img
                src="https://placehold.co/200x200/2563eb/FFFFFF?text=24/7+Support"
                alt="24/7 Customer Support"
                style={{ width: "80%", height: "auto" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  backgroundColor: "#F97316",
                  color: "white",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                24
              </div>
            </div>
          </div>

          {/* Right column features */}
          <div style={{ width: "30%" }}>
            {features.slice(3).map((feature) => (
              <div key={feature.id} style={{ marginBottom: "40px" }}>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      backgroundColor: "#2563EB",
                      borderRadius: "50%",
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      marginRight: "16px",
                      marginTop: "4px",
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#1E293B",
                        marginBottom: "8px",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p style={{ color: "#64748B" }}>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferentiatorFeatures;
