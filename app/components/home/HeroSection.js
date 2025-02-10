import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-section mb-10 mx-5 lg:mx-20 max-w-full max-lg:pt-16 h-screen flex flex-col-reverse lg:flex-row justify-center items-center lg:max-w-full lg:px-0">
      {/* Hero-section content */}
      <div className="content w-full h-[50%] lg:w-[50%] lg:h-full max-lg:items-center flex flex-col justify-center items-start gap-6">
        <h1 className="lg:text-7xl animate-wipeRight text-5xl max-lg:px-5 lg:text-left text-center font-bold ">
          Welcome to <span className="text-primary">Shopi</span> store.
        </h1>
        <p className="text-xl max-lg:text-sm text-center animate-wipeRight lg:text-left">
          Discover the latest trends in fashion and get inspired by our new
          styles. Make your shop with your
          <strong> own style</strong>.
        </p>
        <Link href="/signup" className="py-1 animate-wipeRight px-2 max-lg:w-full bg-primary rounded-full w-[30%] text-white font-bold text-center hover:bg-primary-dark transition duration-300">Shop Now</Link>
      </div>

      {/* Hero section image */}
      <div className="hero-pic relative flex justify-center items-end w-full h-[50%] lg:w-[50%] lg:h-full">
        <img
          className="w-full h-full hue-rotate-[0deg] saturate-150 contrast-150 animate-wipeLeft object-cover lg:object-contain lg:object-right"
          src={"/hero-pic.png"}
          alt="hero image"
        />
      </div>
    </div>
  );
}

export default HeroSection;
