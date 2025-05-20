/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Input, Radio, Checkbox, Tooltip, Button, message, Menu, Dropdown } from "antd";
import { DownOutlined, InfoCircleOutlined, LockOutlined } from "@ant-design/icons";
import Image from "next/image";
import packaging from "@/assets/tinnymuslimBox.png";
import paypal from "@/assets/paypal.png";
import visa from "@/assets/visa-4-logo_svgrepo.com.png";
import master from "@/assets/master-card_svgrepo.com.png";
import handShack from "@/assets/handshake-light-skin-tone_svgrepo.com.png";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useAppSelector } from "@/redux/hooks";
import {
  finalPriceAfterDiscountSelector,
  orderedProductsSelector,
  subTotalSelector,
  totalActualPriceSelector,
  totalDiscountSelector,
  totalProductsSelector,
  totalQuantitySelector,
} from "@/redux/features/cart/cartSlice";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { usePlaceOrderMutation, useShippingInfoMutation } from "@/redux/features/cart/cartApi";
import { useRouter } from "next/navigation";
import { selectCurrentPlan } from "@/redux/features/subscription/subscriptionSlice";
import PaymentDetailsCard from "@/app/component/cart/PaymentDetailsCard";
import { currencyFormatter } from "@/utils/currencyFormatter";

// Define TypeScript types for form data
interface Shipping {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface Payment {
  cardHolderName: string;
  cardNumber: string;
  expireDate: string;
  cvv: string;
}

interface FormData {
  shipping: Shipping;
  payment: Payment;
  // agreed: boolean;
}

export default function PaymentPage() {
  // const [confirmPayment,setConfirmPayment]=useState(false)
  const subTotal = useAppSelector(subTotalSelector);
  // const [placeOrder] = usePlaceOrderMutation();
  const [shippingInfo]= useShippingInfoMutation()
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [agreed, setAgreed] = useState(false);
  const user = useAppSelector(selectCurrentUser);
const [rates,setRates]=useState([]);
console.log("rates===>",rates);
  const router = useRouter();
  const orderedProducts = useAppSelector(orderedProductsSelector);
const KG_TO_OZ = 35.274;
// Calculate total weight in ounces
const totalWeightOz = orderedProducts.reduce((total, product) => {
  // product.weight is in kg, convert to oz and multiply by quantity
  return total + product.weight * KG_TO_OZ * product.orderQuantity;
}, 0);

console.log("Total Weight in ounces (oz):", totalWeightOz.toFixed(2));
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(

);

   const totalDiscount = useAppSelector(totalDiscountSelector)
       const totalProducts= useAppSelector(totalProductsSelector)
        const totalQuantity=useAppSelector(totalQuantitySelector)
        const totalActualPrice=useAppSelector(totalActualPriceSelector)



  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Form Data Submitted:", data);

    // Prepare the order data
    const orderData = {
toAddress:{
     street: data?.shipping?.street,
        city: data?.shipping?.city,
        state: data?.shipping?.state,
        zip:data?.shipping?.zipCode,
        country: data?.shipping?.country
},
    parcelDetails: {
        weight:totalWeightOz.toFixed(2) 
    }
    };

    console.log("order data modified=>", orderData);

    try {
      const res = (await shippingInfo(orderData)) as any;
      console.log("response===>", res);
      if (res?.data) {
        message.success(res?.data?.message);
        setRates(res?.data?.data?.rates)
        // router.push("/my-profile");
      } else {
        message.error(res?.error?.data?.error || "An unknown error occurred");
      }
    } catch (error: any) {
      console.log(error);
      message.error(error);
    }
  };
  const menu = (
    <Menu>
      {rates && rates.length > 0 ? (
        rates.map((rate:any, idx) => (
          <Menu.Item key={idx} style={{ color: 'blue' }}>
            {`Service: ${rate?.service}, Carrier: ${rate?.carrier}, Rate: ${rate?.rate}`}
          </Menu.Item>
        ))
      ) : (
        <Menu.Item disabled>No rates available</Menu.Item>
      )}
    </Menu>
  );
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

            {/* Payment Methods */}
            <div className="border rounded-2xl p-6 shadow-sm bg-white">
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
            </div>

            {/* Shipping Address Form */}
            <div className="border rounded-2xl p-6 shadow-sm bg-white">
              <h2 className="text-xl font-semibold text-gray-700 mb-6">
                Shipping Address
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">
                    Street Address
                  </label>
                  <Controller
                    name="shipping.street"
                    control={control}
                    render={({ field }) => (
                      <Input {...field} size="large" className="rounded-lg" />
                    )}
                  />
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm text-gray-500 mb-1">
                      City
                    </label>
                    <Controller
                      name="shipping.city"
                      control={control}
                      render={({ field }) => (
                        <Input {...field} size="large" className="rounded-lg" />
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm text-gray-500 mb-1">
                      State
                    </label>
                    <Controller
                      name="shipping.state"
                      control={control}
                      render={({ field }) => (
                        <Input {...field} size="large" className="rounded-lg" />
                      )}
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm text-gray-500 mb-1">
                      Zip Code
                    </label>
                    <Controller
                      name="shipping.zipCode"
                      control={control}
                      render={({ field }) => (
                        <Input {...field} size="large" className="rounded-lg" />
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm text-gray-500 mb-1">
                      Country
                    </label>
                    <Controller
                      name="shipping.country"
                      control={control}
                      render={({ field }) => (
                        <Input {...field} size="large" className="rounded-lg" />
                      )}
                    />
                  </div>
                </div>

               

                <div className="space-y-4">  
                  <Checkbox
                    // checked={agreed}
                    checked={agreed}
                    onChange={(e) => {
                      console.log(e.target.checked);
                      setAgreed(e.target.checked);
                    }}
                  >
                    <span className="text-sm text-gray-600">
                     Agree with our terms and condition
                    </span>
                  </Checkbox>

                  <div className="flex items-center justify-center text-gray-500 gap-2">
                    <LockOutlined />
                    <span>Safe and Secure with SSL.</span>
                  </div>
                </div>

                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full mt-6"
                  disabled={!agreed} // Disable submit button if the checkbox is not checked
                >
                  Continue
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 border rounded-2xl p-6 shadow-sm bg-white">
      
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
  
        </div>
<div className="mt-12">
  
  <h1 className="mb-3 font-bold">Select Your Rates</h1>
     <Dropdown overlay={menu} trigger={['click']}>
      <Button className="w-1/2">
        Select Rate <DownOutlined />
      </Button>
    </Dropdown>  
  </div>    

    </div>
          </div>
        </div>
      </div>

 
    </>
  );
}
