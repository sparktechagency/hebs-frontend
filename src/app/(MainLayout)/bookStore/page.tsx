/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Select, Input, message } from "antd";
import type React from "react";

import { HeartIcon } from "lucide-react";
import { Pagination } from "antd";
import Image from "next/image";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFavouriteBooksMutation, useGetAllBooksQuery, useGetAllFavouritesBooksQuery } from "@/redux/features/books/bookApi";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

function BookStore() {
  const { data, isLoading, error } = useGetAllBooksQuery(undefined);

  const user = useAppSelector(selectCurrentUser)
  console.log(user?.userId);
  // console.log("book product==>", data?.meta);
  // add fav books
  const [favouriteBook] = useFavouriteBooksMutation();
  // get fav books
  const { data: favouriteBooks } = useGetAllFavouritesBooksQuery(user?.userId);
  console.log(favouriteBooks?.data);
  const totalData = data?.meta?.totalData;

  const currentPageNo = data?.meta?.currentPage;
  const limit = data?.meta?.limit;
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const pageSize = 10;
  useEffect(() => {
    if (error) {
      console.error("Query Error:", error);
    }
  }, [error]);
  if (isLoading) return <div>Loading...</div>;

  // Filter products based on search query
  const filteredProducts = data?.data?.filter((product: any) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate total number of products
  const totalProducts = filteredProducts.length;

  // Get current page products
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // const toggleFavorite = (e: React.MouseEvent, productId: number) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setFavorites((prev) =>
  //     prev.includes(productId)
  //       ? prev.filter((id) => id !== productId)
  //       : [...prev, productId]
  //   );
  // };

  const handleFavourite = async (bookId: string) => {
    if (!user?.userId || !bookId) {
      console.error("User or Book ID is missing");
      return;
    }
  
    try {
      // Call the mutation and wait for the response
      const res = await favouriteBook({ userId: user.userId, bookId });
      console.log("Mutation Response:", res);
  
      // Assuming the message is inside `res.data` based on your mutation
      if (res?.data?.message) {
        message.success(res.data.message); // Show success message
      } else {
        console.error("Message not found in the response");
      }
    } catch (error) {
      console.error("Error during mutation:", error);
    }
  };
  
  return (
    <div className="container mx-auto px-4">
      {/* Filter Section */}
      <div className="w-full border-b border-black py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 px-4">
          {/* Search and Filter in one row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
            <Input.Search
              placeholder="Search products..."
              onChange={(e) => setSearchQuery(e.target.value)}
              className="md:w-1/2 w-64"
              allowClear
            />

            <div className="flex flex-wrap md:flex-nowrap items-center gap-2">
              <span className="text-gray-600 whitespace-nowrap">Filter:</span>
              <Select
                defaultValue="Availability"
                className="w-32"
                size="middle"
              />
              <Select defaultValue="Price" className="w-24" size="middle" />
              <Select
                defaultValue="Age Category"
                className="w-32"
                size="middle"
              />
              <Select defaultValue="Grade" className="w-24" size="middle" />
              <Select
                defaultValue="Collections"
                className="w-32"
                size="middle"
              />
            </div>
          </div>

          {/* Sort By Section */}
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-gray-600">Sort by:</span>
            <Select
              defaultValue="Alphabetically, A-Z"
              className="w-48"
              size="middle"
            />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-xl font-bold mb-6">{totalProducts} Products</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-6">
          {currentProducts.map((product: any, index: number) => (
            <div key={`${product.id}-${index}`}>
              <div
                className="rounded-lg p-3 flex flex-col cursor-pointer"
                // onClick={() => router.push(`/bookStore/${product.id}`)}
              >
                <div className="relative h-48 mb-3 rounded-md bg-[#fffbeb]">
                  <Link href={`/bookStore/${product._id}`}>
                    <Image
                      src={product.coverImage || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    />
                  </Link>
                  <button
                    onClick={() => handleFavourite(product._id)}
                    className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors z-10"
                    aria-label={
                      favorites.includes(product.id)
                        ? "Remove from favorites"
                        : "Add to favorites"
                    }
                  >
                    <HeartIcon
                      size={20}
                      className={
                        favorites.includes(product.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-500"
                      }
                    />
                  </button>
                  {/* <button
                    onClick={(e) => toggleFavorite(e, product.id)}
                    className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors z-10"
                    aria-label={
                      favorites.includes(product.id)
                        ? "Remove from favorites"
                        : "Add to favorites"
                    }
                  >
                    <HeartIcon
                      size={20}
                      className={
                        favorites.includes(product.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-500"
                      }
                    />
                  </button> */}
                </div>

                {/* Add to Bag Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // 🔥 Prevents clicking on the whole card
                    router.push("/cart");
                  }}
                  className="w-full py-2 bg-[#ffd6d6] text-black rounded-md text-sm font-medium mb-2 hover:bg-[#ffbdbd] transition-colors"
                >
                  Add to Bag
                </button>

                <h3 className="text-sm font-medium line-clamp-2 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm">${product.price.amount.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center ">
          <Pagination
            current={currentPageNo}
            pageSize={limit}
            total={totalData}
            onChange={setCurrentPage}
            showSizeChanger={false}
          />
        </div>
      </div>
    </div>
  );
}

export default BookStore;
