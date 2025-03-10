"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { InputNumber, Button, Collapse } from "antd"
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  PinterestOutlined,
  MailOutlined,
  LinkOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons"
import img from "@/assets/1001Inventions_1.png.png"
import RelatedBooks from "@/app/component/RelatedBooks"
import styles from "@/app/styles.module.css"
export default function DetailsPage() {
  const [quantity, setQuantity] = useState(1)

  const handleQuantityChange = (value: number | null) => {
    if (value !== null) {
      setQuantity(value)
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <>
<div className={`w-full shadow-2xl  ${styles.fontInter}`}>
<div className={`flex justify-between container mx-auto  `}>
      <div>
      <h1 className=" text-[#595959] text-xl mb-4 p-5">
          1001 Inventions and Awesome Facts from Muslim Civilization
          </h1>
      </div>
<div className="my-4">
<Link href={"/cart"}>
<button className={`uppercase bg-[#E8E8E8] p-2`}>
Add to bag
  </button>
</Link>
</div>
          </div>
</div>
    <div className="max-w-7xl mx-auto px-4 py-8">

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-start">
          <div className="relative w-full max-w-md aspect-square bg-amber-50 rounded-md p-4 flex items-center justify-center">
            <Image
              src={img}
              alt="1001 Inventions and Awesome Facts from Muslim Civilization"
              width={400}
              height={400}
              className="object-contain"
            />
            <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24" 
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-zoom-in"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" x2="16.65" y1="21" y2="16.65" />
                <line x1="11" x2="11" y1="8" y2="14" />
                <line x1="8" x2="14" y1="11" y2="11" />
              </svg>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div>
          <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
          1001 Inventions and Awesome Facts from Muslim Civilization
          </h1>

          </div>

          <p className="text-gray-600 mb-6">
            We often think that people from a thousand years ago were living in the Dark Ages. But from the 7th century
            onward in Muslim civilization, there were amazing advances and inventions that still influence our everyday
            lives. People living in the Muslim world saw what the Egyptians, Chinese, Indians, Greeks, and Romans had
            discovered and spent the next one thousand years adding new developments and ideas. Inventors created
            marvels like the elephant water clock, explorers drew detailed maps of the world, women made scientific
            breakthroughs and founded universities, architects built huge domes larger than anywhere else on Earth,
            astronomers mapped the stars and so much more! This book takes the winning formula of facts, photos, and
            fun, and applies it to this companion book to the 1001 Inventions exhibit from the Foundation for Science,
            Technology, and Civilization. Each page is packed with information on this little-known history, but also
            shows how it still applies to our world today.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="text-gray-500 font-medium">ISBN:</h3>
              <p>978-1426312588</p>
            </div>
            <div>
              <h3 className="text-gray-500 font-medium">Format:</h3>
              <p>Hardcover</p>
            </div>
            <div>
              <h3 className="text-gray-500 font-medium">Author:</h3>
              <p>National Geographic</p>
            </div>
            <div>
              <h3 className="text-gray-500 font-medium">Grade Level:</h3>
              <p>First grade - Fifth grade</p>
            </div>
            <div>
              <h3 className="text-gray-500 font-medium">Age Range:</h3>
              <p>7 8 9 10 11</p>
            </div>
            <div>
              <h3 className="text-gray-500 font-medium">Weight:</h3>
              <p>1.55 lb</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-gray-500 font-medium mb-2">Share:</h3>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                <FacebookOutlined className="text-xl" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-400">
                <TwitterOutlined className="text-xl" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-700">
                <LinkedinOutlined className="text-xl" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-red-600">
                <PinterestOutlined className="text-xl" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <MailOutlined className="text-xl" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-500">
                <LinkOutlined className="text-xl" />
              </Link>
            </div>
          </div>

          <div className="text-2xl font-bold text-gray-800 mb-2">$14.95</div>
          <div className="text-sm text-gray-600 mb-1">
            Pay over time for orders over <span className="font-semibold">$35.00</span> with{" "}
            <Link href="#" className="text-blue-600 underline">
              Learn more
            </Link>
          </div>
          <div className="text-sm text-gray-500 mb-6">Tax included. Shipping calculated at checkout</div>

          <div className="mb-6">
            <h3 className="text-gray-700 font-medium mb-2">Quantity</h3>
<div>
  <div className="flex justify-between">
  <div className="inline-flex items-center bg-[#FEF2F1] p-1 rounded-md">
  <Button
    icon={<MinusOutlined />}
    onClick={decreaseQuantity}
    className="border border-gray-300 text-gray-600"
  />
  <InputNumber
    min={1}
    value={quantity}
    onChange={handleQuantityChange}
    controls={false}
    className="mx-2 w-16 text-center"
  />
  <Button
    icon={<PlusOutlined />}
    onClick={increaseQuantity}
    className="border border-gray-300 text-gray-600"
  />
  </div>
<div>
<Link href={"/cart"}>
<button className="w-full bg-[#F37975] px-8 h-12 flex items-center justify-center text-[#ffffff] hover:bg-red-500 border-none mb-4">
  ADD TO BAG
</button>
</Link>

</div>
</div>
  

</div>

          </div>


          <Button type="link" className="w-full text-gray-600 mb-6">
            More payment options.....
          </Button>

          <Collapse
            className="bg-[#FEF2F1] border border-gray-200"
            items={[
              {
                key: "1",
                label: (
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M5 9h14l-4.5 7H9.5L5 9Z" />
                      <path d="M3 4h18v2H3z" />
                      <path d="M14 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                      <path d="M10 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    </svg>
                    Shipping and Return Policy
                  </div>
                ),
                children: (
                  <div className="p-4">
                    <p>Standard shipping takes 3-5 business days. Express shipping is available at checkout.</p>
                    <p>Returns accepted within 30 days of purchase. Item must be in original condition.</p>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>

      {/* You May Also Like Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">YOU MAY ALSO LIKE</h2>
        <RelatedBooks />
      </div>
    </div>
    </>
  )
}

