/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Input } from "antd";
// import { FacebookOutlined, MailOutlined } from "@ant-design/icons";
import NewsletterSignup from "@/app/component/About/NewsLetter";
import style from "@/app/styles.module.css";
import FeatureBook from "@/app/component/Home/FeatureBook";
import TextArea from "antd/es/input/TextArea";
import {
  FacebookOutlined,
  MailOutlined,
  TikTokFilled,
} from "@ant-design/icons";


const ContactPage = () => {
//   const {data:contactData,isLoading}=useGetContactQuery(undefined)
// console.log("contact data",contactData);

// if(isLoading){
//   return <LoadingPage/>
// }
  return (
    <div>
      <div className="flex justify-center bg-[#FEECDE]">
        <div className=" md:w-1/2  px-3 py-6 md:px-6 md:py-8 lg:py-10 xl:py-12 text-center md:text-left  container mx-auto ">
          <div className="">
            <h2
              className={` text-5xl sm:text-6xl  text-[#FCB876] ${style.fontRozha}`}
            >
              Contact Us
            </h2>
            <p
              className={`text-[#F37975] text-xl sm:text-2xl md:text-4xl py-3  mt-2 tracking-wider uppercase  border-b-4 border-black  inline-block ${style.fontJosefin}`}
            >
              We&apos;re here to help
            </p>
          </div>

          <div className="mt-4">
            <label
              className={` block text-[#F37975]  py-1 tracking-widest text-start text-2xl  ${style.fontRozha}`}
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="Enter your email"
              className={`mt-1 rounded-md ${style.fontPoppins}`}
            />
          </div>

          <div className="mt-4">
            <label
              className={` block text-[#F37975]  py-1 tracking-widest text-start text-2xl  ${style.fontRozha}`}
            >
              Subject
            </label>
            <Input
              placeholder="Enter your first name"
              className={`mt-1 rounded-md ${style.fontPoppins}`}
            />
          </div>
          <div className="mt-4">
            <label
              className={` block text-[#F37975]  py-1 tracking-wide md:tracking-widest text-start text-xl md:text-2xl  ${style.fontRozha}`}
            >
              NAME & ADDRESS OF SUBSCRIBER:
            </label>
            <TextArea
              placeholder="TELL US YOUR NAME AND DELIVERY ADDRESS, SO WE CAN ASSIST YOU AS QUICKLY AS POSSIBLE."
              className={`mt-1 rounded-md ${style.fontPoppins}`}
            />
          </div>
          <div className="mt-4">
            <label
              className={` block text-[#F37975]  py-1 tracking-widest text-start text-2xl  ${style.fontRozha}`}
            >
              Description:
            </label>
            <TextArea
              placeholder="What do we need to know? If you would like to discontinue your subscription, please tell us what we could have done better."
              className={`mt-1 rounded-md ${style.fontPoppins}`}
            />
          </div>

          <div className="flex justify-end mt-6">
            <button
              className={`bg-[#F37975] border-none text-white px-6 py-2 rounded-sm tracking-wider ${style.fontInter}`}
            >
              Send
            </button>
          </div>

          <div className={`bg-[#ffffff] my-5 text-center py-5 px-1 md:px-5`}>
            <h1 className={`${style.fontJost} py-2 text-xl tracking-widest`}>
              Don&apos;t hesitate to reach out with any questions.
            </h1>
            <p className={`${style.fontPoppins} font-bold py-2`}>
              INFO@ILLUMINATEMUSLIMMINDS.COM
            </p>
            <div className="flex space-x-4 mt-2 justify-center items-center py-5">
              <FacebookOutlined className="text-red-400 text-center text-xl" />
              <MailOutlined className="text-red-400 text-center text-xl" />
              <TikTokFilled className="text-red-400 text-center text-xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff] overflow-hidden">
        <NewsletterSignup />
      </div>
      <FeatureBook />
    </div>
  );
};

export default ContactPage;
