/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { message, Radio } from "antd";

import Image from "next/image";
import packaging from "@/assets/tinnymuslimBox.png";
import paypal from "@/assets/paypal.png";
import visa from "@/assets/visa-4-logo_svgrepo.com.png";
import master from "@/assets/master-card_svgrepo.com.png";

import { useAppSelector } from "@/redux/hooks";
import {
  orderedProductsSelector,
  subTotalSelector,
  totalActualPriceSelector,
  totalDiscountSelector,
  totalProductsSelector,
  totalQuantitySelector,
} from "@/redux/features/cart/cartSlice";

import { currencyFormatter } from "@/utils/currencyFormatter";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { usePlaceCartOrderMutation } from "@/redux/features/cart/cartApi";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const subTotal = useAppSelector(subTotalSelector);
  const totalDiscount = useAppSelector(totalDiscountSelector);
  const totalProducts = useAppSelector(totalProductsSelector);
  const totalQuantity = useAppSelector(totalQuantitySelector);
  const totalActualPrice = useAppSelector(totalActualPriceSelector);

  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [selectedShippingMethod, setSelectedShippingMethod] = useState<any>(null);
  const [shippingMethods, setShippingMethods] = useState<any[]>([]);

  // Convert rate to number safely
  const deliveryCost = Number(selectedShippingMethod?.rate) || 0;
  const subTotalAfterSelectDeliveryCost = subTotal + deliveryCost;
const user = useAppSelector(selectCurrentUser)
  const products = useAppSelector(orderedProductsSelector);
// console.log("user",user?.user?.email);
  // Log full selected shipping method object
  // console.log("Selected shipping method object:", selectedShippingMethod);

  useEffect(() => {
    const methods = localStorage.getItem("shippingMethod");
    if (methods) {
      try {
        const parsedMethods = JSON.parse(methods);
        setShippingMethods(parsedMethods);
      } catch {
        setShippingMethods([]);
      }
    }
  }, []);
const router = useRouter();
  const [placeOrder]=usePlaceCartOrderMutation();
  const handleOrder = async() => {
    // Implement your order logic here
  const items = products.map(product => ({
    itemId: product._id, 
    quantity: product.orderQuantity,
  }));
    const order = {
          items,
    shippingCost: currencyFormatter(deliveryCost),
    customerEmail: user?.user?.email
    }
    console.log("order",order);
    try{
      const res =await placeOrder(order)
      console.log("response",res);
      message.success(res.data.message)
      router.push(res?.data?.data?.url)

    }catch(error:any){
      console.log(error);
    }
  };

const [proceed,setProceed]=useState(false)

console.log(proceed);


  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Payment</h1>

        <div className="flex gap-6">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            {/* Order notification */}
            <div className="border rounded-2xl p-6 shadow-sm flex items-center justify-between bg-white">
              <div>
                <p className="text-gray-700 text-lg">
                  Order today to get your reader&apos;s first book box by{" "}
                  <span className="font-bold">Feb 3</span>
                </p>
              </div>
              <div className="w-24 h-16 relative">
                <Image
                  src={packaging}
                  alt="Book box"
                  width={120}
                  height={80}
                  className="object-contain shadow-2xl"
                />
              </div>
            </div>

            {/* Shipping Methods */}
            <div className="border rounded-2xl p-6 shadow-sm bg-white">
              <h2 className="text-xl font-semibold text-gray-700 mb-6">
                Shipping Methods
              </h2>
              <Radio.Group
                value={selectedShippingMethod?.service || ""}
                onChange={(e) => {
                  const selected = shippingMethods.find(
                    (method) => method.service === e.target.value
                  );
                  setSelectedShippingMethod(selected);
                setProceed(!!selected);

                  console.log("Selected shipping method object:", selected);
                }}
                className="w-full"
              >
                {shippingMethods.length > 0 ? (
                  shippingMethods.slice(0, 3).map((rate: any, idx: number) => (
                    <div
                      key={idx}
                      className={`mb-3 border rounded-xl p-4 flex items-center justify-between ${
                        selectedShippingMethod?.service === rate.service
                          ? "border-blue-500"
                          : "border-gray-200"
                      }`}
                    >
                      <Radio value={rate.service} className="w-full"  >
                        <span className="ml-2 text-gray-700">{rate.service}</span>
                      </Radio>
                      {/* Optional: add carrier, rate, etc here */}
                    </div>
                  ))
                ) : (
                  <p>No shipping methods available.</p>
                )}
              </Radio.Group>
            </div>

            {/* Payment Methods */}
            {/* <div className="border rounded-2xl p-6 shadow-sm bg-white">
              <h2 className="text-xl font-semibold text-gray-700 mb-6">
                Payment Methods
              </h2>

              <div className="space-y-4">
                <Radio.Group
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full"
                >
                  <div className="space-y-3">
                    <div
                      className={`border rounded-xl p-4 flex items-center justify-between ${
                        paymentMethod === "paypal"
                          ? "border-blue-500"
                          : "border-gray-200"
                      }`}
                    >
                      <Radio value="paypal" className="w-full">
                        <span className="ml-2 text-gray-700">Paypal</span>
                      </Radio>
                      <Image
                        src={paypal}
                        alt="PayPal"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>

                    <div
                      className={`border rounded-xl p-4 flex items-center justify-between ${
                        paymentMethod === "credit"
                          ? "border-blue-500"
                          : "border-gray-200"
                      }`}
                    >
                      <Radio value="credit" className="w-full">
                        <span className="ml-2 text-gray-700">Credit Card</span>
                      </Radio>
                      <div className="flex gap-2">
                        <Image
                          src={visa}
                          alt="Visa"
                          width={36}
                          height={24}
                          className="object-contain"
                        />
                        <Image
                          src={master}
                          alt="Mastercard"
                          width={36}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </Radio.Group>
              </div>
            </div> */}
          </div>

          {/* Right Column */}
          <div className="flex-1 border rounded-2xl p-6 shadow-sm bg-white">
            <div className="bg-background brightness-105 rounded-md h-fit p-5 mt-10 border-2 border-[#F37975] border-dotted">
              <h1 className="text-2xl font-bold mb-4">Payment Details</h1>
              <div className="space-y-2">
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
                  <p className="font-semibold">
                    {currencyFormatter(totalActualPrice)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500 ">Total Discount</p>
                  <p className="font-semibold">
                    {currencyFormatter(totalDiscount)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500 ">Delivery Cost</p>
                  <p className="font-semibold">
                    {currencyFormatter(deliveryCost)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500 ">Subtotal</p>
                  <p className="font-semibold">
                    {currencyFormatter(subTotalAfterSelectDeliveryCost)}
                  </p>
                </div>
                <button
                disabled={!proceed}
                  onClick={handleOrder}
                  className="w-full bg-[#F37975] md:px-8 p-4 md:h-12 flex items-center justify-center text-white hover:bg-red-500 border-none mb-4 my-5"
                >
                  Proceed Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
