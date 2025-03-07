"use client"; // ✅ Ensures this runs as a Client Component

import frame1 from "@/assets/tinyMuminsFrame1.png";
import style from "@/app/styles.module.css";
import { Select } from "antd";

import Link from "next/link";
import { useState } from "react";

const BirthMonth = () => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  // ✅ List of 12 months dynamically
  const months = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  return (
    <div>
      <div
        className="relative w-full min-h-screen flex flex-col gap-8 items-center justify-center bg-cover bg-no-repeat bg-center px-4"
        style={{ backgroundImage: `url(${frame1.src}) ` }}
      >
        {/* Content Wrapper */}
        <div className="text-center max-w-md w-full p-10">
          <h3 className={`text-[#F37975] font-medium text-xl mb-12 ${style.fontInter}`}>
            What month was Talia Mosleh born?
          </h3>

          {/* Dynamic Select Field */}
          <Select
            showSearch
            className="w-full p-8"
            placeholder="Select Month"
            optionFilterProp="label"
            options={months}
            onChange={(value) => setSelectedMonth(value)}
          />
        </div>
      </div>
{/* Progress Bar */}
<div className="fixed bottom-0 left-0 right-0 flex items-center justify-center p-4 bg-white border-t border-gray-200">


        <div className="flex-1 max-w-3xl">
          <div className="flex items-center mb-1">
            <span className="text-sm font-medium text-gray-700">18% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-black h-2 rounded-full" style={{ width: "18%" }}></div>
          </div>
        </div>
       <div className="relative top-3">
       <Link href={"/relationship"}>
        <button className="mr-4 text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        </Link>
        <Link href={"/birth-year"}>
        <button className="ml-4 text-gray-500 hover:text-gray-700" disabled={!selectedMonth}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
        </Link>
       </div>
      </div>

    </div>
  );
};

export default BirthMonth;
