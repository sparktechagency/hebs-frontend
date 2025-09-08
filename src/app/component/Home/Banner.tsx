/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import bannerImg from "@/assets/BannerImage.png";
import styles from "@/app/styles.module.css";
import frame1 from "@/assets/tinyMuminsFrame1.png";

import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

import { message } from "antd";
import { useRouter } from "next/navigation";
import { useGetSpecefiqUserQuery } from "@/redux/features/auth/authApi";

const Banner = () => {
  // bg-[#FDFBDF]
  const router = useRouter();
  // const [createSubscription] = useCreateSubscriptionMutation();
  const user = useAppSelector(selectCurrentUser);
  const { data: specefiqUser } = useGetSpecefiqUserQuery(user?.userId);
  const survey = specefiqUser?.data?.survey;
   const issubscribe = specefiqUser?.data?.subscription?.isActive;
  console.log("subscription purchase", issubscribe);
  // const plan = useAppSelector(selectCurrentPlan);
  const handleSurvey = async () => {
    //  const orderData = {
    //     userId: user?.userId,
    //     priceId: plan?.priceId,
    //   };
    // try {

    //   const res = (await createSubscription(orderData)) as any;
    //   console.log("response===>", res);
    if (survey && issubscribe) {
      message.success(
        "You have already done our survey.Thank you for stay with us"
      );
    } else {
      router.push("/name");
    }
  };

  return (
    <div
      className="w-full  px-4 py-20 lg:py-28"
      style={{ backgroundImage: `url(${frame1.src})` }}
    >
      <section className=" max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left Content */}
          <div className="w-full md:w-[55%] text-center md:text-left flex flex-col justify-center items-center md:items-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <h1
              className={`font-cursive text-4xl md:text-5xl lg:text-5xl xl:text-7xl text-[#F37975] ${styles.fontHotel}`}
            >
              The Muslim Book Club
            </h1>
            <p
              className={`text-[#1C1C1C] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${styles.fontRozha} border-b-4 border-[#F37975]  pb-2`}
            >
              for exceptional young readers.
            </p>
            {/* <div className="border-b-4 border-[#F37975] mt-3"></div> */}
            <p
              className={`text-xm sm:text-sm md:text-base lg:text-lg xl:text-xl text-center md:text-left max-w-md lg:max-w-lg xl:max-w-xl ${styles.fontPoppins}`}
            >
              Help your readers grow with a personalized book selection curated
              monthly by our team of experts and shipped to your door.
            </p>
            {/* <Link href="/name"> */}
            <div className="flex hidden  md:block  justify-center mt-1">
              <button
                onClick={() => handleSurvey()}
                className={` tracking-widest  rounded-full bg-[#F37975] p-2 md:p-3  text-base sm:text-lg md:text-xl hover:bg-[#e57373] text-white ${styles.fontPoppins}`}
              >
                START TODAY
              </button>
            </div>
            {/* </Link> */}
          </div>

          {/* Right Content - Book Covers */}
          <div className="w-full  md:mb-0 md:w-[48%] flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <Image
              src={bannerImg}
              alt="Book Club Banner"
              width={500}
              height={500}
              className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
