import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Ankit Aryan",
      image: "/api/placeholder/80/80",
      rating: 5,
      review:
        "Much obliged to you for the fabulous planning to Leh Ladakh that you and your group got ready for us. We completely lived it up. All the arrangements and transfers worked like clockwork, I value your endeavors in getting this going. Our lodging was incredible. Thank you for helping make our once in a lifetime family trip something everyone will remember with affection.",
    },
    {
      id: 2,
      name: "Vaishnayi Khardekar",
      image: "/api/placeholder/80/80",
      rating: 5,
      review:
        "This was a trek that had not been high on our pail list but rather dear companions talked us into running with them. This excursion ended up being past our desires all modified only for the four of us!! The arranging points of interest were immaculate and the lodging were sublime. We would utilize you again for future touring plans, truth be told, you are right now arranging our trips in India.",
    },
    {
      id: 3,
      name: "Siddhi Joshi",
      image: "/api/placeholder/80/80",
      rating: 5,
      review:
        "I absolutely loved everything about the tour. We were well looked after from stepping off the plane to re boarding. Accomodation was excellent everywhere we stayed. Our stay at the Exotic Marigold was magical. Our guide Sammi was the best, nothing was too much trouble and he organised a few extra things we showed interest in. He has a very good knowledge of the Indian history.",
    },
    {
      id: 4,
      name: "Himashu C Sharma",
      image: "/api/placeholder/80/80",
      rating: 5,
      review:
        "Amazing experience with Desire4Travels! The team was professional, accommodating, and went above and beyond to make our trip memorable. Every detail was perfectly planned and executed. Highly recommended for anyone looking for a hassle-free travel experience.",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`${
          index < rating ? "text-yellow-400" : "text-gray-300"
        } text-sm`}
      />
    ));
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-px bg-slate-300"></div>
            <h2 className="px-6 text-3xl font-bold text-slate-800 bg-white">
              Customer Reviews
            </h2>
            <div className="flex-1 h-px bg-slate-300"></div>
          </div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Hear what our valued customers have to say about their travel
            experiences with us
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <FaQuoteLeft className="text-sky-600 text-2xl opacity-50" />
                <div className="flex space-x-1">
                  {renderStars(review.rating)}
                </div>
              </div>

              {/* Review Content */}
              <div className="mb-6">
                <p className="text-slate-700 leading-relaxed text-sm">
                  {review.review}
                </p>
              </div>

              {/* Customer Info */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-300 flex-shrink-0">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${review.name}&background=0ea5e9&color=fff&size=48`;
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    {review.name}
                  </h4>
                  <p className="text-slate-500 text-sm">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Stats */}
        <div className="mt-12 bg-slate-800 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold text-sky-400 mb-2">500+</div>
              <p className="text-slate-300 text-sm">Happy Customers</p>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-sky-400 mb-2">4.9</div>
              <div className="flex justify-center space-x-1 mb-2">
                {renderStars(5)}
              </div>
              <p className="text-slate-300 text-sm">Average Rating</p>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-sky-400 mb-2">50+</div>
              <p className="text-slate-300 text-sm">Destinations</p>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-sky-400 mb-2">100%</div>
              <p className="text-slate-300 text-sm">Customer Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            Ready to create your own unforgettable experience?
          </p>
          <button className="bg-sky-600 hover:bg-sky-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
            Plan Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
