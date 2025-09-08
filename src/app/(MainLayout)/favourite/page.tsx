/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import {
  useGetAllFavouritesBooksQuery,
  useRemoveFavouriteBooksMutation,
} from "@/redux/features/books/bookApi";
import { useAppSelector } from "@/redux/hooks";
import { message } from "antd";
import { TrashIcon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const FavouritePage = () => {
  const user = useAppSelector(selectCurrentUser);

    console.log("user id",user?.userId);
  const { data: favouriteBooks, refetch } = useGetAllFavouritesBooksQuery(
    user?.userId
  );
  // console.log("favrt books", favouriteBooks);
  const [removeBook] = useRemoveFavouriteBooksMutation();

  const removeFromFavourites = async (bookId: string) => {
    console.log(bookId);
    try {
      const res = await removeBook({ userId:user?.userId, bookId:bookId });
      console.log("res",res);
      if(res?.data){

        message.success(res?.data?.message);
        refetch()
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mx-auto my-8">
        {favouriteBooks?.data?.books?.length === 0 ? (
          <div className="text-center text-xl font-bold text-gray-700">
            Favourite Books Not Found
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-5">
            {favouriteBooks?.data?.books?.map((book: any) => (
              <div
                className="bg-white rounded-lg shadow-lg p-6 max-w-xs mx-auto"
                key={book._id}
              >
                <div className="relative">
                  <Image
                    src={book.coverImage}
                    alt=""
                    width={200}
                    height={300}
                    className="object-contain rounded-lg"
                  />
                  <button
                    onClick={() => removeFromFavourites(book._id)}
                    className="absolute top-2 right-2 text-red-600 hover:text-red-800"
                  >
                    <TrashIcon className="h-6 w-6" />
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <h2 className="font-bold text-xl text-gray-800">
                    {book.name}
                  </h2>
                  <div className="flex justify-center items-center mt-2">
                    <span className="text-lg text-red-500 mr-2">
                      ${book.price.amount}
                    </span>
                  </div>
                  <Link href={`/bookStore/${book._id}`}>
                    <button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600 rounded-lg p-2">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FavouritePage;
