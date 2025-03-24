"use client";

import Image from "next/image";
import img1 from "@/assets/Image (1).png";
import img2 from "@/assets/Image.png";

import style from "@/app/styles.module.css";

const Hero = () => {
  return (
    <div className="flex flex-col container mx-auto mb:relative mb:-top-16 lg:relative lg:-top-16 p-12 md:p-0 lg:p-0">
      {/* Top Banner */}
      <div className={`${style.fontPoppins} text-center  py-2`}>
        <p className="text-[#D3D3D3] text-xl">
          Free shipping. Unlimited returns. Cancel anytime.
        </p>
      </div>

      {/* Hero Content - Increased Width for Better Layout */}
      <div className="relative bg-[#FAF397] max-w-5xl px-6 py-6 md:py-6 mx-auto">
        <div className="container mx-auto px-4 md:w-[700px] lg:w-[700px]">
          {/* Main Content */}
          <div className="relative z-10 text-center">
            <p className={`text-xl md:text-5xl lg:text-5xl ${style.fontRozha} mb-4`}>
              Expertly selected kids&apos; books
              <br />
              <span className="relative inline-block mr-3">
                for every
                <span className="absolute left-0 bottom-0 w-full h-4 sm:h-6 md:h-[15px] bg-red-400 -z-10"></span>
              </span>
              reading level.
            </p>
          </div>

          {/* Bullet Points */}
          <div className={`space-y-4 text-lg md:text-xl max-w-3xl mx-auto ${style.poppins}`}>
            <p className={`text-lg md:text-2xl font-medium ${style.poppins} block mb-4`}>
              Our team tailors each book to your reader&apos;s age and interests.
            </p>

            <div className="md:w-[600px] mx-auto">
              <div className="flex flex-col justify-start items-start space-y-2">
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
                  <p className="leading-snug">Feel at ease that the English books are Islamically appropriate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Book Images - Positioned Responsively */}
          <div className="relative hidden md:block">
            {/* Left Image */}
            <div className="absolute left-0 md:-left-64 bottom-0 w-[150px] md:w-[250px]">
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
            <div className="absolute -top-[265px] right-0 md:-right-60 bottom-0 w-[150px] md:w-[250px]">
              <Image
                src={img1}
                alt="Planet Omar"
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
