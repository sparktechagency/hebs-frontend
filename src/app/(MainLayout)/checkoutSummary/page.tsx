"use client"

import { Check } from "lucide-react"
import Image from "next/image"
import wild from '@/assets/wild.png'
import color from '@/assets/colorMe.png'
import animal from '@/assets/animals.png'
import eid from '@/assets/eid.png'
import songBook from '@/assets/songBook.png'
import shape from "@/assets/shape.png"
import Link from "next/link"
const books = [
  {
    id: 1,
    title: "Wild Feelings",
    image: wild,
    series: "1001 Inventions And Awesome Facts Form Muslim Civilization",
  },
  {
    id: 2,
    title: "Color Me",
    image: color,
    series: "1001 Inventions And Awesome Facts Form Muslim Civilization",
  },
  {
    id: 3,
    title: "Animals in the Quran",
    image: animal,
    series: "1001 Inventions And Awesome Facts Form Muslim Civilization",
  },
  {
    id: 4,
    title: "Looking for the Eid Moon",
    image: eid,
    series: "1001 Inventions And Awesome Facts Form Muslim Civilization",
  },
  {
    id: 5,
    title: "Allah Made Everything",
    image: songBook,
    series: "1001 Inventions And Awesome Facts Form Muslim Civilization",
  },
]

export default function BookReview() {
  return (


    <div className="w-full max-w-6xl mx-auto  space-y-6 bg-white shadow-lg p-10 my-8">
      {/* Header Section */}
      <div className="flex items-center justify-between border-b border-black border-1">
        <div className="grid items-center space-x-4 ">
          {/* Date Flag */}
      
          <div className="">
            <div className=" py-2 px-4 pr-8 rounded-r-full  relative">
<div className="relative top-10">
<Image src={shape || ""} alt="flag" className="w-full h-full " priority />
</div>
                
              <span className="text-gray-600 font-medium  absolute top-16 left-6">FEB 2025</span>
        
            </div>
          </div>
          <div className="flex gap-3 mt-10 ml-3">
      <Check className="h-8 w-8 mt-3  text-[#f08080]" />
      <h1 className={`text-2xl font-bold my-3`}>Box processed on may 11</h1>
      </div>
      <p className={`mb-3 pl-10`}>Thanks for reading! </p>
        </div>
       
       <div>
<Link href={"/bookCheckout"}>
<button className="bg-[#f08080] hover:bg-[#f08080]/90 text-white px-8 py-3 rounded-full font-medium shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
          See Checkout Summary
        </button>
</Link>
       </div>

      </div>
    
<div>

</div>
      {/* Rate Button */}
      <div className="grid gap-5 justify-end">
        
        <button className="bg-[#f08080] hover:bg-[#f08080]/90 text-white px-8 py-3 rounded-full font-medium shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
          Rate Your Books
        </button>
      </div>

      {/* Books Section */}
      <div className="bg-[#fff5f5] rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Keeping</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto">
          {books.map((book) => (
            <div key={book.id} className="flex flex-col space-y-2">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-sm">
                <Image src={book.image || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
              </div>
              <h3 className="text-sm font-medium text-gray-800 line-clamp-2">{book.title}</h3>
              <p className="text-xs text-gray-500 line-clamp-2">{book.series}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

