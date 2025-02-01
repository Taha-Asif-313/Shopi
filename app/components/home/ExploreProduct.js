'use client'
import React, { useEffect, useState } from "react";
import ProductCardNew from "../product-page-components/ProductCardNew";

const ExploreProduct = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the public directory
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error loading products:", error));
  }, []);
  return (
    <>
      <div className="products-section max-w-full my-10 mx-10 lg:px-20 flex flex-col items-center">
        {/* Product section content  */}
        <div className="content flex flex-col justify-center items-center mb-5">
          <h1 className="lg:text-7xl text-4xl font-bold">Products</h1>
          <p className="lg:text-lg text-sm text-center text-primary font-semibold ">
            Discover the latest products!
          </p>
        </div>

        {/* Products cards  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-xl:gap-4 gap-6 ">
          {/* Product card */}
          {Array.isArray(Products) &&
            Products.map((products) => {
              return (
                <ProductCardNew
                  key={products.id}
                  Product={products}
                  Id={products.id}
                  Url={products.thumbnail}
                  Title={products.title}
                  Desc={products.description}
                  Label={products.label}
                  Price={products.price}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ExploreProduct;
