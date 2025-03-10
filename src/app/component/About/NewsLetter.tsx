/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { Input, Button } from "antd";
import style from "@/app/styles.module.css";
import img1 from "@/assets/Image.png";
import img2 from "@/assets/Image (1).png";
import tab from "@/assets/tab.png";

export default function NewsletterSignup() {
  return (
    <div className="flex items-center justify-center bg-[#ffffff] px-4 py-16 relative">
      <div className="bg-[#FEECDE] w-full max-w-7xl flex flex-col md:flex-row items-center relative p-6 rounded-lg shadow-lg">
        {/* Left Book Image (Hidden on small screens) */}
        <div className="absolute left-0 mb:-left-36 lg:-left-36 xl:-left-36 bottom-0 hidden md:block w-[180px] lg:w-[250px]">
          <Image
            src={img1}
            alt="My Prophet Muhammad - My Hero"
            width={250}
            height={350}
            className="object-contain rotate-[-15deg]"
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col md:flex-row items-center w-full">
          {/* Image Section (Tablet in the center) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="p-2 rounded-lg">
              <Image
                src={tab}
                alt="Newsletter Promo"
                className="rounded-lg"
                height={350}
                width={250}
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 px-4 py-8 md:px-6 md:py-10 text-center md:text-left">
            <h2 className={`text-2xl md:text-3xl font-semibold text-gray-900 ${style.fontJost}`}>
              JOIN OUR NEWSLETTER.
            </h2>
            <p className={`${style.fontPoppins} text-gray-700 mt-2`}>
              Stay up to date on upcoming fun activities and educational material.
            </p>

            <div className="mt-4">
              <label className={`block text-gray-800 font-medium ${style.fontPoppins}`}>
                Email Address <span className="text-red-500">*</span>
              </label>
              <Input placeholder="Enter your email" className="mt-1 rounded-md" />
            </div>

            <div className="mt-4">
              <label className={`${style.fontPoppins} block text-gray-800 font-medium`}>First Name</label>
              <Input placeholder="Enter your first name" className="mt-1 rounded-md" />
            </div>

            <Button className={`mt-6 bg-[#111111] border-none text-white w-full md:w-auto px-6 py-2 rounded-md ${style.fontPoppins}`}>
              Subscribe
            </Button>
          </div>
        </div>

        {/* Right Book Image (Hidden on small screens) */}
        <div className="absolute right-0 lg:-right-48 xl:-right-48 mb:-right-48 bottom-0 hidden md:block w-[180px] lg:w-[250px]">
          <Image
            src={img2}
            alt="Planet Omar"
            width={250}
            height={350}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
