'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Link from "next/link";
import { MenuOutlined, RightOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(true);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [kidsClubDropdownOpen, setKidsClubDropdownOpen] = useState(false);

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
  }
  
  const ageCategories: AgeCategory[] = [
    { name: "TINY MU’MINS", range: "(0-3 years)" },
    { name: "LITTLE CALIPHS", range: "(4-6 years)" },
    { name: "DEEN DISCOVERERS", range: "(7-8 years)" },
    { name: "ISLAMIC EXPLORERS", range: "(9-11 years)" },
  ]

  return (
    <header className="w-full bg-gradient-to-r from-[#f08080] to-[#ffeb99] px-4 py-2 md:px-10">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-14 w-36">
            <Image src={logo || "/placeholder.svg"} alt="logo" width="100" height="100" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-6">
          {/* Kids Book Club Dropdown */}
          <div className="relative kids-club-dropdown">
  <button
    onClick={() => setKidsClubDropdownOpen(!kidsClubDropdownOpen)}
    className="text-sm font-medium text-white hover:text-white/80 focus:outline-none"
  >
    KIDS BOOK CLUB ▼
  </button>
  {kidsClubDropdownOpen && (
    <div className="absolute z-40 bg-white w-[1000px] shadow-lg mt-2"> {/* Increased width to 600px */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left Side - Age Categories */}
          <div className="w-full md:w-1/2 lg:w-1/2 border-r border-gray-200 text-center lg:text-start">
            <h2 className="text-[#FF7F7F] text-xl font-medium mb-6">Age</h2>
            <nav className="space-y-5">
              {ageCategories.map((category, index) => (
                <a key={index} href="#" className="flex items-center group hover:opacity-80 transition-opacity">
                  <RightOutlined className="text-[#FF7F7F] text-xs mr-2.5 transition-transform group-hover:translate-x-1" />
                  <span className="text-base font-medium uppercase">
                    {category.name} <span className="text-gray-500 font-normal">{category.range}</span>
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Right Side - Kids Book Clubs & Gifts */}
          <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col items-center justify-center text-center space-y-12">
            <div className="w-full space-y-5 text-center">
              <h2 className="text-[#FF7F7F] text-xl font-medium">Kids Book Clubs</h2>
              <div className="space-y-3 flex flex-col items-center justify-center">
               <Link href={"/name"}>
               <button className="h-10 w-48 rounded-full bg-white border border-black hover:bg-[#FF7F7F] hover:text-white hover:border-[#FF7F7F] transition-all">
                  GET STARTED
                </button>
               </Link>
             <Link href={"/login"}>
             <button className="h-10 w-48 rounded-full bg-white border border-black hover:bg-[#FF7F7F] hover:text-white hover:border-[#FF7F7F] transition-all">
                  LOGIN
                </button>
             </Link>
              </div>
            </div>

            {/* Gifts Section */}
            <div className="w-full space-y-5">
              <h2 className="text-[#FF7F7F] text-xl font-medium">Gifts</h2>
              <Link href={"/gift"}>
                <button className="h-10 w-48 rounded-full bg-white border border-black hover:bg-[#FF7F7F] hover:text-white hover:border-[#FF7F7F] transition-all">
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

          <Link href="/bookStore" className="text-sm font-medium text-white hover:text-white/80">
            ONLINE BOOK STORE
          </Link>
          <Link href="/book-registry" className="text-sm font-medium text-white hover:text-white/80">
            BOOK REGISTRY
          </Link>
          <Link href="/about" className="text-sm font-medium text-white hover:text-white/80">
            ABOUT
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white hover:text-white/80">
            CONTACT
          </Link>
          <Link href="/blog" className="text-sm font-medium text-white hover:text-white/80">
            BLOG
          </Link>
        </nav>

        {/* User Profile and Cart */}
        <div className="hidden lg:flex items-center space-x-3">
          {!user && (
            <Link href="/login">
              <Button  onClick={() => setUser(!user)} type="default" shape="round" className="bg-white text-black hover:bg-white/90">
                Log In
              </Button>
            </Link>
          )}
          {user && (
            <div className="relative profile-dropdown">
              <Button
                type="default"
                shape="round"
                className="bg-white text-black hover:bg-white/90"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              >
                My Profile
              </Button>

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
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          <Link href="/cart">
            <Button type="default" shape="round" className="bg-white text-black hover:bg-white/90">
              <ShoppingCartOutlined style={{ marginRight: 8 }} />
              Cart
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden block" onClick={showDrawer}>
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
          <div className="flex flex-col space-y-6 pt-4">
          <div className="relative">
              <button
                  onClick={() => setKidsClubDropdownOpen(!kidsClubDropdownOpen)}
                className="text-lg font-medium text-black flex justify-between w-full px-4 py-2 border-b border-gray-300"
              >
                KIDS BOOK CLUB
                <RightOutlined className={`transition-transform ${kidsClubDropdownOpen ? "rotate-90" : ""}`} />
              </button>
              {kidsClubDropdownOpen && (
                <div className="pl-4 mt-2 space-y-3">
                  {ageCategories.map((category, index) => (
                    <a key={index} href="#" className="block text-base text-black hover:text-[#FF7F7F]">
                      {category.name} <span className="text-gray-500">{category.range}</span>
                    </a>
                  ))}
                  <Link href="/gift" className="block text-base text-black hover:text-[#FF7F7F]">
                  <button className="h-10 mb-3 w-48 rounded-full bg-white border border-black hover:bg-[#FF7F7F] hover:text-white hover:border-[#FF7F7F] transition-all">
                  Give a Gift
                </button>
                  </Link>
                  <Link href={"/name"}>
               <button className="h-10 w-48 rounded-full bg-white border border-black hover:bg-[#FF7F7F] hover:text-white hover:border-[#FF7F7F] transition-all">
                  GET STARTED
                </button>
               </Link>
                </div>
              )}
            </div>
            <Link href="/bookStore" className="text-sm font-medium text-white hover:text-white/80">
            ONLINE BOOK STORE
          </Link>
          <Link href="/book-registry" className="text-sm font-medium text-white hover:text-white/80">
            BOOK REGISTRY
          </Link>
          <Link href="/about" className="text-sm font-medium text-white hover:text-white/80">
            ABOUT
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white hover:text-white/80">
            CONTACT
          </Link>
          <Link href="/blog" className="text-sm font-medium text-white hover:text-white/80">
            BLOG
          </Link>
            <div className="flex flex-col space-y-3 pt-4">
              <Link href="/login">
                <Button type="default" shape="round" block className="bg-white text-black hover:bg-white/90">
                  Log In
                </Button>
              </Link>
              <Link href="/cart">
                <Button type="default" shape="round" block className="bg-white text-black hover:bg-white/90">
                  <ShoppingCartOutlined style={{ marginRight: 8 }} />
                  Cart
                </Button>
              </Link>
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
}