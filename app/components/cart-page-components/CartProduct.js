"use client";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
const CartProduct = () => {
  const [quantity, setquantity] = useState(1);
  let price = 1499;
  const increment = () => {

      setquantity(quantity + 1);

  };
  const decrement = () => {
    if (quantity > 1) {
      setquantity(quantity - 1);
    }
  };
  return (
    <>
      <div className="rounded border border-black bg-white p-4 md:p-6">
        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
          <a href="#" className="shrink-0 md:order-1">
            <img
              className="h-20 w-20 dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
              alt="imac image"
            />
            <img
              className="hidden h-20 w-20 dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
              alt="imac image"
            />
          </a>

          <div className="flex items-center justify-between md:order-3 md:justify-end">
            <div className="flex items-center text-black">
              <button type="button" onClick={decrement}>
                <CiSquareMinus className="text-4xl" />
              </button>
              <input
                type="text"
                id="counter-input"
                className="w-10 shrink-0 border-0 bg-transparent text-center text-lg font-medium text-gray-900 focus:outline-none focus:ring-0 "
                placeholder=""
                value={quantity}
                readOnly
                required
              />
              <button type="button" onClick={increment}>
                <CiSquarePlus className="text-4xl" />
              </button>
            </div>
            <div className="text-center md:order-4 md:w-32">
              <p className="text-base font-bold text-gray-900 ">
                ${price * quantity}
              </p>
            </div>
          </div>

          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
            <a
              href="#"
              className="text-base max-lg:text-sm font-medium text-gray-900 hover:underline"
            >
              PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24"
              Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT
            </a>

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-1 text-[12px] font-medium border p-2 rounded border-primary text-primary hover:bg-primary hover:text-white"
              >
                <FaRegHeart className="text-lg" />
                Add to Favorites
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-1 text-[12px] font-medium bg-red-600 text-white p-2 rounded"
              >
                <MdDelete className="text-lg" />
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
