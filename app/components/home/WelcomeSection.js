import React from 'react';

const WelcomeSection = () => {
  return (
    <div className="flex justify-between items-center gap-6 max-h-[200px] py-8 md:px-20 px-5 bg-gradient-to-r from-black to-primary font-sans overflow-hidden">
      <div className="md:col-span-2">
        <h1 className="md:text-3xl text-xl font-bold text-white">Welcome to Shopi Store!</h1>
        <p className="md:text-sm text-[12px] text-gray-200 mt-2 w-[70%]">Discover the latest trends in fashion and get inspired by our new
          styles. Make your shop with your
          <strong> own style</strong>.</p>

        <button type="button"
          className="py-2 px-6 text-sm font-semibold bg-white text-primary hover:bg-slate-100 rounded-md mt-4 transition duration-300">Get
          Started</button>
      </div>

      <div className="w-[300px] h-[300px] max-md:hidden">
        <img src="/welcome.png" alt="Banner Image"
          className="w-full object-cover" />
      </div>
    </div>
  );
}

export default WelcomeSection;
