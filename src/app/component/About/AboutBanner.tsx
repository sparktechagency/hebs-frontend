import frame2 from "@/assets/tinyMuminsFrame2.png";
import style from "@/app/styles.module.css";
import Image from "next/image";
import aboutTop from "@/assets/aboutTop.png";

const AboutBanner = () => {
  return (
    <div
      className=" w-full bg-top bg-no-repeat bg-cover mt-2 "
      style={{ backgroundImage: `url(${frame2.src})` }}
    >
      <div className="  py-8 ">
        <div className="px-3 md:container  mx-auto ">   
          <div className="flex flex-col lg:flex-row mb:gap-20">
            {/* Left content */}
            <div className="lg:w-1/2 mt-6">
              <div>
                <h3
                  className={`text-[#FCB876] text-4xl md:text-7xl xl:text-9xl  mb-1 ${style.fontRozha}`}
                >
                  ABOUT
                </h3>
                <h2
                  className={`text-4xl md:text-5xl xl:text-7xl  text-[#F37975] ${style.fontHotel}`}
                >
                  illuminate muslim minds
                </h2>
              </div>

              <p
                className={`text-xl md:text-2xl  text-black leading-snug ${style.fontRozha}`}
              >
                Who We Are:
              </p>

              <p
              // text-[#333333]
                className={`text-base md:text-lg text-black  ${style.fontPoppins}`}
              >
                Illuminate Muslim Minds is dedicated to fostering a lifelong
                love for reading by offering a carefully curated selection of
                books that appeal to young minds. With a focus on Arabic,
                Islamic, and appropriate English literature, we simplify the
                search for the perfect read through our expertly selected
                monthly subscriptions and engaging book fairs. Utilizing a blend
                of expert recommendations and data science, we aim to provide a
                reading experience that is both enriching and enjoyable for
                children at every reading level. 
              </p>
            </div>
            {/* Right content - Books */}
            <div className=" relative  flex items-center justify-center">
              {/* Book 1 - I've Loved You Since Forever */}
              <div className="">
                <Image
                  src={aboutTop}
                  alt="I've Loved You Since Forever book cover"
                  width={500}
                  height={500}
                  className="rounded-md lg:ml-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
