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
    <section className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            How It Works
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Our simple 4-step process to create your perfect custom travel
            experience
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.step}
              className="bg-slate-700/50 p-8 rounded-xl hover:bg-slate-700 transition-colors duration-300"
            >
              <div className="text-4xl font-bold text-slate-300 mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
