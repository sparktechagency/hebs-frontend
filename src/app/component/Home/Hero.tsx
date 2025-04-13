"use client";

import Image from "next/image";
import img1 from "@/assets/Image (1).png";
import img2 from "@/assets/Image.png";

import style from "@/app/styles.module.css";

const Hero = () => {
  return (
    <div className="flex flex-col container mx-auto -mt-9 lg:-mt-28">
      {/* Top Banner */}
      <div className={`${style.fontPoppins} text-center mb-3 lg:mb-0 py-2`}>
        <p className="text-[#1a1a1a73] text-md md:text-xl font-thin">
          Free shipping. Unlimited returns. Cancel anytime.
        </p>
      </div>

      {/* Hero Content - Increased Width for Better Layout */}
      <div className="relative bg-[#FAF397] w-[80%] md:w-[750px] lg:w-[900px] xl:w-[1000px]  py-6 md:py-6 mx-auto">
        <div className=" px-4 ">
          {/* Main Content */}
          <div className="relative z-10 text-center w-[70%] md:w-auto mx-auto">
            <div className="mb-5 md:hidden">
            <h3 className={`text-xl md:hidden ${style.fontRozha}`}>Expertly selected </h3>
            <h3 className={`text-xl md:hidden ${style.fontRozha}`}>kids books <span className={`relative inline-block`}>for every
            <span className={`absolute left-0 bottom-0 w-full h-3 md:h-[15px] bg-red-400 -z-10 `}></span>
            </span>
            </h3>
            <h3 className={`text-xl md:hidden ${style.fontRozha}`}>reading level.</h3>
            </div>

            <p
              className={` md:text-4xl xl:text-5xl hidden md:block ${style.fontRozha} mb-4`}
            >
              Expertly selected kids&apos; books
              <br />
              <span className="relative inline-block mr-3">
                for every
                <span className="absolute left-0 bottom-0 w-full h-3 md:h-[15px] bg-red-400 -z-10"></span>
              </span>
              reading level.
            </p>
          </div>

          {/* Bullet Points */}
          <div
            className={`space-y-4 text-lg md:text-xl mx-auto ${style.poppins}`}
          >
            <p
              className={`text-xl 2xl:text-xl text-center font-semibold ${style.poppins} block mb-4`}
            >
              Our team tailors each book to your reader&apos;s age and
              interests.
            </p>

            <div className="w-[70%] sm:w-[510px] mx-auto">
              <div className="flex flex-col justify-start items-start ">
                <div className="flex items-start">
                  <span className="mr-2">–</span>
                  <p className="leading-snug text-[16px] xl:text-lg text-start">  
                    Discover Islamic and English stories that fit their interest
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">–</span>
                  <p className="leading-snug text-[16px] xl:text-lg text-start">
                    Increase knowledge, vocabulary, and comprehension
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">–</span>
                  <p className="leading-snug text-[16px] xl:text-lg text-start">
                    Feel at ease that the English books are Islamically
                    appropriate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Left Image */}
        <div className="absolute -top-5 lg:top-2 -left-10 lg:-left-28 xl:top-0 xl:bottom-7 xl:-left-28 2xl:-left-44 w-[120px]  lg:w-[250px] xl:w-[250px] 2xl:w-[250px]">
          <Image
            src={img2}
            alt="My Prophet Muhammad - My Hero"
            width={250}
            height={250}
            className="object-contain"
            style={{ transform: "rotate(-2deg)" }}
          />
        </div> 

        {/* Right Image */}
        <div className="absolute   -right-7 lg:-right-24 -top-3 lg:top-2 xl:top-0 xl:bottom-0 xl:-right-28 2xl:-right-44 w-[180px]  lg:w-[400px] xl:w-[400px] 2xl:w-[400px] ">
          <Image
            src={img1}
            alt="Planet Omar"
            width={500}
            height={500}
            className="object-contain"
          />
        </div> 
      </div>
    </div>
  );
};

export default Hero;
