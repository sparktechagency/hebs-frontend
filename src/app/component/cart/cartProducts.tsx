"use client";

import Image from "next/image";
import frame from "@/assets/Frame 6.png"



import { useAppSelector } from "@/redux/hooks";

import CartProductCard from "./cartProductCard";
import { CartProduct, orderedProductsSelector } from "@/redux/features/cart/cartSlice";

export default function CartProducts() {
  const products = useAppSelector(orderedProductsSelector);

  return (
    <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-8 h-full row-span-3 p-10 space-y-5">
      {products.length === 0 && (
          <div className="bg-[#FFFFFF] mt-16 mb-12 lg:mb-0 md:mb-0 md:p-8 lg:p-8 p-1 rounded-2xl shadow-lg flex flex-col items-center md:w-96 lg:w-96">
          <div className="relative w-32 h-32 mb-4">
            <Image src={frame} alt="Empty Cart" layout="fill" objectFit="contain" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Your bag is empty</h2>
          <p className="text-gray-500 text-sm text-center mb-4">
            Your bag is empty. Start adding items to enjoy shopping!
          </p>
  
        </div>
      )}
      {products?.map((product: CartProduct) => (
        <CartProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
