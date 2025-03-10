
import Image from "next/image";

import bannerImg from '@/assets/BannerImage.png'
import styles from "@/app/styles.module.css"
import Link from "next/link";
const Banner = () => {

    return (
        <div className="w-full bg-[#FDFBDF] p-12">
             <section className="relative min-h-[600px] w-full px-4 ">
      <div className="container mx-auto">
        <div className="grid items-center  lg:grid-cols-2">
          {/* Left Content */}
          <div className="relative z-10 text-left ">
            <h1 className={`font-cursive text-4xl text-[#F37975] sm:text-5xl md:text-7xl lg:text-7xl ${styles.fontHotel}`}>
              The Muslim Book Club
            </h1>
            <p
             
              className={`mt-4 md:mb-0 mb-8 text-[#1C1C1C] font-bold text-4xl h-[65.32px]  ${styles.fontRozha}`}
             
            >
              for exceptional young readers.
            </p>
            <p className={` mb-8 max-w-lg text-lg  ${styles.fontPoppins}` }>
              Help your readers grow with a personalized book selection curated monthly by our team of experts and
              shipped to your door.
            </p>
 
         <Link href={"/name"}>
         <button
                
                className="h-12 rounded-full bg-[#F37975] px-8 text-lg hover:bg-[#e57373] text-white"
              >
                START TODAY
              </button>
         </Link>
       
          </div>

          {/* Right Content - Book Covers */}
          <div className=" ">
<Image src={bannerImg} alt="" width={700}
                height={690}/>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Banner;



