"use client";

import Link from "next/link";
import { Space } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  TikTokFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import style from "@/app/styles.module.css";
// import { IoCartOutline } from "react-icons/io5";

const FooterPage = () => {
  return (
    <div className="bg-[#F37975] px-4 pt-16 pb-8 text-white md:px-8 ">
      <div className="container mx-auto text-center md:text-start md:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row mt-0 md:mt-12 lg:mt-12  gap-8 s border-t border-[#E8E8E8] py-5">
          <div className="lg:w-[20%]">
            <p className={`text-[#FAF397] font-bold py-3 ${style.fontJosefin}`}>
              Our Story
            </p>
            <Space direction="vertical" className=" uppercase">
              <p className={`text-white ${style.fontJosefin}`}>About Us</p>
              <p className={`text-white ${style.fontJosefin}`}>Contact Us</p>
            </Space>
          </div>

          <div className="lg:w-[20%]">
            <p className={`text-[#FAF397] font-bold py-3 ${style.fontJosefin}`}>
              Book Clubs
            </p>
            <Space direction="vertical" className=" uppercase">
              <p className={`text-white ${style.fontJosefin}`}>
                Tiny Mu&apos;mins
              </p>
              <p className={`text-white ${style.fontJosefin}`}>
                Little Caliphs
              </p>
              <p className={`text-white ${style.fontJosefin}`}>
                Deen Discoverers
              </p>
              <p className={`text-white ${style.fontJosefin}`}>
                Islamic Explorers
              </p>
            </Space>
          </div>

          <div className="lg:w-[20%]">
            <p
              className={`text-[#FAF397] font-bold  py-3 ${style.fontJosefin}`}
            >
              More
            </p>
            <Space direction="vertical" className=" uppercase">
              <p className="text-white">Give a gift</p>
              <p className="text-white">online book store</p>
              <p className="text-white">blog</p>
            </Space>
          </div>

          {/* Info */}
          <div className="w-[100%] lg:w-[40%] flex flex-col justify-center items-center">
            <div className="mb-8 flex  gap-4">
              <Link href="/login">
                <button
                  className={`py-3 w-[100px] md:w-[120px] font-bold rounded-full border-none bg-white text-[#f08080] hover:bg-white/90 ${style.fontJosefin}`}
                >
                  Log In
                </button>
              </Link>
              <Link href="/cart">
                <button
                  className={`py-3 w-[100px] md:w-[120px] flex gap-1 items-center justify-center font-bold rounded-full border-none bg-white text-[#f08080] hover:bg-white/90 ${style.fontJosefin}`}
                >
                  <ShoppingCartOutlined
                    className="pr-2 text-[20px]"
                  />
                  {/* <IoCartOutline className="w-6 h-6" /> */}
                  Cart
                </button>
              </Link>
            </div>

            <div className="lg:flex flex-col gap-6  ">
              <a
                href="INFO@ILLUMINATEMUSLIMMINDS.COM"
                className={` text-sm sm:text-md md:text-lg  uppercase text-[#fff7c2] hover:text-[#fff7c2]/80 ${style.fontJosefin}`}
              >
                INFO@ILLUMINATEMUSLIMMINDS.COM
              </a>

              <div className="flex items-center gap-3 md:gap-6">
                <Link
                  href="https://facebook.com/illuminatemuslimminds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white hover:text-white/80 ${style.fontJosefin}`}
                >
                  <FacebookFilled className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://instagram.com/illuminatemuslimminds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white hover:text-white/80 ${style.fontJosefin}`}
                >
                  <InstagramFilled className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://tiktok.com/@illuminatemuslimminds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white hover:text-white/80 ${style.fontJosefin}`}
                >
                  <TikTokFilled className="h-5 w-5" />
                  <span className="sr-only">TikTok</span>
                </Link>
                <span
                  className={`text-sm  uppercase text-white ${style.fontJosefin}`}
                >
                  @ILLUMINATEMUSLIMMINDS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 border-t border-white/20 pt-8 ">
          <div className="flex flex-col items-center justify-between gap-4 text-sm  sm:flex-row">
            <p className="text-white">
              © {new Date().getFullYear()} Illuminate muslim minds. All rights
              reserved.
            </p>
            <Space className="">
              <p className="text-white">Terms of Service</p>
              <p className="text-white">|</p>
              <p className="text-white">Privacy Policy</p>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
