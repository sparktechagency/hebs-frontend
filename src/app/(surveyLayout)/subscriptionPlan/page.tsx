/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { Radio } from "antd"
import {  LeftOutlined, RightOutlined } from "@ant-design/icons"
import Image from "next/image"
import packaging from "@/assets/tinnymuslimBox.png";
import Link from "next/link"
import { useGetSubscriptionsQuery } from "@/redux/features/survey/surveyApi"
import { useAppDispatch } from "@/redux/hooks"
import { resetPlanData, subscriptionPlan } from "@/redux/features/subscription/subscriptionSlice"

export default function SubscriptionPlanPage() {
  const [selectedPlan, setSelectedPlan] = useState("")
  const [subscribed, setSubscribed] = useState(false)
const {data:plans}=useGetSubscriptionsQuery(undefined)
// console.log("plans>>>",plans?.data);
// Find the first plan where the name matches selectedPlan
const selectedPlanObject = plans?.data?.find((plan: any) => plan.name === selectedPlan);
const dispatch = useAppDispatch();
// console.log("Selected plan object>>>", selectedPlanObject);
// handle plan submit

const handleSubmitPlans=()=>{
  dispatch(resetPlanData())
  dispatch(subscriptionPlan(selectedPlanObject))
}
  return (

    <>
      <div className="min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 mt-5">Choose your plan option:</h1>
    {
      plans?.data?.map((plan:any,idx:number)=>{
        // console.log(plan);
      return  <div className="max-w-2xl mx-auto p-6 " key={idx}>
      
  
        <div className="space-y-6">
          {/* Monthly Plan */}
          <div
            className={`border rounded-3xl p-6 shadow-sm relative ${selectedPlan === plan.name ? "border-blue-300" : "border-gray-200"}`}
          >
            <Radio
              checked={selectedPlan === plan.name}
              onChange={() => {
                setSelectedPlan(plan.name);
                setSubscribed(true);
              }}
              className="absolute top-6 right-6"
            />
  
            <div className="flex items-center mb-4">
              <div className="w-1/3">
                <Image
                  src={packaging}
                  alt="Stack of books"
                  width={180}
                  height={120}
                  className="object-contain"
                />
              </div>
              <div className="w-2/3">
                <h2 className="text-2xl font-medium text-gray-700">{plan.name} Membership</h2>
                <div className="mt-2">
                  <span className="text-3xl font-semibold text-red-400">{plan?.price?.amount}</span>
                  <span className="text-gray-500 ml-2">per month</span>
                </div>
                <p className="text-gray-600 mt-1">paid yearly- cart price $179.88</p>
              </div>
            </div>
  
            {/* <div className="mt-4">
              <div className="bg-red-50 rounded-xl p-3 flex items-center">
                <GiftOutlined className="text-green-500 text-xl mr-2" />
                <span className="text-gray-700">Get $60 credit to spend on books</span>
                <Tooltip title="Credit will be applied to your account after purchase">
                  <InfoCircleOutlined className="text-gray-400 ml-auto" />
                </Tooltip>
              </div>
  
              <div className="mt-4 flex items-center text-gray-600">
                <GiftOutlined className="text-red-400 text-xl mr-2" />
                <span>Get $60 credit to spend on books</span>
              </div>
            </div> */}
          </div>
  
          {/* Bi-Monthly Plan */}
          {/* <div
            className={`border rounded-3xl p-6 shadow-sm relative ${selectedPlan === "bimonthly" ? "border-blue-300" : "border-gray-200"}`}
          >
            <Radio
              checked={selectedPlan === "bimonthly"}
              onChange={() => setSelectedPlan("bimonthly")}
              className="absolute top-6 right-6"
            />
  
            <div className="py-2">
              <h2 className="text-2xl font-medium text-gray-700">Bi-Monthly Membership</h2>
              <div className="mt-2">
                <span className="text-3xl font-semibold text-red-400">$16.99</span>
                <span className="text-gray-500 ml-2">per month</span>
              </div>
              <p className="text-gray-600 mt-4">Cancel or change anytime</p>
            </div>
          </div> */}
  
          {/* Quarterly Plan */}
          {/* <div
            className={`border rounded-3xl p-6 shadow-sm relative ${selectedPlan === "quarterly" ? "border-blue-300" : "border-gray-200"}`}
          >
            <Radio
              checked={selectedPlan === "quarterly"}
              onChange={() => setSelectedPlan("quarterly")}
              className="absolute top-6 right-6"
            />
  
            <div className="py-2">
              <h2 className="text-2xl font-medium text-gray-700">Quarterly Membership</h2>
              <div className="mt-2">
                <span className="text-3xl font-semibold text-red-400">$18.99</span>
                <span className="text-gray-500 ml-2">per month</span>
              </div>
              <p className="text-gray-600 mt-4">Cancel or change anytime</p>
            </div>
          </div> */}
        </div>
      </div>
      })
    }
      </div>
  



{/* button */}
<div className=" bg-[#EDEBE6] shadow-lg p-5 w-full ">
<div className="container mx-auto flex justify-between ">
          {/* Back Button */}
          <Link href="/checkout">

<button className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition">
  <LeftOutlined/>
  <span className="font-semibold">Skip</span>
</button>
</Link>

{/* Next Button */}
<Link href={"/checkout"}>
<button
  className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition disabled:opacity-50"
 disabled={!subscribed}
 onClick={()=>{handleSubmitPlans()}}
>
  <span className="font-semibold">Continue</span>
  <RightOutlined />
</button>
</Link>
</div>
      </div>

    </>
  )
}

