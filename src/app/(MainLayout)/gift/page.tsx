
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { message, } from 'antd';
import React from 'react';
import styles from "@/app/styles.module.css"
import Image from 'next/image';

import { useGetAllBoxesQuery } from '@/redux/features/boxes/boxesApi';
import LoadingPage from '@/app/loading';
import { useAppDispatch } from '@/redux/hooks';
import { addProduct, CartProduct } from '@/redux/features/cart/cartSlice';

const GiftPage = () => {
  return
  const dispatch = useAppDispatch();
  const { data: boxes, isLoading } = useGetAllBoxesQuery(undefined);

  if (isLoading) {
 return <LoadingPage/>
  }
  const giftBoxes = boxes?.data?.filter((box:any) => box.type === 'gift');
  console.log("gift box",giftBoxes);
  
    // add product to cart
    const handleAddProduct = (product: CartProduct) => {
      dispatch(addProduct(product));
      message.success("Product Added ");
    };
  return (
    <div className='container mx-auto'>


      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className={`text-xl font-bold mb-6 ${styles.fontRozha}`}>Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {giftBoxes.map((box:any, index:number) => (
            <div key={index} className="rounded-lg p-3 flex flex-col cursor-pointer">
              <div className="relative h-48 mb-3 rounded-md bg-[#fffbeb]">
                <Image
                  src={`${box?.image}`}
                  alt={box.title}
                  className="object-cover rounded-md"
                  sizes="(max-width: 640px) 100vw, 20vw"
                  width={500}
                  height={500}
                />
              </div>
          
                <button className="w-full rounded-full py-2 bg-[#ffd6d6] text-black text-sm font-medium mb-2 hover:bg-[#ffbdbd] transition-colors"
                onClick={() => handleAddProduct(box)}
                >
                  Add to Bag
                </button>
         
              <h3 className="text-sm font-medium line-clamp-2 mb-1 text-center">{box.title}</h3>
              <p className="text-center text-gray-600">${box.price?.amount}</p> {/* Price display */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftPage;
