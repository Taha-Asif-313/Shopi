import React from "react";

const ProgressSection = () => {
  return (
    <div className="md:px-20 px-5 pb-20">
      <h1 className="text-3xl text-center mb-10 font-extrabold">
        How <strong className="text-primary">Shopi</strong> Store works?
      </h1>
      <div>
        <h2 className="text-gray-800 text-xl font-semibold">
          We tell you how we work in the back!
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Discover inspiring articles that ignite your imagination and
          creativity. Duis accumsan, nunc et tempus blandit, metus mi
          consectetur felis turpis vitae ligula.
        </p>
      </div>
      <div className="flex max-lg:flex-col items-start mx-auto my-10">
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-7 h-7 shrink-0 mx-[-1px] bg-primary flex items-center justify-center rounded-full">
              <span className="text-sm text-white font-bold">1</span>
            </div>
            <div className="w-full h-[3px] mx-4 rounded-lg bg-primary"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-sm font-bold text-primary">Product Hunting</h6>
            <p className="text-xs text-gray-500">Completed</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-7 h-7 shrink-0 mx-[-1px] bg-primary flex items-center justify-center rounded-full">
              <span className="text-sm text-white font-bold">2</span>
            </div>
            <div className="w-full h-[3px] mx-4 rounded-lg bg-primary"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-sm font-bold text-primary">Quality Checkup</h6>
            <p className="text-xs text-gray-500">Completed</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-7 h-7 shrink-0 mx-[-1px] bg-primary flex items-center justify-center rounded-full">
              <span className="text-sm text-white font-bold">3</span>
            </div>
            <div className="w-full h-[3px] mx-4 rounded-lg bg-primary"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-sm font-bold text-primary">Shipping Managment</h6>
            <p className="text-xs text-gray-500">Completed</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-7 h-7 shrink-0 mx-[-1px] bg-primary flex items-center justify-center rounded-full">
              <span className="text-sm text-white font-bold">4</span>
            </div>
            <div className="w-full h-[3px] mx-4 rounded-lg bg-primary"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-sm font-bold text-primary">Handling Orders</h6>
            <p className="text-xs text-gray-500">Completed</p>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="w-7 h-7 shrink-0 mx-[-1px] bg-primary flex items-center justify-center rounded-full">
              <span className="text-sm text-white font-bold">5</span>
            </div>
          </div>
          <div className="mt-2">
            <h6 className="text-sm font-bold text-primary">Review</h6>
            <p className="text-xs text-gray-500">Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSection;
