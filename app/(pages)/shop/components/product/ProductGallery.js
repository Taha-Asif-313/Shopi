"use client";
import React from "react";
import { GridView } from "shadlc";
import ProductCard from "./ProductCard";

const ProductGallery = ({ Products }) => {
  return (
    <GridView
      columns={{ sm: 1, md: 2, lg: 4 }}
      gap={{ sm: "20px", md: "20px", lg: "20px" }}
      padding={{ sm: "20px", md: "20px", lg: "0px 40px" }}
      alignItems={{ sm: "stretch", md: "center", lg: "flex-start" }}
      justifyItems={{ sm: "stretch", md: "center", lg: "start" }}
      backgroundColor="transparent"
      width={{ sm: "100%", md: "100%", lg: "100%" }}
      height={{ sm: "auto", md: "auto", lg: "auto" }}
      className="p-4"
    >
      {Array.isArray(Products) &&
        Products.map((products) => {
          return (
            <ProductCard
              key={products.id}
              Product={products}
              Id={products.id}
              Url={products.thumbnail}
              Title={products.title}
              Reviews={2}
              Price={products.price}
            />
          );
        })}
    </GridView>
  );
};

export default ProductGallery;
