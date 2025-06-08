import React from "react";
import { FaPlane, FaGlobe, FaUsers, FaAward } from "react-icons/fa";

const AboutUs = () => {
  const stats = [
    {
      icon: <FaUsers />,
      number: "500+",
      label: "Happy Customers",
      color: "blue",
    },
    { icon: <FaGlobe />, number: "50+", label: "Destinations", color: "green" },
    {
      icon: <FaPlane />,
      number: "1000+",
      label: "Trips Organized",
      color: "cyan",
    },
    {
      icon: <FaAward />,
      number: "5+",
      label: "Years Experience",
      color: "purple",
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: "bg-blue-100", icon: "text-blue-600" },
      green: { bg: "bg-green-100", icon: "text-green-600" },
      cyan: { bg: "bg-cyan-100", icon: "text-cyan-600" },
      purple: { bg: "bg-purple-100", icon: "text-purple-600" },
    };
    return colorMap[color];
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-px bg-slate-300"></div>
            <h2 className="px-6 text-3xl font-bold text-slate-800 bg-white">
              About Us
            </h2>
            <div className="flex-1 h-px bg-slate-300"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Travel Icon - Centered */}
          <div className="flex justify-center">
            <div className="w-72 h-72 relative">
              <div className="w-full h-full bg-gradient-to-br from-pink-400 to-red-400 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-56 h-56 bg-gradient-to-br from-teal-400 to-green-500 rounded-full flex items-center justify-center relative overflow-hidden">
                  {/* World Map Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <path
                        d="M20,80 Q40,70 60,80 Q80,90 100,80 Q120,70 140,80 Q160,90 180,80"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,5"
                      />
                      <path
                        d="M30,120 Q50,110 70,120 Q90,130 110,120 Q130,110 150,120"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,5"
                      />
                    </svg>
                  </div>
                  {/* Airplane */}
                  <div className="relative z-10">
                    <FaPlane className="text-white text-5xl transform rotate-45" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-yellow-300 rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Your Trusted Travel Partner
              </h3>
              <p className="text-slate-700 leading-relaxed text-base">
                At Desire4Travels we are committed to provide professional
                service to our customers, ensuring they benefit from our
                experience, unique style and energy. A highly visible,
                independent and progressive travel agency, we aim to make a
                difference in everything we do.
              </p>
              <p className="text-slate-700 leading-relaxed text-base">
                We work with you to manage all elements of your travel in an
                efficient, cost effective and ethical manner. Our team of
                experienced professionals is dedicated to creating unforgettable
                travel experiences tailored to your unique preferences.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-slate-50 to-sky-50 p-6 rounded-lg border-l-4 border-sky-600">
              <h4 className="font-semibold text-slate-800 mb-2 text-lg">
                Our Mission
              </h4>
              <p className="text-slate-600">
                To transform your travel dreams into reality by providing
                exceptional service, innovative solutions, and personalized
                experiences that create lasting memories.
              </p>
            </div>
          </div>
        </div>

        {/* Video Section - Full Width */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Watch Our Travel Journey
            </h3>
            <p className="text-slate-600">
              Discover amazing destinations and experiences with us
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div
                className="relative"
                style={{ paddingBottom: "56.25%", height: 0 }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/wyu4lkCGHzQ"
                  title="Best adventure places in India - Desire4Travels"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800">
              Our Achievements
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const colors = getColorClasses(stat.color);
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-slate-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    {React.cloneElement(stat.icon, {
                      className: `${colors.icon} text-2xl`,
                    })}
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-1">
                    {stat.number}
                  </div>
                  <p className="text-slate-600 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Why Choose Desire4Travels?
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We stand out from the competition with our commitment to
              excellence and personalized service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-sky-600 text-2xl">✈️</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-3 text-lg">
                Expert Planning
              </h4>
              <p className="text-slate-600">
                Our experienced team crafts personalized itineraries that match
                your preferences and budget.
              </p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🤝</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-3 text-lg">
                24/7 Support
              </h4>
              <p className="text-slate-600">
                We're here for you throughout your journey with round-the-clock
                customer support.
              </p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">💎</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-3 text-lg">
                Best Value
              </h4>
              <p className="text-slate-600">
                Get the most out of your travel budget with our competitive
                prices and exclusive deals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
