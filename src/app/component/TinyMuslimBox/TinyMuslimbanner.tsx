/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import packaging from "@/assets/illuminate packaging box 0-3 1.png"
import styles from "@/app/styles.module.css"
import Link from "next/link";
export default function TinyHero() {
    return (
      <div className=" bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h1 className={`text-5xl md:text-6xl font-bold text-gray-900 tracking-tight ${styles.fontRozha}`}>Tiny Mu'mins Box</h1>
  
              <div className="space-y-4">
                <p className={`text-2xl md:text-3xl text-gray-600  ${styles.poppins}`}>0-3 years</p>
  
                <div className="flex items-baseline space-x-2">
                  <p className={`text-xl text-gray-70  ${styles.poppins}`}>Subscription cost per box |</p>
                  <p className="text-2xl font-semibold text-gray-900">$14.99</p>
                </div>
              </div>
              <Link href={"/name"}>
              
              <button className={`inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-red-400 hover:bg-red-500 rounded-full transition-colors duration-150  ${styles.fontPoppins}`}>
                Get Start
              </button>
              </Link>
  
              <p className={`text-sm text-[#181816] italic  ${styles.fontPoppins}`}>
                *Average cost to keep 3 of 5 books in each box is $38. Easy, free returns. Cancel anytime.
              </p>
            </div>
  
            {/* Right Column - Book Box Image */}
            <div>
              <div >
        
                    <div className="">
                      <Image
                        src={packaging}
                        alt="The Quiet Book"
                        width={723}
                        height={366}
                        className="object-cover rounded shadow-lg"
                      />
                    </div>
  
          
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  