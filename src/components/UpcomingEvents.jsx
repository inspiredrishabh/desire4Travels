import React from "react";

// Upcoming events section with cards
const UpcomingEvents = () => {
  // Events data
  const events = [
    {
      id: 1,
      title: "Mcleodganj Triund Trip",
      date: "18 June, 2025",
      description:
        "Triund is the crown jewel of dharamshala, situated in the laps of dhauladhar mountains, it has the perfect view of the mountains on one side and kangra valley on the other.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/travel-e5554.appspot.com/o/package%2F941255.jpg?alt=media&token=20622ff5-bacc-4762-b4f5-01344cb76aa0",
    },
    {
      id: 2,
      title: "Kheerganga Group Tour",
      date: "24 September, 2025",
      description:
        "Kheerganga in Parvati valley of Himachal Pradesh offers a mystical journey into the woods and is one of the gifted abode for natural sulfur hot water springs.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/travel-e5554.appspot.com/o/package%2F816126.jpg?alt=media&token=70535cb3-58e1-49e4-8c27-6c9da626a0e5",
    },
    {
      id: 3,
      title: "Kullu-Manali Group Tour",
      date: "1 August, 2025",
      description:
        "Manali is a high-altitude Himalayan resort town in India's northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/travel-e5554.appspot.com/o/package%2FKullu-Manali.jpg?alt=media&token=725e7e38-c642-42bd-b83d-31f15807f3dd",
    },
  ];

  return (
    <div style={{ padding: "80px 0", backgroundColor: "white" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Section title with lines */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "50px",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "1px",
              backgroundColor: "#CBD5E1",
              flexGrow: 1,
            }}
          ></div>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "600",
              color: "#2563EB",
              margin: "0 30px",
            }}
          >
            Upcoming Events
          </h2>
          <div
            style={{
              height: "1px",
              backgroundColor: "#CBD5E1",
              flexGrow: 1,
            }}
          ></div>
        </div>

        {/* Events grid */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {events.map((event) => (
            <div
              key={event.id}
              style={{
                width: "350px",
                backgroundColor: "white",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Event image */}
              <div style={{ height: "220px" }}>
                <img
                  src={event.image}
                  alt={event.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Event content */}
              <div
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#1E293B",
                    marginBottom: "8px",
                    textAlign: "center",
                  }}
                >
                  {event.title}
                </h3>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#2563EB",
                    marginBottom: "16px",
                    textAlign: "center",
                  }}
                >
                  {event.date}
                </div>
                <p
                  style={{
                    color: "#64748B",
                    marginBottom: "24px",
                    flexGrow: 1,
                  }}
                >
                  {event.description}
                </p>
                <div style={{ textAlign: "center" }}>
                  <button
                    style={{
                      backgroundColor: "#3B82F6",
                      color: "white",
                      padding: "8px 24px",
                      borderRadius: "6px",
                      border: "none",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                  >
                    BOOK NOW &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
