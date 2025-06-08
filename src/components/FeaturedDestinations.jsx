import React from "react";

const FeaturedDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Himalayan Adventure",
      location: "Himachal Pradesh",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070",
      price: "₹24,999",
      days: "6 Days",
    },
    {
      id: 2,
      name: "Goan Paradise",
      location: "Goa",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074",
      price: "₹18,500",
      days: "5 Days",
    },
    {
      id: 3,
      name: "Rajasthan Heritage",
      location: "Jaipur, Udaipur",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070",
      price: "₹32,999",
      days: "7 Days",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
            Discover Your Dream Destination
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our handpicked destinations that promise unforgettable
            experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-56 relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-slate-700 text-white px-4 py-2 rounded-bl-lg font-medium">
                  {destination.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {destination.name}
                </h3>

                <div className="flex items-center text-slate-500 mb-4 text-sm">
                  <span>📍 {destination.location}</span>
                  <span className="mx-2">•</span>
                  <span>📅 {destination.days}</span>
                </div>

                <button className="w-full py-3 text-center bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors duration-300">
                  Explore Package →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-slate-700 hover:bg-slate-800 text-white rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
