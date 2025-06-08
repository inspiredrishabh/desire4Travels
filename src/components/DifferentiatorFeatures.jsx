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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
            What makes us <span className="text-slate-900">different</span> from
            others?
          </h2>
          <div className="w-20 h-1 bg-slate-700 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 mb-12 lg:mb-0">
            {features.slice(0, 3).map((feature) => (
              <div key={feature.id} className="flex mb-10">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-1/3 flex justify-center items-center mb-12 lg:mb-0">
            <div className="relative w-60 h-72 bg-slate-100 flex items-center justify-center">
              <div
                className="absolute inset-0 bg-slate-100"
                style={{
                  clipPath:
                    "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
                }}
              ></div>
              <div className="z-10 p-6 text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-4">
                  24
                </div>
                <h3 className="text-lg font-semibold text-slate-800">
                  24/7 Customer Support
                </h3>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            {features.slice(3).map((feature) => (
              <div key={feature.id} className="flex mb-10">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorFeatures;
