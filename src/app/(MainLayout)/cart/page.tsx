import FeatureBook from "@/app/component/Home/FeatureBook";

import Image from "next/image";
import frame from "@/assets/Frame 6.png"

const CartPage = () => {
    return (
        <div>
            <div className="flex items-center justify-center p-4 mb:p-12">
      <div className="bg-[#FFFFFF] mt-16 mb-12 lg:mb-0 md:mb-0 md:p-8 lg:p-8 p-1 rounded-2xl shadow-lg flex flex-col items-center md:w-96 lg:w-96">
        <div className="relative w-32 h-32 mb-4">
          <Image src={frame} alt="Empty Cart" layout="fill" objectFit="contain" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900">Your bag is empty</h2>
        <p className="text-gray-500 text-sm text-center mb-4">
          Your bag is empty. Start adding items to enjoy shopping!
        </p>

      </div>
    </div>
       <div className="mb:relative mb:top-28 lg:relative lg:top-28">
       <FeatureBook/>
       </div>
        </div>
    );
};

export default CartPage;