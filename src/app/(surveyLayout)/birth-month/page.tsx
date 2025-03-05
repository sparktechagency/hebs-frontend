"use client"; // ✅ Ensures this runs as a Client Component

import { useState } from "react";
import frame1 from "@/assets/tinyMuminsFrame1.png";
import style from "@/app/styles.module.css";
import { Select } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";

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

      {/* Button */}
      <div className="flex items-end justify-end my-8">
        <Link href={"/birth-year"}>
          <button
            className="border mr-16 border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition disabled:opacity-50"
            disabled={!selectedMonth}
          >
            <span className="font-semibold">Continue</span>
            <RightOutlined />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BirthMonth;
