"use client";
import React from "react";
import { Card, Container, List, Text } from "shadlc";

const About = () => {
  return (
    <Container
      width={{ sm: "100%", md: "100%", lg: "100%" }}
      maxWidth={{ sm: "100%", md: "100%", lg: "1400px" }}
      height={{ sm: "auto", md: "auto", lg: "auto" }}
      padding={{ sm: "100px 20px", md: "130px 40px", lg: "100px 42px" }}
      margin={{ sm: "0 auto", md: "0 auto", lg: "0 auto" }}
      textAlign={{ sm: "left", md: "left", lg: "left" }}
      backgroundColor="white"
      className="rounded-lg text-black shadow-lg border border-gray-200"
    >
      <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-800">
        Welcome to Our Store!
      </h2>
      <p className="mt-2 lg:text-lg text-gray-600 leading-relaxed">
        At <span className="text-green-600 font-semibold">ShopEase</span>, we
        believe that shopping should be an experience, not a chore. We offer
        high-quality products, curated with care, to bring you the best in
        fashion, tech, and home essentials. Whether you're looking for the
        latest trends or timeless classics, we've got you covered.
      </p>
      <p className="mt-3 lg:text-lg text-gray-600 leading-relaxed">
        Our commitment is to provide top-tier customer service, fast shipping,
        and an easy, enjoyable shopping experience. Explore our collections and
        find something you love today!
      </p>

      {/* Feature Highlights */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          padding="20px"
          title="🌍 Eco-Friendly"
          subtitle="We prioritize sustainability in our product selections."
          background="#dcfce7"
          textColor="#15803d"
        />
        <Card
          padding="20px"
          title="🌍 Eco-Friendly"
          subtitle="We prioritize sustainability in our product selections."
          background="#dcfce7"
          textColor="#15803d"
        />
        <Card
          padding="20px"
          title="🌍 Eco-Friendly"
          subtitle="We prioritize sustainability in our product selections."
          background="#dcfce7"
          textColor="#15803d"
        />
      </div>

      <div className="mt-6 text-start">
        <p className="text-gray-600 leading-relaxed">
          Our commitment is to provide top-tier customer service, fast shipping,
          and an easy, enjoyable shopping experience. Explore our collections
          and find something you love today!
        </p>
        <List
          className="!shadow-none"
          items={[
            { text: "Wide range of premium products" },
            { text: "Secure payment & hassle-free returns" },
            { text: "Exclusive member discounts & offers" },
          ]}
          bulletColor="var(--primary)"
          textColor="black"
          borderColor="transparent"
          backgroundColor="transparent"
        />
      </div>
      {/* Bullet Points */}
    </Container>
  );
};

export default About;
