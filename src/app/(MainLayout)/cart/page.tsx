'use client'
import CartProducts from "@/app/component/cart/cartProducts";
import PaymentDetails from "@/app/component/cart/PaymentDetails";
import FeatureBook from "@/app/component/Home/FeatureBook";
import { orderedProductsSelector } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import frame from "@/assets/Frame 6.png"

const CartPage = () => {
    const products = useAppSelector(orderedProductsSelector);
  return (
   <div>
     <div className=" flex items-center justify-center w-[100%]">  
        {products.length === 0 ? (
          <div className="bg-[#FFFFFF] mt-16 mb-12 lg:mb-0 md:mb-0 md:p-8 lg:p-8 p-1 rounded-2xl shadow-lg flex flex-col items-center md:w-96 lg:w-96 justify-center text-center">
            <div className="relative w-32 h-32 mb-4">
              <Image src={frame} alt="Empty Cart" layout="fill" objectFit="contain" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Your bag is empty</h2>
            <p className="text-gray-500 text-sm text-center mb-4">
              Your bag is empty. Start adding items to enjoy shopping!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-8 my-5 justify-center items-center w-full p-8">
            <CartProducts />
            <PaymentDetails />
          </div>
        )}

    </div>
        <div className="mb:relative mb:top-16 lg:relative lg:top-7">
          <FeatureBook />
        </div>
   </div>
  );
};

export default CartPage;
