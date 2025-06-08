import React from "react";

// Call to action section with background image
const CallToAction = () => {
  return (
    <section
      className="py-20 bg-slate-900 relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-slate-900/80"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          Ready to Begin Your Adventure?
        </h2>

        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
          Let us create a tailored journey that matches your travel dreams and
          budget.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-slate-100 hover:bg-white text-slate-900 rounded-lg font-semibold transition-colors duration-300">
            Plan My Trip
          </button>

          <button className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-lg font-semibold transition-colors duration-300">
            Contact an Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
