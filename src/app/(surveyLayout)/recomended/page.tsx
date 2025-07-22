/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import packaging from "@/assets/tinnymuslimBox.png";
import Link from "next/link";
import { RightOutlined } from "@ant-design/icons";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentSurvey } from "@/redux/features/survey/surveySlice";
import { useGetRecommendationQuery } from "@/redux/features/survey/surveyApi";
import LoadingPage from "@/app/loading";
import { useEffect, } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "@/redux/features/boxes/boxesSlice";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";


export default function BookRecommendations() {
  const surveyData = useAppSelector(selectCurrentSurvey);
  console.log("survey data->",surveyData);
  const dispatch = useDispatch();
  const { data: recommended, isLoading } = useGetRecommendationQuery(
    surveyData?.dateOfBirth
  );
    console.log("recomended data--->",recommended);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const user = useAppSelector(selectCurrentUser);
  // const router = useRouter();

  // Local state to control redirect flow
  // const [redirecting, setRedirecting] = useState(false);

  // useEffect(() => {
  //   if (!user && !redirecting) {
  //     message.error("User Not found Please Login");
  //     setRedirecting(true);
  //     setTimeout(() => {
  //       router.push("/login");
  //     }, 1000);
  //   }
  // }, [user, redirecting, router]);

  // useEffect(() => {
  //   if (!recommended && !redirecting && !isLoading) {
  //     message.info("At first you have to complete the survey");
  //     setRedirecting(true);
  //     setTimeout(() => {
  //       router.push("/name");
  //     }, 1000);
  //   }
  // }, [recommended, redirecting, router, isLoading]);

  // Add category when recommendation is available
  useEffect(() => {
    if (recommended?.data?.category?._id) {
      dispatch(addCategory(recommended.data.category._id));
    }
  }, [recommended, dispatch]);

  // If redirecting or loading, show loading page only - no UI or logic
  if ( isLoading) {
    return <LoadingPage />;
  }

  // If no user or recommendation and not redirecting yet, don't render UI to prevent flashes
  // if (!user || !recommended) {
  //   return null;
  // }

  return (
    <>
      <div className="min-h-screen text-black p-4 md:p-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h1 className="text-3xl text-center md:text-4xl font-bold mb-12">
            Here&apos;s what we recommend for{" "}
            <span className="uppercase text-[#FF7171]">
              {surveyData?.readerName}!
            </span>
          </h1>

          {/* Books */}
          <div className="flex justify-center items-end gap-4 md:relative md:top-16 lg:relative lg:top-16 ">
            <Image
              src={packaging}
              alt={"packaging"}
              width={350}
              height={160}
              className="rounded-lg shadow-2xl bg-white"
            />
          </div>

          <div className="text-center border border-black p-8 rounded-3xl">
            {/* Legend Section */}
            <div className="mb-8 pt-16">
              <p className="text-2xl text-black mb-4">Current Reading Level</p>
              <h2 className="text-2xl text-black font-semibold mb-4">{recommended?.data?.category?.title}</h2>
              <div className="inline-block bg-[#ff7171] text-black px-4 py-1.5 rounded-full text-sm font-medium">
                {recommended?.data?.category?.ageGroup}
              </div>
              <p className="py-3">{recommended?.data?.description}</p>
            </div>

            {/* Content Container */}
            <div className="p-8 mb-8 border-t border-black">
              <div className="space-y-6">
                <h1 className="text-start font-bold">Key skills to practice</h1>
                {recommended?.data?.skillSuggestions?.map(
                  (item: string, id: string) => (
                    <div key={id} className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-[#ff7171] flex-shrink-0 mt-1" />
                      <p>{item}</p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Additional Content */}
            <div className="p-8 border-t border-black">
              <div className="space-y-6 mb-12">
                <h1 className="text-start font-bold py-3">
                  Recommended book types
                </h1>
                {recommended?.data?.bookCategorySuggestions?.map(
                  (item: any, _id: string) => (
                    <div key={_id} className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-[#ff7171] flex-shrink-0 mt-1" />
                      <p>{item.title}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#ff7171] text-center my-5">
            What happens next?
          </h2>
          <p>
            Your first box is set to eyasin&apos;s reading level and includes a
            variety of books-from the genres chosen as well as new ones to
            discover. Each book helps your reader develop key skills. When you
            rate each book in the Literati Kids App, we learn what your reader
            likes, helping to personalize future boxes!
          </p>
        </div>
      </div>

      {/* button is here */}
      <div className="bg-[#EDEBE6] shadow-lg p-5 w-full">
        <div className="container mx-auto flex justify-center ">
          <Link href={"/subscriptionPlan"}>
            <button
              className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition disabled:opacity-50"
            >
              <span className="font-semibold">Continue</span>
              <RightOutlined />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
