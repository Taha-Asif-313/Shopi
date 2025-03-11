"use client";
import Link from "next/link";
import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";

const ProductOverview = ({ Id, Title, Description, Price, Images }) => {
  return (
    <>
      <div className="flex items-center max-md:flex-col max-md:items-start max-md:gap-2 lg:gap-6">
        <Link href={"/shop/products"}>
          <FaArrowCircleLeft className="text-5xl max-md:text-4xl text-primary" />
        </Link>
        <div>
          <h2 className="text-xl font-bold text-gray-800">{Title}</h2>
          <p className="text-sm text-gray-500 mt-2">{Description}</p>
        </div>
      </div>

      <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8 mt-6">
        <div className="lg:col-span-3">
          <div className="grid sm:grid-cols-3 gap-2 text-center">
            <div className="sm:col-span-2 bg-gray-100 p-4 flex items-center rounded">
              {Images[0] ? <img
                src={Images[0]}
                alt="Product"
                className="w-full aspect-[5/4] object-contain object-top"
              />:       <div className="z-50 bg-white absolute left-0 top-0 w-full flex justify-center items-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500"></div>
            </div>}
            </div>

            <div className="sm:space-y-2 w-full h-full max-sm:grid max-sm:grid-cols-2 max-sm:gap-2">
              <div className="bg-gray-100 p-4 flex items-center rounded w-full h-[140px] sm:h-[200px]">
                <img
                  src={Images[0]}
                  alt="Product"
                  className="w-full max-h-full object-contain object-top"
                />
              </div>

              <div className="bg-gray-100 p-4 flex items-center rounded w-full h-[140px] sm:h-[200px]">
                <img
                  src={Images[0]}
                  alt="Product"
                  className="w-full max-h-full object-contain object-top"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:col-span-2">
          <p className="text-gray-800 text-3xl font-bold">${Price}</p>
          <div className="flex items-center space-x-1 mt-2">
            <svg
              className="w-4 h-4 fill-primary"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg
              className="w-4 h-4 fill-primary"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg
              className="w-4 h-4 fill-primary"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg
              className="w-4 h-4 fill-primary"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg
              className="w-4 h-4 fill-[#CED5D8]"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>

            <button
              type="button"
              className="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded flex items-center !ml-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 mr-1"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path
                  d="M14.236 21.954h-3.6c-.91 0-1.65-.74-1.65-1.65v-7.201c0-.91.74-1.65 1.65-1.65h3.6a.75.75 0 0 1 .75.75v9.001a.75.75 0 0 1-.75.75zm-3.6-9.001a.15.15 0 0 0-.15.15v7.2a.15.15 0 0 0 .15.151h2.85v-7.501z"
                  data-original="#000000"
                />
                <path
                  d="M20.52 21.954h-6.284a.75.75 0 0 1-.75-.75v-9.001c0-.257.132-.495.348-.633.017-.011 1.717-1.118 2.037-3.25.18-1.184 1.118-2.089 2.28-2.201a2.557 2.557 0 0 1 2.17.868c.489.56.71 1.305.609 2.042a9.468 9.468 0 0 1-.678 2.424h.943a2.56 2.56 0 0 1 1.918.862c.483.547.708 1.279.617 2.006l-.675 5.401a2.565 2.565 0 0 1-2.535 2.232zm-5.534-1.5h5.533a1.06 1.06 0 0 0 1.048-.922l.675-5.397a1.046 1.046 0 0 0-1.047-1.182h-2.16a.751.751 0 0 1-.648-1.13 8.147 8.147 0 0 0 1.057-3 1.059 1.059 0 0 0-.254-.852 1.057 1.057 0 0 0-.795-.365c-.577.052-.964.435-1.04.938-.326 2.163-1.71 3.507-2.369 4.036v7.874z"
                  data-original="#000000"
                />
                <path
                  d="M4 31.75a.75.75 0 0 1-.612-1.184c1.014-1.428 1.643-2.999 1.869-4.667.032-.241.055-.485.07-.719A14.701 14.701 0 0 1 1.25 15C1.25 6.867 7.867.25 16 .25S30.75 6.867 30.75 15 24.133 29.75 16 29.75a14.57 14.57 0 0 1-5.594-1.101c-2.179 2.045-4.61 2.81-6.281 3.09A.774.774 0 0 1 4 31.75zm12-30C8.694 1.75 2.75 7.694 2.75 15c0 3.52 1.375 6.845 3.872 9.362a.75.75 0 0 1 .217.55c-.01.373-.042.78-.095 1.186A11.715 11.715 0 0 1 5.58 29.83a10.387 10.387 0 0 0 3.898-2.37l.231-.23a.75.75 0 0 1 .84-.153A13.072 13.072 0 0 0 16 28.25c7.306 0 13.25-5.944 13.25-13.25S23.306 1.75 16 1.75z"
                  data-original="#000000"
                />
              </svg>
              87 Reviews
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-800">Choose a size</h3>
            <div className="flex flex-wrap gap-4 mt-4">
              <button
                type="button"
                className="w-12 h-12 border hover:border-primary font-semibold text-gray-800 text-sm rounded-full flex items-center justify-center shrink-0"
              >
                SM
              </button>
              <button
                type="button"
                className="w-12 h-12 border hover:border-primary border-primary font-semibold text-primary text-sm rounded-full flex items-center justify-center shrink-0"
              >
                MD
              </button>
              <button
                type="button"
                className="w-12 h-12 border hover:border-primary font-semibold text-gray-800 text-sm rounded-full flex items-center justify-center shrink-0"
              >
                LG
              </button>
              <button
                type="button"
                className="w-12 h-12 border hover:border-primary font-semibold text-gray-800 text-sm rounded-full flex items-center justify-center shrink-0"
              >
                XL
              </button>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              type="button"
              className="w-full px-4 py-3 bg-primary hover:bg-primary text-white text-sm font-semibold rounded"
            >
              Buy now
            </button>
            <button
              type="button"
              className="w-full px-4 py-2.5 border border-primary bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
            >
              Add to cart
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-800">
              Select Delivery Location
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Enter the pincode of your area to check product availability.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <input
                type="number"
                placeholder="Enter pincode"
                className="bg-white px-4 py-2.5 text-sm w-full border border-gray-300 outline-0 rounded"
              />
              <button
                type="button"
                className="border border-primary outline-0 bg-primary hover:bg-primary text-white px-4 py-2.5 text-sm rounded"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
