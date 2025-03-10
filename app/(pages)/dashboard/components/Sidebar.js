"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaStore } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { RiMenu4Line, RiUser3Fill } from "react-icons/ri";
import { MdDashboard, MdPayments } from "react-icons/md";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { CgReorder } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { Button, Flexbox, Image, Text } from "shadlc";
import { AuthContext } from "@/app/context/authContext";

const Sidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState();
  const { isLogin } = useContext(AuthContext);
  useEffect(() => {
    setIsMounted(true);
    if (window.innerWidth > 1024) {
      setIsMenuOpen(true);
    }
  }, []);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  if (!isMounted) return null; // Prevent hydration mismatch

  return (
    isLogin && (
      <Flexbox
        direction={{ sm: "column", md: "column", lg: "column" }}
        align={{ sm: "flex-start", md: "flex-start", lg: "flex-start" }}
        justify={{ sm: "flex-start", md: "flex-start", lg: "flex-start" }}
        padding={{ sm: "20px 20px", md: "20px", lg: "40px 20px 40px 20px" }}
        gap={{ lg: "18px" ,md:'10px',sm:'10px'}}
        backgroundColor="#fff"
        height={{ sm: "auto", lg: "100vh" }}
        className="fixed text-black custom-scroll top-0 left-0 z-20 rounded-e-xl shadow-lg"
        maxWidth={{ lg: "260px" }}
      >
        {/* Toggle Button for Mobile */}
        <div className="absolute top-0 right-0 m-5 md:hidden">
          {isMenuOpen ? (
            <IoClose
              className="text-2xl"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <RiMenu4Line
              className="text-2xl"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>

        {/* Sidebar Header */}
        <Link href="/dashboard" className="flex items-center gap-1">
          <Image alt="logo" height="30px" width="30px" src="/logo.png" />
          <Text as="span" color="text-white" fontSize="18px" fontWeight={800}>
            Shopi{" "}
            <Text as="span" color="#00BF3B" fontSize="14px" fontWeight={800}>
              | Admin
            </Text>
          </Text>
        </Link>

        {isMenuOpen && (
          <Flexbox
            backgroundColor="#fff"
            direction={{ sm: "column", md: "column", lg: "column" }}
            align={{ sm: "flex-start", md: "flex-start", lg: "flex-start" }}
            justify={{ sm: "flex-start", md: "flex-start", lg: "flex-start" }}
            padding={{ lg: "0px 5px" }}
            gap={{ lg: "5px",md:'5px', sm:'10px' }}
          >
            <Link
              href="/dashboard"
              className="text-[14px] px-[12px] py-[8px] flex items-center gap-2 rounded-lg"
            >
              <MdDashboard className="text-xl" />
              Dashboard
            </Link>

            {/* Dropdown menu */}
            <div className="relative">
              <Button
                className="bg-transparent py-2 "
                size="sm"
                fontWeight={400}
                iconBefore={<RiShoppingBag3Fill className="text-xl" />}
                iconAfter={
                  <FaAngleDown
                    className={`text-green-600 transition-all ${
                      openDropdown === "Manage Products"
                        ? "rotate-180"
                        : "rotate-0"
                    }`}
                  />
                }
                onClick={() => toggleDropdown("Manage Products")}
              >
                Manage Products
              </Button>
              {openDropdown === "Manage Products" && (
                <div className="flex flex-col items-start px-3">
                  {[
                    { name: "All products", slug: "all-products" },
                    { name: "Add product", slug: "add-product" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={`/docs/${item.slug}`}
                      className="text-[14px] hover:text-primary hover:bg-green-100 py-1.5 rounded-full w-full px-3"
                    >
                      {" "}
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Dropdown menu */}
            <div className="relative">
              <Button
                className="bg-transparent py-2 "
                size="sm"
                fontWeight={400}
                iconBefore={<CgReorder className="text-xl" />}
                iconAfter={
                  <FaAngleDown
                    className={`text-green-600 transition-all ${
                      openDropdown === "Manage Orders"
                        ? "rotate-180"
                        : "rotate-0"
                    }`}
                  />
                }
                onClick={() => toggleDropdown("Manage Orders")}
              >
                Manage Orders
              </Button>
              {openDropdown === "Manage Orders" && (
                <div className="flex flex-col items-start px-3">
                  {["Orders"].map((item) => (
                    <Link
                      key={item}
                      href={`/docs/${item.toLowerCase()}`}
                      className="text-[14px] hover:text-primary hover:bg-green-100 py-1.5 rounded-full w-full px-3"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Dropdown menu */}
            <div className="relative">
              <Button
                className="bg-transparent py-2 "
                size="sm"
                fontWeight={400}
                iconBefore={<MdPayments className="text-xl" />}
                iconAfter={
                  <FaAngleDown
                    className={`text-green-600 transition-all ${
                      openDropdown === "Manage Payments"
                        ? "rotate-180"
                        : "rotate-0"
                    }`}
                  />
                }
                onClick={() => toggleDropdown("Manage Payments")}
              >
                Manage Payments
              </Button>
              {openDropdown === "Manage Payments" && (
                <div className="flex flex-col items-start px-3">
                  {[
                    { name: "Pending Payments", slug: "pending-payment" },
                    { name: "Payment Details", slug: "payment-details" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={`/docs/${item.slug}`}
                      className="text-[14px] hover:text-primary hover:bg-green-100 py-1.5 rounded-full w-full px-3"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Dropdown menu */}
            <div className="relative">
              <Button
                className="bg-transparent py-2 "
                size="sm"
                fontWeight={400}
                iconBefore={<FaStore className="text-xl" />}
                iconAfter={
                  <FaAngleDown
                    className={`text-green-600 transition-all ${
                      openDropdown === "Manage Shop" ? "rotate-180" : "rotate-0"
                    }`}
                  />
                }
                onClick={() => toggleDropdown("Manage Shop")}
              >
                Manage Shop
              </Button>
              {openDropdown === "Manage Shop" && (
                <div className="flex flex-col items-start px-3">
                  {[
                    { name: "Visit shop", slug: "shop" },
                    { name: "Customize Shop", slug: "customize-shop" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={`/${item.slug}`}
                      className="text-[14px] hover:text-primary hover:bg-green-100 py-1.5 rounded-full w-full px-3"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/docs"
              className="text-[14px] px-[12px] py-[8px] flex items-center gap-2 rounded-lg"
            >
              <RiUser3Fill className="text-xl" /> Profile
            </Link>
            <div className="flex items-center gap-2">
          <Link
            href="/docs"
            className="text-[14px] px-[12px] py-[8px] flex items-center gap-2 text-red-600 bg-red-100 rounded-lg"
          >
            <IoMdLogOut className="text-lg" />
            Logout
          </Link>
        </div>
          </Flexbox>
        )}

      
      </Flexbox>
    )
  );
};

export default Sidebar;
