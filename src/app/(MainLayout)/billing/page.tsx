"use client"
import { Package, User, FileText, Plus, ChevronRight } from "lucide-react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import styles from "@/app/styles.module.css"
interface BillingItem {
  id: string
  status: "PAID" | "INVOICE"
  date: string
  amount: string
  title?: string
  details?: string[]
}

const BillingHistory=()=> {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  const billingData: BillingItem[] = [
    {
      id: "1",
      status: "PAID",
      date: "May 11, 2025",
      amount: "$14.59",
      title: "Bought 5 Books For Ahmed",
      details: ["MAY: ALLAH MADE ME"],
    },
    {
      id: "2",
      status: "INVOICE",
      date: "May 11, 2025",
      amount: "$14.59",
      title: "Bought 5 Books For Ahmed",
      details: ["MAY: ALLAH MADE ME"],
    },
    {
      id: "3",
      status: "PAID",
      date: "May 11, 2025",
      amount: "$14.59",
      title: "Bought 5 Books For Ahmed",
      details: ["MAY: ALLAH MADE ME"],
    },
    {
      id: "4",
      status: "INVOICE",
      date: "May 11, 2025",
      amount: "$14.59",
      title: "Bought 5 Books For Ahmed",
      details: ["MAY: ALLAH MADE ME"],
    },
  ]

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
              
            <div className="flex items-center justify-between p-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <div className="flex flex-col">
                <span className="text-[#f08080]">Ahmed</span>
                <span className="text-xs text-[#f08080]/70">Inactive</span>
              </div>
              <ChevronRight className="h-5 w-5 text-[#f08080]" />
            </div>
              </Link>
          </div>

        <Link href={"/name"}>
        <button className="mt-4 flex items-center text-[#f08080] p-2" style={{ textShadow: "2px 2px 4px #00000040" }}>
            <Plus className="h-4 w-4 mr-1" />
            <span>Add Subscriptions</span>
          </button>
        </Link>
        </nav>
      </aside>   

    
          {/* Main Content */}
     <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-8">Billing History</h1>

      <div className="space-y-6">
        {billingData.map((item) => (
          <div key={item.id} className="rounded-lg shadow-sm border border-gray-100">
            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium">
                  {item.status}
                </span>
                <span className="text-gray-700">{item.date}</span>
              </div>
              <span className="font-medium">{item.amount}</span>
            </div>

            {item.title && (
              <>
                <div className="border-t border-gray-200"></div>
                <div
                  className="p-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(item.id)}
                >
                  <h3 className="font-medium">{item.title}</h3>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${expandedItems[item.id] ? "transform rotate-180" : ""}`}
                  />
                </div>

                {expandedItems[item.id] && item.details && (
                  <div className="px-4 pb-4">
                    {item.details.map((detail, index) => (
                      <p key={index} className="text-gray-700">
                        {detail}
                      </p>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
   </div>
  )
}

export default BillingHistory