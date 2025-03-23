"use client";

import Image from "next/image";
import img1 from "@/assets/Image (1).png";
import img2 from "@/assets/Image.png";

import style from "@/app/styles.module.css";

const Hero = () => {
  return (
    <div className="flex flex-col container mx-auto mb:relative mb:-top-16 lg:relative lg:-top-16 p-12 md:p-0 lg:p-0">
      {/* Top Banner */}
      <div
        className={`${style.fontPoppins} text-center  md:py-2 lg:py-2 `}
      >
        <p className="text-[#D3D3D3] text-xl ">
          Free shipping. Unlimited returns. Cancel anytime.
        </p>
      </div>

      {/* Hero Content */}
      <div className="relative  bg-[#FAF397] max-w-7xl px-4  mx-auto">
        <div className="container mx-auto px-4 py-16 md:py-24 xl:w-[1000px] xl:h-[400px] lg:w-[800px] lg:h-[300px] mb:w-[1000px] mb:h-[400px] lg:py-24 xl:py-24">
          <div className="relative z-10  ">
            {/* Main Content */}
            <div className="text-center mb-5">
              <p
                className={`text-3xl md:text-5xl lg:text-6xl ${style.fontRozha} mb-1 `}
              >
                Expertly selected kids&apos; books
                <br />
                <span className="relative inline-block mr-3">
                  for every
                  <span className="absolute left-0 bottom-0 w-full h-4 sm:h-6 md:h-[25px] bg-red-400 -z-10"></span>
                </span>
                reading level.
              </p>
            </div>

            {/* Bullet Points */}
            <div className={`space-y-4 text-lg md:text-xl max-w-3xl mx-auto ${style.poppins}`}>
  <p className={`text-lg md:text-2xl font-medium ${style.poppins} block mb-4 items-start`}>
    Our team tailors each book to your readers age and interests.
  </p>
  
<div className="md:w-[600px] container mx-auto">
<div className="flex flex-col justify-start items-start space-y-2"> {/* Adjusted items alignment */}
    <div className="flex items-start">
      <span className="mr-2">–</span>
      <p className="leading-snug">Discover Islamic and English stories that fit their interest</p>
    </div>
    <div className="flex items-start">
      <span className="mr-2">–</span>
      <p className="leading-snug">Increase knowledge, vocabulary, and comprehension</p>
    </div>
    <div className="flex items-start">
      <span className="mr-2">–</span>
      <p className="leading-snug">
        Feel at ease that the English books are Islamically appropriate
      </p>
    </div>
  </div>
</div>
</div>

          </div>

          {/* Book Images */}
          <div className="md:absolute  md:-left-16 md:-bottom-8 w-[200px] h-[200px] md:w-[300px] md:h-[400px] transform -translate-x-1/4  md:block">
            <Image
              src={img2}
              alt="My Prophet Muhammad - My Hero"
              width={200}
              height={200}
              className="object-contain"
              style={{
                transform: "rotate(-2deg)",
              }}
            />
          </div>
          <div className="md:absolute md:-right-36 md:-bottom-8  w-[200px] h-[200px] md:w-[300px] md:h-[400px] transform translate-x-1/4  md:block">
            <Image
              src={img1}
              alt="Planet Omar"
              width={200}
              height={200}
              className=""
              //   style={{
              //     transform: "rotate(15deg)",
              //   }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
