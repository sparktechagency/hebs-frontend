import frame1 from "@/assets/tinyMuminsFrame1.png";
import style from "@/app/styles.module.css";
import {  Input } from "antd";
import { RightOutlined } from "@ant-design/icons";
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

{/* button */}
<div className="flex items-center justify-between mx-8 my-8">
        {/* Back Button */}
        <Link href="/spend">
          <button className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition">
            <span className="font-semibold">Back</span>
          </button>
        </Link>

        {/* Next Button */}
        <Link href={"/recomended"}>
          <button
            className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition disabled:opacity-50"
           
          >
            <span className="font-semibold">Next</span>
            <RightOutlined />
          </button>
        </Link>
      </div>


    </div>
  );
};

export default EmailPage;
