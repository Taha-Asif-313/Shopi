"use client";
import React, { useEffect, useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { Button, Flexbox, Image, Text } from "shadlc";
import ProductGallery from "./components/product/ProductGallery";

const Shop = () => {
  const [Products, setProducts] = useState([]);
  const [productLoading, setproductLoading] = useState(true);

  useEffect(() => {
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setproductLoading(false);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
        setproductLoading(false);
      });
  }, []);


  return (
    <div className="mx-auto max-w-[1400px]">
      <Flexbox
        direction={{ sm: "column-reverse", md: "column-reverse", lg: "row" }}
        align={{ sm: "center", md: "center", lg: "center" }}
        justify={{ sm: "center", md: "center", lg: "space-between" }}
        gap={{ sm: "0px", md: "20px", lg: "30px" }}
        padding={{ sm: "20px", md: "20px 20px", lg: "0px 42px" }}
        backgroundColor="#fff"
        width={{ sm: "100%", md: "100%", lg: "100%" }}
        height={{ sm: "auto", md: "auto", lg: "auto" }}
        className="p-4 min-h-screen"
      >
        <Flexbox
          width={{ sm: "100%", md: "90%", lg: "50%" }}
          height={{ sm: "auto", md: "auto", lg: "auto" }}
          padding={{ sm: "0", md: "0", lg: "0" }}
          direction={{ sm: "column", md: "column", lg: "column" }}
          align={{ sm: "center", md: "center", lg: "flex-start" }}
          justify={{ sm: "center", md: "center", lg: "space-between" }}
          gap={{ sm: "10px", md: "20px", lg: "5px" }}
          backgroundColor="#fff"
          className="rounded-lg text-black"
        >
          <Text
            as="h1"
            fontWeight={600}
            color="#000"
            fontSize="60px"
            lineHeight="60px"
            margin="0 0 10px 0"
            className="max-md:!text-3xl"
          >
            Welcome to <span className="text-primary font-bold">Shopi!</span>
          </Text>
          <Text
            fontSize="17px"
            lineHeight="24px"
            margin="0 0 10px 0"
            className="max-lg:!text-center max-md:!text-sm"
          >
            Discover the latest trends in fashion and get inspired by our new
            styles. Make your shop with your
            <strong> own style</strong>.
          </Text>
          <Button
            backgroundColor="var(--primary)"
            borderRadius="50px"
            textColor="#fff"
            padding="7px 60px"
            fontSize="14px"
            iconBefore={<FaBasketShopping className="text-lg" />}
            fontWeight={500}
          >
            Start Shopping
          </Button>
        </Flexbox>
        <Flexbox
          width={{ sm: "100%", md: "100%", lg: "50%" }}
          padding={"0"}
          align={{ sm: "center", md: "center", lg: "center" }}
          justify={{ sm: "center", md: "center", lg: "center" }}
          backgroundColor="transparent"
        >
          <Image
            src="/hero-pic.png"
            alt="Placeholder"
            lazyLoad
            objectFit="contain"
            boxShadow="0px 0px 10px white"
            width="100%"
            height="auto"
          />
        </Flexbox>
      </Flexbox>
      <Flexbox
        direction={{ lg: "column", md: "column", sm: "column" }}
        padding={{ sm: "40px 0px", md: "60px 0px", lg: "40px 0px" }}
        backgroundColor="transparent"
      >
        <div className="content flex flex-col justify-center items-center mb-5">
          <h1 className="lg:text-6xl text-4xl font-bold">Products</h1>
          <p className="lg:text-lg text-sm text-center text-primary font-semibold ">
            Discover the latest products!
          </p>
        </div>
        {productLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500"></div>
          </div>
        ) : (
          <ProductGallery Products={Products} />
        )}
      </Flexbox>
    </div>
  );
};

export default Shop;
