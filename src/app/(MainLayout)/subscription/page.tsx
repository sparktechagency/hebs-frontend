/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Package,
  User,
  FileText,
} from "lucide-react";
import { Form, Input, message, Modal, Select } from "antd";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";

import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetSpecefiqUserQuery } from "@/redux/features/auth/authApi";
import LoadingPage from "@/app/loading";

import { useGetSpecefiqBoxesQuery } from "@/redux/features/boxes/boxesApi";
import Image from "next/image";

import { useGetRecommendationQuery } from "@/redux/features/survey/surveyApi";
// import { selectCurrentPlan } from "@/redux/features/subscription/subscriptionSlice";
import { useCancelSubscriptionMutation, useSpecefiqSubscriptionQuery } from "@/redux/features/subscription/subscriptionApi";
const { Option } = Select;

const SubscriptionPage = () => {
  // const plan = useAppSelector(selectCurrentPlan);
  const user = useAppSelector(selectCurrentUser);
  const userId = user?.userId

const [cancelSubscription]=useCancelSubscriptionMutation();
  const {data:purchaseSubscription}=useSpecefiqSubscriptionQuery(userId,{skip:!user})
console.log("purchasd subscription",purchaseSubscription);

  const { data: singleUser, isLoading } = useGetSpecefiqUserQuery(userId,{skip:!user});
//  console.log("user",singleUser);
  // console.log("plan===>",plan);
  // console.log("user===>",singleUser);
  // console.log("survey===>",survey);
  const { data: specefiqUser} = useGetSpecefiqUserQuery(
    user?.userId
  );
  // console.log("userid",specefiqUser);
  const dob = specefiqUser?.data?.survey?.dateOfBirth;
  const formattedDOB = dob ? dob.split("T")[0] : null;
  //  console.log("Formatted DOB:", formattedDOB);
  const { data: recommendation } = useGetRecommendationQuery(formattedDOB);
  const categoryId = recommendation?.data?.category?._id;
  // console.log("cat id:", recommendation?.data?.category?._id);
  const { data: specifiqBox ,refetch} = useGetSpecefiqBoxesQuery(categoryId, {
    skip: !categoryId,
  });
  // console.log("current  box ", specifiqBox);
  // console.log("box===>",specifiqBox?.data);
  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 5000); // Refetch every 5 seconds

    return () => clearInterval(interval);
  }, [refetch]);



  const books = specifiqBox?.data?.books;
  const boxs = specifiqBox?.data;
  const [showBooks1, setShowBooks1] = useState(false);

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  // Add form state
  const [readerDetails, setReaderDetails] = useState({
    name: "Ahmed",
    birthday: "July 2019",
    readingLevel: "Little Caliphs",
  });
  const handleSave = () => {
    // Handle saving the updated details
    // console.log("Saving:", readerDetails);
    setShowUpdateModal(false);
  };
  const DOB = specefiqUser?.data?.survey?.dateOfBirth;
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
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // console.log("Month & Year:", month, year);


const subId = purchaseSubscription?.data?._id
const handleCancel=async()=>{
try {
  const res = await cancelSubscription(subId);
  console.log("res",res);
  message.success(res?.data?.message)
} catch (error:any) {
  message.error(error?.message)
}
}




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
        <h1 className="text-2xl font-bold mb-8"> {singleUser?.data?.firstName}</h1>

        {/* Plan Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Your Plan</h2>
              <span className="inline-block bg-red-100 text-gray-700 px-3 py-1 rounded-md text-sm">
                Try Before You Buy Legacy
              </span>
            </div>
            <button onClick={()=>handleCancel()} className="mt-4 md:mt-0 bg-[#f08080] hover:bg-[#f08080]/90 text-white px-6 py-2 rounded-full">
              Cancel Request
            </button>
          </div>

          <div className="border-t border-gray-200 mt-4 pt-4">
            <p className="bg-red-50 p-3 rounded-md text-gray-700">
              Connected on May 11, 2025
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
        {/* <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>

          <div className="border-t border-gray-200 pt-6">
            <p className="font-medium">Los Angelas, east 92st, USA</p>
          </div>
        </div> */}

        {/* Books Section 1 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h3 className="font-medium">Reader&apos;s Allah made me</h3>
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
                        <Image
                          src={book.coverImage || "/placeholder.svg"}
                          alt={book.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                        {book.name}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {book.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Update Details Modal */}
        <Modal
          title="Reader Details"
          open={showUpdateModal}
          onCancel={() => setShowUpdateModal(false)}
          footer={null} // Remove default footer buttons
          styles={{
            header: { borderBottom: "none", paddingBottom: 0 },
            body: { paddingTop: 16 },
          }}
        >
          <div className="border-t border-gray-200 my-4"></div>
          <Form layout="vertical">
            <div className="grid grid-cols-2 gap-4">
              {/* Name Field */}
              <Form.Item label="Name" className="mb-4">
                <Input
                  value={readerDetails.name}
                  onChange={(e) =>
                    setReaderDetails({ ...readerDetails, name: e.target.value })
                  }
                  className="rounded-lg"
                />
              </Form.Item>

              {/* Birthday Field */}
              <Form.Item label="Birthday" className="mb-4">
                <Input
                  value={readerDetails.birthday}
                  onChange={(e) =>
                    setReaderDetails({
                      ...readerDetails,
                      birthday: e.target.value,
                    })
                  }
                  className="rounded-lg"
                />
              </Form.Item>
            </div>

            {/* Reading Level Field */}
            <Form.Item label="Reading Level" className="mb-6">
              <Select
                value={readerDetails.readingLevel}
                onChange={(value) =>
                  setReaderDetails({ ...readerDetails, readingLevel: value })
                }
                placeholder="Reading Level"
                className="w-full rounded-lg"
              >
                <Option value="Little Caliphs">Little Caliphs</Option>
                <Option value="Intermediate">Intermediate</Option>
                <Option value="Advanced">Advanced</Option>
              </Select>
            </Form.Item>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="text-[#ff0000] hover:text-[#ff0000]/90 font-medium border-0 bg-transparent cursor-pointer"
              >
                Save
              </button>
            </div>
          </Form>
        </Modal>
      </main>
    </div>
  );
};

export default SubscriptionPage;
