"use client";
import React, { useContext, useEffect, useState } from "react";
import { FaBasketShopping, FaShop } from "react-icons/fa6";
import { Button, Flexbox, Image, Text } from "shadlc";
import ProductGallery from "./components/product/ProductGallery";
import Header from "./components/hearder-footer/Header";
import Footer from "./components/hearder-footer/Footer";
import { AuthContext } from "./context/authContext";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

const Home = () => {
  const [Products, setProducts] = useState([]);
    const { isLogin } = useContext(AuthContext);
  
    if (!isLogin) {
      return redirect("/dashboard"); // Redirect authenticated users to home
    }

  useEffect(() => {
    // Fetch the JSON file from the public directory
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  return (
    <div className=" mx-auto max-w-[1400px] flex items-center justify-center h-screen">
     <Link href={'/shop'} >
     Go to shop
     <FaShop className="text-5xl"/>
     </Link>
    </div>
  );
};

export default Home;
