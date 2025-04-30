/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Select, Input } from "antd";
import type React from "react";

import { Pagination } from "antd";

import { useEffect, useState } from "react";
import {
  useGetAllBooksQuery,
  useGetCategoriesQuery,
  useGetCollectionQuery,
  useGetGradeQuery,
} from "@/redux/features/books/bookApi";
// import { useAppSelector } from "@/redux/hooks";
// import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import ProductCard from "@/app/component/shared/ProductCard";

function BookStore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [selectedGrade, setSelectedGrade] = useState<string | undefined>();
  const [selectedCollection, setSelectedCollection] = useState<
    string | undefined
  >();
  // const [priceRange, setPriceRange] = useState<[number, number] | undefined>();

  // const [sortBy, setSortBy] = useState<string | undefined>("price");

  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | undefined>("asc");
  // const [availability, setAvailability] = useState<string | undefined>();
  const [currentPage, setCurrentPage] = useState(1);
  // console.log("selectedCategory=>",selectedCategory);
  const queryParams = {
    search: searchTerm || undefined,
    category: selectedCategory || undefined,
    grade: selectedGrade || undefined,
    collection: selectedCollection || undefined,
    // sortBy: sortBy || undefined,
    sortOrder: sortOrder || undefined,
    // minPrice: priceRange?.[0] || undefined,
    // maxPrice: priceRange?.[1] || undefined,
    // availability: availability || undefined,
    page: currentPage,
  };
  // console.log(queryParams);
  const { data, isLoading, error } = useGetAllBooksQuery(queryParams);
  const { data: categories } = useGetCategoriesQuery(undefined);
  const { data: grades } = useGetGradeQuery(undefined);
  const { data: collections } = useGetCollectionQuery(undefined);

  // const user = useAppSelector(selectCurrentUser);

  useEffect(() => {
    if (error) {
      console.error("Query Error:", error);
    }
  }, [error]);

  if (isLoading) return <div>Loading...</div>;

  const totalData = data?.meta?.totalData;
  const currentPageNo = data?.meta?.currentPage;
  const limit = data?.meta?.limit;

  return (
    <div className="container mx-auto px-4">
      {/* Filter Section */}
      <div className="w-full border-b border-black py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
            <Input.Search
              placeholder="Search products..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="md:w-1/2 w-64"
              allowClear
            />

            <div className="flex flex-wrap md:flex-nowrap items-center gap-2">
              <span className="text-gray-600 whitespace-nowrap">Filter:</span>
              {/*Availability */}

              {/* <Select
                placeholder="Availability"
                className="w-32"
                size="middle"
                onChange={(value) => setAvailability(value)}
                options={[
                  { label: "In Stock", value: "instock" },
                  { label: "Out of Stock", value: "outstock" },
                ]}
              /> */}
              {/*Pricing Range */}
              {/* <Select
  placeholder="Price Range"
  className="w-32"
  size="middle"
  onChange={(value: string) => {
    const [min, max] = value.split("-").map(Number);
    setPriceRange([min, max]);
    setSortBy("price"); 
  }}
  options={[
    { label: "0 - 100", value: "0-100" },
    { label: "100 - 500", value: "100-500" },
    { label: "500 - 1000", value: "500-1000" },
    { label: "1000+", value: "1000-100000" },
  ]}
/> */}

              <Select
                placeholder="Category"
                className="w-32"
                size="middle"
                onChange={(value) => setSelectedCategory(value)}
                options={categories?.data?.map((cat: any) => ({
                  label: cat.title,
                  value: cat._id,
                }))}
              />

              <Select
                placeholder="Grade"
                className="w-24"
                size="middle"
                onChange={(value) => setSelectedGrade(value)}
                options={grades?.data?.map((grade: any) => ({
                  label: grade.title,
                  value: grade._id,
                }))}
              />

              <Select
                placeholder="Collection"
                className="w-32"
                size="middle"
                onChange={(value) => setSelectedCollection(value)}
                options={collections?.data?.map((col: any) => ({
                  label: col.title,
                  value: col._id,
                }))}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-gray-600">Sort by:</span>
            <Select
              value={sortOrder}
              className="w-48"
              size="middle"
              onChange={(value) => setSortOrder(value)}
              options={[
                { label: "Price Low To High", value: "asc" },
                { label: "Price High To Low", value: "desc" },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-xl font-bold mb-6">
          {data?.data?.length || 0} Products
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-6">
          {data?.data?.map((product: any, index: number) => (
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
