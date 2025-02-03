"use client";
import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { AuthContext } from "@/app/context/authContext";
import Link from "next/link";

const Header = () => {
  const { isLogin } = useContext(AuthContext);
  const [isOpen, setisOpen] = useState(false);
  const items = 0;
  // Login / Logout Items
  const logoutItems = [
    { id: 1, name: "Shop", url: "/", icon: <FaShop /> },
    { id: 2, name: "Products", url: "/products", icon: <FaShoppingCart /> },
  ];
  const loginItems = [
    { id: 1, name: "Shop", url: "/", icon: <FaShop /> },
    { id: 2, name: "Products", url: "/products", icon: <FaShoppingCart /> },
  ];

  return (
    <nav className="navbar max-w-[1400px] mx-auto h-16 lg:h-14 z-50 animate-wipeDown w-full flex justify-between items-center shadow-[0_2px_10px_rgba(0,0,0,0.3)] px-5 lg:px-20 py-2">
      <Link
        href={"/"}
        className="w-[50%] lg:w-[30%] flex items-center  gap-2 text-[18px] font-semibold "
      >
        <FaCartShopping className="text-3xl text-primary" />
        <span className="font-bold">Shopi</span>
      </Link>
      <div className="navbar-section hidden lg:flex justify-center items-center gap-4 lg:w-[40%]">
        {isLogin
          ? loginItems.map((item) => {
              return (
                <a
                  key={item.id}
                  className="no-underline flex item-center gap-1 font-medium hover:text-primary transition-all duration-[0,5s,text-decoration] "
                  href={item.url}
                >
 
                  {item.name}
                </a>
              );
            })
          : logoutItems.map((item) => {
              return (
                <a
                  key={item.id}
                  className="no-underline flex items-center gap-1 font-medium hover:text-primary transition-all duration-[0,5s,text-decoration] "
                  href={item.url}
                >

                  {item.name}
                </a>
              );
            })}
      </div>
      <div className="navbar-section w-[50%] lg:w-[30%] relative flex gap-3 justify-end items-center actions">
        <Link
          href="/login"
          className="button hidden lg:block text-white bg-primary py-[3px] px-10 rounded-full border-2 border-primary hover:bg-primary duration-150"
        >
          Login
        </Link>
        {isLogin && (
          <a href={"/cart"}>
            {" "}
            <div className="relative py-2 mr-5">
              <div className="top-0 absolute left-6">
                <p className="flex animate-pop h-2 w-2 items-center justify-center rounded-full bg-primary p-3 text-[10px] text-white">
                  {items}
                </p>
              </div>
              <FaShoppingCart className="text-3xl" />
            </div>
          </a>
        )}
        <RxHamburgerMenu
          onClick={() => {
            setisOpen(!isOpen);
          }}
          className="text-3xl lg:hidden"
        />
      </div>

      <div
        className={`z-50 md:hidden ${
          isOpen ? "grid" : "hidden"
        } animate-wipeLeft min-h-screen place-content-center absolute top-0 right-0 bg-black`}
      >
        <div className="bg-white animate-wipeLeft h-screen shadow-lg max-w-xs mx-auto fixed top-0 right-0 z-50">
          <header className="bg-gradient-to-r from-primary to-black transform flex items-center pt-14 pb-8 px-6">
            <IoMdClose
              onClick={() => {
                setisOpen(!isOpen);
              }}
              className="absolute top-0 right-0 text-white text-3xl mx-5 my-4"
            />
            <img
              className="rounded-full w-10 h-10 ring-4 ring-opacity-20 ring-gray-200"
              src="https://avatar.iran.liara.run/public"
              alt="Dr. Jessica James"
            />
       
          </header>
          <div className="">
            <ul className="px-8 relative py-5">
              {isLogin
                ? loginItems.map((item) => {
                    return (
                      <Link
                        key={item.id}
                        href={item.url}
                        className="flex items-center text-gray-900 text-md py-2"
                      >
                        <span className="text-gray-400 mr-5">{item.icon}</span>{" "}
                        {item.name}
                      </Link>
                    );
                  })
                : logoutItems.map((item) => {
                    return (
                      <a
                        key={item.id}
                        href={item.url}
                        className="flex items-center text-gray-900 text-md py-2"
                      >
                        <span className="text-gray-400 mr-5">{item.icon}</span>{" "}
                        {item.name}
                      </a>
                    );
                  })}
            </ul>
            <div className="btns flex w-full justify-center items-center">
              {isLogin && (
                <button className="w-32 bg-primary text-white py-2 rounded">
                  Logout
                </button>
              )}
              <a href="/login" className="w-32 text-center bg-primary text-white py-2 rounded">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
