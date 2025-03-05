"use client"; 
import { useState } from "react";
import frame1 from "@/assets/tinyMuminsFrame1.png";
import style from "@/app/styles.module.css";
import { Select } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";

const TopicsPage = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

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
    <div>
      <div
        className="relative w-full min-h-screen flex flex-col gap-8 items-center justify-center bg-cover bg-no-repeat bg-center px-4"
        style={{ backgroundImage: `url(${frame1.src}) ` }}
      >
        {/* Content Wrapper */}
        <div className="text-center max-w-md w-full p-10">
          <h3 className={`text-[#F37975] font-medium text-xl mb-12 ${style.fontInter}`}>
            Select a Topic
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
      </div>

      {/* Button */}
      <div className="flex items-end justify-end my-8">
        <Link href={"/interested"}>
          <button
            className="border mr-16 border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition disabled:opacity-50"
            disabled={!selectedTopic}
          >
            <span className="font-semibold">Continue</span>
            <RightOutlined />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopicsPage;
