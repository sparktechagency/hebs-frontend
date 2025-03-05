'use client'
import styles from '@/app/styles.module.css'
import Image from 'next/image';
import img1 from '@/assets/work1.png'
import img2 from '@/assets/work2.png'
import img3 from '@/assets/work3.png'
import img4 from '@/assets/work4.png'


import React from 'react';
import Link from 'next/link';

const features = [
    {
      title: "Five Customized Picks",
      description:
        "Tell us about your reader & we'll send curated book boxes that include a mix of Islamic and English books.",
      image: img1,
      alt: "Person reading book illustration",
    },
    {
      title: "Better with Every Box",
      description: "Book choices will improve and change month by month.",
      image: img2,
      alt: "Floating books illustration",
    },
    {
      title: "Free Unlimited Returns",
      description: "Keep the books they enjoy. Send back the books they don't.",
      image: img3,
      alt: "Returns cart illustration",
    },
    {
      title: "Donate",
      description:
        "We would love to pass along titles your child has outgrown! Send any books our way using your Illuminate box and we will give them to kids in need.",
      image: img4,
      alt: "Book donation illustration",
    },
  ]
const Work = () => {
    return (
        <div className="bg-[#FBD5D4] w-full py-5">
        <h1 className={`text-center text-5xl  py-3 ${styles.fontRozha}`}>How it Works</h1>
        <p className={`text-center text-2xl py-3 ${styles.fontPopins}`}>Receive five books. Only buy the ones you love.</p>


        <section className="relative md:w-[1400px] lg:w-[1600px] container mx-auto border border-red-500 bg-[#FFFFFF] px-4 py-16 md:py-24">
  <div className="container mx-auto">
    {/* Header */}
    <div className="mb-16 text-center">
      <p className="mb-4 text-4xl font-bold md:text-5xl">
        How it Works
      </p>
      <p className="m-0 text-xl font-normal text-gray-600 md:text-2xl">
        Receive five books. Only buy the ones you love.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="mb-6 h-48 w-48">
            <Image
              src={feature.image || ""}
              alt={feature.alt}
              width={200}
              height={200}
              className="h-full w-full object-contain"
            />
          </div>
          <p className={`mb-4 text-xl font-bold ${styles.fontRozha}`}>
            {feature.title}
          </p>
          <p className={`text-gray-600 ${styles.fontPopins}`}>{feature.description}</p>
        </div>
      ))}
    </div>


  </div>

</section>
    {/* CTA Button */}
    <div className="relative -top-7 flex justify-center">
    
   <Link href={"/name"}>
   <button
         
         className="h-12 rounded-full bg-[#f08080] px-8 text-lg hover:bg-[#e57373]"
       >
         GET STARTED
       </button>
   </Link>
  
    </div>
    </div>
    );
};

export default Work;