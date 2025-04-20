import Image from "next/image"

import frame2 from "@/assets/tinyMuminsFrame2.png"
// import book from "@/assets/littleCalips.png"
import zaara from "@/assets/zaara.png"
import style from '@/app/styles.module.css'
import Link from "next/link"
import arrow from "@/assets/arrowLogo.png"
const Islamic =() =>{
  return (
    <div
      className="relative w-full bg-top bg-no-repeat bg-cover p-4 md:p-12"
      style={{ backgroundImage: `url(${frame2.src})` }}
    >
      <div className="px-4 py-10  md:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center  gap-8 md:gap-16">
            {/* Left content */}
       
            <div className="w-[330px] md:w-1/2 lg:w-1/2 -top-48 md:top-0 relative ">
              {/* Book 1 - I've Loved You Since Forever */}
              <div className="">
                <Image
                  src={zaara}
                  alt="I've Loved You Since Forever book cover"
                  width={710}
                  height={670}
                  className="rounded-md"
                />
              </div>
            </div>
            {/* Right content - Books */}
            <div className="w-full md:w-1/2 space-y-2 -top-48 text-center  md:text-start md:top-0 relative">
            <div>
                <h3
                className={`text-[#F37975] font-bold text-2xl mb-1 ${style.fontJost}`}
                >
                  AGES 9-11
                </h3>
                <h2 className={`text-3xl font-bold md:text-4xl text-[#333333] ${style.fontJost}`}>
                  Islamic Explorers
                </h2>
              </div>

              <p
               className={`text-xl md:text-2xl  text-[#333333] leading-snug ${style.fontPoppins}`}
              >
                Embark on the adventure of independent reading.
              </p>

              <p
             className={ `text-xl md:text-xl text-[#333333] ${style.fontJost}`}   
              >
                Their vocabulary and critical thinking skills will expand as
                they dive into reading advanced plotlines and chapter books.
              </p>

              <div className="space-y-4 pt-2">      
                <h3
                  className={`text-xl text-start  text-[#333333] ${style.fontJost}`}
                >
                  The books for Islamic Explorers will:
                </h3>

                <div className="flex items-center gap-2 ">   
                <div className="w-8 flex-shrink-0">
      <Image src={arrow} alt="logo" className="w-full" />
    </div>
                  <p
                  className={`text-xl text-start  text-[#333333] ${style.fontJost}`}
                  >
                    Help expose your reader to broader array of material like
                    plays, poetry, fictional and nonfictional books
                  </p>
                </div>

                <div className="flex items-center gap-2 ">
                <div className="w-8 flex-shrink-0">
      <Image src={arrow} alt="logo" className="w-full" />
    </div>
                  <p
                    className={`text-xl text-start  text-[#333333] ${style.fontJost}`}
                  >
                    Help develop their critical thinking skills
                  </p>
                </div>

                <div className="flex items-center gap-2 ">
                <div className="w-8 flex-shrink-0">
      <Image src={arrow} alt="logo" className="w-full" />
    </div>
                  <p
                    className={`text-xl text-start  text-[#333333] ${style.fontJost}`}
                  >
                    Help expand Islamic knowledge
                  </p>
                </div>
              </div>

              <div className="pt-4">
                {/* <Link href={"/islamic"}> */}
                <Link href={"/name"}>
                
                <button className={`bg-[#FAF397]  shadow-2xl  text-black font-bold py-3 px-6 rounded-full uppercase  ${style.fontJost}`}>
                Get Islamic Explorers Box
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Islamic