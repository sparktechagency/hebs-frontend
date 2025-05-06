"use client";

import { useState } from "react";
import { Input, Radio, Checkbox, Tooltip, Button, message } from "antd";
import { InfoCircleOutlined, LeftOutlined, LockOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import packaging from "@/assets/tinnymuslimBox.png";
import paypal from "@/assets/paypal.png";
import visa from "@/assets/visa-4-logo_svgrepo.com.png";
import master from "@/assets/master-card_svgrepo.com.png";
import handShack from "@/assets/handshake-light-skin-tone_svgrepo.com.png";
import Link from "next/link";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useAppSelector } from "@/redux/hooks";
import { orderedProductsSelector, subTotalSelector } from "@/redux/features/cart/cartSlice";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { usePlaceOrderMutation } from "@/redux/features/cart/cartApi";

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
  const [placeOrder]=usePlaceOrderMutation();
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [agreed, setAgreed] = useState(false);
  const user = useAppSelector(selectCurrentUser)
  const subTotal=useAppSelector(subTotalSelector)

  console.log("subTotal=>",subTotal);
  // console.log("ceck=>",agreed);
const orderedProducts = useAppSelector(orderedProductsSelector)
console.log("orderedProductsSelector==>",orderedProducts);
  // Initialize React Hook Form
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      shipping: {
        street: "123 Elm Street",
        city: "Los Angeles",
        state: "California",
        zipCode: "90001",
        country: "USA",
      },
      payment: {
        cardHolderName: "MD Rayhan",
        cardNumber: "1867 8362 3828 3672 3839",
        expireDate: "06/29",
        cvv: "729",
      },
      // agreed: agreed,
    },
  });

  const items = orderedProducts.map(product => ({
    itemId: product._id,  // Use the _id or id to represent the item
    quantity: product.orderQuantity,  // Use the orderQuantity directly
  }));

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Form Data Submitted:", data);
  
    // Prepare the order data
    const orderData = {
      user: {
        userId: user?.userId,
        name: data.payment.cardHolderName,
        email: user?.user?.email,
      },
      shippingAddress: data.shipping,
      paymentInfo: {
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res = await placeOrder(orderData) as any;
      console.log("response===>", res);
      if(res?.data){

        message.success(res?.data?.message )
      }else{
        message.error(res?.error?.data?.error  || 'An unknown error occurred');
      }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.log(error);
      message.error( error);
  
    }
  };
  
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
                  Order today to get your reader&apos;s first book box by <span className="font-bold">Feb 3</span>
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
              <h2 className="text-xl font-semibold text-gray-700 mb-6">Payment Methods</h2>

              <div className="space-y-4">
                <Radio.Group value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-full">
                  <div className="space-y-3">
                    <div
                      className={`border rounded-xl p-4 flex items-center justify-between ${paymentMethod === "paypal" ? "border-blue-500" : "border-gray-200"}`}
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
                      className={`border rounded-xl p-4 flex items-center justify-between ${paymentMethod === "credit" ? "border-blue-500" : "border-gray-200"}`}
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
              <h2 className="text-xl font-semibold text-gray-700 mb-6">Shipping Address</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Street Address</label>
                  <Controller
                    name="shipping.street"
                    control={control}
                    render={({ field }) => <Input {...field} size="large" className="rounded-lg" />}
                  />
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm text-gray-500 mb-1">City</label>
                    <Controller
                      name="shipping.city"
                      control={control}
                      render={({ field }) => <Input {...field} size="large" className="rounded-lg" />}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm text-gray-500 mb-1">State</label>
                    <Controller
                      name="shipping.state"
                      control={control}
                      render={({ field }) => <Input {...field} size="large" className="rounded-lg" />}
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm text-gray-500 mb-1">Zip Code</label>
                    <Controller
                      name="shipping.zipCode"
                      control={control}
                      render={({ field }) => <Input {...field} size="large" className="rounded-lg" />}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm text-gray-500 mb-1">Country</label>
                    <Controller
                      name="shipping.country"
                      control={control}
                      render={({ field }) => <Input {...field} size="large" className="rounded-lg" />}
                    />
                  </div>
                </div>

                {/* Payment Details (only for Credit card method) */}
                {paymentMethod === "credit" && (
                  <>
                    <div className="border rounded-2xl p-6 shadow-sm bg-white mt-6">
                      <h2 className="text-xl font-semibold text-gray-700 mb-6">Payment Details</h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">Card Holder Name</label>
                          <Controller
                            name="payment.cardHolderName"
                            control={control}
                            render={({ field }) => <Input {...field} size="large" className="rounded-lg" />}
                          />
                        </div>

                        <div>
                          <label className="block text-sm text-gray-500 mb-1">Card Number</label>
                          <Controller
                            name="payment.cardNumber"
                            control={control}
                            render={({ field }) => <Input {...field} size="large" className="rounded-lg" />}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm text-gray-500 mb-1">Expire Date</label>
                            <Controller
                              name="payment.expireDate"
                              control={control}
                              render={({ field }) => <Input {...field} size="large" className="rounded-lg" />}
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-gray-500 mb-1">CVV</label>
                            <Controller
                              name="payment.cvv"
                              control={control}
                              render={({ field }) => <Input {...field} size="large" className="rounded-lg" />}
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
                      I agree to enroll in Illuminate Kids Book Club and authorize my membership to be on a yearly basis at
                      $179.88, charged to the card above until I cancel. I understand I can cancel anytime by signing into my
                      account and clicking cancel.
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
                  Submit
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 border rounded-2xl p-6 shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Reader&apos;s Membership</h2>

            <div className="flex justify-center my-6">
              <div className="w-64 h-48 relative">
                <Image
                  src={packaging}
                  alt="Book subscription box"
                  width={280}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-2xl font-semibold text-red-400">$14.99</span>
                <span className="text-gray-600 ml-1">per month</span>
              </div>
              <div className="text-gray-500 text-right">(paid yearly at $179.88)</div>
            </div>

            <p className="text-gray-700 mb-6">
              Borrow or buy. Book prices shown in box. Prices beat Amazon. Check out return box to get a new one.
            </p>

            <div className="bg-red-50 rounded-xl p-4 flex items-center mb-6">
              <span className="text-gray-700">Get $60 credit to spend on books</span>
              <Tooltip title="Credit will be applied to your account after purchase">
                <InfoCircleOutlined className="text-gray-400 ml-auto" />
              </Tooltip>
            </div>

            <div className="flex items-center mb-8">
              <div className="flex-1">
                <p className="text-gray-700">With every plan purchased, we donate a book to a child.</p>
              </div>
              <div className="ml-4">
                <Image src={handShack} alt="icon" />
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between py-2">
                <span className="text-gray-700">Subtotal</span>
                <span className="font-medium">$179.88</span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-gray-700">Sales Tax</span>
                <span>.....</span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-gray-700">Shipping</span>
                <span className="font-medium">Free</span>
              </div>

              <div className="flex justify-between py-2 border-t mt-2 pt-2">
                <span className="text-gray-700 font-semibold">Today&apos;s Total</span>
                <span className="font-bold">$179.88</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* button */}
      <div className=" bg-[#EDEBE6] shadow-lg p-5 w-full">
        <div className="container mx-auto flex justify-between ">
          {/* Back Button */}
          <Link href="/sucess">
            <button className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition">
              <LeftOutlined />
              <span className="font-semibold">Skip</span>
            </button>
          </Link>

          {/* Next Button */}
          <Link href={"/my-profile"}>
            <button className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition disabled:opacity-50">
              <span className="font-semibold">Continue</span>
              <RightOutlined />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
