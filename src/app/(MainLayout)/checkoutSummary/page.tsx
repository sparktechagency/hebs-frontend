/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Check } from "lucide-react";
import Image from "next/image";

import shape from "@/assets/shape.png";
import Link from "next/link";
import LoadingPage from "@/app/loading";
import { useAppSelector } from "@/redux/hooks";

import { useGetSpecefiqBoxesQuery } from "@/redux/features/boxes/boxesApi";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetSpecefiqUserQuery } from "@/redux/features/auth/authApi";
import { useGetRecommendationQuery } from "@/redux/features/survey/surveyApi";

export default function BookReview() {
  const user= useAppSelector(selectCurrentUser)

  const {data:specefiqUser,isLoading}=useGetSpecefiqUserQuery(user?.userId)
  const dob = specefiqUser?.data?.survey?.dateOfBirth;
const formattedDOB = dob ? dob.split('T')[0] : null;
const {data:recommendation}=useGetRecommendationQuery(formattedDOB)
// console.log("Formatted DOB:", recommendation?.data?.category?._id);
const categoryId = recommendation?.data?.category?._id
  const  {data:specifiqBox}=useGetSpecefiqBoxesQuery(categoryId,{
    skip: !categoryId, 
  })  
    const process = specifiqBox?.data?.category?.createdAt;
  const formattedProccessed = process ? process.split("T")[0] : null;
  const formattedDate = new Date(formattedProccessed).toLocaleDateString(
    "en-US",
    { month: "short", day: "numeric" }
  );
  // console.log("current  box ",specifiqBox?.data?.books);
  const books= specifiqBox?.data?.books
  if (isLoading) {
    return <LoadingPage />;
  }
  const now = new Date();
const monthNames = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];

const currentMonth = monthNames[now.getMonth()];  // getMonth() returns 0-based index
const currentYear = now.getFullYear();
  return (
    <div className="w-full max-w-6xl mx-auto  space-y-6 bg-white shadow-lg p-10 my-8">
      {/* Header Section */}
      <div className="flex items-center justify-between border-b border-black border-1">
        <div className="grid items-center space-x-4 ">
          {/* Date Flag */}

          <div className="">
            <div className=" py-2 px-4 pr-8 rounded-r-full  relative">
              <div className="relative top-10">
                <Image
                  src={shape || ""}
                  alt="flag"
                  className="w-full h-full "
                  priority
                />
              </div>

              <span className="text-gray-600 font-medium  absolute top-16 left-6">
          {currentMonth} {currentYear}
              </span>
            </div>
          </div>
          <div className="flex gap-3 mt-10 ml-3">
            <Check className="h-8 w-8 mt-3  text-[#f08080]" />
            <h1 className={`text-2xl font-bold my-3`}>
              Box processed on {formattedDate}
            </h1>
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

      <div></div>
      {/* Rate Button */}
      <div className="grid gap-5 justify-end">
        <Link href={"/reviews"}>
          <button className="bg-[#f08080] hover:bg-[#f08080]/90 text-white px-8 py-3 rounded-full font-medium shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
            Rate Your Books
          </button>
        </Link>
      </div>

      {/* Books Section */}
      <div className="bg-[#fff5f5] rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Keeping</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto">
          {books?.map((book: any, idx: number) => (
            <div key={idx} className="flex flex-col space-y-2">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={book.coverImage || "/placeholder.svg"}
                  alt={book.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                {book.name}
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2">
                {book.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
