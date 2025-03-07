"use client"; // ✅ Ensures this runs as a Client Component

import frame1 from "@/assets/tinyMuminsFrame1.png";
import style from "@/app/styles.module.css";
import { Select } from "antd";

import Link from "next/link";
import { useState } from "react";

const BirthYear = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  // ✅ Generate birth years dynamically (e.g., from 1980 to the current year)
  const startYear = 1980;
  const currentYear = new Date().getFullYear();
  const birthYears = Array.from({ length: currentYear - startYear + 1 }, (_, i) => ({
    value: (startYear + i).toString(),
    label: (startYear + i).toString(),
  }));

  // ✅ Function to sort options alphabetically
  const filterSort = (optionA: { label: string }, optionB: { label: string }) =>
    (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase());

  return (
    <div>
      <div
        className="relative w-full min-h-screen flex flex-col gap-8 items-center justify-center bg-cover bg-no-repeat bg-center px-4"
        style={{ backgroundImage: `url(${frame1.src}) ` }}
      >
        {/* Content Wrapper */}
        <div className="text-center max-w-md w-full p-10">
          <h3 className={`text-[#F37975] font-medium text-xl mb-12 ${style.fontInter}`}>
            What year was Talia Mosleh born?
          </h3>

          {/* Dynamic Select Field */}
          <Select
            showSearch
            className="w-full p-8"
            placeholder="Select Year"
            optionFilterProp="label"
            filterSort={filterSort}
            options={birthYears}
            onChange={(value) => setSelectedYear(value)}
          />
        </div>
      </div>

{/* Progress Bar */}
<div className="fixed bottom-0 left-0 right-0 flex items-center justify-center p-4 bg-white border-t border-gray-200">


        <div className="flex-1 max-w-3xl">
          <div className="flex items-center mb-1">
            <span className="text-sm font-medium text-gray-700">32% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-black h-2 rounded-full" style={{ width: "32%" }}></div>
          </div>
        </div>
       <div className="relative top-3">
       <Link href={"/birth-month"}>
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
        <Link href={"/topics"}>
        <button className="ml-4 text-gray-500 hover:text-gray-700" disabled={!selectedYear}>
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

export default BirthYear;
