'use client'
import Image from "next/image"
import { Button } from "antd"
import img1 from "@/assets/valueImg1.png"
import img2 from "@/assets/valueImg2.png"
import img3 from "@/assets/valueImg3.png"
import Link from "next/link"
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
    <div className="bg-[#FDFBDF] my-3" >

    <section className="max-w-7xl mx-auto px-4 py-16 ">
      <div className="relative">
        {/* Border */}
        <div className="absolute inset-0 border border-red-200 rounded-2xl" />

        {/* Content */}
        <div className="relative p-8 md:p-12 bg-[#FFFFFF] border border-[#FF0000]">
          <h2 className="text-4xl font-bold text-center mb-12 relative">
            Our Values
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-red-200 rounded-full" />
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-48 h-48 mb-6 relative">
                  <Image
                    src={value.image}
                    alt={value.title}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600 mb-6">{value.description}</p>
                {value.hasButton && (
                       <Link href={"/name"}>
                       <button
                              
                              className="h-12 rounded-full bg-[#F37975] px-8 text-lg hover:bg-[#e57373] text-white uppercase"
                            >
                             Get Started
                            </button>
                       </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

