/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Image from "next/image"
import logo from "@/assets/logo.png"
import Link from "next/link"
const SurveyNavbar=() =>{





  return (
<header className="w-full bg-gradient-to-r from-[#f08080] to-[#ffeb99] px-4 py-2 md:px-10">
  <div className="mx-auto flex items-center justify-center">
    {/* Logo */}
    <Link href="/home" className="flex items-center">
      <div className="relative flex justify-center items-center h-14 w-36">
        <Image src={logo || ""} alt="logo" width="100" height="100" />
      </div>
    </Link>
  </div>
</header>

  )
}


export default SurveyNavbar