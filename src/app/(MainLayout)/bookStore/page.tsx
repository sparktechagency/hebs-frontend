'use client'
import { Select } from "antd";
import styles from "@/app/styles.module.css"
import { Pagination } from "antd"
import Image, { StaticImageData } from "next/image"
import { useState } from "react";
interface Product {
  id: number
  title: string
  image: StaticImageData;
  price: number
}
import wild from "@/assets/wild.png"
import Link from "next/link";
const BookStore = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10
  
    // Sample product data
    const products: Product[] = [
      {
        id: 1,
        title: "1001 Inventions and Awesome Facts form Muslim Civilization",
        image: wild,
        price: 18.95,
      },
      {
        id: 2,
        title: "101 Quran Stories and Dua",
        image: wild,
        price: 18.95,
      },
      {
        id: 3,
        title: "14 Animals in the Quran",
        image: wild,
        price: 18.95,
      },
      {
        id: 4,
        title: "21 Things To Do with a Tree",
        image: wild,
        price: 18.95,
      },
      {
        id: 5,
        title: "30 Hadith for Kids Books",
        image: wild,
        price: 18.95,
      },
    ]
  
    // Create a larger dataset by repeating the products
    const allProducts = Array(15)
      .fill(null)
      .flatMap(() => products)
  
    // Calculate total number of products
    const totalProducts = allProducts.length
  
    // Get current page products
    const currentProducts = allProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page)
      // Scroll to top when page changes
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <div className="container mx-auto">
           
           <div className="flex flex-wrap justify-between items-center p-4 bg-white border-b border-black py-6 gap-4">
      {/* Filter Section */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        <span className="text-gray-600">Filter:</span>
        <Select defaultValue="Availability" className="min-w-[140px]" />
        <Select defaultValue="Price" className="min-w-[120px]" />
        <Select defaultValue="Age Category" className="min-w-[160px]" />
        <Select defaultValue="Grade" className="min-w-[120px]" />
        <Select defaultValue="Collections" className="min-w-[140px]" />
      </div>

      {/* Sort By Section */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        <span className="text-gray-600">Sort by:</span>
        <Select defaultValue="Alphabetically, A-Z" className="min-w-[180px]" />
      </div>
    </div>
{/* card  section */}


<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className={`text-xl font-bold mb-6  ${styles.fontRozha}`}>{totalProducts} Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
  {currentProducts.map((product, index) => (
    <Link key={`${product.id}-${index}`} href={`/product-details/${product.id}`} passHref>
      <div className="rounded-lg p-3 flex flex-col cursor-pointer">
        <div className="relative h-48 mb-3 rounded-md bg-[#fffbeb]">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 640px) 100vw, 20vw"
          />
        </div>
   <Link href={"/cart"}>
   <button className="w-full py-2 bg-[#ffd6d6] text-black rounded-md text-sm font-medium mb-2 hover:bg-[#ffbdbd] transition-colors">
          Add to Bag
        </button>
   </Link>
        <h3 className="text-sm font-medium line-clamp-2 mb-1">{product.title}</h3>
        <p className="text-sm">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  ))}
</div>;

      <div className="mt-8 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalProducts}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>

        </div>
    );
};

export default BookStore;