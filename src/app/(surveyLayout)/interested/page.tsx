'use client'
import { useState } from "react";
import frame1 from "@/assets/tinyMuminsFrame1.png";
import style from "@/app/styles.module.css";
import { Select } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";

const InterestedPage = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div>
      <div
        className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${frame1.src})` }}
      >
        {/* Content Wrapper */}
        <div className="text-center max-w-md w-full p-10">
          <h3 className={`text-[#F37975] font-medium text-xl mb-2 ${style.fontInter}`}>
            Would you be interested in receiving books written in Arabic?
          </h3>

          {/* Select Dropdown */}
          <Select
            className="w-full mt-5 py-2"
            placeholder="Select an option"
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ]}
            onChange={(value) => setSelectedOption(value)}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between mx-8 my-8">
        {/* Back Button */}
        <Link href="/topics">
          <button className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition">
            <span className="font-semibold">Back</span>
          </button>
        </Link>

        {/* Next Button */}
        <Link href={"/books-level"}>
          <button
            className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition disabled:opacity-50"
            disabled={!selectedOption}
          >
            <span className="font-semibold">Next</span>
            <RightOutlined />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InterestedPage;
