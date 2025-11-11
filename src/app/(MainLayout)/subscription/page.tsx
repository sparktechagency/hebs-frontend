/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Package,
  User,
  FileText,
} from "lucide-react";
import { Button, Input, message, Modal } from "antd";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";

import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetSpecefiqUserQuery } from "@/redux/features/auth/authApi";
import LoadingPage from "@/app/loading";

import { useGetSpecefiqBoxesQuery } from "@/redux/features/boxes/boxesApi";
// import Image from "next/image";

import { useGetRecommendationQuery } from "@/redux/features/survey/surveyApi";
// import { selectCurrentPlan } from "@/redux/features/subscription/subscriptionSlice";
import {
  useCancelSubscriptionMutation,
  useSpecefiqSubscriptionQuery,
} from "@/redux/features/subscription/subscriptionApi";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FormData } from "../cart/page";
import { useUpdateSpecefiqUserAddressMutation } from "@/redux/features/others/othersApi";

const SubscriptionPage = () => {
  // const plan = useAppSelector(selectCurrentPlan);
  const user = useAppSelector(selectCurrentUser);
  const userId = user?.userId;
  const {
    data: singleUser,
    isLoading,
    refetch,
  } = useGetSpecefiqUserQuery(userId, { skip: !user });
  const id = singleUser?.data?.subscription?.purchaseId;
  console.log("single user->", singleUser);
  const [cancelSubscription, { isLoading: isCanceling }] =
    useCancelSubscriptionMutation();
  const { data: purchaseSubscription, refetch: subPurchase } =
    useSpecefiqSubscriptionQuery(userId, { skip: !user });
  // console.log("purchasd subscription",purchaseSubscription);
  const process = purchaseSubscription?.data?.subscriptionPurchases?.createdAt;
  const formattedProccessed = process ? process.split("T")[0] : null;
  const formattedDate = formattedProccessed
    ? new Date(formattedProccessed).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  const isDesable =
    purchaseSubscription?.data?.subscriptionPurchases?.disableRequest;

  //  console.log("user->",singleUser?.data?.subscription?.purchaseId);
  // console.log("plan===>",plan);
  // console.log("user===>",singleUser);
  // console.log("survey===>",survey);

  // console.log("userid",specefiqUser);
  const dob = singleUser?.data?.survey?.dateOfBirth;
  const formattedDOB = dob ? dob.split("T")[0] : null;
  //  console.log("Formatted DOB:", formattedDOB);
  const { data: recommendation } = useGetRecommendationQuery(formattedDOB);
  const categoryId = recommendation?.data?.category?._id;
  // console.log("cat id:", recommendation?.data?.category?._id);
  const { data: specifiqBox } = useGetSpecefiqBoxesQuery(categoryId, {
    skip: !categoryId,
  });
  // console.log("current  box ", specifiqBox);
  // console.log("box===>",specifiqBox?.data);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const [updateSpecifiqUserAddress] = useUpdateSpecefiqUserAddressMutation();
  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const orderData = {
      shippingAddress: {
        street: data?.shipping?.street,
        city: data?.shipping?.city,
        state: data?.shipping?.state,
        zipCode: data?.shipping?.zipCode,
        country: data?.shipping?.country,
      },
    };
    console.log("orderdata-->", orderData);
    try {
      // console.log("userId-->",singleUser?.data?._id);
      const res = await updateSpecifiqUserAddress({
        id: singleUser?.data?._id,
        userInfo: orderData,
      }).unwrap();
      // console.log("response--->",res);

      message.success(res.message);

      refetch();
    } catch (error: any) {
      message.error(error.message || "An error occurred");
    }
  };

  const books = specifiqBox?.data?.books;
  const boxs = specifiqBox?.data;
  const [showBooks1, setShowBooks1] = useState(false);

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  // Add form state
  // const [readerDetails, setReaderDetails] = useState({

  //   address:"Los Angeles"
  // });
  // const handleSave = () => {

  //   setShowUpdateModal(false);
  // };
  const DOB = singleUser?.data?.survey?.dateOfBirth;
  // console.log("Dob===>", DOB);
  const date = new Date(DOB);
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const subscription = singleUser?.data?.subscription;
  // console.log("singleUser suibcription",subscription);
  if (subscription?.isActive === false) {
    message.error("You havent Subscribe yet!Please Subscribe and try again");
    router.push("/name");
  }

  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // console.log("Month & Year:", month, year);

  // const subId = purchaseSubscription?.data?._id
  const handleCancel = async () => {
    try {
      // subId
      const res = await cancelSubscription(id).unwrap();
      // console.log("res",res);
      message.success(res?.data?.message || res.message);
      subPurchase();
    } catch (error: any) {
      message.error(error?.message);
    }
  };

  if (isLoading)
    return (
      <div>
        <LoadingPage />
      </div>
    );
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 md:min-h-screen">
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/boxes"
                className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <Package className="h-5 w-5 mr-3 text-gray-500" />
                <span>Boxes</span>
              </Link>
            </li>
            <li>
              <Link
                href="/my-profile"
                className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <User className="h-5 w-5 mr-3 text-gray-500" />
                <span>Account Details</span>
              </Link>
            </li>
            <li>
              <Link
                href="/billing"
                className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <FileText className="h-5 w-5 mr-3 text-gray-500" />
                <span>Billing History</span>
              </Link>
            </li>
          </ul>

          <div className="mt-8 border-t border-gray-200 pt-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              SUBSCRIPTION SETTINGS
            </h3>
            <Link href={"/subscription"}>
              <div className="flex items-center justify-between p-2  bg-[#f08080]   rounded-md">
                <div className="flex flex-col">
                  <span className="text-white">
                    {singleUser?.data?.firstName}
                  </span>
                  <span className="text-xs text-white">
                    {singleUser?.data?.status}
                  </span>
                </div>
                <ChevronRight className="h-5 w-5 text-[#f08080]" />
              </div>
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <h1 className="text-2xl font-bold mb-8">
          {" "}
          {singleUser?.data?.firstName}
        </h1>

        {/* Plan Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Your Plan</h2>
              <span className="inline-block bg-red-100 text-gray-700 px-3 py-1 rounded-md text-sm">
                Try Before You Buy Legacy
              </span>
            </div>

            <button
              onClick={handleCancel}
              disabled={isCanceling || isDesable}
              className={`mt-4 md:mt-0 text-white px-6 py-2 rounded-full
    ${
      isCanceling || isDesable
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-[#f08080] hover:bg-[#f08080]/90"
    }`}
            >
              {isCanceling ? "Cancelling..." : "Cancel Request"}
            </button>
          </div>

          <div className="border-t border-gray-200 mt-4 pt-4">
            <p className="bg-red-50 p-3 rounded-md text-gray-700">
              Connected on {formattedDate}
            </p>
          </div>
        </div>

        {/* Reader Details Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="text-xl font-semibold">Reader Details</h2>
            {/* <button className="mt-4 md:mt-0 border border-[#f08080] text-[#f08080] hover:bg-[#f08080]/5 px-6 py-2 rounded-full"
             onClick={() => setShowUpdateModal(true)}
            >
              Update Details
            </button> */}
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-gray-500 mb-1">Name</h3>
                <p className="font-medium">{singleUser?.data?.firstName}</p>
              </div>
              <div>
                <h3 className="text-gray-500 mb-1">Birth Month</h3>
                <p className="font-medium">
                  {month} {year}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-gray-500 mb-1">Reading Level</h3>
              <p className="font-medium">{boxs?.title}</p>
            </div>
          </div>
        </div>

        {/* Shipping Address Section */}
        <div className=" mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="text-xl font-semibold">Shipping Address</h2>
            <button
              className="mt-4 md:mt-0 border border-[#f08080] text-[#f08080] hover:bg-[#f08080]/5 px-6 py-2 rounded-full"
              onClick={() => setShowUpdateModal(true)}
            >
              Update Shipping Addresss
            </button>
          </div>
          <div className="border-t border-gray-200 pt-6">
            {/* <p className="font-medium">{singleUser?.data?.shippingAddress?.street+','+singleUser?.data?.shippingAddress?.city+','+singleUser?.data?.shippingAddress?.state+','+singleUser?.data?.shippingAddress?.country}</p> */}
            <p className="font-medium">
              {
                // Conditionally join address fields, skipping any undefined/null fields
                [
                  singleUser?.data?.shippingAddress?.street,
                  singleUser?.data?.shippingAddress?.city,
                  singleUser?.data?.shippingAddress?.state,
                  singleUser?.data?.shippingAddress?.country,
                ]
                  .filter(Boolean) // Remove undefined/null/empty strings
                  .join(", ") // Join the remaining valid parts with a comma
              }
            </p>
          </div>
        </div>
        {/* <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>

          <div className="border-t border-gray-200 pt-6">
            <p className="font-medium">Los Angelas, east 92st, USA</p>
          </div>
        </div> */}

        {/* Books Section 1 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h3 className="font-medium">Book Received</h3>
            <Link href={"/reviews"}>
              <button className="mt-4 md:mt-0 bg-[#f08080] hover:bg-[#f08080]/90 text-white px-6 py-2 rounded-full">
                Review Books
              </button>
            </Link>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <button
              className="w-full bg-gray-400 hover:bg-gray-500 text-white py-3 rounded-md flex items-center justify-center"
              onClick={() => setShowBooks1(!showBooks1)}
            >
              <span className="mr-2">Show Books</span>
              <ChevronDown className="h-5 w-5" />
            </button>

            {showBooks1 && (
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto">
                  {books?.map((book: any, idx: number) => (
                    <div key={idx} className="flex flex-col space-y-2">
                      <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-sm">
                        {/* <Image
                          src={book?.coverImage || "/placeholder.svg"}
                          alt={book?.name}
                          fill
                          className="object-cover"
                        /> */}
                        <img
                          src={book?.coverImage || "/placeholder.svg"}
                          alt=""
                          className=" object-cover"
                          sizes=""
                        />
                      </div>
                      <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                        {book?.name}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {book?.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <Modal
          title={
            <h2 className="text-xl font-semibold text-gray-800">
              Update Your Shipping Address
            </h2>
          }
          open={showUpdateModal}
          onCancel={() => setShowUpdateModal(false)}
          footer={null}
          styles={{
            header: { borderBottom: "none", paddingBottom: 0 },
            body: { paddingTop: 0 },
          }}
        >
          {/* Divider */}
          <div className="border-t border-gray-200 my-4" />

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
              {errors?.shipping?.street && (
                <p className="text-red-600">
                  {errors?.shipping?.street?.message}
                </p>
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
                  <p className="text-red-600">
                    {errors?.shipping?.city?.message}
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
                {errors?.shipping?.state && (
                  <p className="text-red-600">
                    {errors?.shipping?.state?.message}
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
                    {errors?.shipping?.zipCode?.message}
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
                    {errors?.shipping?.country?.message}
                  </p>
                )}
              </div>
            </div>

            <Button
              htmlType="submit"
              className="w-full mt-6 bg-[#f08080] text-white"
            >
              Continue
            </Button>
          </form>
        </Modal>
      </main>
    </div>
  );
};

export default SubscriptionPage;
