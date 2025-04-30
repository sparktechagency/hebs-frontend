/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Select, Input } from "antd";
import type React from "react";

import { Pagination } from "antd";

import { useEffect, useState } from "react";
import { useGetAllBooksQuery } from "@/redux/features/books/bookApi";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import ProductCard from "@/app/component/shared/ProductCard";

function BookStore() {
  const { data, isLoading, error } = useGetAllBooksQuery(undefined);

  const user = useAppSelector(selectCurrentUser);
  console.log(user?.userId);

  const totalData = data?.meta?.totalData;

  const currentPageNo = data?.meta?.currentPage;
  const limit = data?.meta?.limit;
  const [currentPage, setCurrentPage] = useState(1);

  const [searchQuery, setSearchQuery] = useState("");

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
  const totalProducts = filteredProducts?.length;

  // Get current page products
  const currentProducts = filteredProducts?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

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
          {currentProducts?.map((product: any, index: number) => (
            <ProductCard key={`${product.id}-${index}`} product={product} />
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
