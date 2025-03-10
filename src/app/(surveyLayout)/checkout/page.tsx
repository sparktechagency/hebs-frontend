"use client";

import { Input, Tooltip } from "antd";
import {
  InfoCircleOutlined,
  LeftOutlined,
  RightOutlined,

} from "@ant-design/icons";
import Image from "next/image";
import packaging from "@/assets/illuminate packaging box 0-3 1.png";
import Link from "next/link";
import handShack from "@/assets/handshake-light-skin-tone_svgrepo.com.png"
export default function CheckoutPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Order notification */}
            <div className="border rounded-2xl p-6 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-gray-700 text-lg">
                  Order today to get your reader&apos;s first book box by{" "}
                  <span className="font-bold">Feb 3</span>
                </p>
              </div>
              <div className="w-24 h-16 relative">
                <Image
                  src={packaging}
                  alt="Book box"
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Sign in section */}
            <div className="border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700 mb-6">
                Sign in or create an account
              </h2>

              <div className="space-y-4">
                <div>
                  <Input
                    placeholder="Enter Email"
                    defaultValue="eyasinislam28742@gmail.com"
                    size="large"
                    className="rounded-lg p-3 h-14"
                  />
                </div>

                <div>
                  <Input.Password
                    placeholder="Password"
                    defaultValue="password123"
                    size="large"
                    className="rounded-lg p-3 h-14"
                  />
                </div>

                <div className="border-t my-6 pt-4 text-center">
                  <p className="text-gray-700">
                    Already have an account?{" "}
                    <a href="#" className="text-red-400 hover:text-red-500">
                      Log In
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="border rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Your Reader&apos;s Membership
            </h2>

            <div className="flex justify-center my-6">
              <div className="w-64 h-48 relative">
                <Image
                  src={packaging}
                  alt="Book subscription box"
                  width={280}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-2xl font-semibold text-red-400">
                  $14.99
                </span>
                <span className="text-gray-600 ml-1">per month</span>
              </div>
              <div className="text-gray-500 text-right">
                (paid yearly at $179.88)
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              Borrow or buy. Book prices shown in box. Prices beat Amazon. Check
              out return box to get a new one.
            </p>

            <div className="bg-red-50 rounded-xl p-4 flex items-center mb-6">
              <span className="text-gray-700">
                Get $60 credit to spend on books
              </span>
              <Tooltip title="Credit will be applied to your account after purchase">
                <InfoCircleOutlined className="text-gray-400 ml-auto" />
              </Tooltip>
            </div>

            <div className="flex items-center mb-8">
              <div className="flex-1">
                <p className="text-gray-700">
                  With every plan purchased, we donate a book to a child.
                </p>
              </div>
              <div className="ml-4">
              <Image src={handShack} alt="icon" />
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between py-2">
                <span className="text-gray-700">Subtotal</span>
                <span className="font-medium">$179.88</span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-gray-700">Sales Tax</span>
                <span>.....</span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-gray-700">Shipping</span>
                <span className="font-medium">Free</span>
              </div>

              <div className="flex justify-between py-2 border-t mt-2 pt-2">
                <span className="text-gray-700 font-semibold">
                  Today&apos;s Total
                </span>
                <span className="font-bold">$179.88</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* button */}
      <div className=" bg-[#EDEBE6] shadow-lg p-5 w-full">
        <div className="container mx-auto flex justify-between ">
          {/* Back Button */}
          <Link href="/payment">
            <button className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition">
              <LeftOutlined />
              <span className="font-semibold">Skip</span>
            </button>
          </Link>

          {/* Next Button */}
          <Link href={"/payment"}>
            <button className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition disabled:opacity-50">
              <span className="font-semibold">Continue</span>
              <RightOutlined />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
