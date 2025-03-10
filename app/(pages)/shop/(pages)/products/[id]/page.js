"use client";

import { ProductContext } from "@/app/context/productContext";
import React, { useContext } from "react";
import ProductOverview from "../../../components/product/ProductOverview";
import Tabs from "../../../components/product/ProductTabs";

const ProductDetails = () => {
  // States
  const { selectedProduct } = useContext(ProductContext);
  return (
    <>
      <div className="font-sans py-20 lg:p-8 max-md:px-5 tracking-wide max-w-7xl max-lg:max-w-full max-lg:mx-auto">
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
