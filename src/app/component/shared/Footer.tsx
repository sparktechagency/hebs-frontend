"use client"

import Link from "next/link"
import { Space, } from "antd"
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, YoutubeOutlined } from "@ant-design/icons"


const FooterPage = ()=> {
  return (
    <div className="bg-[#F37975] px-4 pt-16 pb-8 text-white md:px-8">
      <div className="container mx-auto ">


        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        
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
              Tiny Mu'mins
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

          {/* Contact Info */}
          <div>
            <p  className="text-[#FAF397] py-3">
              Contact Us
            </p>
            <Space direction="vertical" className="text-white">
              <p className="block ">1234 Reading Lane</p>
              <p className="block">Booktown, BT 12345</p>
              <p className="block">contact@illuminate.com</p>
              <p className="block">(555) 123-4567</p>
              <Space className="mt-4">
                <Link href="https://facebook.com" className="text-white ">
                  <FacebookOutlined className="text-2xl" />
                </Link>
                <Link href="https://twitter.com" className="text-white ">
                  <TwitterOutlined className="text-2xl" />
                </Link>
                <Link href="https://instagram.com" className="text-white ">
                  <InstagramOutlined className="text-2xl" />
                </Link>
                <Link href="https://youtube.com" className="text-white ">
                  <YoutubeOutlined className="text-2xl" />
                </Link>
              </Space>
            </Space>
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