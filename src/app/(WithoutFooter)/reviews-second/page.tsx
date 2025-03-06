"use client"

import { useState } from "react"
import Image from "next/image"
import { Slider, Input } from "antd"
import wild from "@/assets/wild.png"
import Link from "next/link"
const { TextArea } = Input

const BookReview2=()=> {
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [difficultyLevel, setDifficultyLevel] = useState(3)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [topicRating, setTopicRating] = useState(2)
  const [thoughts, setThoughts] = useState("")

  const emojis = [
    { emoji: "😵", label: "Dizzy" },
    { emoji: "😒", label: "Unamused" },
    { emoji: "😮", label: "Surprised" },
    { emoji: "😃", label: "Happy" },
    { emoji: "😍", label: "Love" },
  ]

  const difficultyMarks = {
    1: "Too Easy",
    3: "Just Right",
    5: "Too Hard",
  }

  const topicMarks = {
    1: "Didn't Like",
    3: "Okay",
    5: "Loved",
  }

  return (
 <>
 <div className="w-full bg-[#EDEBE6] pt-12">

 <div className="max-w-4xl min-h-screen mx-auto bg-[#FFFFFF] rounded-lg shadow-2xl p-12 ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Your Book Reviews</h1>
        <span className="text-lg">2/5</span>
      </div>

      <div className="flex gap-4 pb-6 border-b">
        <div className="flex-shrink-0">
          <Image
            src={wild}
            alt="Book cover"
            width={80}
            height={100}
            className="object-cover rounded-md"
          />
        </div>
        <div>
          <h2 className="text-xl font-medium">Tiny Mu&apos;mins</h2>
          <p className="text-gray-600">By Islam</p>
          <p className="text-lg font-semibold mt-1">$14.59</p>
        </div>
      </div>

      <div className="py-8">
        <h3 className="text-xl font-medium text-center mb-6">What did your reader think?</h3>
        <div className="flex justify-center gap-6 mb-10">
          {emojis.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedEmoji(index)}
              className={`text-4xl transition-transform ${selectedEmoji === index ? "scale-125" : "hover:scale-110"}`}
              aria-label={item.label}
            >
              {item.emoji}
            </button>
          ))}
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-medium text-center mb-6">Difficulty Level</h3>
          <Slider
            marks={difficultyMarks}
            step={1}
            min={1}
            max={5}
            defaultValue={3}
            onChange={setDifficultyLevel}
            className="mx-4"
          />
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-medium text-center mb-6">Topic & Themes</h3>
          <Slider
            marks={topicMarks}
            step={1}
            min={1}
            max={5}
            defaultValue={2}
            onChange={setTopicRating}
            className="mx-4"
          />
        </div>

        <div className="text-center text-gray-500 text-sm mb-2">OPTIONAL</div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Share your thoughts</h3>
          <p className="text-gray-600 mb-4">
            Help other parents by letting them know what your reader thought about this book.
          </p>
          <TextArea
            value={thoughts}
            onChange={(e) => setThoughts(e.target.value)}
            placeholder="Write your review here..."
            maxLength={300}
            showCount
            rows={6}
            className="bg-gray-100 rounded-md"
          />
        </div>
      </div>
    </div>
    <div className="flex justify-center gap-8 bg-[#FFFFFF] rounded-lg shadow-2xl p-4 mt-8">
     <Link href={"/reviews-third"}>   <button className="h-10 w-36 rounded-full bg-white border border-black hover:bg-[#FF7F7F] hover:text-white hover:border-[#FF7F7F] transition-all uppercase">
                  Skip Book
                </button></Link>
                <Link href={"/reviews-third"}>
                
                <button
                
                className="h-10 w-36 rounded-full bg-[#F37975] px-8 text-lg hover:bg-[#e57373] text-white"
              >
                SUBMIT
              </button>
                </Link>
        </div>

 </div>

 

 
 
 </>
  )
}

export default BookReview2