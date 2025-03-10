'use client'
import Image from "next/image"
import team4 from "@/assets/team4.png"
import team5 from "@/assets/team5.png"
import team6 from "@/assets/team6.png"
import style from "@/app/styles.module.css";

export default function OurTeam() {
  return (
    <div className="w-full">
      
      {/* Team Member 1 */}
      <section className="px-4 sm:px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-6 text-center md:text-left">
              <p className={`text-black text-xl sm:text-2xl font-bold ${style.fontJost}`}>
                Founders: <span>Khader Zahdan and Eanara Ghouleh</span>
              </p>
              <p className={`${style.fontJost} text-lg sm:text-xl`}>
                <span className="text-black">CEO:</span> <span className="text-[#ff8a8a]">Eanara Ghouleh</span>
              </p>

              <p className={`${style.fontPoppins} leading-relaxed text-base sm:text-lg`}>
                Welcome to Illuminate Muslim Minds, where each book opens a world of discovery and joyful adventure! 
                Our story began with a vision from Eanara, a passionate advocate with a master&apos;s degree in social work...
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <Image 
                src={team4} 
                alt="Founders reading a book together"
                width={500} 
                height={500} 
                className="w-full max-w-[500px] h-auto object-cover rounded-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Team Member 2 */}
      <section className="px-4 sm:px-6 md:px-10 py-16 md:py-24 bg-[#FDFBDF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center flex-wrap-reverse">
            
            {/* Image */}
            <div className="flex justify-center md:justify-start">
              <Image 
                src={team5} 
                alt="Heba Morad"
                width={500} 
                height={500} 
                className="w-full max-w-[500px] h-auto object-cover rounded-lg"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6 text-center md:text-left">
              <p className={`text-[#F37975] text-xl sm:text-2xl font-bold ${style.fontPoppins}`}>
                Chief Operating Officer: Heba Morad
              </p>
              <p className={`${style.fontPoppins} leading-relaxed text-base sm:text-lg`}>
                Heba plays a pivotal role at Illuminate Muslim Minds, guiding our mission to enrich young minds with 
                the excitement of Islamic literature. As our COO, she combines her rich background in education...
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Team Member 3 */}
      <section className="px-4 sm:px-6 md:px-10 py-16 md:py-24 bg-[#FEECDE]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-6 text-center md:text-left">
              <p className={`text-[#F37975] text-xl sm:text-2xl font-bold ${style.fontPoppins}`}>
                Social Media and Logistics Coordinator: Nadean Ghouleh
              </p>
              <p className={`${style.fontPoppins} leading-relaxed text-base sm:text-lg`}>
                At the heart of our operation, Nadean brings a unique blend of compassion and practicality to our team...
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <Image 
                src={team6} 
                alt="Nadean Ghouleh"
                width={500} 
                height={500} 
                className="w-full max-w-[500px] h-auto object-cover rounded-lg"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
