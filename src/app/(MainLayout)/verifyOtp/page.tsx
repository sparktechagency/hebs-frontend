'use client'
import { useState } from "react";
import { Form, Input, message, Typography } from "antd";
import {  FaRegEyeSlash } from "react-icons/fa";

import { IoEyeOutline } from "react-icons/io5";

import {  FieldValues, SubmitHandler } from "react-hook-form";
import {useVerifyOtpMutation } from "@/redux/features/auth/authApi";
import { useRouter } from "next/navigation";


const { Title, Text } = Typography;

const Verify = () => {
const [verifyOtp]=useVerifyOtpMutation()
const router = useRouter();
  const [showCode, setShowCode] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFinish:SubmitHandler<FieldValues> = async(values) => {
    console.log("Form submitted:", values); // Display form values in the console
 setLoading(true);
    try {
        const res = await verifyOtp(values)
        console.log('RESPNSE',res);
        setLoading(false);
        if(res?.data){
            message.success(res?.data?.message);

            router.push("/resetPass")
        }
            message.error("something went wrong")
    } catch (error) {
    console.log('error',error);
    message.error("something went wrong")
    }
   
    // Add your form submission logic here
  
  };
  return (
    <div className="max-w-7xl mx-auto w-full flex md:flex-row flex-col justify-center items-center gap-8 md:ml-16 lg:ml-96">
      <div className="flex w-1/2 bg-white rounded-lg overflow-hidden font-title">
        {/* Left Section - Form */}
        <div className="flex-1 p-10 flex flex-col">


          {/* Form Container */}
          <div className="max-w-md">
       
            <Title level={2} className="text-gray-800 mb-2">
              Verify Code
            </Title>
            <Text className="text-gray-600 mb-8">
            An authentication code has been sent to your email.
            </Text>

            <Form
              name="verify"
              onFinish={onFinish}
              className="space-y-6"
              initialValues={{ remember: true }}
            >
  

              {/* Password Field */}
              <div className="relative pt-2">
                <Form.Item
                  name="email" // This binds the input to form state
                  rules={[
                    { required: true, message: "Please input your Email!" },
                  ]}
                >
                  <div className="">
                    <label className="absolute z-30 -top-3 left-3 px-1 text-lg bg-white">
                      Enter Email
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter Email"
                      className="w-full px-3 py-5 border border-[#F37975] rounded-md focus:outline-none focus:ring-2"
                    />
               
                  </div>
                </Form.Item>
              </div>
              {/* OTP Field */}
              <div className="relative pt-2">
                <Form.Item
                  name="otp" // This binds the input to form state
                  rules={[
                    { required: true, message: "Please input your code!" },
                  ]}
                >
                  <div className="">
                    <label className="absolute z-30 -top-3 left-3 px-1 text-lg bg-white">
                      Enter Code
                    </label>
                    <Input
                      type={showCode ? "text" : "password"}
                      placeholder="••••••••••••••••••"
                      className="w-full px-3 py-5 border border-[#F37975] rounded-md focus:outline-none focus:ring-2"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCode(!showCode)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showCode ? (
                        <FaRegEyeSlash className="h-5 w-5 text-gray-400" />
                      ) : (
                        <IoEyeOutline className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </Form.Item>
              </div>

   
              {/* <div className="flex justify-between">
         <p className="text-sm text-black">Didn’t receive a code? <span className="text-[#FF8682]">Resend</span></p>
                
              </div> */}

              {/* Verify Button */}
              <Form.Item>
                <button
                  type="submit"
                  className="w-full flex text-xl items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#F37975] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
                >
                  {loading ? (
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : null}
             Verify
                </button>
              </Form.Item>
            </Form>

          </div>
        </div>
      </div>


    </div>
  );
};

export default Verify;
