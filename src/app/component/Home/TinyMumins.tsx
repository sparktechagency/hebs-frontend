import Image from "next/image"

import frame1 from "@/assets/tinyMuminsFrame1.png"
import arrow from "@/assets/arrowLogo.png"
import book from "@/assets/Illuminate_Book_Cover_Mockup3.png"
import style from '@/app/styles.module.css'
import Link from "next/link"
const  TinyMuminsSection=()=> {
  return (
    <div
      className="relative w-full bg-top bg-no-repeat bg-cover p-4 md:p-12"
      style={{ backgroundImage: `url(${frame1.src})` }}
    >
      <div className="px-4 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
            {/* Left content */}
            <div className="w-full md:w-1/2 space-y-2">
              <div>
                <h3 className={`text-[#F37975] font-bold text-2xl mb-1 ${style.fontJost}`}>AGES 0-3</h3>
                <h2 className={`text-3xl font-bold md:text-4xl text-[#333333] ${style.fontJost}`}>
                  Tiny Mu&apos;mins
                </h2>
              </div>

              <p className={`text-xl md:text-2xl  text-[#333333] leading-snug ${style.fontPoppins}`}>
                Create a home library that will spark your child&apos;s imagination and curiosity!
              </p>

              <p className={ ` md:text-xl text-[#333333] ${style.fontJost}`}>
                Little Muslims will touch, feel, and see their way through interactive board books, Islamic books, and
                radiant picture books.
              </p>

              {/* <div className="space-y-1 ">  
                <h3 className={`text-xl  text-[#333333] ${style.fontJost}`}>
                  The books for Tiny Mu&apos;mins will:
                </h3>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#F5A77D] w-12">
<Image  src={arrow}  alt="logo"/>
                
                  </div>
                  <p className={`text-base md:text-lg text-[#333333] ${style.fontJost}`}>
                    Help with sensory development
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#F5A77D] w-12">
                  <Image  src={arrow} alt="logo"/>
                  </div>
                  <p className={`text-base md:text-lg text-[#333333] ${style.fontJost}`}>
                    Help your little Muslim in discovering sounds, words, and language, developing literacy skills
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#F5A77D] w-12">
                  <Image  src={arrow} alt="logo"/>
                  </div>
                  <p className={`text-base md:text-lg text-[#333333] ${style.fontJost}`}>
                    Enhance your child&apos;s brain development and ability to focus and concentrate
                  </p>
                </div>  
              </div> */}
<div className="space-y-4">
  {/* Bullet 1 */}
  <div className="flex items-center gap-2 ">
    <div className="w-6 flex-shrink-0">
      <Image src={arrow} alt="logo" className="w-full" />
    </div>
    <p className={`text-base md:text-lg text-[#333333] ${style.fontJost}`}>
      Help with sensory development
    </p>
  </div>

  {/* Bullet 2 */}
  <div className="flex items-center gap-2 ">
    <div className="w-6 flex-shrink-0">
      <Image src={arrow} alt="logo" className="w-full" />
    </div>
    <p className={`text-base md:text-lg text-[#333333] ${style.fontJost}`}>
      Help your little Muslim in discovering sounds, words, and language, developing literacy skills
    </p>
  </div>

  {/* Bullet 3 */}
  <div className="flex items-center gap-2 ">
    <div className="w-6 flex-shrink-0">
      <Image src={arrow} alt="logo" className="w-full" />
    </div>
    <p className={`text-base md:text-lg text-[#333333] ${style.fontJost}`}>
      Enhance your child&apos;s brain development and ability to focus and concentrate
    </p>
  </div>
</div>

              <div className="pt-4">
              <Link href={"/name"}>
              {/* <Link href={"tinyMuslimBox"}> */}
              <button className={`bg-[#F08080] hover:bg-[#E57373] text-black font-bold py-3 px-6 rounded-full transition-colors ${style.fontJost}`}>
                  GET TINY MU&apos;MINS BOX
                </button>
              </Link>
              </div>
            </div>

            {/* Right content - Books */}
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
          </div>
        </div>
      </div>
    </div>
  )
}
export default TinyMuminsSection