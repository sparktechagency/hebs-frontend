/* eslint-disable @next/next/no-img-element */
import {
  CartProduct,
  decrementOrderQuantity,
  incrementOrderQuantity,
  removeProduct,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { Minus, Plus, Trash } from "lucide-react";
// import Image from "next/image";

export default function CartProductCard({ product }: { product: CartProduct }) {
  const dispatch = useAppDispatch();

  const handleIncrementQuantity = (id: string) => {
    dispatch(incrementOrderQuantity(id));
  };

  const handleDecrementQuantity = (id: string) => {
    dispatch(decrementOrderQuantity(id));
  };

  const handleRemoveProduct = (id: string) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="bg-white rounded-lg p-4 flex flex-col sm:flex-row gap-4 shadow-md hover:shadow-xl transition duration-300 w-full">
      {/* Product Image */}
      <div className="w-full sm:w-32 h-48 sm:h-auto mx-auto sm:mx-0 flex-shrink-0 border border-gray-200 rounded-md overflow-hidden">
        {/* <Image
          src={product?.coverImage}
          width={200}
          height={200}
          alt="product"
          className="w-full h-full object-cover"
        /> */}
        <img
          src={product?.coverImage}
          width={200}
          height={200}
          alt="product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-between flex-1">
        {/* Title & Color */}
        <div className="space-y-1 text-center sm:text-left">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">{product?.name}</h2>
          <p className="text-sm text-gray-500">
            Color: <span className="font-semibold">Black</span>
          </p>
        </div>

        <hr className="my-3 border-gray-200" />

        {/* Price & Quantity */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center justify-between">
          <h3 className="text-sm sm:text-base font-semibold text-center sm:text-left">
            Price: {currencyFormatter(product?.price?.amount)}
          </h3>

          <div className="flex items-center justify-center sm:justify-end gap-2 flex-wrap">
            <span className="text-sm text-gray-500 font-medium">Quantity</span>

            <button
              onClick={() => handleDecrementQuantity(product._id)}
              className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <Minus size={14} />
            </button>

            <span className="text-sm font-semibold border px-3 py-1 rounded-md">
              {product?.orderQuantity}
            </span>

            <button
              onClick={() => handleIncrementQuantity(product._id)}
              className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <Plus size={14} />
            </button>

            <button
              onClick={() => handleRemoveProduct(product._id)}
              className="p-1.5 rounded-full bg-red-100 hover:bg-red-200"
            >
              <Trash size={14} className="text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
