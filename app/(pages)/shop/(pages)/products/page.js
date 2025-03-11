"use client";
import React, { useEffect, useState } from "react";
import ProductGallery from "../../components/product/ProductGallery";
import { Flexbox } from "shadlc";
import { FaBoxOpen, FaVideo } from "react-icons/fa6";
import FilterDropdown from "../../components/product/FilterDropdown";

const ProductsPage = () => {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const filterOptions = [
    { label: "All Items", icon: "📦" },
    { label: "Videos", icon: <FaVideo className="text-blue-500" /> },
    { label: "Products", icon: <FaBoxOpen className="text-green-500" /> },
  ];
  const [selectedFilter, setSelectedFilter] = useState("All Items");

  const handleFilterChange = (option) => {
    setSelectedFilter(option.label);
    console.log("Selected Filter:", option.label);
  };

  useEffect(() => {
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
        setLoading(false);
      });
  }, []);

  // Display loading spinner if data is being fetched
  if (loading) {
    return (
      <div className="z-50 bg-white absolute left-0 top-0 w-full flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500"></div>
      </div>
    );
  }
  return (
    <Flexbox
      direction={{ lg: "column", md: "column", sm: "column" }}
      padding={{ sm: "100px 0px", md: "100px 0px", lg: "100px 0px" }}
      maxWidth={{ lg: "1400px" }}
      className="mx-auto"
      backgroundColor="transparent"
    >
      <div className="w-full px-5 lg:px-10 flex items-center justify-between mb-5">
        <div className="content w-[60%] flex flex-col justify-start items-start ">
          <h1 className="lg:text-6xl text-3xl leading-tight font-bold">
            Products
          </h1>
          <p className="lg:text-lg text-[12px] leading-tight text-center text-primary font-semibold ">
            Discover the latest products!
          </p>
        </div>
        <div className="w-[40%]">
          <FilterDropdown
            options={filterOptions}
            onSelect={handleFilterChange}
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500"></div>
        </div>
      ) : (
        <ProductGallery Products={Products} />
      )}
    </Flexbox>
  );
};

export default ProductsPage;
