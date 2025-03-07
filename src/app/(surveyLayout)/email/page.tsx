import frame1 from "@/assets/tinyMuminsFrame1.png";
import style from "@/app/styles.module.css";
import {  Input } from "antd";

import Link from "next/link";
const EmailPage = () => {
  return (
    <div>

    <div
      className="relative w-full  min-h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center "
      style={{ backgroundImage: `url(${frame1.src})` }}
    >
      {/* Content Wrapper */}
      <div className="text-center max-w-md w-full  p-10 ">
        <h3
          className={`text-[#F37975] font-medium text-xl mb-2 ${style.fontInter}`}
        >
          Lastly What is Your Email
        </h3>

  

        {/* Input Field */}
        <Input
          placeholder="Type your email here"
          type="email"
          className="w-full  mt-5 py-5 focus:border-[#F37975] focus:ring-[#F37975]"
        />
      </div>
    </div>
     {/* progress */}
     <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center p-4 bg-white border-t border-gray-200">

 
<div className="flex-1 max-w-3xl">
  <div className="flex items-center mb-1">
    <span className="text-sm font-medium text-gray-700">93% Complete</span>
  </div>
  <div className="w-full bg-gray-200 rounded-full h-2">
    <div className="bg-black h-2 rounded-full" style={{ width: "93%" }}></div>
  </div>
</div>
<div className="relative top-3">
<Link href={"/spend"}>
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
<Link href={"/recomended"}>
<button className="ml-4 text-gray-500 hover:text-gray-700"   >
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

export default EmailPage;
