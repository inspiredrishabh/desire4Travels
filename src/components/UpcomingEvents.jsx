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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-px bg-slate-200"></div>
          <h2 className="px-6 text-3xl font-serif font-bold text-slate-800">
            Upcoming Events
          </h2>
          <div className="flex-1 h-px bg-slate-200"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="h-56">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2 text-center">
                  {event.title}
                </h3>

                <div className="text-slate-700 font-medium mb-4 text-center">
                  {event.date}
                </div>

                <p className="text-slate-600 mb-6 flex-grow">
                  {event.description}
                </p>

                <div className="text-center">
                  <button className="px-6 py-2 bg-slate-700 hover:bg-slate-800 text-white rounded-lg font-medium transition-colors duration-300">
                    BOOK NOW &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
