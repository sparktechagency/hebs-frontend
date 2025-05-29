/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import LoadingPage from "@/app/loading";
import sucess from "@/assets/sucess.png";
import { useGetSpecefiqUserQuery } from "@/redux/features/auth/authApi";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import {
  useCreateInvoiceMutation,
  useGetSpecefiqInvoiceQuery,
} from "@/redux/features/boxes/boxesApi";
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
  const [createInvoice] = useCreateInvoiceMutation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: userInvoiceData } = useGetSpecefiqInvoiceQuery(user?.userId, {
    skip: !user,
  });
  const invoiceId = userInvoiceData?.data?._id;
  const sessionId = searchParams.get("session_id");
  const rawPurpose = searchParams.get("purpose");

  // Memoize purpose to prevent infinite loop
  const purpose = useMemo(() => {
    if (!rawPurpose) return null;
    try {
      return JSON.parse(rawPurpose);
    } catch {
      return null;
    }
  }, [rawPurpose]);

  const [shippingMethods, setShippingMethods] = useState<any>({});
  const orderedProducts = useAppSelector(orderedProductsSelector);

  const items = useMemo(() => {
    return (
      orderedProducts?.map((product: any) => ({
        itemId: product._id,
        quantity: product.quantity,
      })) || []
    );
  }, [orderedProducts]);

  // Ref flags to prevent infinite calls
  const hasCreatedOrder = useRef(false);
  const hasCreatedInvoice = useRef(false);

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

  // Invoice creation effect (runs only once if purpose exists)
  useEffect(() => {
    if (!purpose || !user?.userId) return;
    if (hasCreatedInvoice.current) return;

    hasCreatedInvoice.current = true;

    const invoiceData = {
      soldBooks: purpose.soldBooks,
      extraBooks: [],
      status: "kept",
      paymentStatus: "paid",
      paymentType: "card",
      totalAmount: purpose.totalAmount,
      currency: "USD",
      returnLabelUrl: purpose.returnLabelUrl,
      returnTrackingCode: purpose.returnTrackingCode,
      trackingUrl: purpose.trackingUrl,
    };

    createInvoice({ info: invoiceData, invoiceId })
      .unwrap()
      .then((res) => {
        console.log("invoice res", res);
        message.success(res.message || "Invoice created successfully");
          router.push("/");
      })
      .catch(() => {
        hasCreatedInvoice.current = false; // reset flag on failure
        message.error("Something went wrong! Try again.");
      });
  }, [purpose, user?.userId, createInvoice,invoiceId]);

  // Order creation effect (runs only once if purpose does NOT exist)
  useEffect(() => {
    if (purpose) return;
    if (
      hasCreatedOrder.current ||
      !sessionId ||
      !user?.userId ||
      !items.length ||
      !userData
    )
      return;

    hasCreatedOrder.current = true;

    const orderData = {
      sessionId,
      user: {
        userId: user.userId,
        name: userData.data?.survey?.readerName,
        email: userData.data?.email,
      },
      items,
      returnLabelUrl: shippingMethods?.returnLabelUrl,
      returnTrackingCode: shippingMethods?.returnTrackingCode,
      trackingUrl: shippingMethods?.trackingUrl,
    };

    createOrder(orderData)
      .unwrap()
      .then((response) => {
        console.log("order res", response);
        message.success(response?.message);
        router.push("/bookStore");
      })
      .catch((err) => {
        hasCreatedOrder.current = false; // reset flag on failure
        message.error(err?.data?.error || "Failed to create order");
      });
  }, [
    purpose,
    sessionId,
    user?.userId,
    userData,
    items,
    shippingMethods.returnLabelUrl,
    shippingMethods.returnTrackingCode,
    shippingMethods.trackingUrl,
    createOrder,
    router,
  ]);

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
