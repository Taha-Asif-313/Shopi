"use client";

import Link from "next/link";
import React from "react";
import {
  FaShoppingBag,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Footer Top Section */}
      <div className="max-w-screen-xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Brand & Description */}
        <div>
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <FaShoppingBag className="text-3xl text-primary" />

            <span>Shopi</span>
          </Link>
          <p className="text-gray-300 text-sm mt-3">
            Your one-stop shop for the best products at unbeatable prices. Enjoy
            fast delivery and excellent customer service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {["Home", "Products", "About Us", "Contact", "FAQs"].map(
              (item, index) => (
                <li key={index}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-primary hover:underline transition"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-medium mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-xl text-primary" />
              <span>35 Remida Heights, South Carolina, US</span>
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-xl text-primary" />
              <a href="tel:+1234567890" className="hover:text-primary">
                +1 234 567 890
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-xl text-primary" />
              <a href="mailto:support@shopi.com" className="hover:text-primary">
                support@shopi.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media & Payment */}
        <div>
          <h3 className="text-lg font-medium mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="hover:text-primary">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="hover:text-primary">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="hover:text-primary">
              <FaLinkedin className="text-xl" />
            </a>
          </div>
          <h3 className="text-lg font-medium mt-6 mb-4">Payment Methods</h3>
          <div className="flex gap-2">
            {/* <img src="/visa.png" alt="Visa" className="h-8" />
            <img src="/mastercard.png" alt="MasterCard" className="h-8" />
            <img src="/paypal.png" alt="PayPal" className="h-8" /> */}
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400">
        <p>
          © 2024 Shopi. All Rights Reserved. |{" "}
          <Link href="/privacy-policy" className="hover:text-primary">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/terms-of-service" className="hover:text-primary">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
