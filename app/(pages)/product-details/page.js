"use client";
import ProductOverview from "@/app/components/product-detail-page-components/ProductOverview";
import Tabs from "@/app/components/product-detail-page-components/Tabs";
import { ProductContext } from "@/app/context/productContext";
import React, { useContext } from "react";

const ProductDetails = () => {
  // States
  const { selectedProduct } = useContext(ProductContext);
  return (
    <>
      <div className="font-sans mb-10 p-8 tracking-wide max-w-7xl max-lg:max-w-2xl max-lg:mx-auto">
        <ProductOverview
          Id={selectedProduct.id}
          Title={selectedProduct.title}
          Description={selectedProduct.description}
          Price={selectedProduct.price}
          Images={selectedProduct.images}
        />
        <Tabs
          Description={selectedProduct.description}
          Reviews={selectedProduct.reviews}
        />
      </div>
    </>
  );
};

export default ProductDetails;
