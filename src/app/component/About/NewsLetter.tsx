/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { Input} from "antd";
import style from "@/app/styles.module.css";
import img1 from "@/assets/Image.png";
import img2 from "@/assets/Image (1).png";
import tab from "@/assets/tab.png";

export default function NewsletterSignup() {
  return (
    <div className="flex items-center justify-center bg-[#ffffff] py-16 relative">
      <div className="bg-[#FEECDE] p-8 md:w-[800px]  max-w-7xl flex flex-col md:flex-row items-center relative rounded-lg shadow-lg  ">
        {/* Left Book Image (Hidden on small screens) */}
        <div className="absolute -left-80 bottom-0 hidden md:block ">
          <Image
            src={img1}
            alt="My Prophet Muhammad - My Hero"
            width={350}
            height={470}
            className="object-contain rotate-[3deg]"
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col md:flex-row items-center w-full ">
          {/* Image Section (Tablet in the center) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="p-2 rounded-lg border-8 border-black">   
              <Image
                src={tab}
                alt="Newsletter Promo"
                className="rounded-lg"
                height={450}
                width={450}
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 px-4 py-8 md:px-6 md:py-10 text-center md:text-left">
            <h2 className={`text-3xl md:text-6xl  text-[#F37975] ${style.fontJost}`}>
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

            <button className={`mt-6 bg-[#111111] border-none text-white w-full md:w-auto px-6 py-2 rounded-md ${style.fontPoppins}`}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Book Image (Hidden on small screens) */}
        <div className="absolute -right-72 bottom-0 hidden md:block">
          <Image
            src={img2}
            alt="Planet Omar"
            width={350}
            height={470}
             className="object-contain rotate-[-5deg]"
          />
        </div>
      </div>
    </div>
  );
}
