import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FeaturedDestinations from "./FeaturedDestinations";
import HowItWorks from "./HowItWorks";
import DifferentiatorFeatures from "./DifferentiatorFeatures";
import UpcomingEvents from "./UpcomingEvents";
import CallToAction from "./CallToAction";

// Simple HomePage component that organizes all the sections
const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturedDestinations />
      <HowItWorks />
      <DifferentiatorFeatures />
      <UpcomingEvents />
      <CallToAction />
    </div>
  );
};

export default HomePage;
