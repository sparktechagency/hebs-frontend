/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Package, User, FileText,  ChevronRight } from "lucide-react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import styles from "@/app/styles.module.css"
import { useGetBillingQuery } from "@/redux/features/survey/surveyApi"
import { useAppSelector } from "@/redux/hooks"
import { selectCurrentUser } from "@/redux/features/auth/authSlice"
import LoadingPage from "@/app/loading"
import { useGetSpecefiqUserQuery } from "@/redux/features/auth/authApi"
import { currencyFormatter } from "@/utils/currencyFormatter"

const BillingHistory=()=> {
  const user = useAppSelector(selectCurrentUser)
  console.log(user);
    const { data: singleUser } = useGetSpecefiqUserQuery(user?.userId);
  const {data:billing,isLoading}=useGetBillingQuery(user?.userId)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})
if(isLoading){
  return <LoadingPage/>
}
console.log("billing------------->",billing);


  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
   <div className={`${styles.fontInter} flex flex-col md:flex-row min-h-screen bg-gray-50`}>
           {/* Sidebar */}
           <aside className="w-full md:w-64 bg-white border-r border-gray-200">
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link href="/boxes" className="flex items-center p-2  text-gray-600 hover:bg-gray-100 rounded-md">
                <Package className="h-5 w-5 mr-3 text-gray-600" />
                <span>Boxes</span>  
              </Link>
            </li>
            <li>
              <Link href="/my-profile" className="flex items-center p-2 text-gray-600 hover:bg-gray-100  rounded-md">
                <User className="h-5 w-5 mr-3" />
                <span>Account Details</span>
              </Link>
            </li>
            <li>
              <Link href="/billing" className="flex items-center p-2 bg-[#f08080] text-white  rounded-md">
                <FileText className="h-5 w-5 mr-3 text-white" />
                <span>Billing History</span>
              </Link>
            </li>
          </ul>

          <div className="mt-8 border-t border-gray-200 pt-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">SUBSCRIPTION SETTINGS</h3>
                     <Link href={"/subscription"}>
              
           <div className="flex items-center justify-between p-2  hover:bg-gray-100   rounded-md">
                <div className="flex flex-col">
                  <span className="text-gray-600 ">
                    {singleUser?.data?.firstName}
                  </span>
                  <span className="text-xs text-gray-600 ">
                    {singleUser?.data?.status} 
                  </span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-600 " />
              </div>
              </Link>
          </div>


        </nav>
      </aside>   

    
          {/* Main Content */}
     <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-8">Billing History</h1>

      <div className="space-y-6">
   {billing?.data?.map((item: any) => {
  console.log("Billing item:", item);
const process = item?.createdAt;
const formattedProccessed = process ? process.split("T")[0] : null;
const formattedDate = formattedProccessed
  ? new Date(formattedProccessed).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric", 
    })
  : null;

  return (
    <div key={item._id} className="rounded-lg shadow-sm border border-gray-100">
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium">
            {item?.contentId?.paymentInfo?.status|| item?.contentId?.status || item?.contentId?.paymentStatus}
          </span>
          <span className="text-gray-700">{formattedDate}</span>
        </div>
        <span className="font-medium">{currencyFormatter(item?.contentId?.total ?item?.contentId?.total?.amount :0 )}</span>
      </div>

      {item?.title && (
        <>
          <div className="border-t border-gray-200"></div>
          <div
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleExpand(item?.id)}
          >
            <h3 className="font-medium">{item.title}</h3>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                expandedItems[item.id] ? "transform rotate-180" : ""
              }`}
            />
          </div>

          {expandedItems[item.id] && item.details && (
            <div className="px-4 pb-4">
              {item.details.map((detail: any, index: number) => (
                <p key={index} className="text-gray-700">
                  {detail}
                </p>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
})}

      </div>
    </div>
   </div>
  )
}

export default BillingHistory