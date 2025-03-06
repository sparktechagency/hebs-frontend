"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

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
   <div className="bg-[#ffffff] py-12">
     <div className="max-w-4xl mx-auto p-4 ">
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