/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetAllFavouritesBooksQuery } from "@/redux/features/books/bookApi";
import { useAppSelector } from "@/redux/hooks";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const FavouritePage = () => {
  const user = useAppSelector(selectCurrentUser);
  //   console.log("user id",user?.userId);
  const { data: favouriteBooks } = useGetAllFavouritesBooksQuery(user?.userId);
  console.log("favrt books", favouriteBooks);

  return (
    <>
      <div className="grid grid-cols-5 gap-5 container mx-auto my-8">
        {favouriteBooks?.data?.books?.map((book: any, _id: string) => {
          return (
            <div
              className="bg-white rounded-lg shadow-lg p-6 max-w-xs mx-auto"
              key={_id}
            >
              <div className="relative">
                <Image
                  src={book.coverImage}
                  alt=""
                  width={200}
                  height={300}
                  className="object-contain rounded-lg"
                />
              </div>

              <div className="mt-4 text-center">
                <h2 className="font-bold text-xl text-gray-800">{book.name}</h2>
                <div className="flex justify-center items-center mt-2">
                  <span className="text-lg text-red-500 mr-2">
                    ${book.price.amount}
                  </span>
                  {/* <span className="text-sm text-gray-400 line-through">${originalPrice}</span> */}
                </div>
                <Link href={`/bookStore/${book._id}`}>
                  <button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600 rounded-lg p-2">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FavouritePage;
