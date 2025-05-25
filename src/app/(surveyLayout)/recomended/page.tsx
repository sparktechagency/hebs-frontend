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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "@/redux/features/boxes/boxesSlice";
// {setIsEmail,setIsRecomended}:{  setIsEmail: (value: boolean) => void,setIsRecomended: (value: boolean) => void} 
export default function BookRecommendations() {
  const surveyData = useAppSelector(selectCurrentSurvey)
  // console.log("survey from redux",surveyData?.dateOfBirth);
  // const handleBack = () => {
  //   setIsEmail(true);
  //   setIsRecomended(false);
  // };
  const dispatch = useDispatch();
  const {data:recommended,isLoading}=useGetRecommendationQuery(surveyData?.dateOfBirth)
  console.log("recommended==>",recommended?.data?.category?._id);
  useEffect(() => {
    if (recommended?.data?.category?._id) {
      dispatch(addCategory(recommended.data.category._id));
    }
  }, [recommended, dispatch]);


  if(isLoading){
    return <LoadingPage/>
  }

  return (
    <>
    
    <div className="min-h-screen text-black p-4 md:p-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl text-center md:text-4xl font-bold mb-12">
          Here&apos;s what we recommend for <span className="uppercase text-[#FF7171]">{surveyData?.readerName}!</span>
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
            <p className="text-2xl text-black   mb-4">Current Reading Level</p>
          <h2 className="text-2xl text-black  font-semibold mb-4">Legend</h2>
          <div className="inline-block bg-[#ff7171] text-black px-4 py-1.5 rounded-full text-sm font-medium">
            {recommended?.data?.category?.ageGroup}
          </div>
          <p className="py-3">{recommended?.data?.description}</p>
        </div>

        {/* Content Container */}
        <div className="  p-8 mb-8 border-t border-black">
          <div className="space-y-6">
            <h1 className="text-start font-bold">Key skills to practice</h1>
            {/* Content items with sparkle icons */}
            {recommended?.data?.skillSuggestions?.map((item:string,id:string) => (
              <div key={id} className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#ff7171] flex-shrink-0 mt-1" />
                <p className="">
               {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content */}
   <div className="p-8  border-t border-black">
   <div className="space-y-6 mb-12">
        <h1 className="text-start font-bold py-3">Recommended book types</h1>
          {recommended?.data?.bookCategorySuggestions?.map((item:any,_id:string) => (
            <div key={_id} className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#ff7171] flex-shrink-0 mt-1" />
              <p className="">
          {item.title}
              </p>
            </div>
          ))}
        </div>
   </div>
        </div>

        {/* Footer */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#ff7171] text-center my-5">
          What happens next?
        </h2>
        <p>Your first box is set to eyasin&apos;s reading level and includes a variety of books-from the genres chosen as well as new ones to discover. Each book helps your reader develop key skills. When you rate each book in the Literati Kids App, we learn what your reader likes, helping to personalize future boxes!</p>
      </div>
    </div>

{/* button is here*/}
<div className=" bg-[#EDEBE6] shadow-lg p-5 w-full">
<div className="container mx-auto flex justify-center ">
          {/* Back Button */}
          {/* <Link href="/name">

<button  className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition">
  <LeftOutlined/>
  <span className="font-semibold">Back</span>
</button>
</Link> */}  

{/* Next Button */}
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
