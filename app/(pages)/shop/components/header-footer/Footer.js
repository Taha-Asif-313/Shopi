import Link from 'next/link'
import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.3)] bg-black text-white relative">
    <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
      <div className="max-w-sm">
        <div className="mb-6 flex h-12 items-center space-x-2">
        <Link
        href={"/"}
        className="w-[50%] lg:w-[30%] flex items-center  gap-2 text-[18px] font-semibold "
      >
      <FaCartShopping className="text-3xl text-primary" />
        <span className="font-bold">Shopi</span>
      </Link>
        </div>
        <div className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a
          officia ea expedita!
        </div>
      </div>
      <div className="">
        <div className="mt-4 mb-2 font-medium xl:mb-4">Address</div>
        <div className="">
          35 Remida Heights, <br />
          45 Street, <br />
          South Caroline, US
        </div>
      </div>
      <div className="">
        <div className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
        <nav aria-label="Footer Navigation" className="">
          <ul className="space-y-3">
            <li>
              <a className="hover:text-primary hover:underline" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:text-primary hover:underline" href="#">
                Demo
              </a>
            </li>
            <li>
              <a className="hover:text-primary hover:underline" href="#">
                Press
              </a>
            </li>
            <li>
              <a className="hover:text-primary hover:underline" href="#">
                Support Hub
              </a>
            </li>
            <li>
              <a className="hover:text-primary hover:underline" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
    </div>
    <div className="bg-black">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
        <div className="">© 2024 Shopi | All Rights Reserved</div>
        <div className="">
          <a className="" href="#">
            Privacy Policy
          </a>
          <span>|</span>
          <a className="" href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer