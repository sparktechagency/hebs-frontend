/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import CartProducts from "@/app/component/cart/cartProducts";
import PaymentDetails from "@/app/component/cart/PaymentDetails";
import FeatureBook from "@/app/component/Home/FeatureBook";
import { orderedProductsSelector } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import frame from "@/assets/Frame 6.png"
import { Button, Checkbox, Input, message } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {  useShippingInfoMutation } from "@/redux/features/cart/cartApi";
import { useState } from "react";
import { LockOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

interface FormData {
  shipping: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

const CartPage = () => {
  const [shippingInfo] = useShippingInfoMutation();

  const products = useAppSelector(orderedProductsSelector);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [agreed, setAgreed] = useState(false);
  const orderedProducts = useAppSelector(orderedProductsSelector);
  const KG_TO_OZ = 35.274;

  // Calculate total weight in ounces
  const totalWeightOz = orderedProducts.reduce((total, product) => {
    return total + product.weight * KG_TO_OZ * product.orderQuantity;
  }, 0);
const router = useRouter();
  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const orderData = {
      toAddress: {
        street: data.shipping.street,
        city: data.shipping.city,
        state: data.shipping.state,
        zip: data.shipping.zipCode,
        country: data.shipping.country,
      },
      parcelDetails: {
        weight: totalWeightOz.toFixed(2),
      },
    };

    try {
      const res = (await shippingInfo(orderData)) as any;
      if (res?.data) {
        message.success(res.data.message);
        localStorage.setItem("shippingMethod", JSON.stringify(res.data.data.rates));
        router.push('/payment')

      } else {
        message.error(res?.error?.data?.error || "An unknown error occurred");
      }
    } catch (error: any) {
      message.error(error.message || "An error occurred");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full">
        {products.length === 0 ? (
          <div className="bg-white mt-16 mb-12 p-8 rounded-2xl shadow-lg flex flex-col items-center w-96 justify-center text-center">
            <div className="relative w-32 h-32 mb-4">
              <Image src={frame} alt="Empty Cart" fill style={{ objectFit: "contain" }} />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Your bag is empty</h2>
            <p className="text-gray-500 text-sm text-center mb-4">
              Your bag is empty. Start adding items to enjoy shopping!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-8 my-5 w-full p-8 container mx-auto">
            {/* Left Column: Cart Products */}
            <div className="col-span-12 md:col-span-7">
              <CartProducts />
            </div>

            {/* Right Column: Payment Details and Shipping Form */}
            <div className="col-span-12 md:col-span-5 flex flex-col space-y-6">
              <PaymentDetails />

              <div className="border rounded-2xl p-6 shadow-sm bg-white">
                <h2 className="text-xl font-semibold text-gray-700 mb-6">
                  Shipping Address
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Street Address */}
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Street Address</label>
                    <Controller
                      name="shipping.street"
                      control={control}
                      rules={{ required: "Street address is required" }}
                      render={({ field }) => (
                        <Input {...field} size="large" className="rounded-lg" />
                      )}
                    />
                    {errors.shipping?.street && (
                      <p className="text-red-600">{errors.shipping.street.message}</p>
                    )}
                  </div>

                  {/* City & State */}
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm text-gray-500 mb-1">City</label>
                      <Controller
                        name="shipping.city"
                        control={control}
                        rules={{ required: "City is required" }}
                        render={({ field }) => (
                          <Input {...field} size="large" className="rounded-lg" />
                        )}
                      />
                      {errors.shipping?.city && (
                        <p className="text-red-600">{errors.shipping.city.message}</p>
                      )}
                    </div>

                    <div className="flex-1">
                      <label className="block text-sm text-gray-500 mb-1">State</label>
                      <Controller
                        name="shipping.state"
                        control={control}
                        rules={{ required: "State is required" }}
                        render={({ field }) => (
                          <Input {...field} size="large" className="rounded-lg" />
                        )}
                      />
                      {errors.shipping?.state && (
                        <p className="text-red-600">{errors.shipping.state.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Zip Code & Country */}
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm text-gray-500 mb-1">Zip Code</label>
                      <Controller
                        name="shipping.zipCode"
                        control={control}
                        rules={{ required: "Zip code is required" }}
                        render={({ field }) => (
                          <Input {...field} size="large" className="rounded-lg" />
                        )}
                      />
                      {errors.shipping?.zipCode && (
                        <p className="text-red-600">{errors.shipping.zipCode.message}</p>
                      )}
                    </div>

                    <div className="flex-1">
                      <label className="block text-sm text-gray-500 mb-1">Country</label>
                      <Controller
                        name="shipping.country"
                        control={control}
                        rules={{ required: "Country is required" }}
                        render={({ field }) => (
                          <Input {...field} size="large" className="rounded-lg" />
                        )}
                      />
                      {errors.shipping?.country && (
                        <p className="text-red-600">{errors.shipping.country.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="space-y-4">
                    <Checkbox
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
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
                    disabled={!agreed}
                  >
                    Continue
                  </Button>
                </form>
              </div>
            </div>
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
