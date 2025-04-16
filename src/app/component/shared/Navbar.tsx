'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Link from "next/link";
import { MenuOutlined, RightOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import {Drawer } from "antd";
import Image from "next/image";
import logo from "@/assets/Illuminate Muslim Minds Logo WHT.png";
import style from "@/app/styles.module.css";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(true);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [kidsClubDropdownOpen, setKidsClubDropdownOpen] = useState(false);
  const [kidsClubMobileDropdownOpen, setKidsClubMobileDropdownOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  // Handle clicks outside the dropdowns
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        profileDropdownOpen &&
        !event.target.closest(".profile-dropdown")
      ) {
        setProfileDropdownOpen(false);
      }
      if (
        kidsClubDropdownOpen &&
        !event.target.closest(".kids-club-dropdown")
      ) {
        setKidsClubDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileDropdownOpen, kidsClubDropdownOpen]);


  interface AgeCategory {
    name: string
    range: string
    route:string
  }
  
  const ageCategories: AgeCategory[] = [
    { name: "TINY MU’MINS", range: "(0-3 years)" ,route:"/tinyMuslimBox"},
    { name: "LITTLE CALIPHS", range: "(4-6 years)" ,route:"/littleCaliphsBox"},
    { name: "DEEN DISCOVERERS", range: "(7-8 years)" ,route:"/deen"},
    { name: "ISLAMIC EXPLORERS", range: "(9-11 years)" ,route:"/islamic"},
  ]

  return (
    <header className="w-full bg-gradient-to-r from-[#f08080] to-[#ffeb99] px-4 py-1  md:px-10 ">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative ">
            <Image src={logo || "/placeholder.svg"} alt="logo" width="140" height="140" className=""/>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center space-x-1  lg:space-x-5 font-bold drop xl:space-x-6">
          {/* Kids Book Club Dropdown */}
          <div className="relative kids-club-dropdown">
  <button
    onClick={() => setKidsClubDropdownOpen(!kidsClubDropdownOpen)}
    className={`md:text-sm text-xs xl:text-xl  text-white hover:text-white/80 focus:outline-none ${style.fontInter}`}
  >
    KIDS BOOK CLUB ▼
  </button>
  {kidsClubDropdownOpen && (
    <div className="absolute z-40 bg-white w-[650px] shadow-lg mt-2"> 
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left Side - Age Categories */}
          <div className="w-full md:w-1/2 lg:w-1/2 border-r border-gray-200 text-center lg:text-start">
            <h2 className={`text-[#FF7F7F] text-2xl  mb-1 uppercase ${style.fontRozha}`}>Age</h2>
            <nav className="space-y-1">
              {ageCategories?.map((category, index) => (
                <Link key={index} href={category.route} className="flex items-center group hover:opacity-80 transition-opacity">
                  <RightOutlined className="text-[#FF7F7F] text-xs mr-2.5 transition-transform group-hover:translate-x-1" />
                  <span className={`text-base font-semibold tracking-wide  uppercase  text-[#F37975] ${style.fontPoppins}`}>
                    {category.name} <span className=" font-normal text-[#F37975]">{category.range}</span>
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side - Kids Book Clubs & Gifts */}
          <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col space-y-12">
            {/* Gifts Section */}
            <div className="">
              <h2 className={`text-[#FF7F7F] text-2xl  mb-1 uppercase ${style.fontRozha}`}>Gifts</h2>
              <Link href={"/gift"}>
                <button className={`h-10 w-48 rounded-full text-white bg-[#FF7F7F] uppercase tracking-wide ${style.fontPoppins}`}>
                  Give a Gift
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</div>

          {/* <Link href="/" className={`md:text-sm text-xs xl:text-xl  text-white hover:text-white/80 ${style.fontInter}`}>
            Home
          </Link> */}
          <Link href="/bookStore" className={`md:text-sm text-xs xl:text-xl  text-white hover:text-white/80 ${style.fontInter}`}>
            ONLINE BOOK STORE
          </Link>
          {/* <Link href="/book-registry" className="text-sm font-medium text-white hover:text-white/80">
            BOOK REGISTRY
          </Link> */}
          <Link href="/about" className={`md:text-sm text-xs xl:text-xl  text-white hover:text-white/80 ${style.fontInter}`}>
            ABOUT
          </Link>
          <Link href="/contact" className={`md:text-sm text-xs xl:text-xl  text-white hover:text-white/80 ${style.fontInter}`}>
            CONTACT
          </Link>
          {/* <Link href="/blog" className={`md:text-sm text-xs xl:text-xl  text-white hover:text-white/80 ${style.fontInter}`}>
            BLOG
          </Link>  */}
        </nav>

        {/* User Profile and Cart */}
        <div className="hidden lg:flex lg:space-x-1 items-center space-x-3">
          {!user && (
            <Link href="/login">
              <button  onClick={() => setUser(!user)} className="h-12 rounded-full bg-[#F37975] font-bold px-8 text-lg hover:bg-[#e57373] text-white">
                Log In
              </button>
            </Link>
          )}
          {user && (
            <div className="relative profile-dropdown">
              <button
                className={`py-3 w-[100px] md:w-[120px] flex gap-1 items-center justify-center font-bold rounded-full border-none bg-white text-[#f08080] hover:bg-white/90 ${style.fontJosefin}`}
                
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              >
                My Profile
              </button>

              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-md rounded-md z-10">
                  <Link href="/subscription" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Subscriptions
                  </Link>
                  <Link href="/my-profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Account Details
                  </Link>
                  <Link href="/billing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Billing History
                  </Link>
                  <Link href="/favorites" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Favorites
                  </Link>
                  <div className="border-t border-gray-200 my-1"></div>
                  <button
                    onClick={() => setUser(!user)}
                    className={`py-3 w-[100px] md:w-[120px] flex gap-1 items-center justify-center font-bold rounded-full border-none bg-white text-[#f08080] hover:bg-white/90 ${style.fontJosefin}`}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          <Link href="/cart">
            <button  className={`py-3 w-[100px] md:w-[120px] flex gap-1 items-center justify-center font-bold rounded-full border-none bg-white text-[#f08080] hover:bg-white/90 ${style.fontJosefin}`}>
              <ShoppingCartOutlined style={{ marginRight: 8 }} />
              Cart
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden block" onClick={showDrawer}>
          <MenuOutlined style={{ fontSize: "24px", color: "white" }} />
        </button>

        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          open={open}
          styles={{
            header: { background: "linear-gradient(to right, #f08080, #ffeb99)" },
            body: { background: "linear-gradient(to right, #f08080, #ffeb99)" },
          }}
        >
          <div className="flex flex-col space-y-3 pt-0">
          <div className="">
              <button
                  onClick={() => setKidsClubMobileDropdownOpen(!kidsClubMobileDropdownOpen)}
                className="md:text-sm text-xs lg:text-xl   text-white flex justify-between w-full py-2 border-b border-gray-300"
              >
                KIDS BOOK CLUB
                <RightOutlined className={`transition-transform ${kidsClubDropdownOpen ? "rotate-90" : ""}`} />
              </button>



     {kidsClubMobileDropdownOpen && (
        <div className="pl-4 mt-2 space-y-3">
          {ageCategories?.map((category, index) => (
        <Link key={index} href={category.route} className="flex items-center group hover:opacity-80 transition-opacity">
              <RightOutlined className={`md:text-sm text-xs xl:text-xl  text-white hover:text-white/80 ${style.fontInter}`}/>
              <span className={`md:text-sm text-xs xl:text-xl  text-white hover:text-white/80 ${style.fontInter}`}>
                {category.name} <span className="font-normal text-white">{category.range}</span>
              </span>
            </Link>
          ))}
        </div>
      )}



            </div>
            {/* <Link href="/" className={`md:text-sm text-xs xl:text-xl  text-white hover:text-white/80 ${style.fontInter}`}>
            Home
          </Link> */}
            <Link href="/bookStore" className={`md:text-sm text-xs xl:text-xl   text-white hover:text-white/80 ${style.fontInter}`}>
            ONLINE BOOK STORE
          </Link>
          {/* <Link href="/book-registry" className="text-sm font-medium text-white hover:text-white/80">
            BOOK REGISTRY
          </Link> */}
          <Link href="/about" className={`md:text-sm text-xs xl:text-xl  text-white hover:text-white/80 ${style.fontInter}`}>
            ABOUT
          </Link>
          <Link href="/contact" className={`md:text-sm text-xs xl:text-xl  text-white hover:text-white/80 ${style.fontInter}`}>
            CONTACT
          </Link>
          {/* <Link href="/blog" className={`md:text-sm text-xs xl:text-xl  text-white hover:text-white/80 ${style.fontInter}`}>
            BLOG
          </Link> */}
      

            <div className="flex flex-col space-y-3 pt-4">
              <Link href="/login">
                <button    className="h-12 rounded-full bg-[#F37975] font-bold px-8 text-lg hover:bg-[#e57373] text-white">
                  Log In
                </button>
              </Link>
              <Link href="/cart">
                <button  className="h-12 rounded-full bg-[#F37975] font-bold px-8 text-lg hover:bg-[#e57373] text-white">
                  <ShoppingCartOutlined style={{ marginRight: 8 }} />
                  Cart
                </button>
              </Link>
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
}