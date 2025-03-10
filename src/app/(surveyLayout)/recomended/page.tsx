"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import packaging from "@/assets/illuminate packaging box 0-3 1.png";
import Link from "next/link";
import { RightOutlined ,LeftOutlined} from "@ant-design/icons";
export default function BookRecommendations() {
  return (
    <>
    
    <div className="min-h-screen text-black p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-12">
          Here&apos;s what we recommend for eyasin!
        </h1>

        {/* Books */}
        <div className="flex justify-center items-end gap-4 md:relative md:top-16 lg:relative lg:top-16">
          <Image
            src={packaging}
            alt={"packaging"}
            width={350}
            height={160}
            className="rounded-lg shadow-2xl"
          />
        </div>

        <div className="text-center border border-black p-8 rounded-3xl">
                  {/* Legend Section */}

        <div className="mb-8 pt-16">
            <p className="text-2xl text-black   mb-4">Current Reading Level</p>
          <h2 className="text-2xl text-black  font-semibold mb-4">Legend</h2>
          <div className="inline-block bg-[#ff7171] text-black px-4 py-1.5 rounded-full text-sm font-medium">
            Birth- 13 years
          </div>
          <p className="py-3">Reading together boosts your baby&apos;s sensory development and growth. High-contrast images and textured pages sharpen visual and tactile skills. Interactive books for toddlers enhance motor skills and object recognition.</p>
        </div>

        {/* Content Container */}
        <div className="  p-8 mb-8 border-t border-black">
          <div className="space-y-6">
            <h1 className="text-start font-bold">Key skills to practice</h1>
            {/* Content items with sparkle icons */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#ff7171] flex-shrink-0 mt-1" />
                <p className="">
                Focusing on high-contrast images
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content */}
   <div className="p-8  border-t border-black">
   <div className="space-y-6 mb-12">
        <h1 className="text-start font-bold py-3">Recommended book types</h1>
          {[1, 2].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#ff7171] flex-shrink-0 mt-1" />
              <p className="">
              Board Books
              </p>
            </div>
          ))}
        </div>
   </div>
        </div>

        {/* Footer */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#ff7171] text-center my-5">
          What happens next?
        </h2>
        <p>Your first box is set to eyasin&apos;s reading level and includes a variety of books-from the genres chosen as well as new ones to discover. Each book helps your reader develop key skills. When you rate each book in the Literati Kids App, we learn what your reader likes, helping to personalize future boxes!</p>
      </div>
    </div>

{/* button */}
<div className=" bg-[#EDEBE6] shadow-lg p-5 w-full">
<div className="container mx-auto flex justify-between ">
          {/* Back Button */}
          <Link href="/email">

<button className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition">
  <LeftOutlined/>
  <span className="font-semibold">Back</span>
</button>
</Link>

{/* Next Button */}
<Link href={"/subscriptionPlan"}>
<button
  className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition disabled:opacity-50"
 
>
  <span className="font-semibold">Continue</span>
  <RightOutlined />
</button>
</Link>
</div>
      </div>

    </>
  );     
}
