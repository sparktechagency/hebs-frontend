/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import LoadingPage from "@/app/loading";
import sucess from "@/assets/sucess.png";
import { useGetSpecefiqUserQuery } from "@/redux/features/auth/authApi";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { usePlaceOrderMutation } from "@/redux/features/cart/cartApi";
import { orderedProductsSelector } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { message } from "antd";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef, useMemo } from "react";

const SucessPage = () => {
  const user = useAppSelector(selectCurrentUser);
  const { data: userData, isLoading } = useGetSpecefiqUserQuery(user?.userId);
  const [createOrder] = usePlaceOrderMutation();
const router = useRouter()
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [shippingMethods, setShippingMethods] = useState<any>({});
  const orderedProducts = useAppSelector(orderedProductsSelector);

  // Memoize items so the array reference is stable
  const items = useMemo(() => {
    return orderedProducts?.map((product: any) => ({
      itemId: product._id,
      quantity: product.quantity,
    })) || [];
  }, [orderedProducts]);

  // Memoize shippingMethods object for stable reference
  const shippingMethodsMemo = useMemo(() => shippingMethods, [shippingMethods]);

  // Flag to prevent multiple API calls
  const hasCreatedOrder = useRef(false);

  useEffect(() => {
    const methods = localStorage.getItem("shippingMethod");
    if (methods) {
      try {
        const parsedMethods = JSON.parse(methods);
        setShippingMethods(parsedMethods);
      } catch {
        setShippingMethods({});
      }
    }
  }, []);

  useEffect(() => {
    if (
      hasCreatedOrder.current ||
      !sessionId ||
      !user?.userId ||
      !items.length ||
      !userData
    ) return;

    const orderData = {
      sessionId,
      user: {
        userId: user.userId,
        name: userData.data?.survey?.readerName,
        email: userData.data?.email,
      },
      items,
      returnLabelUrl: shippingMethodsMemo?.returnLabelUrl,
      returnTrackingCode: shippingMethodsMemo?.returnTrackingCode,
      trackingUrl: shippingMethodsMemo?.trackingUrl,
    };

    createOrder(orderData)
      .unwrap()
      .then((response) => {
        console.log("Order created successfully:", response);
        hasCreatedOrder.current = true;
        message.success(response?.message)
        router.push("/bookStore")
      })
      .catch((err) => {
        console.error("Failed to create order:", err);
        message.error(err?.data?.error)
      });
  }, [sessionId, user?.userId, userData, items, shippingMethodsMemo, createOrder]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="h-screen container mx-auto flex flex-col gap-6 justify-center items-center">
      <Image src={sucess} alt="success" />
      <p>Your payment is successful!</p>
    </div>
  );
};

export default SucessPage;
