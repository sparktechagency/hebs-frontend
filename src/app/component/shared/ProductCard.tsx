/* eslint-disable @typescript-eslint/no-explicit-any */
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import {
  useFavouriteBooksMutation,
  useGetAllFavouritesBooksQuery,
} from "@/redux/features/books/bookApi";
import { useAppSelector } from "@/redux/hooks";
import { message } from "antd";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }: { product: any }) => {
  const [favouriteBook] = useFavouriteBooksMutation();
  const user = useAppSelector(selectCurrentUser);
  const router = useRouter();
  // get fav books
  const { data: favouriteBooks } = useGetAllFavouritesBooksQuery(user?.userId);
  console.log(favouriteBooks?.data?.books);
  const favouriteBooksArray = favouriteBooks?.data?.books;
  const favouriteBooksArray2 =
    favouriteBooks?.data?.books?.includes(favouriteBooksArray);
  console.log("fav book array===>", favouriteBooksArray2);
  const isFavourite = favouriteBooks?.data?.books?.includes(product._id);
  console.log("Is favourite:", isFavourite, "for product ID:", product._id);

  // add favrt book
  const handleFavourite = async (bookId: string) => {
    if (!user?.userId || !bookId) {
      console.error("User or Book ID is missing");
      return;
    }

    try {
      // Call the mutation and wait for the response
      const res = await favouriteBook({ userId: user.userId, bookId });
      console.log("Mutation Response:", res);

      // Assuming the message is inside `res.data` based on your mutation
      if (res?.data?.message) {
        message.success(res.data.message);
        // setFavorites(true)
      } else {
        console.error("Message not found in the response");
      }
    } catch (error) {
      console.error("Error during mutation:", error);
    }
  };

  return (
    <div>
      <div
        className="rounded-lg p-3 flex flex-col cursor-pointer"
        // onClick={() => router.push(`/bookStore/${product.id}`)}
      >
        <div className="relative h-48 mb-3 rounded-md bg-[#fffbeb]">
          <Link href={`/bookStore/${product._id}`}>
            <Image
              src={product.coverImage || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
            />
          </Link>
          <button
            onClick={() => handleFavourite(product._id)}
            className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors z-10"
          >
            <HeartIcon
              size={20}
              className={
                favouriteBooks?.data?.books?.includes(product._id)
                  ? "fill-red-500 text-red-500"
                  : "text-gray-500"
              }
            />
          </button>
        </div>

        {/* Add to Bag Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // 🔥 Prevents clicking on the whole card
            router.push("/cart");
          }}
          className="w-full py-2 bg-[#ffd6d6] text-black rounded-md text-sm font-medium mb-2 hover:bg-[#ffbdbd] transition-colors"
        >
          Add to Bag
        </button>

        <h3 className="text-sm font-medium line-clamp-2 mb-1">
          {product.name}
        </h3>
        <p className="text-sm">${product.price.amount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
