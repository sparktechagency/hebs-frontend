import Image from "next/image";
import bannerImg from "@/assets/BannerImage.png";
import styles from "@/app/styles.module.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-full  bg-[#FDFBDF] px-4 py-8 md:py-12 lg:py-16 ">
      <section className="relative  max-w-7xl  mx-auto ">
        <div className="grid justify-center item-center lg:grid-cols-2  ">
          {/* Left Content */}
          <div className="relative z-10 text-center lg:text-left">
            <h1 className={`font-cursive text-4xl text-[#F37975] sm:text-5xl md:text-7xl lg:text-7xl ${styles.fontHotel}`}>
              The Muslim Book Club
            </h1>
            <p className={`text-[#1C1C1C] text-2xl md:text-4xl ${styles.fontRozha}`}>
              for exceptional young readers.
            </p>
            <p className={`max-w-lg text-lg mb-3 mx-auto lg:mx-0 ${styles.fontPoppins}`}>
              Help your readers grow with a personalized book selection curated monthly by our team of experts and shipped to your door.
            </p>

            <Link href="/name">
              <button className="h-12 rounded-full bg-[#F37975] px-8 text-lg hover:bg-[#e57373] text-white shadow-md">
                START TODAY
              </button>
            </Link>
          </div>

          {/* Right Content - Book Covers */}
          <div className="flex justify-center lg:justify-end">
            <Image src={bannerImg} alt="Book Club Banner" width={400} height={400} className="max-w-full h-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
