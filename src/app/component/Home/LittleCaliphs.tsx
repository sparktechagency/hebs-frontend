import Image from "next/image"

import frame2 from "@/assets/tinyMuminsFrame2.png"
import book from "@/assets/littleCalips.png"
import style from '@/app/styles.module.css'
import Link from "next/link"
import arrow from "@/assets/arrow2.png"
const LittleCalips =() =>{
  return (
    <div   
      className="relative w-full bg-top bg-no-repeat bg-cover  p-4 md:p-12"
      style={{ backgroundImage: `url(${frame2.src})` }}
    >
      <div className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Left content */}
       
            <div className="w-full md:w-1/2 lg:w-1/2 relative ">
              {/* Book 1 - I've Loved You Since Forever */}
              <div className="">
                <Image
                  src={book}
                  alt="I've Loved You Since Forever book cover"
                  width={710}
                  height={670}
                  className="rounded-md"
                />
              </div>
            </div>
            {/* Right content - Books */}
            <div className="w-full md:w-1/2 space-y-1">
              <div>
                <h3 className={`text-[#F37975] font-bold text-xl mb-1 ${style.fontJost}`}>AGES 4-6</h3>
                <h2 className={`text-3xl md:text-4xl  text-[#333333] ${style.fontJost}`}>
                Little Caliphs
                </h2>
              </div>

              <p className={`text-xl md:text-2xl  text-[#333333] leading-snug ${style.fontPoppins}`}>
              Build strong bonds through shared reading adventures.
              </p>

              <p className={ `text-base md:text-xl text-[#333333] ${style.fontJost}`}>
              Little Caliphs will dive into a world of colorful picture books,
catchy rhyming books, and exciting Islamic tales!
              </p>
              <div className="space-y-4 pt-2">
  <h3 className={`text-xl text-[#333333] ${style.fontJost}`}>
    The books for Little Caliphs will:
  </h3>

  {/* Bullet 1 */}
  <div className="flex items-center gap-2 ">
    <div className="w-6 flex-shrink-0">
      <Image src={arrow} alt="logo" className="w-full" />
    </div>
    <p className={`text-base md:text-lg text-[#333333] ${style.fontJost}`}>
      Develop their language skills
    </p>
  </div>

  {/* Bullet 2 */}
  <div className="flex items-center gap-2 ">
    <div className="w-6 flex-shrink-0">
      <Image src={arrow} alt="logo" className="w-full" />
    </div>
    <p className={`text-base md:text-lg text-[#333333] ${style.fontJost}`}>
      Help with emotional and social growth
    </p>
  </div>

  {/* Bullet 3 */}
  <div className="flex items-center gap-2 ">
    <div className="w-6 flex-shrink-0">
      <Image src={arrow} alt="logo" className="w-full" />
    </div>
    <p className={`text-base md:text-lg text-[#333333] ${style.fontJost}`}>
      Prepare for academic success 
    </p>
  </div>
</div>


              <div className="pt-4">
                <Link href={"/name"}>
                {/* <Link href={"/littleCaliphsBox"}> */}
                
                <button className={`bg-[#FAF397]  shadow-2xl hover:bg-[#E57373] text-black font-bold py-3 px-6 rounded-full transition-colors ${style.fontInter}`}>
                Get Little Caliphs Box
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
export default LittleCalips