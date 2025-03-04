"use client"; 
import { useState } from "react";
import frame1 from "@/assets/tinyMuminsFrame1.png";
import style from "@/app/styles.module.css";
import { Select } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";

const SpendPage = () => {
  const [selectedSpend, setSelectedSpend] = useState<string | null>(null);

  // ✅ Topics list from the image
  const spend = [
    { value: "$7-15 I might keep 1-2 books per month", label: "$7-15 I might keep 1-2 books per month" },
    { value: "$15-25 I might keep 2-3 books per month ", label: "$15-25 I might keep 2-3 books per month " },
    { value: "$25-35 I might keep 3-4 books per month ", label: "$25-35 I might keep 3-4 books per month " },
    { value: "$30-50 I hope to keep most books each month ", label: "$30-50 I hope to keep most books each month  " },
    { value: "$35-60 I hope to keep all books in each books", label: "$35-60 I hope to keep all books in each books " },
    { value: "$0 I plan to browse but not buy books", label: "$0 I plan to browse but not buy books " },
   
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
          How much do you wish to spend on books each month
          </h3>

          {/* Select Field */}
          <Select
            showSearch
            className="w-full p-8"
            placeholder="Choose a topic"
            optionFilterProp="label"
            options={spend}
            onChange={(value) => setSelectedSpend(value)}
          />
        </div>
      </div>

      {/* Button */}
      <div className="flex items-center justify-between mx-8 my-8">
        {/* Back Button */}
        <Link href="/books-level">
          <button className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition">
            <span className="font-semibold">Back</span>
          </button>
        </Link>

        {/* Next Button */}
        <Link href={"/email"}>
          <button
            className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition disabled:opacity-50"
            disabled={!selectedSpend}
          >
            <span className="font-semibold">Next</span>
            <RightOutlined />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SpendPage;
