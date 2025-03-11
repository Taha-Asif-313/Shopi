"use client";
import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { AuthContext } from "@/app/context/authContext";
import Link from "next/link";
import { Drawer } from "shadlc";

const Header = () => {
  const { isLogin } = useContext(AuthContext);
  const [isOpen, setisOpen] = useState(false);
  const items = 0;
  // Login / Logout Items
  const navItems = [
    { id: 1, name: "Home", url: "/shop", icon: <FaShop /> },
    {
      id: 2,
      name: "Products",
      url: "/shop/products",
      icon: <FaShoppingCart />,
    },
    { id: 3, name: "About", url: "/shop/about", icon: <FaShoppingCart /> },
  ];

  return (
    <nav className="navbar absolute h-16 lg:h-14 z-50 animate-wipeDown w-full ">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto shadow-[0_2px_10px_rgba(0,0,0,0.3)] px-5 lg:px-10 py-2 rounded-b-xl">
        <Link
          href={"/shop"}
          className="w-[50%] flex items-center  gap-2 text-[18px] font-semibold "
        >
          <FaCartShopping className="text-3xl text-primary" />
          <span className="font-bold">Shopi</span>
        </Link>

        <div className="navbar-section w-[50%] flex gap-4 lg:gap-8 justify-end items-center">
          {/* Navigation Links */}
          <div className="navbar-section hidden lg:flex justify-end items-center gap-4 lg:w-[40%]">
            {navItems.map((item) => (
              <Link
                key={item.id}
                className="no-underline text-sm flex items-center gap-1 font-medium hover:text-primary transition-all duration-300"
                href={item.url}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Cart Icon with Fixed Size */}
          {isLogin && (
            <Link href="/shop/cart" className="relative py-2 mr-5">
              <div className="absolute top-1 left-6">
                <p className="flex animate-pop h-5 w-5 min-w-[20px] items-center justify-center rounded-full bg-primary p-2 text-[10px] text-white">
                  {items}
                </p>
              </div>
              <FaShoppingCart className="text-3xl w-8 h-8" />
            </Link>
          )}

          {/* Hamburger Menu with Fixed Size */}
          <RxHamburgerMenu
            onClick={() => setisOpen(!isOpen)}
            className="text-3xl w-8 h-8 lg:hidden"
          />
        </div>

        <Drawer position="right" open={isOpen} onClose={() => setisOpen(false)}>
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
          <div>
            <ul className="px-8 relative py-5">
              {navItems.map((item) => {
                return (
                  <Link
                    key={item.id}
                    onClick={() => setisOpen(false)}
                    href={item.url}
                    className="flex items-center text-gray-900 text-md py-2"
                  >
                    <span className="text-gray-400 mr-5">{item.icon}</span>{" "}
                    {item.name}
                  </Link>
                );
              })}
            </ul>
            <div className="btns flex w-full justify-center items-center">
              {!isLogin && (
                <button className="w-32 bg-primary text-white py-2 rounded">
                  Logout
                </button>
              )}
            </div>
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Header;
