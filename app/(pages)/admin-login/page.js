'use client';
import Link from "next/link";
import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

const AdminLogin = () => {
  const [inputs, setinputs] = useState({ email: "", password: "" });

  const onchangeHandler = (e) => {
    setinputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="login w-full h-screen flex flex-col pt-32 items-center bg-cyan-50">
       
        <div className="login-form w-[80%] lg:w-[25%] flex flex-col bg-white justify-center border border-primary rounded-lg py-5 items-center">
        <Link href="/" className=" my-5 flex items-center  gap-2 text-[18px] font-semibold">
          <FaCartShopping className="text-4xl text-primary" />{" "}
          <span className="font-bold">Shopi | <span className="text-sm text-primary">Admin</span></span>
        </Link>
          <form className="form w-full px-5 flex flex-col gap-3 justify-center items-center">
            <input
              onChange={onchangeHandler}
              value={inputs.email}
              name="email"
              className="px-3 py-2 border border-primary rounded outline-none w-full"
              placeholder="Enter email"
              type="text"
            />
            <input
              onChange={onchangeHandler}
              value={inputs.password}
              name="password"
              className="px-3 py-2 border border-primary rounded outline-none w-full"
              placeholder="Enter password"
              type="text"
            />
            <button className="w-full rounded-full py-2 bg-primary text-white">
              Login
            </button>
          </form>
       
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
