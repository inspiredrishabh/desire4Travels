import React, { useEffect, useRef } from "react";
import { travelImages, optimizeImage } from "../utils/images";

const HeroSection = () => {
  const parallaxRef = useRef(null);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollValue = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${
        scrollValue * 0.4
      }px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div ref={parallaxRef} className="absolute inset-0 h-[120%]">
          <img
            src={optimizeImage(travelImages.hero, 2000)}
            alt="Breathtaking travel destination"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/40 to-slate-900/70"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center max-w-5xl">
        <div className="animate-fadeIn">
          <p className="uppercase text-slate-300 tracking-widest text-sm md:text-base font-light mb-4 md:mb-6">
            Discover the world's hidden treasures
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 md:mb-8">
            Custom Made Trips For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-100">
              All Your Travel Dreams
            </span>
          </h1>

          <p className="text-slate-200 max-w-2xl mx-auto mb-8 md:mb-10 text-base md:text-lg">
            Experience extraordinary destinations with personalized itineraries
            crafted by our travel experts. Unforgettable journeys begin here.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <button className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              EXPLORE DESTINATIONS
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 transform hover:-translate-y-1">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
