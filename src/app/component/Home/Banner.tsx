import Image from "next/image";
import bannerImg from "@/assets/BannerImage.png";
import styles from "@/app/styles.module.css";
import Link from "next/link";

const Banner = () => {
  return (
<div className="w-full bg-[#FDFBDF] px-4 py-8 md:py-12 lg:py-16">
      <section className="relative max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="w-full md:w-[55%] text-center md:text-left flex flex-col justify-center items-center md:items-start space-y-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <h1 className={`font-cursive text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#F37975] ${styles.fontHotel}`}>
              The Muslim Book Club
            </h1>
            <p className={`text-[#1C1C1C] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${styles.fontRozha}`}>
              for exceptional young readers.
            </p>
            <p className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center md:text-left max-w-md lg:max-w-lg xl:max-w-xl ${styles.fontPoppins}`}>
              Help your readers grow with a personalized book selection curated monthly by our team of experts and shipped to your door.
            </p>
            <Link href="/name">
              <button className={`h-10 sm:h-12 rounded-full bg-[#F37975] px-4 sm:px-6 md:px-8  text-base sm:text-lg md:text-xl hover:bg-[#e57373] text-white ${styles.fontPoppins}`}>
                START TODAY
              </button>
            </Link>
          </div>
          
          {/* Right Content - Book Covers */}
          <div className="w-full md:w-[45%] flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <Image 
              src={bannerImg} 
              alt="Book Club Banner" 
              width={500} 
              height={500} 
              className="w-full max-w-[250px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
