"use client"; // ✅ Ensures this runs as a Client Component

import { useState } from "react";
import frame1 from "@/assets/tinyMuminsFrame1.png";
import style from "@/app/styles.module.css";
import { Select } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";

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

      {/* Button */}
      <div className="flex items-end justify-end my-8">
        <Link href={"/topics"}>
          <button
            className="border mr-16 border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition disabled:opacity-50"
            disabled={!selectedYear}
          >
            <span className="font-semibold">Continue</span>
            <RightOutlined />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BirthYear;
