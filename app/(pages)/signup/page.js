"use client";
import Loading from "@/app/components/Loading";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaCartShopping } from "react-icons/fa6";

const SignUp = () => {
  // states
  const [loading, setloading] = useState(false);
  const [inputs, setinputs] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Functions
  const onchangeHandler = (e) => {
    setinputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const res = await axios.post("/api/users/signup", inputs);
      if (res.data.success) {
        toast.success(res.data.message);
        setloading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setloading(false);
    }
  };

  if(loading) return (<div className="h-screen">
    <Loading/>

  </div>)
  return (
    <>
      <div className="signup max-lg:pt-10 pb-20 lg:gap-0 gap-10 relative overflow-hidden w-full min-h-screen lg:h-screen flex lg:flex-row flex-col justify-around items-center lg:px-24">
        <img
          className="absolute top-[-250px] rotate-[0deg] left-[-250px] w-[60%] -z-1"
          src="/herobg.png"
          alt=""
        />
        <img
          className="absolute bottom-[-250px] rotate-[180deg] right-[-250px] w-[60%] -z-1"
          src="/herobg.png"
          alt=""
        />
        <div className="lg:w-[60%] px-5 w-full animate-fade h-full flex justify-center flex-col gap-4 z-10">
          <h1 className="lg:text-6xl text-3xl lg:text-left text-center font-semibold">
            Welcome to <span className="text-primary"> Shopi !</span>
          </h1>
          <p className="lg:text-lg text-sm lg:text-left text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            necessitatibus unde laboriosam quasi hic{" "}
          </p>
        </div>
        <div className="login-form animate-wipeRight z-10 w-full lg:w-[40%] flex justify-center items-center">
          <div className=" w-[80%] lg:w-[80%] flex flex-col justify-center border border-primary rounded-lg py-5 items-center">
            <div className="heading text-2xl font-bold py-5 flex items-center gap-2">
              <Link
                href={"/"}
                className=" flex items-center gap-2 text-[18px] font-semibold"
              >
                <FaCartShopping className="text-4xl text-primary" />{" "}
                <span className="font-bold">Shopi</span>
              </Link>
              <p className="font-normal">|</p>
              <p className="text-sm text-primary"> SignUp</p>
            </div>
            <form className="form w-full text-sm px-5 flex flex-col gap-3 justify-center items-center">
              <input
                className="px-3 py-2 border border-primary rounded-lg outline-none w-full"
                placeholder="Enter FullName"
                type="text"
                name="fullname"
                value={inputs.fullname}
                onChange={onchangeHandler}
              />
              <input
                className="px-3 py-2 border border-primary rounded-lg outline-none w-full"
                placeholder="Enter UserName"
                type="text"
                name="username"
                value={inputs.username}
                onChange={onchangeHandler}
              />
              <input
                className="px-3 py-2 border border-primary rounded-lg outline-none w-full"
                placeholder="Enter Email"
                type="text"
                name="email"
                value={inputs.email}
                onChange={onchangeHandler}
              />
              <input
                className="px-3 py-2 border border-primary rounded-lg outline-none w-full"
                placeholder="Enter Password"
                type="text"
                name="password"
                value={inputs.password}
                onChange={onchangeHandler}
              />
              <input
                className="px-3 py-2 border border-primary rounded-lg outline-none w-full"
                placeholder="Confirm Password"
                type="text"
                name="confirmPassword"
                value={inputs.confirmPassword}
                onChange={onchangeHandler}
              />
              <button
                type="button"
                onClick={onSubmitHandler}
                className="w-full rounded-lg py-2 bg-primary text-white"
              >
                SignUp
              </button>
            </form>
            <p className="my-2">
              Want account ?{" "}
              <Link href={"/login"} className="text-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
