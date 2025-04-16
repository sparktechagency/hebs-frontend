/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { Input} from "antd";
import style from "@/app/styles.module.css";
import img1 from "@/assets/Image.png";
import img2 from "@/assets/Image (1).png";

import tab from "@/assets/tabUpdated.png";

export default function NewsletterSignup() {
  return (
    <div className="flex items-center justify-center bg-[#ffffff] pt-5  md:py-16 relative">
      <div className="bg-[#FEECDE] p-8 md:w-[800px]  max-w-7xl flex flex-col md:flex-row items-center relative rounded-lg shadow-lg  ">
        {/* Left Book Image (Hidden on small screens) */}
        <div className="absolute md:-left-[262px] lg:-left-72  xl:-left-80 bottom-0 hidden md:block ">
          <Image
            src={img1}
            alt="My Prophet Muhammad - My Hero"
            width={350}
            height={470}
            className="object-contain rotate-[3deg]"
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col md:flex-row items-center ">
          {/* Image Section (Tablet in the center) */}
          <div className=" flex justify-center w-[300px] lg:w-[420px]">
            <div className="p-2 rounded-lg ">   
              <Image
                src={tab}
                alt="Newsletter Promo"
                className="rounded-lg"
                height={500}
                width={500}
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 px-4 py-8 md:px-6 md:py-10 text-center md:text-left">
         <div className="flex justify-center items-center w-[95%]">
         <h2 className={`text-3xl md:text-4xl lg:text-5xl   text-[#F37975] ${style.fontJost}`}>
              JOIN OUR NEWSLETTER.
            </h2>
         </div>
            <p className={`${style.fontPoppins} text-gray-700 mt-2`}>
              Stay up to date on upcoming fun activities and educational material.
            </p>

              <label className={`block text-black  my-1 text-xs text-end ${style.fontPoppins}`}>
              * indicates required
              </label>
            <div className="mt-4">
              <label className={`block text-gray-800 font-medium text-start ${style.fontPoppins}`}>
                Email Address <span className="text-red-500">*</span>
              </label>
              <Input placeholder="Enter your email" className="mt-1 rounded-md" />
            </div>

            <div className="mt-4">
              <label className={`${style.fontPoppins} block text-gray-800 font-medium text-start`}>First Name</label>
              <Input placeholder="Enter your first name" className="mt-1 rounded-md" />
            </div>

            <button className={`mt-6 bg-[#111111] border-none text-white w-full md:w-auto px-6 py-2 rounded-md ${style.fontPoppins}`}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Book Image (Hidden on small screens) */}
        <div className="absolute md:-right-[230px] lg:-right-72 bottom-0 hidden md:block ">
          <Image
            src={img2}
            alt="Planet Omar"
            width={320}
            height={320}
             className="object-contain rotate-[-5deg]"
          />
        </div>
      </div>
    </div>
  );
}
