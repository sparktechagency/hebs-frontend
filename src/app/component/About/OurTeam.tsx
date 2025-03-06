'use client'
import Image from "next/image"
import team4 from "@/assets/team4.png"
import team5 from "@/assets/team5.png"
import team6 from "@/assets/team6.png"
export default function OurTeam() {
  return (
<div>
    {/* team1 */}
<section className=" px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
           

              <div className="space-y-2">
                <p className="text-black text-2xl font-bold">
                  Founders: <span className="">Khader Zahdan and Eanara Ghouleh</span>
                </p>
                <p className="text-xl">
                  <span className="text-black">CEO:</span> <span className="text-[#ff8a8a]">Eanara Ghouleh</span>
                </p>
              </div>
            </div>

            <div className="space-y-6 text-black">
              <p className="leading-relaxed">
                Welcome to Illuminate Muslim Minds, where each book opens a world of discovery and joyful adventure! Our
                story began with a vision from Eanara, a passionate advocate with a master&apos;s degree in social work, who
                has made significant impacts as a therapist and community organizer. Alongside her every step was
                Khader, her husband, whose unwavering support was instrumental in turning this dream into a reality. As
                parents, Khader and Eanara encountered the challenge of finding engaging and appropriate Islamic,
                Arabic, and English books for young Muslim readers. This led to the start of Illuminate Muslim Minds, a
                haven where children aged 0-11 can find stories that resonate with them and foster a love for reading.
              </p>

              <p className="leading-relaxed">
                Driven by a mission to blend fun with Islamic learning, Illuminate Muslim Minds offers a monthly book
                subscription, individual book purchases, and lively book fairs, all aimed at boosting reading literacy
                and enriching Islamic knowledge among young minds. Eanara&apos;s vision is not just to distribute books but
                to ignite a love of Islam and reading. Join us on this delightful journey to make Islamic reading a
                cherished part of every child&apos;s life!
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-[500px] h-[500px]">
             
              <div className="">
                <Image
                  src={team4}
                  alt="Founders reading a book together"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* team2 */}
<section className="  px-4 py-16 md:py-24 bg-[#FDFBDF]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* left side */}
   

          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-[500px] h-[500px]">
             
              <div className="">
                <Image
                  src={team5}
                  alt="Founders reading a book together"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          {/*right site */}
          <div className="space-y-6">
            <div className="space-y-4">
           

              <div className="space-y-2">
                <p className="text-[#F37975] text-2xl font-bold">
                Chief Operating Officer: Heba Morad
                </p>
               
              </div>
            </div>

            <div className="space-y-6 text-black">
              <p className="leading-relaxed">
              Heba plays a pivotal role at Illuminate Muslim Minds,
guiding our mission to enrich young minds with the
excitement of Islamic literature. As our Chief Operating
Officer, she combines her rich background in education
with a passion for bringing diverse, engaging Islamic
stories to children. Heba&apos;s expertise lies in curating
children’s book boxes that are not only entertaining but
also deeply rooted in Islamic values, designed to inspire
and educate our young readers. Her vision drives
Illuminate Muslim Minds to be a gateway to a world
where young minds can explore, learn, and grow within
the framework of their faith.
              </p>

        
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* team3 */}
     
<section className="  px-4 py-16 md:py-24 bg-[#FEECDE]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
           

              <div className="space-y-2">
                <p className="text-[#F37975] text-2xl font-bold">
                Social Media and Logistics Coordinator:
                Nadean Ghouleh
                </p>
              
              </div>
            </div>

            <div className="space-y-6 text-black">
              <p className="leading-relaxed">
              At the heart of our operation, Nadean brings a unique blend of
compassion and practicality to our team. With a professional
background in nursing, she carries with her the care and
dedication that define the healthcare profession. Nadean
orchestrates our social media presence and manages the
logistics that keep our company moving smoothly. She also
transforms our digital spaces into vibrant communities, where
customers can feel the heartbeat of our brand. On the logistics
front, she ensures that our operations run seamlessly. Her
unique blend of skills enriches our company culture, making
Illuminate Muslim Minds, not just a place to work, but a place
to grow, care, and connect.
              </p>

            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-[500px] h-[500px]">
             
              <div className="">
                <Image
                  src={team6}
                  alt="Founders reading a book together"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
  )
}

