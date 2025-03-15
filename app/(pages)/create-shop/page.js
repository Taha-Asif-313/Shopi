"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaStore, FaCheck } from "react-icons/fa";
import { IoBuild } from "react-icons/io5";
import { Button, Image, Input } from "shadlc";
import { FaArrowLeft, FaArrowRight, FaDatabase } from "react-icons/fa6";
import Link from "next/link";

const steps = [
  { icon: <FaUser />, label: "Personal" },
  { icon: <FaLock />, label: "Security" },
  { icon: <FaDatabase />, label: "Database" },
  { icon: <FaStore />, label: "Stop Info" },
  { icon: <FaCheck />, label: "Confirm" },
];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [message, setMessage] = useState("");

  const [admin, setAdmin] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    password: "",
    databaseUri: "",
  });

  const [shopDetails, setShopDetails] = useState({
    shopName: "",
    shopCategory: "",
    shopTitle: "",
    shopDescription: "",
    address: "",
    city: "",
    country: "",
    contactEmail: "",
    contactPhone: "",
    logoUrl: "",
  });

  // Handle admin fields change
  const handleAdminChange = (name, value) => {
    setAdmin((prev) => ({ ...prev, [name]: value }));
  };

  // Handle shop details fields change
  const handleShopDetails = (name, value) => {
    setShopDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Next step function
  const nextStep = () =>
    setStep((prev) => Math.min(prev + 1, steps.length - 1));

  // Go previous step function
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  // Create admin with details and database function
  const CreateAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(admin),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Admin registered successfully!");
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error registering admin:", error);
    }
  };

  // Create shop with details function
  const CreateShop = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/shop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(shopDetails),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Shop created successfully!");
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting shop details:", error);
    }
  };

  // Build Shop Function
  const BuildShop = async (e) => {
    e.preventDefault();
    const setDbres = await fetch("/api/set-db-uri", {
      method: "POST",
      body: JSON.stringify({ dbUri: personal.dbUri }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await setDbres.json();
    console.log(data);

    setMessage(data.message || data.error);
    console.log(message);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="max-w-4xl w-full mx-auto px-6 py-4 bg-white shadow-lg rounded-lg">
        <div className="flex gap-0 items-center justify-between w-28 mx-auto animate-pop mb-6">
          <Image
            src="/images/matrixnity.png"
            alt="logo"
            height="40px"
            width="40px"
            className="mx-auto"
          />
          <h1 className="text-sm font-bold">
            Matrix<span className="text-primary">nity</span>
          </h1>
        </div>

        {/* Custom Progress Bar */}
        <div className="flex justify-between items-center mb-6">
          {steps.map((s, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-lg transition-all ${
                  step >= index ? "bg-primary" : "bg-gray-300"
                }`}
              >
                {s.icon}
              </div>
              <span className="text-[12px] mt-2">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Form Steps */}
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
        >
          {step === 0 && (
            <form
              className="mx-auto gap-3 grid grid-cols-2"
            >
              <Input
                className="!text-sm"
                label="Full Name"
                labelClassname="!mb-0 !text-[12px]"
                onChange={handleAdminChange}
                value={admin.fullName}
                name="fullName"
                backgroundColor="transparent"
                placeholder="Enter Full Name"
                focusBorderColor="var(--primary)"
              />
              <Input
                className="!text-sm"
                label="Email"
                labelClassname="!mb-0 !text-[12px]"
                onChange={handleAdminChange}
                value={admin.email}
                type="email"
                name="email"
                backgroundColor="transparent"
                placeholder="Enter Email"
                focusBorderColor="var(--primary)"
              />
              <Input
                className="!text-sm"
                label="Phone Number"
                labelClassname="!mb-0 !text-[12px]"
                onChange={handleAdminChange}
                value={admin.phone}
                type="tel"
                name="phone"
                backgroundColor="transparent"
                placeholder="Enter Phone Number"
                focusBorderColor="var(--primary)"
              />
              <Input
                className="!text-sm"
                label="Age"
                labelClassname="!mb-0 !text-[12px]"
                onChange={handleAdminChange}
                value={admin.age}
                type="number"
                name="age"
                backgroundColor="transparent"
                placeholder="Enter Age"
                focusBorderColor="var(--primary)"
              />
              <Input
                className="!text-sm"
                label="Password"
                labelClassname="!mb-0 !text-[12px]"
                onChange={handleAdminChange}
                value={admin.password}
                type="password"
                name="password"
                backgroundColor="transparent"
                placeholder="Enter Password"
                focusBorderColor="var(--primary)"
              />
              <Input
                className="!text-sm"
                label="Database URI"
                labelClassname="!mb-0 !text-[12px]"
                onChange={handleAdminChange}
                value={admin.databaseUri}
                name="databaseUri"
                backgroundColor="transparent"
                placeholder="Enter Database URI"
                focusBorderColor="var(--primary)"
              />
            </form>
          )}
          {step === 1 && (
            <form className=" mx-auto gap-3 grid grid-cols-2">
              <Input
                className="!text-sm"
                label="Password"
                labelClassname="!mb-0 !text-[12px]"
                onChange={handlePersonal}
                value={personal.password}
                type="password"
                name="password"
                backgroundColor="transparent"
                placeholder="Enter Password"
                focusBorderColor="var(--primary)"
              />
              <Input
                className="!text-sm"
                label="Confirm Password"
                labelClassname="!mb-0 !text-[12px]"
                onChange={handlePersonal}
                value={personal.confirmPassword}
                type="password"
                name="confirmPassword"
                backgroundColor="transparent"
                placeholder="Enter Email"
                focusBorderColor="var(--primary)"
              />
            </form>
          )}
          {step === 2 && (
            <form className=" mx-auto gap-3 grid grid-cols-2 min-h-32">
              <div>
                <h1 className="text-2xl font-semibold">
                  Postgres Database Uri
                </h1>
                <p className="text-sm">
                  {" "}
                  Here you enter the database uri of postgresSql.
                </p>
              </div>
              <Input
                className="!text-sm"
                label="Database Uri"
                labelClassname="!mb-0 !text-[12px]"
                onChange={handlePersonal}
                value={personal.dbUri}
                type="text"
                name="dbUri"
                backgroundColor="transparent"
                placeholder="Enter Database Uri"
                focusBorderColor="var(--primary)"
              />
              <div className="flex w-full gap-1 flex-col text-sm">
                For free database:
                <Link href={"https://neon.tech/"}>
                  <Image
                    className="bg-black p-2 rounded-md"
                    width="60px"
                    height="auto"
                    src="https://neon.tech/_next/static/svgs/6da928883916f39a4848774319dcaf81.svg"
                  />
                </Link>
              </div>
            </form>
          )}
          {step === 3 && (
            <form
              className="mx-auto gap-3 grid grid-cols-2"
            >
              <Input
                className="!text-sm"
                label="Shop Name"
                labelClassname="!mb-0 !text-[12px]"
                onChange={handleShopDetails}
                value={shopDetails.shopName}
                name="shopName"
                backgroundColor="transparent"
                placeholder="Enter Shop Name"
                focusBorderColor="var(--primary)"
              />
              <Input
                className="!text-sm"
                label="Shop Category"
                labelClassname="!mb-0 !text-[12px]"
                onChange={handleShopDetails}
                value={shopDetails.shopCategory}
                name="shopCategory"
                backgroundColor="transparent"
                placeholder="Enter Shop Category"
                focusBorderColor="var(--primary)"
              />
              <Input
                className="!text-sm"
                label="Shop Title"
                labelClassname="!mb-0 !text-[12px]"
                onChange={handleShopDetails}
                value={shopDetails.shopTitle}
                name="shopTitle"
                backgroundColor="transparent"
                placeholder="Enter Shop Title"
                focusBorderColor="var(--primary)"
              />
              <Input
                className="!text-sm"
                label="Shop Description"
                labelClassname="!mb-0 !text-[12px]"
                onChange={handleShopDetails}
                value={shopDetails.shopDescription}
                name="shopDescription"
                backgroundColor="transparent"
                placeholder="Enter Shop Description"
                focusBorderColor="var(--primary)"
              />
              <Input
                className="!text-sm"
                label="Address"
                labelClassname="!mb-0 !text-[12px]"
                onChange={handleShopDetails}
                value={shopDetails.address}
                name="address"
                backgroundColor="transparent"
                placeholder="Enter Address"
                focusBorderColor="var(--primary)"
              />
              <Input
                className="!text-sm"
                label="City"
                labelClassname="!mb-0 !text-[12px]"
                onChange={handleShopDetails}
                value={shopDetails.city}
                name="city"
                backgroundColor="transparent"
                placeholder="Enter City"
                focusBorderColor="var(--primary)"
              />
              <Input
                className="!text-sm"
                label="Country"
                labelClassname="!mb-0 !text-[12px]"
                onChange={handleShopDetails}
                value={shopDetails.country}
                name="country"
                backgroundColor="transparent"
                placeholder="Enter Country"
                focusBorderColor="var(--primary)"
              />
              <Input
                className="!text-sm"
                label="Email"
                labelClassname="!mb-0 !text-[12px]"
                type="email"
                onChange={handleShopDetails}
                value={shopDetails.contactEmail}
                name="contactEmail"
                backgroundColor="transparent"
                placeholder="Enter Email"
                focusBorderColor="var(--primary)"
              />
              <Input
                className="!text-sm"
                label="Phone"
                labelClassname="!mb-0 !text-[12px]"
                onChange={handleShopDetails}
                value={shopDetails.contactPhone}
                name="contactPhone"
                backgroundColor="transparent"
                placeholder="Enter Phone Number"
                focusBorderColor="var(--primary)"
              />
              <Input
                className="!text-sm"
                label="Logo URL"
                labelClassname="!mb-0 !text-[12px]"
                onChange={handleShopDetails}
                value={shopDetails.logoUrl}
                name="logoUrl"
                backgroundColor="transparent"
                placeholder="Enter Logo URL"
                focusBorderColor="var(--primary)"
              />
              <div className="col-span-2 flex justify-center">
                <Button type="submit" className="w-full">
                  Create Shop
                </Button>
              </div>
            </form>
          )}
          {step === 4 && (
            <p className="text-center text-lg">
              Review your details and click "Create Shop"
            </p>
          )}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 0 && (
            <Button
              onClick={prevStep}
              fontSize="15px"
              backgroundColor="#000"
              textColor="#fff"
              padding="6px 10px"
              iconBefore={<FaArrowLeft className="text-sm" />}
            >
              Back
            </Button>
          )}
          {step < steps.length - 1 ? (
            <Button
              onClick={nextStep}
              fontSize="15px"
              backgroundColor="var(--primary)"
              textColor="#fff"
              padding="6px 10px"
              iconAfter={<FaArrowRight className="text-sm" />}
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              fontSize="15px"
              backgroundColor="var(--primary)"
              textColor="#fff"
              padding="6px 10px"
              iconAfter={<IoBuild className="text-sm" />}
            >
              Build Shop
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
