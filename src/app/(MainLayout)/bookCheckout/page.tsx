/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import wild from "@/assets/wild.png";
import { CreditCardOutlined } from "@ant-design/icons";
import Image from "next/image";
import style from "@/app/styles.module.css";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentCategoryId } from "@/redux/features/boxes/boxesSlice";
import { useGetSpecefiqBoxesQuery } from "@/redux/features/boxes/boxesApi";
import React, { useEffect, useState } from "react";
import LoadingPage from "@/app/loading";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { Minus, Plus} from "lucide-react";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

import { usePlaceCartOrderMutation } from "@/redux/features/cart/cartApi";
import { message } from "antd";
import { useRouter } from "next/navigation";

const QUANTITIES_STORAGE_KEY = "bookQuantities";

const BookCheckoutPage = () => {
  const router = useRouter();
  const currentCategory = useAppSelector(selectCurrentCategoryId);
  const categoryId = currentCategory?.categoryID;
  const { data: specifiqBox, isLoading, refetch } = useGetSpecefiqBoxesQuery(categoryId, {
    skip: !categoryId, // skip if empty
  });
  const books = specifiqBox?.data?.books;
  // console.log("current box books", books);
const user = useAppSelector(selectCurrentUser)
  // Store selected books IDs
  const [selectedBooks, setSelectedBooks] = useState<string[]>([]);
  const [selectedBooksWithQuantity, setSelectedBooksWithQuantity] = useState<string[]>([]);

  // Store quantity per bookId, default 1, load from localStorage if available
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  // Load quantities from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(QUANTITIES_STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setQuantities(parsed);
        } catch {
          // If parse error, ignore
        }
      }
    }
  }, []);

  // Save quantities to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(QUANTITIES_STORAGE_KEY, JSON.stringify(quantities));
    }
  }, [quantities]);

  const handleCheckboxChange = (bookId: string, checked: boolean) => {
    setSelectedBooks(prev => {
      if (checked) {
        // Add bookId if checked
        // Also initialize quantity to 1 if not already set
        setQuantities(q => ({ ...q, [bookId]: q[bookId] || 1 }));
        return [...prev, bookId];
      } else {
        // Remove bookId and remove quantity entry
        setQuantities(q => {
          const copy = { ...q };
          delete copy[bookId];
          return copy;
        });
        return prev.filter(id => id !== bookId);
      }
    });
  };

  const increaseQuantity = (bookId: string) => {
    setQuantities(prev => ({
      ...prev,
      [bookId]: (prev[bookId] || 1) + 1,
    }));
  };

  const decreaseQuantity = (bookId: string) => {
    setQuantities(prev => {
      const currentQty = prev[bookId] || 1;
      if (currentQty <= 1) return prev; // prevent less than 1
      return {
        ...prev,
        [bookId]: currentQty - 1,
      };
    });
  };

  // Whenever selectedBooks or quantities update, log corresponding book data with quantity
  React.useEffect(() => {
    const selectedBookData = books
      ?.filter((book: any) => selectedBooks.includes(book._id))
      .map((book: any) => ({
        ...book,
        quantity: quantities[book._id] || 1,
      }));
    console.log("Selected Books Data with quantities:", selectedBookData);
    setSelectedBooksWithQuantity(selectedBookData)
  }, [selectedBooks, quantities, books]);
// total discount
// total discount calculation
const totalDiscountSelector = (products: any[]) => {
  return products?.reduce((acc: number, product: any) => {
    if (product.isDiscount && product.discountPrice?.amount > 0) {
      const discountPerUnit = (product.price.amount * product.discountPrice.amount) / 100;
      return acc + discountPerUnit * (product.quantity || 1);
    }
    return acc;
  }, 0);
};

// console.log("discount",currencyFormatter(totalDiscountSelector(selectedBooksWithQuantity)));




  const [placeOrder]=usePlaceCartOrderMutation();
  const handleOrder = async() => {
    // Implement your order logic here
  const items = selectedBooksWithQuantity.map((product:any) => ({
    itemId: product._id, 
    quantity: product.quantity,
  }));
    const order = {
          items,
    shippingCost: 0,
    customerEmail: user?.user?.email
    }
    console.log("order",order);
    try{
      const res =await placeOrder(order)
      console.log("response",res);
      message.success(res.data.message)
      router.push(res?.data?.data?.url)

    }catch(error:any){
      console.log(error);
    }
  };



  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 5000); // Refetch every 5 seconds

    return () => clearInterval(interval);
  }, [refetch]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-wrap justify-between gap-6">
   <div className="w-full md:w-7/12 px-2">
  <h1 className={`text-2xl font-bold ${style.fontInter}`}>Book Checkout Summary</h1>
  <p className={`${style.fontInter} text-gray-600`}>Kept Books</p>

  {/* Render Books Dynamically */}
  {books?.map((book: any) => (
    <div key={book._id} className="bg-white shadow-md rounded-lg mt-5 p-4">
      <div className="flex flex-wrap items-center gap-4">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={selectedBooks.includes(book._id)}
          
          onChange={(e) => handleCheckboxChange(book._id, e.target.checked)}
          className="w-5 h-5 flex-shrink-0"
        />

        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
          <Image
            src={book.coverImage || wild}
            alt="Book Cover"
            fill
            className="object-cover rounded-md"
          />
        </div>

        <div className="flex-1 min-w-[150px]">
          <h3 className="text-base sm:text-lg font-semibold">{book.name}</h3>
          <p className="text-gray-500 text-xs sm:text-sm">By {book.author}</p>
        </div>

        <div className="text-right min-w-[140px]">
          <p className="text-black font-bold text-sm sm:text-base">
            <span className="mr-2">Price:</span>
            {currencyFormatter(book.price?.amount)}
          </p>
          <div className="flex items-center gap-2 mt-3 justify-end">
            <p className="text-gray-500 font-semibold text-xs sm:text-sm">Quantity</p>
            <button
              onClick={() => decreaseQuantity(book._id)}
              className="bg-gray-100 text-xs hover:bg-gray-200 rounded-full p-1 transition-all duration-200"
              // disabled={!selectedBooks.includes(book._id)}
              aria-label="Decrease quantity"
            >
              <Minus />
            </button>
            <p className="font-semibold text-xs sm:text-sm px-3 py-1 rounded-md border border-gray-300 min-w-[24px] text-center">
              {quantities[book._id] || 1}
            </p>
            <button
              onClick={() => increaseQuantity(book._id)}
              className="bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition-all duration-200"
              // disabled={!selectedBooks.includes(book._id)}
              aria-label="Increase quantity"
            >
              <Plus />
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

        {/* Right Section */}
        <div className="w-full md:w-4/12 mt-10 md:mt-0">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
            <div className="border-b mb-4"></div>

            {/* Book Subtotal */}
            <div className="flex justify-between mb-2">
              <span>Book Subtotal</span>
              {/* Calculate subtotal from selected books and quantities */}
              <span className="font-medium">
                {currencyFormatter(
                  books
                    ?.filter((book: any) => selectedBooks.includes(book._id))
                    .reduce((acc:any, book:any) => acc + (book.price?.amount || 0) * (quantities[book._id] || 1), 0) || 0
                )}
              </span>
            </div>

            {/* Illuminate Discount */}
            <div className="flex justify-between mb-2">
              <span>Illuminate Discount</span>
              <span className="font-medium">{currencyFormatter(totalDiscountSelector(selectedBooksWithQuantity))}</span>
            </div>

            {/* Taxes */}
            {/* <div className="flex justify-between mb-4">
              <span>Taxes</span>
              <span className="font-medium">$5.99</span>
            </div> */}

            {/* Order Total */}
            <div className="flex justify-between mb-4">
              <span className="font-semibold text-lg">Order Total</span>
              {/* subtotal - discount + taxes */}
              <span className="font-semibold text-lg">
                {currencyFormatter(
                  (books
                    ?.filter((book: any) => selectedBooks.includes(book._id))
                    .reduce((acc:any, book:any) => acc + (book.price?.amount || 0) * (quantities[book._id] || 1), 0) || 0)
                  - totalDiscountSelector(selectedBooksWithQuantity)
                 
                )}
              </span>
            </div>

            {/* Payment Method */}
            <div className="flex justify-between items-center">
                  <button
                // disabled={!proceed}
                  onClick={handleOrder}

                  className="w-full bg-[#F37975] md:px-8 p-4 md:h-12 flex items-center justify-center text-white hover:bg-red-500 border-none mb-4 my-5"
                >
                  <CreditCardOutlined className="text-white text-xl mr-3" />
                  Proceed Checkout
                </button>
           
            </div>
          </div>

  
        </div>
      </div>
    </div>
  );
};

export default BookCheckoutPage;
