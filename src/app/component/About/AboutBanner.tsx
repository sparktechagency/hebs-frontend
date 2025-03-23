import frame2 from "@/assets/tinyMuminsFrame2.png";
import style from "@/app/styles.module.css";
import Image from "next/image";
import aboutTop from "@/assets/aboutTop.png";

const AboutBanner = () => {
  return (
    <div
      className="relative w-full bg-top bg-no-repeat bg-cover mt-2"
      style={{ backgroundImage: `url(${frame2.src})` }}
    >
      <div className="px-4 py-16 md:py-24 ">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center mb:gap-6">
            {/* Left content */}
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <h3
                  className={`text-[#FCB876] text-9xl mb-1 ${style.fontRozha}`}
                >
                  ABOUT
                </h3>
                <h2
                  className={`text-4xl md:text-8xl  text-[#F37975] ${style.fontHotel}`}
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
            <div className="w-full md:w-1/2 lg:w-1/2 relative mb:mt-32">
              {/* Book 1 - I've Loved You Since Forever */}
              <div className="">
                <Image
                  src={aboutTop}
                  alt="I've Loved You Since Forever book cover"
                  width={610}
                  height={570}
                  className="rounded-md"
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
