"use client"

import Link from "next/link"
import { Space, } from "antd"
import { FacebookFilled, InstagramFilled, TikTokFilled, ShoppingCartOutlined } from "@ant-design/icons"


const FooterPage = ()=> {
  return (
    <div className="bg-[#F37975] px-4 pt-16 pb-8 text-white md:px-8">
      <div className="container mx-auto ">


        {/* Main Footer Content */}
        <div className="grid mt-0 md:mt-12 lg:mt-12 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 border-t border-[#E8E8E8] py-5">
        
          <div>
            <p  className="text-[#FAF397] py-3">
             Our Story
            </p>
            <Space direction="vertical" className=" uppercase">
              <p  className="text-white">
                About Us
              </p>
              <p  className="text-white">
                Contact Us
              </p>
              </Space>
          </div>

    
          <div>
            <p className="text-[#FAF397] py-3">
              Book Clubs
            </p>
            <Space direction="vertical" className=" uppercase">
           
              <p  className="text-white">
              Tiny Mu&apos;mins
              </p>
              <p  className="text-white">
              Little Caliphs
              </p>
              <p  className="text-white">
              Deen Discoverers
              </p>
              <p  className="text-white">
              Islamic Explorers
              </p>
            </Space>
          </div> 

         
          <div>
            <p  className="text-[#FAF397]  py-3">
           More
            </p>
            <Space direction="vertical" className=" uppercase">
             
              <p  className="text-white">
              Give a gift
              </p>
              <p className="text-white">
              online book store
              </p>
              <p  className="text-white">
              blog
              </p>
             
            </Space>
          </div>

          {/* Info */}
          <div>
         
            <div className="mb-8  flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link href="/login">
            <button
           
           
              className="h-12 w-[160px] rounded-full border-none bg-white text-black hover:bg-[#f08080]"
            >
              Log In
            </button>
          </Link>
          <Link href="/cart">
            <button
            
              className="h-12 w-[160px] rounded-full border-none bg-white text-[black] hover:bg-[#f08080]"
              
            >
              <ShoppingCartOutlined style={{ fontSize: "18px" }} />
              Cart
            </button>
           
          </Link>
        </div>

        <div className="flex flex-col items-center gap-6 text-center">
          <a
            href="mailto:INFO@ILLUMINATEMUSLIMMINDS.COM"
            className="text-lg font-medium uppercase text-[#fff7c2] hover:text-[#fff7c2]/80"
          >
            INFO@ILLUMINATEMUSLIMMINDS.COM
          </a>

          <div className="flex items-center gap-6">
            <Link
              href="https://facebook.com/illuminatemuslimminds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80"
            >
              <FacebookFilled className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://instagram.com/illuminatemuslimminds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80"
            >
              <InstagramFilled className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://tiktok.com/@illuminatemuslimminds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80"
            >
              <TikTokFilled className="h-5 w-5" />
              <span className="sr-only">TikTok</span>
            </Link>
            <span className="text-sm font-medium uppercase text-white">@ILLUMINATEMUSLIMMINDS</span>
          </div>
        </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm  sm:flex-row">
            <p className="text-white">© 2024 Illuminate. All rights reserved.</p>
            <Space className="">
              <p  className="text-white">
                Terms of Service
              </p>
              <p className="text-white">|</p>
              <p  className="text-white">
                Privacy Policy
              </p>
             
          
            </Space>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterPage