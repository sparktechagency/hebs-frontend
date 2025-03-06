/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import {  Input } from "antd";
// import { FacebookOutlined, MailOutlined } from "@ant-design/icons";
import NewsletterSignup from "@/app/component/About/NewsLetter";
import FeatureBook from "@/app/component/Home/FeatureBook";
import TextArea from "antd/es/input/TextArea";
import { FacebookOutlined, MailOutlined, TikTokFilled } from "@ant-design/icons";


const ContactPage = () => {
    return (
    <div>
         <div className="flex justify-center bg-[#FEECDE]">
         <div className="w-full md:w-1/2 px-4 py-8 md:px-6 md:py-10 lg:py-10 text-center md:text-left  container mx-auto ">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#FCB876]">
            Contact Us
            </h2> 
            <p className="text-[#F37975] mt-2">
            We&apos;re here to help
            </p>

            <div className="mt-4"> 
              <label className="block text-[#F37975] font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <Input placeholder="Enter your email" className="mt-1 rounded-md" />
            </div>

            <div className="mt-4">
              <label className="block text-[#F37975] font-medium">Subject</label>
              <Input placeholder="Enter your first name" className="mt-1 rounded-md" />
            </div>
            <div className="mt-4">
              <label className="block text-[#F37975] font-medium">NAME & ADDRESS OF SUBSCRIBER:</label>
              <TextArea placeholder="TELL US YOUR NAME AND DELIVERY ADDRESS, SO WE CAN ASSIST YOU AS QUICKLY AS POSSIBLE." className="mt-1 rounded-md" />
            </div>
            <div className="mt-4">
              <label className="block text-[#F37975] font-medium">Description:</label>
              <TextArea placeholder="What do we need to know? If you would like to discontinue your subscription, please tell us what we could have done better." className="mt-1 rounded-md" />
            </div>

            <button className="mt-6 bg-[#F37975] border-none text-white w-full md:w-auto px-6 py-2 rounded-full ">
              Send
            </button>
            <div className="bg-[#ffffff] my-5 text-center py-5">
<h1>Don&apos;t hesitate to reach out with any questions.</h1>
<p>INFO@ILLUMINATEMUSLIMMINDS.COM</p>
<div className="flex space-x-4 mt-2 justify-center items-center py-5">
            <FacebookOutlined className="text-red-400 text-center text-xl" />
            <MailOutlined className="text-red-400 text-center text-xl" />
            <TikTokFilled className="text-red-400 text-center text-xl"/>
          </div>
            </div>
          </div>
         </div>
<div className="bg-[#ffffff]">
<NewsletterSignup/>
</div>
      <FeatureBook/>
    </div>
    );
};

export default ContactPage;



