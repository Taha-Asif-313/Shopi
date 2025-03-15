"use client";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { Button, Container, Flexbox, Image } from "shadlc";

const HeroSection = () => {
  const router = useRouter();
  return redirect("/shop");
  return (
    <Flexbox
      width={{ sm: "100%", md: "100%", lg: "100%" }}
      maxWidth={{ sm: "100%", md: "100%", lg: "100%" }}
      height={{ sm: "100vh", md: "500px", lg: "600px" }}
      padding={{ sm: "10px", md: "20px", lg: "40px" }}
      textAlign={{ sm: "left", md: "center", lg: "center" }}
      backgroundColor="transparent"
      className="overflow-hidden"
    >
      <Image
        width={"100%"}
        height={"100%"}
        objectFit="cover"
        className="!absolute top-0 left-0 -z-20"
        src={"/images/startpagebg.png"}
      />

      <Flexbox
        padding={"0"}
        gap={{ lg: "10px", md: "5px", sm: "5px" }}
        backgroundColor="transparent"
        direction={{ lg: "column" }}
        height={{ lg: "auto" }}
        width={{ lg: "100%", md: "100%", sm: "100%" }}
        textAlign={{ sm: "center", md: "center", lg: "center" }}
      >
        <div className="flex gap-0 items-center justify-between w-28 mx-auto py-5 animate-pop">
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
        <h1 className="lg:text-[80px] animate-wipeRight text-4xl max-lg:px-0 text-center font-black">
          Start selling with <span className="text-primary">Matrixnity</span>!
        </h1>
        <p className="lg:text-lg mt-5 animate-wipeLeft">
          Discover the latest trends in fashion and get inspired by our new
          styles. Make your shop with your
          <strong> own style</strong>.
        </p>
        <Button
          onClick={() => router.push("/create-shop")}
          hoverBgColor="transparent"
          hoverTextColor="var(--primary)"
          backgroundColor="var(--primary)"
          borderColor="var(--primary)"
          margin="10px auto"
          padding="5px 60px"
          textColor="#fff"
        >
          Get Started
        </Button>
      </Flexbox>
    </Flexbox>
  );
};

export default HeroSection;
