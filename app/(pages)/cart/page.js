"use client";
import React, { useContext } from "react";
import CartProduct from "@/app/components/cart-page-components/CartProduct";
import TotalBill from "@/app/components/cart-page-components/TotalBill";
import PromoCode from "@/app/components/cart-page-components/PromoCode";
import { AuthContext } from "@/app/context/authContext";
import { redirect } from "next/navigation";

const CartPage = () => {
  const { isLogin } = useContext(AuthContext);

  if (!isLogin) {
    return redirect("/login"); // Redirect authenticated users to home
  }

  return (
    <>
      <section className="bg-white antialiased ">
        <div className="mx-auto max-w-screen-xl px-4 py-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Your Cart Products
          </h2>
          <div className="mt-4 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                <CartProduct />
              </div>
            </div>
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <TotalBill />
              <PromoCode />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
