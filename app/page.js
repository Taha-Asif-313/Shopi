"use client";
import React, { useContext } from "react";
import { FaShop } from "react-icons/fa6";
import { AuthContext } from "./context/authContext";
import Link from "next/link";

const Home = () => {
  const { isLogin } = useContext(AuthContext);

  if (!isLogin) {
    return redirect("/dashboard"); // Redirect authenticated users to home
  }

  return (
    <div className=" mx-auto max-w-[1400px] flex items-center justify-center h-screen">
      <Link href={"/shop"}>
        Go to shop
        <FaShop className="text-5xl" />
      </Link>
    </div>
  );
};

export default Home;
