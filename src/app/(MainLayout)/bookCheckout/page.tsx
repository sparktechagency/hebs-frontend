/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import wild from "@/assets/wild.png";
import { CreditCardOutlined } from "@ant-design/icons";
import Image from "next/image";
import style from "@/app/styles.module.css";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentCategoryId } from "@/redux/features/boxes/boxesSlice";
import {
  useCreateInvoiceMutation,
  useGetSpecefiqBoxesQuery,
  useGetSpecefiqInvoiceQuery,
} from "@/redux/features/boxes/boxesApi";
import React, { useEffect, useState } from "react";
import LoadingPage from "@/app/loading";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { Minus, Plus } from "lucide-react";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

import {
  usePlaceCartOrderMutation,
  useShippingInfoMutation,
} from "@/redux/features/cart/cartApi";
import { Button, Input, message } from "antd";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FormData } from "../cart/page";

const QUANTITIES_STORAGE_KEY = "bookQuantities";

const BookCheckoutPage = () => {
  const [shippingInfo] = useShippingInfoMutation();
  const [createInvoice] = useCreateInvoiceMutation();
    const user = useAppSelector(selectCurrentUser);
    const [enable,setEnable]=useState(false)
  // console.log("userId",user?.userId);
  const {data:userInvoiceData}=useGetSpecefiqInvoiceQuery(user?.userId,{skip:!user})
  const invoiceId = userInvoiceData?.data?._id
  // console.log("user invoice",invoiceId);
  const router = useRouter();
  const currentCategory = useAppSelector(selectCurrentCategoryId);
  const categoryId = currentCategory?.categoryID;
  const {
    data: specifiqBox,
    isLoading,
    refetch,
  } = useGetSpecefiqBoxesQuery(categoryId, {
    skip: !categoryId,
  });
  const books = specifiqBox?.data?.books;

  const [trackingDetails, setTrackingDetails] = useState<any>({});

  // Store selected books IDs
  const [selectedBooks, setSelectedBooks] = useState<string[]>([]);

  // Store quantity per bookId, default 1, load from localStorage if available
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  // Books with quantities for calculations
  const [selectedBooksWithQuantity, setSelectedBooksWithQuantity] = useState<
    any[]
  >([]);

  // Load quantities from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(QUANTITIES_STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setQuantities(parsed);
        } catch {
          // ignore parse error
        }
      }
    }
  }, []);

  // Save quantities to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(QUANTITIES_STORAGE_KEY, JSON.stringify(quantities));
    }
  }, [quantities]);

  const handleCheckboxChange = (bookId: string, checked: boolean) => {
    setSelectedBooks((prev) => {
      if (checked) {
        setQuantities((q) => ({ ...q, [bookId]: q[bookId] || 1 }));
        return [...prev, bookId];
      } else {
        setQuantities((q) => {
          const copy = { ...q };
          delete copy[bookId];
          return copy;
        });
        return prev.filter((id) => id !== bookId);
      }
    });
  };

  const increaseQuantity = (bookId: string) => {
    setQuantities((prev) => ({
      ...prev,
      [bookId]: (prev[bookId] || 1) + 1,
    }));
  };

  const decreaseQuantity = (bookId: string) => {
    setQuantities((prev) => {
      const currentQty = prev[bookId] || 1;
      if (currentQty <= 1) return prev;
      return {
        ...prev,
        [bookId]: currentQty - 1,
      };
    });
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const KG_TO_OZ = 35.274;

  // Whenever selectedBooks or quantities update, update selectedBooksWithQuantity
  useEffect(() => {
    const selectedBookData = books
      ?.filter((book: any) => selectedBooks.includes(book._id))
      .map((book: any) => ({
        ...book,
        quantity: quantities[book._id] || 1,
      }));
    setSelectedBooksWithQuantity(selectedBookData || []);
  }, [selectedBooks, quantities, books]);

  // Calculate total weight in ounces
  const totalWeightOz = selectedBooksWithQuantity?.reduce((total, product) => {
    const weightKg = Number(product?.weight) || 0;
    const orderQty = Number(product?.quantity) || 1;
    return total + weightKg * KG_TO_OZ * orderQty;
  }, 0);
  const [selectPaymentMethod, setPaymentMethod] = useState("payNow");
  // total discount calculation
  const totalDiscountSelector = (products: any[]) => {
    return products?.reduce((acc: number, product: any) => {
      if (product.isDiscount && product.discountPrice?.amount > 0) {
        const discountPerUnit =
          (product.price.amount * product.discountPrice.amount) / 100;
        return acc + discountPerUnit * (product.quantity || 1);
      }
      return acc;
    }, 0);
  };
  const total = currencyFormatter(
    (books
      ?.filter((book: any) => selectedBooks.includes(book._id))
      .reduce(
        (acc: any, book: any) =>
          acc + (book.price?.amount || 0) * (quantities[book._id] || 1),
        0
      ) || 0) - totalDiscountSelector(selectedBooksWithQuantity)
  );

  const [placeOrder] = usePlaceCartOrderMutation();
  // console.log("se track det", selectedBooksWithQuantity);
    //  console.log("invoice outside",invoiceId);
  // handle invoice 
  const handleInvoice = async (id:string) => {
    const soldBooks = books.map((book: any) => ({
      bookId: book._id,
      quantity: book.quantity,
    }));

    const invoiceData = {
      soldBooks: [soldBooks],
      extraBooks: [],
      status: "kept",
      paymentStatus: selectPaymentMethod === "payNow" ? "paid" : "unpaid",
      paymentType: selectPaymentMethod === "payNow" ? "card" : "cash",
      totalAmount: Number(total),
      dueAmount: selectPaymentMethod === "payNow" ? 0 : total,
      currency: "USD",
      returnLabelUrl: trackingDetails?.returnLabelUrl,
      returnTrackingCode: trackingDetails?.returnTrackingCode,
      trackingUrl: trackingDetails?.trackingUrl,
    };
    // console.log("invoice",invoiceData);
    // console.log("invoice",invoiceId);
    try {
      const res = await createInvoice({ info:invoiceData,invoiceId:id });
      // console.log("invoice update response===>",res);
      if (res?.data) {
        message.success(res?.data?.message)
        handleOrder();
      } else {
        message.error("something went wrong!try again");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleOrder = async () => {
    const items = selectedBooksWithQuantity.map((product: any) => ({
      itemId: product._id,
      quantity: product.quantity,
    }));
    const order = {
      items,
      shippingCost: 0,
      customerEmail: user?.user?.email,
    };
    try {
      const res = await placeOrder(order);
      message.success(res.data.message);

      router.push(res?.data?.data?.url);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 5000);
    return () => clearInterval(interval);
  }, [refetch]);

  if (isLoading) {
    return <LoadingPage />;
  }

  // Shipping form submit handler
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
        // localStorage.setItem(
        //   "shippingMethod",
        //   JSON.stringify(res.data.data.rates)
        // );
        setEnable(true)
        setTrackingDetails(res.data.data);
      } else {
        message.error(res?.error?.data?.error || "An unknown error occurred");
      }
    } catch (error: any) {
      message.error(error.message || "An error occurred");
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      <div className="flex flex-wrap justify-between gap-6">
        {/* Left side */}
        <div className="w-full md:w-7/12 px-2">
          <h1 className={`text-2xl font-bold ${style.fontInter}`}>
            Book Checkout Summary
          </h1>
          <p className={`${style.fontInter} text-gray-600`}>Kept Books</p>

          {books?.map((book: any) => (
            <div
              key={book._id}
              className="bg-white shadow-md rounded-lg mt-5 p-4"
            >
              <div className="flex flex-wrap items-center gap-4">
                <input
                  type="checkbox"
                  checked={selectedBooks.includes(book._id)}
                  onChange={(e) =>
                    handleCheckboxChange(book._id, e.target.checked)
                  }
                  className="w-5 h-5 flex-shrink-0"
                />

                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                  <Image
                    src={book.coverImage || wild}
                    alt="Book Cover"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>

                <div className="flex-1 min-w-[150px]">
                  <h3 className="text-base sm:text-lg font-semibold">
                    {book.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    By {book.author}
                  </p>
                </div>

                <div className="text-right min-w-[140px]">
                  <p className="text-black font-bold text-sm sm:text-base">
                    <span className="mr-2">Price:</span>
                    {currencyFormatter(book.price?.amount)}
                  </p>
                  <div className="flex items-center gap-2 mt-3 justify-end">
                    <p className="text-gray-500 font-semibold text-xs sm:text-sm">
                      Quantity
                    </p>
                    <button
                      onClick={() => decreaseQuantity(book._id)}
                      className="bg-gray-100 text-xs hover:bg-gray-200 rounded-full p-1 transition-all duration-200"
                      aria-label="Decrease quantity"
                    >
                      <Minus />
                    </button>
                    <p className="font-semibold text-xs sm:text-sm px-3 py-1 rounded-md border border-gray-300 min-w-[24px] text-center">
                      {quantities[book._id] || 1}
                    </p>
                    <button
                      onClick={() => increaseQuantity(book._id)}
                      className="bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition-all duration-200"
                      aria-label="Increase quantity"
                    >
                      <Plus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - only show if selectedBooks not empty */}
        {selectedBooks.length > 0 ? (
          <div className="w-full md:w-4/12 mt-10 md:mt-0">
            <div className="mb-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Street Address */}
                <div>
                  <label className="block text-sm text-gray-500 mb-1">
                    Street Address
                  </label>
                  <Controller
                    name="shipping.street"
                    control={control}
                    rules={{ required: "Street address is required" }}
                    render={({ field }) => (
                      <Input {...field} size="large" className="rounded-lg" />
                    )}
                  />
                  {errors.shipping?.street && (
                    <p className="text-red-600">
                      {errors.shipping.street.message}
                    </p>
                  )}
                </div>

                {/* City & State */}
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm text-gray-500 mb-1">
                      City
                    </label>
                    <Controller
                      name="shipping.city"
                      control={control}
                      rules={{ required: "City is required" }}
                      render={({ field }) => (
                        <Input {...field} size="large" className="rounded-lg" />
                      )}
                    />
                    {errors.shipping?.city && (
                      <p className="text-red-600">
                        {errors.shipping.city.message}
                      </p>
                    )}
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm text-gray-500 mb-1">
                      State
                    </label>
                    <Controller
                      name="shipping.state"
                      control={control}
                      rules={{ required: "State is required" }}
                      render={({ field }) => (
                        <Input {...field} size="large" className="rounded-lg" />
                      )}
                    />
                    {errors.shipping?.state && (
                      <p className="text-red-600">
                        {errors.shipping.state.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Zip Code & Country */}
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm text-gray-500 mb-1">
                      Zip Code
                    </label>
                    <Controller
                      name="shipping.zipCode"
                      control={control}
                      rules={{ required: "Zip code is required" }}
                      render={({ field }) => (
                        <Input {...field} size="large" className="rounded-lg" />
                      )}
                    />
                    {errors.shipping?.zipCode && (
                      <p className="text-red-600">
                        {errors.shipping.zipCode.message}
                      </p>
                    )}
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm text-gray-500 mb-1">
                      Country
                    </label>
                    <Controller
                      name="shipping.country"
                      control={control}
                      rules={{ required: "Country is required" }}
                      render={({ field }) => (
                        <Input {...field} size="large" className="rounded-lg" />
                      )}
                    />
                    {errors.shipping?.country && (
                      <p className="text-red-600">
                        {errors.shipping.country.message}
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full mt-6"
                >
                  Confirm Address
                </Button>
              </form>
            </div>

            {/* Payment details */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
              <div className="border-b mb-4"></div>

              {/* Book Subtotal */}
              <div className="flex justify-between mb-2">
                <span>Book Subtotal</span>
                <span className="font-medium">
                  {currencyFormatter(
                    books
                      ?.filter((book: any) => selectedBooks.includes(book._id))
                      .reduce(
                        (acc: any, book: any) =>
                          acc +
                          (book.price?.amount || 0) *
                            (quantities[book._id] || 1),
                        0
                      ) || 0
                  )}
                </span>
              </div>

              {/* Illuminate Discount */}
              <div className="flex justify-between mb-2">
                <span>Illuminate Discount</span>
                <span className="font-medium">
                  {currencyFormatter(
                    totalDiscountSelector(selectedBooksWithQuantity)
                  )}
                </span>
              </div>

              {/* Order Total */}
              <div className="flex justify-between mb-4">
                <span className="font-semibold text-lg">Order Total</span>
                <span className="font-semibold text-lg">
                  {currencyFormatter(
                    (books
                      ?.filter((book: any) => selectedBooks.includes(book._id))
                      .reduce(
                        (acc: any, book: any) =>
                          acc +
                          (book.price?.amount || 0) *
                            (quantities[book._id] || 1),
                        0
                      ) || 0) - totalDiscountSelector(selectedBooksWithQuantity)
                  )}
                </span>
              </div>

              {/* Payment Method Radio Buttons */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Payment Method</h4>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cashOnDelivery"
                      checked={selectPaymentMethod === "cashOnDelivery"}
                      onChange={() => setPaymentMethod("cashOnDelivery")}
                      className="form-radio"
                    />
                    <span>Cash On Delivery</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="payNow"
                      checked={selectPaymentMethod === "payNow"}
                      onChange={() => setPaymentMethod("payNow")}
                      className="form-radio"
                    />
                    <span>Pay Now</span>
                  </label>
                </div>
              </div>

              {/* Proceed Checkout Button */}
              <div className="flex justify-between items-center">
                <button
                  disabled={selectPaymentMethod !== "payNow" && enable}
                  onClick={() => handleInvoice(invoiceId)}
                  className={`w-full md:px-8 p-4 md:h-12 flex items-center justify-center text-white border-none mb-4 my-5
              ${
         (       selectPaymentMethod === "payNow" && enable)
                  ? "bg-[#F37975] hover:bg-red-500 cursor-pointer"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
                >
                  <CreditCardOutlined className="text-white text-xl mr-3" />
                  Proceed Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Optional message when no books selected
          <div className="w-full md:w-4/12 mt-10 md:mt-0 flex items-center justify-center text-gray-500 italic">
            Please select at least one book to proceed to checkout.
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCheckoutPage;
