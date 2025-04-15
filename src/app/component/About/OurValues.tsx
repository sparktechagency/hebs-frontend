'use client'
import Image from "next/image"
import style from "@/app/styles.module.css";
import img1 from "@/assets/valueImg1.png"
import img2 from "@/assets/valueImg2.png"
import img3 from "@/assets/valueImg3.png"

const values = [
  {
    title: "'Ilm",
    image:img1,
    description:
      "At the heart of our mission is the Islamic principle of seeking knowledge. We offer a variety of books designed to foster a love of Islam and learning.",
  },
  {
    title: "Ummah",
    image:img2,
    description:
      "Building and nurturing community ties is essential to us. Through book clubs, events, and educational workshops, we strive to create a vibrant space for shared learning and a sense of unity within the Muslim Ummah.",
    hasButton: true,
  },
  {
    title: "Sadaqah",
    image:img3,
    description:
      "Giving is woven into our business ethos. We donate any gently used books that you send back to us to children in need, spreading the joy of reading and supporting literacy efforts in disadvantaged communities.",
  },
]

export default function ValuesSection() {
  return (
    <div className="bg-[#FDFBDF] relative z-10 py-5" >

    <section className="container mx-auto px-4 py- ">
      <div className=" ">
        {/* Border */}
        {/* <div className="absolute inset-0 border border-red-200 rounded-2xl " /> */}

        {/* Content */}
          <h2 className={`${style.fontRozha} text-4xl font-bold text-center mb-5 `}> 
            Our 
            <span className="relative inline-block ml-3">
            Values
                  <span className="absolute left-0 bottom-0 w-full h-4 sm:h-6 md:h-[15px] bg-red-400 -z-10"></span> 
                </span>
          </h2>
    
        <div className=" p-6 bg-[#FFFFFF] border-4 border-[#FF0000]  ">


          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-48 h-48 mb-6 ">
                  <Image
                    src={value.image}
                    alt={value.title}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <h3 className={`text-2xl font-semibold mb-4 ${style.fontRozha}`}>{value.title}</h3>
                <p className={`${style.fontPoppins} text-gray-600 mb-6`}>{value.description}</p>
 
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

