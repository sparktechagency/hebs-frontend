/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";


import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { orderedProductsSelector, orderSelector, subTotalSelector } from "@/redux/features/cart/cartSlice";
import {  useAppSelector } from "@/redux/hooks";
import { message } from "antd";
import { useRouter } from "next/navigation";


export default function PaymentDetails() {
  const subTotal = useAppSelector(subTotalSelector);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const products = useAppSelector(orderedProductsSelector);
  const user = useAppSelector(selectCurrentUser)
  console.log(user);
  const order = useAppSelector(orderSelector);
console.log("order details===>",order);


  const router = useRouter();

//   const dispatch = useAppDispatch();
// const orderDataModified=[

// ]
  const handleOrder = async () => {
    // const orderLoading = message.loading("Order is being placed");
    try {
      if (!user) {
        router.push("/login");
        throw new Error("Please login first.");
      }
    router.push("/payment")

    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <div className="  bg-background brightness-105 rounded-md col-span-4 h-fit p-5 mt-10 border-2 border-[#F37975] border-dotted">
<div className=" ">
<h1 className="text-2xl font-bold">Payment Details</h1>
      <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <p className="text-gray-500 ">Subtotal</p>
          <p className="font-semibold">${subTotal}</p>
        </div>
        {/* <div className="flex justify-between">
          <p className="text-gray-500 ">Discount</p>
          <p className="font-semibold">{}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Shipment Cost</p>
          <p className="font-semibold">{}</p>
        </div> */}
      </div>
      {/* <div className="flex justify-between mt-10 mb-5">
        <p className="text-gray-500 ">Grand Total</p>
        <p className="font-semibold">{}</p>
      </div> */}
      <button
        onClick={handleOrder}
   className="w-full bg-[#F37975] md:px-8 p-4  md:h-12 flex items-center justify-center text-[#ffffff] hover:bg-red-500 border-none mb-4 my-5"
      >
        Order Now
      </button>
</div>
    </div>
  );
}
