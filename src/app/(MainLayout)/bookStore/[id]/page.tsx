"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { InputNumber, Button, Collapse, Modal, message } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  PinterestOutlined,
  MailOutlined,
  LinkOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";

import RelatedBooks from "@/app/component/RelatedBooks";
import styles from "@/app/styles.module.css";
import { useParams } from "next/navigation";
import { useGetSingleBooksQuery } from "@/redux/features/books/bookApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addProduct, CartProduct, decrementOrderQuantity, incrementOrderQuantity, orderedProductsSelector } from "@/redux/features/cart/cartSlice";

export default function DetailsPage() {
  const params = useParams();
  console.log("params", params);
  const { id } = params;
  console.log(id);
  const {data}=useGetSingleBooksQuery(id)
  console.log("single book=>",data?.data);

const {name,description,price,author,level,weight,format,coverImage,_id}=data?.data ||{};

  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useAppDispatch();

  // add product to cart
    const handleAddProduct = (product: CartProduct) => {
      dispatch(addProduct(product));
      message.success("Product Added ")
    };

   const products = useAppSelector(orderedProductsSelector);
   const orderQuantity=products.find(product => product._id === _id)?.orderQuantity
// console.log(products.find(product => product._id === _id)?.orderQuantity);


  const handleIncrementQuantity = (id: string) => {
    dispatch(incrementOrderQuantity(id));
  };

  const handleDecrementQuantity = (id: string) => {
    dispatch(decrementOrderQuantity(id));
  };
  const showModal = () => {
    setIsModalVisible(true); 
  };

  const handleOk = () => {
    setIsModalVisible(false); 
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="">
      <div className={`w-full shadow-2xl ${styles.fontInter}`}>
        {/* <div className="container mx-auto flex flex-wrap justify-between items-center px-4 sm:px-8 md:px-10 py-4">
 
          <h1 className="text-lg sm:text-xl text-[#595959] mb-4">
         {name}
          </h1>

      
          <div className="my-4">
            <Link href="/cart">
              <button className="uppercase bg-[#E8E8E8] px-4 py-2 text-sm sm:text-base">
                Add to bag
              </button>
            </Link>
          </div>
        </div> */}
      </div>

      <div className="max-w-7xl mx-auto p-6 md:p-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center items-start">
            <div className="relative w-full max-w-md aspect-square bg-amber-50 rounded-md p-4 flex items-center justify-center">
              <Image
                src={coverImage}
                alt="1001 Inventions and Awesome Facts from Muslim Civilization"
                width={400}
                height={400}
                className="object-contain"
              />
              {/* zoom icon */}
              <div
                className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md"
                onClick={showModal}
              >
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
          {/* Zoomed image modal */}
          <Modal
            title="Zoomed Image"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            width={800}
          >
            <div className="flex justify-center items-center">
              <Image
                src={coverImage}
                alt="1001 Inventions and Awesome Facts from Muslim Civilization"
                width={700}
                height={700}
                className="object-contain"
              />
            </div>
          </Modal>

          {/* Product Details */}
          <div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
             {name}
              </h1>
            </div>

            <p className="text-gray-600 mb-6">
        {description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-gray-500 font-medium">ISBN:</h3>
                <p>978-1426312588</p>
              </div>
              <div>
                <h3 className="text-gray-500 font-medium">Format:</h3>
                <p>{format}</p>
              </div>
              <div>
                <h3 className="text-gray-500 font-medium">Author:</h3>
                <p>{author}</p>
              </div>
              <div>
                <h3 className="text-gray-500 font-medium">Grade Level:</h3>
                <p>{level}</p>
              </div>
              <div>
                <h3 className="text-gray-500 font-medium">Age Range:</h3>
                <p>7 8 9 10 11</p>
              </div>
              <div>
                <h3 className="text-gray-500 font-medium">Weight:</h3>
                <p>{weight}</p>
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

            <div className="text-2xl font-bold text-gray-800 mb-2">${price?.amount}</div>
            <div className="text-sm text-gray-600 mb-1">
              Pay over time for orders over{" "}
              <span className="font-semibold">${price?.amount}</span> with{" "}
              {/* <Link href="#" className="text-blue-600 underline">
                Learn more
              </Link> */}
            </div>
            <div className="text-sm text-gray-500 mb-6">
              Tax included. Shipping calculated at checkout
            </div>

            <div className="mb-6">
              <h3 className="text-gray-700 font-medium mb-2">Quantity</h3>
              <div>
                <div className="flex justify-between">
                  <div className="inline-flex items-center bg-[#FEF2F1] p-1 rounded-md">
                    <Button
                      icon={<MinusOutlined />}
                      // onClick={decreaseQuantity}
                      className="border border-gray-300 text-gray-600"
                      onClick={()=>handleDecrementQuantity(_id)}
                    />
                    <InputNumber
                      min={1}
                      // onChange={handleQuantityChange}
                      value={orderQuantity}
                      // value={quantity}
                      controls={false}
                      className="mx-2 w-16 text-center"
                    />
                    <Button
                      icon={<PlusOutlined  />}
                      // onClick={increaseQuantity}
                      className="border border-gray-300 text-gray-600"
                      onClick={()=>handleIncrementQuantity(_id)}
                    />
                  </div>
                  <div>
                    {/* <Link href={"/cart"} > */}
                      <button className="w-full bg-[#F37975] md:px-8 p-4  md:h-12 flex items-center justify-center text-[#ffffff] hover:bg-red-500 border-none mb-4" onClick={()=>handleAddProduct(data?.data)}>
                        ADD TO BAG
                      </button>
                    {/* </Link> */}
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
                      <p>
                        Standard shipping takes 3-5 business days. Express
                        shipping is available at checkout.
                      </p>
                      <p>
                        Returns accepted within 30 days of purchase. Item must
                        be in original condition.
                      </p>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            YOU MAY ALSO LIKE
          </h2>
          <RelatedBooks />
        </div>
      </div>
    </div>
  );
}
