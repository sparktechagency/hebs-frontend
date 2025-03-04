"use client"

import { Package, User, FileText, Plus, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import shape from "@/assets/shape.png"
import shop from "@/assets/shop.png"
import styles from "@/app/styles.module.css"

const BoxesPage=()=> {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200">
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link href="/boxes" className="flex items-center p-2 bg-[#f08080] text-white rounded-md">
                <Package className="h-5 w-5 mr-3" />
                <span>Boxes</span>
              </Link>
            </li>
            <li>
              <Link href="/my-profile" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <User className="h-5 w-5 mr-3 text-gray-500" />
                <span>Account Details</span>
              </Link>
            </li>
            <li>
              <Link href="/billing" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <FileText className="h-5 w-5 mr-3 text-gray-500" />
                <span>Billing History</span>
              </Link>
            </li>
          </ul>

          <div className="mt-8 pt-4">
            <button className="flex items-center text-[#f08080] p-2 hover:bg-gray-100 rounded-md w-full">
              <Plus className="h-4 w-4 mr-1" />
              <span>Add Subscriptions</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
      <div className="my-5">
      <h1 className={`${styles.fontInter} text-2xl font-bold`}>Boxes</h1>
      <p className={`${styles.fontInter}`}>Current Boxes</p>
      </div>
        <div className="grid grid-cols-1  gap-8">
          {/* First Box Card */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden relative w-1/4">
            {/* Date Flag */}
            <div className="absolute top-10 left-0 w-32">
              <Image src={shape || ""} alt="flag" className="w-full h-full" priority />
              <span className="absolute top-0 left-4 text-gray-600 font-medium">FEB 2025</span>
            </div>

            <div className="p-8 pt-20">
              <div className="flex items-start space-x-3 mb-6">
                <div className="mt-1">
                  <Check className="h-5 w-5 text-[#f08080]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Box Processed On May 11</h3>
                  <p className="text-gray-500 mt-1">Thanks for reading!</p>
                </div>
              </div>

              <Link href={"/checkoutSummary"}>
              <button className="w-full bg-[#f08080] hover:bg-[#f08080]/90 text-white py-4 px-6 rounded-full mt-4 font-medium shadow-sm transition-all hover:shadow-md">
                See Details
              </button>
              </Link>
            </div>

           
          </div>

          {/* Second Box Card */}
          <div className="relative bg-[#FBD5D4] rounded-2xl shadow-md overflow-hidden w-1/2">
  {/* Header Section */}
  <div className="my-5 px-6">
    <h1 className={`${styles.fontInter} text-2xl font-bold`}>Boxes</h1>
    <p className={`${styles.fontInter}`}>Swipe through your daily deck and tell us which books seem appealing! We&apos;ll use your preference to better improve your upcoming boxes.</p>
  </div>

  {/* NEW Badge (Positioned Top-Right) */}
  <div className="absolute top-5 left-28">
    <span className="bg-[#f08080] text-white px-4 py-1 rounded-full text-sm font-medium shadow-sm">
      NEW
    </span>
  </div>

  {/* Content Section */}
  <div className="p-8 flex flex-col items-center">
    <div className="w-64 h-64 relative mb-6">
      <Image
        src={shop || ""}
        alt="Bookshop Illustration"
        fill
        className="object-contain"
        priority
      />
    </div>

    <h3 className="text-xl font-medium text-gray-800 text-center mb-6">
      Eyasin&apos;s Book Shuffle
    </h3>

    <button className="w-full bg-white hover:bg-gray-50 text-gray-800 py-4 px-6 rounded-full font-medium shadow-sm transition-all hover:shadow-md">
      See Details
    </button>
  </div>
</div>

        </div>
      </main>
    </div>
  )
}

export default BoxesPage