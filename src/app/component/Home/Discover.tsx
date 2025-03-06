import Image from "next/image"
import { RightOutlined } from "@ant-design/icons"
import frame1 from "@/assets/tinyMuminsFrame1.png"
import book from "@/assets/discovers.png"
import style from '@/app/styles.module.css'
import Link from "next/link"
const  Discover=()=> {
  return (
    <div
      className="relative w-full bg-top bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${frame1.src})` }}
    >
      <div className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Left content */}
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <h3 className={`text-[#F37975] font-medium text-xl mb-1 ${style.fontJost}`}>AGES 7-8</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-[#333333]">
                Deen Discoverers
                </h2>
              </div>

              <p className={`text-xl md:text-2xl font-medium text-[#333333] leading-snug ${style.fontPoppins}`}>
              Develop strong reading skills with imaginative stories.!
              </p>

              <p className={ `text-base md:text-lg text-[#333333] ${style.fontJost}`}>
              Readers will acquire phonics and sight reading skills as they
              progress from picture books to richer narratives.
              </p>

              <div className="space-y-4 pt-2">
                <h3 className={`text-xl font-semibold text-[#333333] ${style.fontJost}`}>
                The books for Deen Discoverers will:
                </h3>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#F5A77D]">
                    <RightOutlined size={20} className="transform rotate-45" />
                  </div>
                  <p className={`text-base md:text-lg text-[#333333] ${style.fontJost}`}>
                  Boost cognitive development
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#F5A77D]">
                    <RightOutlined size={20} className="transform rotate-45" />
                  </div>
                  <p className={`text-base md:text-lg text-[#333333] ${style.fontJost}`}>
                  Increase their love for Islamic stories
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#F5A77D]">
                    <RightOutlined size={20} className="transform rotate-45" />
                  </div>
                  <p className={`text-base md:text-lg text-[#333333] ${style.fontJost}`}>
                  Help them read more accurately and fluently
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link href={"/deen"}>
                
                <button className={`bg-[#F08080] hover:bg-[#E57373] text-white font-medium py-3 px-6 rounded-full transition-colors ${style.fontJost}`}>
                Get Deen Discoverers Box
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
export default Discover