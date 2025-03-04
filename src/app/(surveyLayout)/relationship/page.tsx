"use client"; // ✅ Ensures this runs as a Client Component

import frame1 from "@/assets/tinyMuminsFrame1.png";
import style from "@/app/styles.module.css";
import { Select } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";

const RelationshipPage = () => {
  // ✅ Move filterSort function outside JSX
  const filterSort = (optionA: { label: string }, optionB: { label: string }) =>
    (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase());

  return (
<div>
<div className="relative w-full min-h-screen flex flex-col gap-8 items-center justify-center bg-cover bg-no-repeat bg-center px-4"
      style={{ backgroundImage: `url(${frame1.src}) ` }}
    >
      {/* Content Wrapper */}
      <div className="text-center max-w-md w-full  p-10 ">
        <h3  className={`text-[#F37975] font-medium text-xl mb-12 ${style.fontInter}`}>
          What is your relationship to Talia Mosleh?
        </h3>

        {/* Select Field */}
        <Select
          showSearch
          className="w-full p-8"
          placeholder="Select an option"
          optionFilterProp="label"
          filterSort={filterSort} // ✅ Now it's a reference, not inline
          options={[
            { value: "1", label: "Parent" },
            { value: "2", label: "Grand Parent" },
            { value: "3", label: "Guardian" },
            { value: "4", label: "Teacher" },
            { value: "5", label: "Other Relative" },
            { value: "6", label: "Friend" },
          ]}
        />
      </div>

   
    </div>
    {/* button */}
<div className="flex items-end justify-end my-8">

<Link href={"/birth-month"}>
<button
      className="border mr-16 border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition"
    >
      <span className="font-semibold">Continue</span>
      <RightOutlined />
    </button>
</Link>
</div>
</div>
  );
};

export default RelationshipPage;
