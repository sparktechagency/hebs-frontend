/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Input, Radio, Checkbox, Tooltip, Button, message } from "antd";
import { InfoCircleOutlined, LockOutlined } from "@ant-design/icons";
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
  totalProductsSelector,
  totalQuantitySelector,
} from "@/redux/features/cart/cartSlice";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { usePlaceOrderMutation } from "@/redux/features/cart/cartApi";
import { useRouter } from "next/navigation";
import { selectCurrentPlan } from "@/redux/features/subscription/subscriptionSlice";
import PaymentDetailsCard from "@/app/component/cart/PaymentDetailsCard";

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
  const [placeOrder] = usePlaceOrderMutation();
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [agreed, setAgreed] = useState(false);
  const user = useAppSelector(selectCurrentUser);

  const router = useRouter();
  const orderedProducts = useAppSelector(orderedProductsSelector);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      shipping: {
        street: "123 Elm Street",
        city: "Los Angeles",
        state: "California",
        zipCode: "90001",
        country: "USA",
      },
      payment: {
        cardHolderName: "Heba",
        cardNumber: "1867 8362 3828 3672 3839",
        expireDate: "06/29",
        cvv: "729",
      },
    },
  });

  const totalDiscount= useAppSelector(finalPriceAfterDiscountSelector)
  const totalProducts= useAppSelector(totalProductsSelector)
  const totalQuantity=useAppSelector(totalQuantitySelector)
  const items = orderedProducts.map((product) => ({
    itemId: product._id,
    quantity: product.orderQuantity,
  }));

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // console.log("Form Data Submitted:", data);

    // Prepare the order data
    const orderData = {
      user: {
        userId: user?.userId,
        name: data.payment.cardHolderName,
        email: user?.user?.email,
      },
      shippingAddress: data.shipping,
      paymentInfo: {
        type: "card",
        status: "paid",
        tnxId: "txn_" + new Date().getTime(),
      },
      total: {
        amount: subTotal,
        currency: "USD",
      },

      items,
    };

    // console.log("order data modified=>", orderData);

    try {
      const res = (await placeOrder(orderData)) as any;
      console.log("response===>", res);
      if (res?.data) {
        message.success(res?.data?.message);
        router.push("/my-profile");
      } else {
        message.error(res?.error?.data?.error || "An unknown error occurred");
      }
    } catch (error: any) {
      console.log(error);
      message.error(error);
    }
  };
  // handle purchase
  // const handlePurchase = async () => {

  //   try {
  //     if (!user) {
  //       router.push("/login");
  //       throw new Error("Please login first.");
  //     }
  //   router.push("/payment")

  //   } catch (error: any) {
  //     message.error(error.message);
  //   }
  // };
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

                {/* Payment Details (only for Credit card method) */}
                {paymentMethod === "credit" && (
                  <>
                    <div className="border rounded-2xl p-6 shadow-sm bg-white mt-6">
                      <h2 className="text-xl font-semibold text-gray-700 mb-6">
                        Payment Details
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">
                            Card Holder Name
                          </label>
                          <Controller
                            name="payment.cardHolderName"
                            control={control}
                            render={({ field }) => (
                              <Input
                                {...field}
                                size="large"
                                className="rounded-lg"
                              />
                            )}
                          />
                        </div>

                        <div>
                          <label className="block text-sm text-gray-500 mb-1">
                            Card Number
                          </label>
                          <Controller
                            name="payment.cardNumber"
                            control={control}
                            render={({ field }) => (
                              <Input
                                {...field}
                                size="large"
                                className="rounded-lg"
                              />
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm text-gray-500 mb-1">
                              Expire Date
                            </label>
                            <Controller
                              name="payment.expireDate"
                              control={control}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  size="large"
                                  className="rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-gray-500 mb-1">
                              CVV
                            </label>
                            <Controller
                              name="payment.cvv"
                              control={control}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  size="large"
                                  className="rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

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
                      I agree to enroll in Illuminate Kids Book Club and
                      authorize my membership to be on a yearly basis at
                      $179.88, charged to the card above until I cancel. I
                      understand I can cancel anytime by signing into my account
                      and clicking cancel.
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
                  Confirm Payment
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
                  <p className="text-gray-500 ">Total Discount</p>
                  <p className="font-semibold">${totalDiscount}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500 ">Subtotal</p>
                  <p className="font-semibold">${subTotal}</p>
                </div>
              </div>
  
              {/* <button
                onClick={handlePurchase}
           className="w-full bg-[#F37975] md:px-8 p-4  md:h-12 flex items-center justify-center text-[#ffffff] hover:bg-red-500 border-none mb-4 my-5"
              >
                Proceed Payment
              </button> */}
        </div>
            </div>
          </div>
        </div>
      </div>

      {/* button */}
      <div className=" bg-[#EDEBE6] shadow-lg p-5 w-full">
        <div className="container mx-auto flex justify-center ">
          {/* Back Button */}
          {/* <Link href="/sucess">
            <button className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition">
              <LeftOutlined />
              <span className="font-semibold">Skip</span>
            </button>
          </Link> */}

          {/* Next Button */}
          {/* <Link href={"/my-profile"}>
            <button disabled={!confirmPayment} className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition disabled:opacity-50">
              <span className="font-semibold">Continue</span>
              <RightOutlined />
            </button>
          </Link> */}
        </div>
      </div>
    </>
  );
}
