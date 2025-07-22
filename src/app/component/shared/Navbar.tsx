"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  MenuOutlined,
  RightOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Drawer, message } from "antd";
import Image from "next/image";
import logo from "@/assets/Illuminate Muslim Minds Logo WHT.png";
import style from "@/app/styles.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { protectedRoutes } from "@/constants";
import { setCookie } from "nookies";
import { clearCart, orderedProductsSelector } from "@/redux/features/cart/cartSlice";
import { resetSurveyData } from "@/redux/features/survey/surveySlice";
import { resetPlanData } from "@/redux/features/subscription/subscriptionSlice";
export default function Navbar() {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const products = useAppSelector(orderedProductsSelector);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [kidsClubDropdownOpen, setKidsClubDropdownOpen] = useState(false);
  // const [kidsClubMobileDropdownOpen, setKidsClubMobileDropdownOpen] =
  //   useState(false);
  const pathname = usePathname();

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  // Handle clicks outside the dropdowns
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (profileDropdownOpen && !event.target.closest(".profile-dropdown")) {
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
  // logout
  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart())
    dispatch(resetSurveyData())
    dispatch(resetPlanData())
    // Delete cookie manually
    router.push("/login");
    setCookie(null, 'user', '', { path: '/', maxAge: -1 });
    message.success("Logout Success");
    if(protectedRoutes.some((route)=>pathname.match(route))){
      router.push("/")
    }
   
  };
  interface AgeCategory {
    name: string;
    range: string;
    route: string;
  }

  const ageCategories: AgeCategory[] = [
    { name: "TINY MU’MINS", range: "(0-3 years)", route: "/tinyMuslimBox" },
    {
      name: "LITTLE CALIPHS",
      range: "(4-6 years)",
      route: "/littleCaliphsBox",
    },
    { name: "DEEN DISCOVERERS", range: "(7-8 years)", route: "/deen" },
    { name: "ISLAMIC EXPLORERS", range: "(9-11 years)", route: "/islamic" },
  ];

  return (
    <header className="w-full bg-gradient-to-r from-[#f08080] to-[#ffeb99] px-4 py-1  md:px-10 ">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative ">
            <Image
              src={logo || "/placeholder.svg"}
              alt="logo"
              width="140"
              height="140"
              className=""
            />
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
              // w-[650px]
              <div className="absolute z-40 bg-white w-[450px]  shadow-lg mt-2">
                <div className="container mx-auto px-4 py-10">
                  <div className="flex flex-col md:flex-row justify-between gap-12">
                    {/* Left Side - Age Categories */}
                    {/* border-r border-gray-200 */}
                    {/* md:w-1/2 lg:w-1/2 */}
                    <div className="w-full   text-center lg:text-start">
                      <h2
                        className={`text-[#FF7F7F] text-2xl  mb-1 uppercase ${style.fontRozha}`}
                      >
                        Age
                      </h2>
                      <nav className="space-y-1">
                        {ageCategories?.map((category, index) => (
                          <Link
                            key={index}
                            href={category.route}
                            className="flex items-center group hover:opacity-80 transition-opacity"
                          >
                            <RightOutlined className="text-[#FF7F7F] text-xs mr-2.5 transition-transform group-hover:translate-x-1" />
                            <span
                              className={`text-base font-semibold tracking-wide  uppercase  text-[#F37975] ${style.fontPoppins}`}
                            >
                              {category.name}{" "}
                              <span className=" font-normal text-[#F37975]">
                                {category.range}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </nav>
                    </div>

                    {/* Right Side - Kids Book Clubs & Gifts */}
                    {/* <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col space-y-12">
             
                      <div className="">
                        <h2
                          className={`text-[#FF7F7F] text-2xl  mb-1 uppercase ${style.fontRozha}`}
                        >
                          Gifts
                        </h2>
                        <Link href={"/gift"}>
                          <button
                            className={`h-10 w-48 rounded-full text-white bg-[#FF7F7F] uppercase tracking-wide ${style.fontPoppins}`}
                          >
                            Give a Gift
                          </button>
                        </Link>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/bookStore"
            className={`md:text-sm text-xs xl:text-xl  text-white hover:text-white/80 ${style.fontInter}`}
          >
            ONLINE BOOK STORE
          </Link>

          <Link
            href="/about"
            className={`md:text-sm text-xs xl:text-xl  text-white hover:text-white/80 ${style.fontInter}`}
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className={`md:text-sm text-xs xl:text-xl  text-white hover:text-white/80 ${style.fontInter}`}
          >
            CONTACT
          </Link>
        </nav>

        {/* User Profile and Cart */}
        <div className="hidden lg:flex lg:space-x-1 items-center space-x-3">
          {!user && (
            <Link href="/login">
              <button className="h-12 rounded-full bg-[#F37975] font-bold px-8 text-lg hover:bg-[#e57373] text-white">
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
                  <Link
                    href="/subscription"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Subscriptions
                  </Link>
                  <Link
                    href="/my-profile"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Account Details
                  </Link>
                  <Link
                    href="/billing"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Billing History
                  </Link>
                  <Link
                    href="/favourite"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Favorites
                  </Link>
                  <div className="border-t border-gray-200 my-1"></div>
                  <button
                    onClick={() => handleLogout()}
                    className={`py-3 w-[100px] md:w-[120px] flex gap-1 items-center justify-center font-bold rounded-full border-none bg-white text-[#f08080] hover:bg-white/90 ${style.fontJosefin}`}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

            <Link href="/cart">
  <button
    className={`relative py-3 w-[100px] md:w-[120px] flex gap-1 items-center justify-center font-bold rounded-full border-none bg-white text-[#f08080] hover:bg-white/90 ${style.fontJosefin}`}
  >
    <div className="relative">
      <ShoppingCartOutlined style={{ marginRight: 8 }} />
      {products.length > 0 && (
        <span className="absolute -top-5 -right-16 bg-red-500 text-white text-[10px] min-w-[20px] h-[20px] px-[4px] rounded-full flex items-center justify-center">
          {products.length}
        </span>
      )}
    </div>
    Cart
  </button>
</Link>
        </div>

        {/* Mobile Menu Button */}

        <button className="lg:hidden block" onClick={showDrawer}>
          <MenuOutlined style={{ fontSize: "24px", color: "white" }} />
        </button>

        <Drawer
          // title="Menu"
          placement="right"
          onClose={onClose}
          open={open}
          width="100vw" // full screen width
          styles={{
            header: { background: "rgba(242, 127, 122, 0.8)" }, // 85% transparent
            body: { background: "rgba(242, 127, 122, 0.8)", height: "100vh" },
          }}
        >
          <div className="flex flex-col justify-center items-center space-y-5 pt-0">
            <p
              className={`text-[#FAF397] tracking-widest font-bold text-sm uppercase ${style.fontJosefin}`}
            >
              Our Story
            </p>
            <Link
              href="/"
              onClick={onClose}
              className={`md:text-sm text-sm xl:text-xl uppercase  text-white hover:text-white/80  ${
                style.fontJosefin
              } ${pathname === "/" ? "text-yellow-400" : ""}`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              passHref
              className={`md:text-sm text-sm xl:text-xl  text-white hover:text-white/80  ${
                style.fontJosefin
              } ${pathname === "/about" ? "text-yellow-400" : ""} `}
            >
              ABOUT US
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              passHref
              className={`md:text-sm text-sm xl:text-xl  text-white hover:text-white/80  ${
                style.fontJosefin
              } ${pathname === "/contact" ? "text-yellow-400" : ""}`}
            >
              CONTACT US
            </Link>

            <p
              className={`text-[#FAF397] tracking-widest font-bold uppercase text-sm ${style.fontJosefin}`}
            >
              Book Clubs
            </p>

            {ageCategories?.map((category, index) => (
              <Link
                key={index}
                href={category.route}
                onClick={onClose}
                passHref
                className="flex items-center group hover:opacity-80 transition-opacity"
              >
                <span
                  className={`md:text-sm text-sm xl:text-xl  text-white hover:text-white/80  ${
                    style.fontJosefin
                  } ${pathname === category.route ? "text-yellow-400" : ""}`}
                >
                  {category.name}
                </span>
              </Link>
            ))}
            {/* </div>
            </div> */}
            <p
              className={`text-[#FAF397] tracking-widest font-bold text-sm uppercase ${style.fontJosefin}`}
            >
              More
            </p>
            <Link
              href="/gift"
              onClick={onClose}
              className={`md:text-sm uppercase text-sm xl:text-xl  text-white hover:text-white/80  ${
                style.fontJosefin
              }  ${pathname === "/gift" ? "text-yellow-400" : ""}`}
            >
              give a gift
            </Link>
            <Link
              href="/bookStore"
              onClick={onClose}
              passHref
              className={`md:text-sm text-xsmxl:text-xl   text-white hover:text-white/80  ${
                style.fontJosefin
              } ${pathname === "/bookStore" ? "text-yellow-400" : ""}`}
            >
              ONLINE BOOK STORE
            </Link>
            <Link
              href="/blog"
              onClick={onClose}
              className={`md:text-sm text-sm xl:text-xl  text-white hover:text-white/80  ${
                style.fontJosefin
              }  ${pathname === "/blog" ? "text-yellow-400" : ""}`}
            >
              BLOG
            </Link>
            <div className="flex justify-center items-center  gap-3">
              <Link href="/login" onClick={onClose} passHref>
                <button
                  className={`py-3 w-[100px] md:w-[120px] font-bold uppercase border-none bg-white text-[#f08080] hover:bg-white/90 rounded-full ${style.fontJosefin}`}
                >
                  Log In
                </button>
              </Link>
              <Link href="/login" onClick={onClose} passHref>
                <button
                  className={`py-3 w-[100px] md:w-[120px] font-bold uppercase border-none bg-white text-[#f08080] hover:bg-white/90 rounded-full ${style.fontJosefin}`}
                >
                  <ShoppingCartOutlined className="pr-2 text-[20px]" />
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
