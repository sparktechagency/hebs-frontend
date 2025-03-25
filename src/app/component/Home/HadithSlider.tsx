
"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */




import { useState } from "react"
import { Carousel } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import styles from "@/app/styles.module.css"
// Sample data for the slider
const hadiths = [
  {
    id: 1,
    text: 'WHOEVER FOLLOWS A PATH TO SEEK KNOWLEDGE, ALLAH WILL MAKE THE PATH TO PARADISE EASY FOR THEM." ~ PROPHET MUHAMMAD (PBUH)',
  },
  {
    id: 2,
    text: "THE BEST OF YOU ARE THOSE WHO LEARN THE QUR'AN AND TEACH IT.\" ~ PROPHET MUHAMMAD (PBUH)",
  },
  {
    id: 3,
    text: 'THE STRONG PERSON IS NOT THE ONE WHO CAN WRESTLE OTHERS DOWN. THE STRONG PERSON IS THE ONE WHO CAN CONTROL HIMSELF WHEN ANGRY." ~ PROPHET MUHAMMAD (PBUH)',
  },
  {
    id: 4,
    text: 'HE WHO IS NOT GRATEFUL TO PEOPLE IS NOT GRATEFUL TO ALLAH." ~ PROPHET MUHAMMAD (PBUH)',
  },
]

const  HadithSlider =() =>{
  const [carouselRef, setCarouselRef] = useState<any>(null)

  const nextSlide = () => {
    if (carouselRef) {
      carouselRef.next()
    }
  }

  const prevSlide = () => {
    if (carouselRef) {
      carouselRef.prev()
    }
  }

  return (
    <div className="mb-10 p-4">

    <div className="relative max-w-4xl mx-auto px-4 py-8 ">
      {/* Left quotation mark */}
      {/* <div className="absolute  left-0  xl:-left-96 xl:-top-16  text-[#FAF39766] text-[300px] font-serif leading-none z-0 opacity-100  ">
        &ldquo;
      </div> */}

      {/* Right quotation mark */}
      {/* <div className="absolute right-0 xl:top-96 md:top-64  -bottom-36 mb:-right-36 xl:-right-96 mb:-bottom-36 lg:-bottom-64 text-[#F379754A] text-[300px] font-serif leading-none z-0 opacity-100">
        &rdquo;
      </div> */}

{/* Left quotation mark */}
<div className="absolute left-2 sm:left-4 md:left-8 lg:-left-24 xl:-left-40 top-2 sm:top-12 md:top-8 lg:-top-16 xl:-top-16 text-[#FAF39766] text-[20vw] sm:text-[20vw] md:text-[20vw] lg:text-[20vw] xl:text-[20vw] font-serif leading-none z-0 opacity-75 ">
  &ldquo;
</div>

{/* Right quotation mark */}
<div className="absolute right-2 sm:right-4 md:right-8 lg:-right-24 xl:-right-40 -bottom-12 sm:-bottom-20 md:-bottom-20 lg:-bottom-44 xl:-bottom-64 text-[#F379754A] text-[20vw] sm:text-[20vw] md:text-[20vw] lg:text-[20vw] xl:text-[20vw] font-serif leading-none z-0 opacity-75 ">
  &rdquo;
</div>




      {/* Title */}
      <h2 className={`text-center mt-16 mb:mt-8 lg:mt-8 text-[#F37975] text-4xl font-bold mb-6 ${styles.fontRozha}`}>Duaas and Hadith</h2>

      {/* Carousel */}
      <div className="relative z-10">
        <Carousel ref={setCarouselRef} dots={false} autoplay autoplaySpeed={3000} className="hadith-carousel">
          {hadiths.map((hadith) => (
            <div key={hadith.id} className="px-12 py-4">
              <p className={`text-center text-lg md:text-xl font-medium max-w-2xl mx-auto ${styles.fontPoppins}`}>{hadith.text}</p>
            </div>
          ))}
        </Carousel>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-[#F08080] hover:text-[#E06060] transition-colors"
          aria-label="Previous slide"
        >
          <LeftOutlined className="text-2xl" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[#F08080] hover:text-[#E06060] transition-colors"
          aria-label="Next slide"
        >
          <RightOutlined className="text-2xl" />
        </button>
      </div>
     
    </div>
    {/* <hr className="w-full border-b-1 border-black"/> */}
    </div>
  )
}

export default HadithSlider