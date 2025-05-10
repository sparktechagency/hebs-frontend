import { CartProduct, decrementOrderQuantity, incrementOrderQuantity, removeProduct } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";

export default function CartProductCard({ product }: { product: CartProduct }) {
  const dispatch = useAppDispatch();
  console.log("product==>", product);

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
    <div className="bg-white rounded-lg flex p-5 gap-5 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="h-full w-32 rounded-md overflow-hidden border border-gray-200">
        <Image
          src={product?.coverImage}
          height={200}
          width={200}
          alt="product"
          className="aspect-square object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <h1 className="text-xl font-semibold text-gray-800 hover:text-gray-600">{product?.name}</h1>
        <div className="flex gap-5 my-2">
          <p className="text-gray-500">Color: <span className="font-semibold">Black</span></p>
        </div>
        <hr className="my-2 border-t-2 border-gray-200" />
        <div className="flex items-center justify-between mt-2">
          <h2 className="font-semibold text-lg">
            Price: {currencyFormatter(product.discountPrice ? product.discountPrice.amount : product.price.amount)}
          </h2>
          <div className="flex items-center gap-3">
            <p className="text-gray-500 font-semibold">Quantity</p>
            <button
              onClick={() => handleDecrementQuantity(product._id)}
              className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-all duration-200"
            >
              <Minus />
            </button>
            <p className="font-semibold text-xl px-4 py-2 rounded-md border border-gray-300">
              {product?.orderQuantity}
            </p>
            <button
              onClick={() => handleIncrementQuantity(product._id)}
              className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-all duration-200"
            >
              <Plus />
            </button>
            <button
              onClick={() => handleRemoveProduct(product._id)}
              className="bg-red-100 hover:bg-red-200 rounded-full p-2 transition-all duration-200"
            >
              <Trash className="text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
