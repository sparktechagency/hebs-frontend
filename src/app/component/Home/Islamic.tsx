import Image from "next/image"
import { RightOutlined } from "@ant-design/icons"
import frame2 from "@/assets/tinyMuminsFrame2.png"
import book from "@/assets/littleCalips.png"
import style from '@/app/styles.module.css'

const Islamic =() =>{
  return (
    <div
      className="relative w-full bg-top bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${frame2.src})` }}
    >
      <div className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
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
            <div className="w-full md:w-1/2 space-y-6">
            <div>
                <h3
                  className={`text-[#F37975] font-medium text-xl mb-1 ${style.fontJost}`}
                >
                  AGES 9-11
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold text-[#333333]">
                  Islamic Explorers
                </h2>
              </div>

              <p
                className={`text-xl md:text-2xl font-medium text-[#333333] leading-snug ${style.fontPoppins}`}
              >
                Embark on the adventure of independent reading.
              </p>

              <p
                className={`text-base md:text-lg text-[#333333] ${style.fontJost}`}
              >
                Their vocabulary and critical thinking skills will expand as
                they dive into reading advanced plotlines and chapter books.
              </p>

              <div className="space-y-4 pt-2">
                <h3
                  className={`text-xl font-semibold text-[#333333] ${style.fontJost}`}
                >
                  The books for Islamic Explorers will:
                </h3>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#F5A77D]">
                    <RightOutlined size={20} className="transform rotate-45" />
                  </div>
                  <p
                    className={`text-base md:text-lg text-[#333333] ${style.fontJost}`}
                  >
                    Help expose your reader to broader array of material like
                    plays, poetry, fictional and nonfictional books
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#F5A77D]">
                    <RightOutlined size={20} className="transform rotate-45" />
                  </div>
                  <p
                    className={`text-base md:text-lg text-[#333333] ${style.fontJost}`}
                  >
                    Help develop their critical thinking skills
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#F5A77D]">
                    <RightOutlined size={20} className="transform rotate-45" />
                  </div>
                  <p
                    className={`text-base md:text-lg text-[#333333] ${style.fontJost}`}
                  >
                    Help expand Islamic knowledge
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  className={`bg-[#F08080] hover:bg-[#E57373] text-white font-medium py-3 px-6 rounded-full transition-colors ${style.fontJost}`}
                >
                  Get Islamic Explorers Box
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Islamic