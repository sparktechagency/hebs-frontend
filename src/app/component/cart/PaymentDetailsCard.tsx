/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { subTotalSelector, totalActualPriceSelector, totalDiscountSelector, totalProductsSelector, totalQuantitySelector } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { currencyFormatter } from "@/utils/currencyFormatter";
;



const PaymentDetailsCard = () => {
//   const user = useAppSelector(selectCurrentUser)

// const router = useRouter()

        const subTotal = useAppSelector(subTotalSelector);
   const totalDiscount = useAppSelector(totalDiscountSelector)

        const totalProducts= useAppSelector(totalProductsSelector)
        const totalQuantity=useAppSelector(totalQuantitySelector)
        const totalActualPrice=useAppSelector(totalActualPriceSelector)
        // const handleOrder = async () => {
      
        //     try {
        //       if (!user) {
        //         router.push("/login");
        //         message.error("Please login first.");
        //       }
        //     router.push("/payment")
        
        //     } catch (error: any) {
        //       message.error(error.message);
        //     }
        //   };
        
    return (
        <div className="  bg-background brightness-105 rounded-md col-span-4 h-fit p-5 mt-10 border-2 border-[#F37975] border-dotted">
        <div className=" ">
        <h1 className="text-2xl font-bold">Payment Details</h1>
              <div className="space-y-2 mt-4">
           
              
                <div className="flex justify-between">
                  <p className="text-gray-500 ">Total Products</p>
                  <p className="font-semibold">{totalProducts}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500 ">Total Quantity</p>
                  <p className="font-semibold">{totalQuantity}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500 ">Total Price</p>
                  <p className="font-semibold">{currencyFormatter(totalActualPrice)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500 ">Total Discount</p>
                  <p className="font-semibold">{currencyFormatter(totalDiscount)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500 ">Subtotal</p>
                  <p className="font-semibold">{currencyFormatter(subTotal)}</p>
                </div>
              </div>
              {/* <div className="flex justify-between mt-10 mb-5">
                <p className="text-gray-500 ">Grand Total</p>
                <p className="font-semibold">{}</p>
              </div> */}
              {/* <button
                onClick={handleOrder}
           className="w-full bg-[#F37975] md:px-8 p-4  md:h-12 flex items-center justify-center text-[#ffffff] hover:bg-red-500 border-none mb-4 my-5"
              >
                Order Now
              </button> */}
        </div>
            </div>
    );
};

export default PaymentDetailsCard;