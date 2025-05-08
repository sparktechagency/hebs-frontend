"use client";




import { useAppSelector } from "@/redux/hooks";

import CartProductCard from "./cartProductCard";
import { CartProduct, orderedProductsSelector } from "@/redux/features/cart/cartSlice";

export default function CartProducts() {
  const products = useAppSelector(orderedProductsSelector);

  return (
    <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-8 h-full row-span-3 p-10 space-y-5">

      {products?.map((product: CartProduct) => (
        <CartProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
