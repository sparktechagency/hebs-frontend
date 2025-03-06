import { Select } from 'antd';
import React from 'react';
import styles from "@/app/styles.module.css"
import Image from 'next/image';
import Link from 'next/link';
import gift from "@/assets/gift.png"
const GiftPage = () => {
    return (
        <div className='container mx-auto'>
<div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white border-b border-black py-8">
  {/* Filter Section */}
  <div className="flex items-center space-x-2 mb-4 sm:mb-0">
    <span className="text-gray-600">Filter:</span>
    <Select defaultValue="Availability" className="w-40" />
    <Select defaultValue="Price" className="w-32" />
  </div>

  {/* Sort By Section */}
  <div className="flex items-center space-x-2">
    <span className="text-gray-600">Sort by:</span>
    <Select defaultValue="Alphabetically, A-Z" className="w-52" />
  </div>
</div>

{/* cart */}

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className={`text-xl font-bold mb-6  ${styles.fontRozha}`}> Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      <div className="rounded-lg p-3 flex flex-col cursor-pointer">
        <div className="relative h-48 mb-3 rounded-md bg-[#fffbeb]">
          <Image
            src={gift}
            alt={"gift"}
          
            className="object-cover rounded-md"
            sizes="(max-width: 640px) 100vw, 20vw"
          />
        </div>
   <Link href={"/cart"}>
   <button className="w-full rounded-full py-2 bg-[#ffd6d6] text-black  text-sm font-medium mb-2 hover:bg-[#ffbdbd] transition-colors">
          Add to Bag
        </button>
   </Link>
        <h3 className="text-sm font-medium line-clamp-2 mb-1 text-center">Gift Card</h3>

      </div>


</div>


    </div>

        </div>
    );
};

export default GiftPage;