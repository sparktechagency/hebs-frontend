import frame2 from "@/assets/tinyMuminsFrame2.png";
import style from "@/app/styles.module.css";
import Image from "next/image";
import aboutTop from "@/assets/aboutTop.png";

const AboutBanner = () => {
  return (
    <div
      className="relative w-full bg-top bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${frame2.src})` }}
    >
      <div className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Left content */}
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <h3
                  className={`text-[#FCB876] font-bold text-3xl mb-1 ${style.fontRozha}`}
                >
                  ABOUT
                </h3>
                <h2
                  className={`text-4xl md:text-5xl font-bold text-[#F37975] ${style.fontHotel}`}
                >
                  illuminate muslim minds
                </h2>
              </div>

              <p
                className={`text-xl md:text-2xl font-medium text-[#333333] leading-snug ${style.fontRozha}`}
              >
                Who We Are:
              </p>

              <p
                className={`text-base md:text-lg text-[#333333] ${style.fontPoppins}`}
              >
                Illuminate Muslim Minds is dedicated to fostering a lifelong
                love for reading by offering a carefully curated selection of
                books that appeal to young minds. With a focus on Arabic,
                Islamic, and appropriate English literature, we simplify the
                search for the perfect read through our expertly selected
                monthly subscriptions and engaging book fairs. Utilizing a blend
                of expert recommendations and data science, we aim to provide a
                reading experience that is both enriching and enjoyable for
                children at every reading level. !
              </p>
            </div>
            {/* Right content - Books */}
            <div className="w-full md:w-1/2 lg:w-1/2 relative ">
              {/* Book 1 - I've Loved You Since Forever */}
              <div className="">
                <Image
                  src={aboutTop}
                  alt="I've Loved You Since Forever book cover"
                  width={710}
                  height={670}
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
