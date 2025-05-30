"use client";

import { Package, User, FileText, Check, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import shape from "@/assets/shape.png";
import shop from "@/assets/shop.png";
import styles from "@/app/styles.module.css";

import { useAppSelector } from "@/redux/hooks";

import { useGetSpecefiqBoxesQuery } from "@/redux/features/boxes/boxesApi";
import LoadingPage from "@/app/loading";
import { useEffect } from "react";
import { useGetSpecefiqUserQuery } from "@/redux/features/auth/authApi";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetRecommendationQuery } from "@/redux/features/survey/surveyApi";
import { message } from "antd";
import { useRouter } from "next/navigation";

const BoxesPage = () => {
  const user = useAppSelector(selectCurrentUser);

  const { data: specefiqUser, isLoading } = useGetSpecefiqUserQuery(
    user?.userId
  );
    const dob = specefiqUser?.data?.survey?.dateOfBirth;
  const formattedDOB = dob ? dob.split("T")[0] : null;
  const { data: recommendation } = useGetRecommendationQuery(formattedDOB);
  // console.log("Formatted DOB:", recommendation?.data?.category?._id);
  const categoryId = recommendation?.data?.category?._id;
  const { data: specifiqBox, refetch } = useGetSpecefiqBoxesQuery(categoryId, {
    skip: !categoryId,
  });
    useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 5000);

    return () => clearInterval(interval);
  }, [refetch]);

const router = useRouter()

  const subscription = specefiqUser?.data?.subscription;
  console.log("singleUser",subscription);
  if(!user){
    message.error("User Not found Please Login")
    router.push("/login")
  }
  if(subscription?.isActive=== false){
    message.error("You havent Subscribe yet!Please Subscribe and try again")
   router.push("/name")
  }

  const process = specifiqBox?.data?.category?.createdAt;
  const formattedProccessed = process ? process.split("T")[0] : null;
  const formattedDate = new Date(formattedProccessed).toLocaleDateString(
    "en-US",
    { month: "short", day: "numeric" }
  );

  // console.log(formattedDate);

  if (isLoading) {
    return <LoadingPage />;
  }
  const now = new Date();
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

  const currentMonth = monthNames[now.getMonth()]; // getMonth() returns 0-based index
  const currentYear = now.getFullYear();
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200">
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/boxes"
                className="flex items-center p-2 bg-[#f08080] text-white  rounded-md"
              >
                <Package className="h-5 w-5 mr-3 text-white" />
                <span>Boxes</span>
              </Link>
            </li>
            <li>
              <Link
                href="/my-profile"
                className="flex items-center p-2 text-gray-600  rounded-md"
              >
                <User className="h-5 w-5 mr-3" />
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
              <div className="flex items-center justify-between p-2  hover:bg-gray-100   rounded-md">
                <div className="flex flex-col">
                  <span className="text-gray-600 ">
                    {specefiqUser?.data?.firstName}
                  </span>
                  <span className="text-xs text-gray-600 ">
                    {specefiqUser?.data?.status}
                  </span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-600 " />
              </div>
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      {specifiqBox ? (
        <main className="flex-1 p-4 md:p-8">
          <div className="my-5">
            <h1 className={`${styles.fontInter} text-2xl font-bold`}>Boxes</h1>
            <p className={`${styles.fontInter}`}>Current Boxes</p>
          </div>
          <div className="flex flex-col  gap-8">
            {/* First Box Card */}

            <div className="bg-white rounded-2xl shadow-md  relative w-full md:w-1/2 xl:w-1/4">
              {/* Date Flag */}
              <div className="absolute top-10 left-0 w-32">
                <Image
                  src={shape || ""}
                  alt="flag"
                  className="w-full h-full"
                  priority
                />
                <span className="absolute top-0 left-4 text-gray-600 font-medium">
                  {" "}
                  {currentMonth} {currentYear}
                </span>
              </div>

              <div className="p-8 pt-20">
                <div className="flex items-start space-x-3 mb-6">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-[#f08080]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      Box Processed On {formattedDate}
                    </h3>
                    <p className="text-gray-500 mt-1">Thanks for reading!</p>
                  </div>
                </div>

                <Link href={"/checkoutSummary"}>
                  <button className="w-full bg-[#f08080] hover:bg-[#f08080]/90 text-white py-4 px-6 rounded-full mt-4 font-medium shadow-sm transition-all hover:shadow-md">
                    See Details
                  </button>
                </Link>
              </div>
            </div>

            {/* Second Box Card */}
            <div className="relative bg-[#FBD5D4] rounded-2xl shadow-md w-full md:w-1/2 py-5">
              {/* Header Section */}
              <div className="my-5 px-6">
                <h1 className={`${styles.fontInter} text-2xl font-bold`}>
                  Boxes
                </h1>
                <p className={`${styles.fontInter}`}>
                  Swipe through your daily deck and tell us which books seem
                  appealing! We&apos;ll use your preference to better improve
                  your upcoming boxes.
                </p>
              </div>

              {/* NEW Badge (Positioned Top-Right) */}
              <div className="absolute top-5 left-28">
                <span className="bg-[#f08080] text-white px-4 py-1 rounded-full text-sm font-medium shadow-sm">
                  NEW
                </span>
              </div>

              {/* Content Section */}
              <div className="px-8 flex flex-col items-center">
                <div className="mb-3">
                  <Image src={shop} width={500} height={500} alt="shop" />
                </div>

                <h3 className="text-xl font-medium text-gray-800 text-center mb-3">
                  Book Shuffle
                </h3>

                {/* <button className="w-full bg-white hover:bg-gray-50 text-gray-800 py-4 px-6 rounded-full font-medium shadow-sm transition-all hover:shadow-md">
      See Details
    </button> */}
              </div>
            </div>
          </div>
        </main>
      ) : (
        <div className="flex items-center justify-center text-center ml-96">
          <p className={`${styles.fontInter} text-2xl font-bold text-center `}>
            Box not found
          </p>
        </div>
      )}
    </div>
  );
};

export default BoxesPage;
