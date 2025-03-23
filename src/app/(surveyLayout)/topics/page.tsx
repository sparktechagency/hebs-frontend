"use client"; // ✅ Ensures this runs as a Client Component

import { useState } from "react";
import frame1 from "@/assets/tinyMuminsFrame1.png";
import style from "@/app/styles.module.css";
import { Select } from "antd";
import Link from "next/link";

const TopicsPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  // ✅ Topics list from the image
  const topics = [
    { value: "classics", label: "Classics" },
    { value: "arabic", label: "Arabic" },
    { value: "islam", label: "Islam" },
    { value: "puzzles", label: "Puzzles" },
    { value: "mazes", label: "Mazes" },
    { value: "nature", label: "Nature" },
    { value: "prophets", label: "Prophets" },
    { value: "geography", label: "Geography" },
  ];

  return (
    <div
      className="fixed inset-0 flex flex-col gap-8 items-center justify-center bg-cover bg-no-repeat bg-center px-4 mt-24"
      style={{ backgroundImage: `url(${frame1.src})`, backgroundSize: "cover" }}
    >
      {/* Content Wrapper */}
      <div className="text-center max-w-md w-full p-10">
        <h3 className={`text-[#F37975] font-medium text-xl mb-12 ${style.fontInter}`}>
          Which of these topics might you and Talia Mosleh enjoy?
        </h3>

        {/* Select Field */}
        <Select
          showSearch
          className="w-full p-8"
          placeholder="Choose a topic"
          optionFilterProp="label"
          options={topics}
          onChange={(value) => setSelectedTopic(value)}
        />
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center p-4 bg-white border-t border-gray-200">
        <div className="flex-1 max-w-3xl">
          <div className="flex items-center mb-1">
            <span className="text-sm font-medium text-gray-700">58% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-black h-2 rounded-full" style={{ width: "58%" }}></div>
          </div>
        </div>
        <div className="relative top-3 flex gap-4">
          <Link href="/birth-year">
            <button className="text-gray-500 hover:text-gray-700">
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
          <Link href="/interested">
            <button className="text-gray-500 hover:text-gray-700" disabled={!selectedTopic}>
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

export default TopicsPage;
