"use client";
import { ProductContext } from "@/app/context/productContext";
import React, { useContext, useState } from "react";
import Review from "./Review";

const Tabs = () => {
  // States
  const { selectedProduct } = useContext(ProductContext);
  const [tabTitle, settabTitle] = useState("description");
  return (
    <>
      <div className="mt-8 max-w-2xl">
        <ul className="flex border-b">
          <li
            onClick={() => {
              settabTitle("description");
            }}
            className={`${
              tabTitle === "description"
                ? "bg-gray-100 border-b text-gray-800"
                : "border-none text-gray-600"
            }  font-bold text-sm  py-3 px-8  border-gray-800 cursor-pointer transition-all duration-75`}
          >
            Description
          </li>
          <li
            onClick={() => {
              settabTitle("reviews");
            }}
            className={`${
              tabTitle === "reviews"
                ? "bg-gray-100 border-b text-gray-800"
                : "border-none text-gray-600"
            }  font-bold text-sm border-gray-800 hover:bg-gray-100 py-3 px-8 cursor-pointer transition-all`}
          >
            Reviews
          </li>
        </ul>
        <div className={`${tabTitle === "description" ? "block" : "hidden"}`}>
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800">
              Product Description
            </h3>
            <p className="text-sm text-gray-600 mt-4">
              {selectedProduct.description}
            </p>
          </div>
        </div>
        <div className={`${tabTitle === "reviews" ? "block" : "hidden"}`}>
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800">Product reviews</h3>
            <div className="text-sm max-h-60 overflow-y-auto text-gray-600 mt-4">
              {selectedProduct.reviews.map((review) => (
                <Review
                  rating={selectedProduct.rating}
                  comment={review.comment}
                  reviewerName={review.reviewerName}
                  date={review.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
