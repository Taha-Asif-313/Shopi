import React from "react";
import HeroSection from "./components/home/HeroSection";
import ExploreProduct from "./components/home/ExploreProduct";

const Home = async () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <HeroSection />
      <ExploreProduct />
    </div>
  );
};

export default Home;
