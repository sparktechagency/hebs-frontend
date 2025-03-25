'use client'
import styles from '@/app/styles.module.css'
import Image from 'next/image';
import img1 from '@/assets/work5.png'
import img2 from '@/assets/work6.png'
import img3 from '@/assets/work7.png'
import img4 from '@/assets/work8.png'


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
        <div className="bg-[#FBD5D4] w-full py-2">
<div className='max-w-7xl mx-auto'>
<div className='py-8 relative z-10 '>
<h1 className={`text-center text-5xl   ${styles.fontRozha}`}>How it   <span className="relative inline-block mr-3">
Works
      <span className="absolute left-0 bottom-0 w-full h-4 sm:h-6 md:h-[25px] bg-[#FAF397] -z-10"></span>
    </span></h1>
<p className={`text-center text-2xl  ${styles.fontPopins}`}>Receive five books. Only buy the ones you love.</p>
</div>


        <section className="relative w-[90%]  mx-auto border-4 border-red-500 bg-[#FFFFFF] px-4 py-6">
  <div className="">

  
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
          <p className={`mb-4 text-2xl  ${styles.fontRozha}`}>
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
         
         className={`h-12 rounded-full text-white bg-[#f08080] px-8 text-lg hover:bg-[#e57373] ${styles.fontInter}`}
       >
         GET STARTED
       </button>
   </Link>
  
    </div>
</div>
    </div>
    );
};

export default Work;