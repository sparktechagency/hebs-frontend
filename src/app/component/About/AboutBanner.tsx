'use client'
import frame2 from "@/assets/tinyMuminsFrame2.png";
import style from "@/app/styles.module.css";
import Image from "next/image";
import aboutTop from "@/assets/aboutTop.png";
import { useGetAboutQuery } from "@/redux/features/others/othersApi";


const AboutBanner = () => {
  const {data:aboutdata}=useGetAboutQuery(undefined);
  const description = aboutdata?.data?.description;

  // Regex to separate all HTML tags
const regex = /(<.*?>)(.*?)(?=<.*?>|$)/g;
let match;
const separatedContent = [];

// Match all the tags and their content
while ((match = regex.exec(description)) !== null) {
  separatedContent.push({ tag: match[1], content: match[2] });
}
console.log("about data==>",separatedContent);
  return (
    <div
      className="relative w-full bg-top bg-no-repeat bg-cover  pb-14 lg:pb-0 md:py-2 md:mt-1  text-center md:text-start"
      style={{ backgroundImage: `url(${frame2.src})` }}
    >
      <div className=" px-4 py-16 md:py-36  ">
        <div className=" max-w-7xl  mx-auto ">   
          <div className="flex flex-col-reverse md:flex-row px-6 md:gap-3 lg:gap-5">
            {/* Left content */}
            <div className="md:w-1/2  lg:mt-1  w-[100%] ">
              <div>
                <h3
                  className={`text-[#FCB876] text-5xl md:text-6xl lg:text-7xl xl:text-9xl  lg:mb-1 ${style.fontRozha}`}
                >
                  ABOUT
                </h3>
                <h2
                  className={`text-3xl md:text-5xl xl:text-7xl  text-[#F37975] ${style.fontHotel}`}
                >
                  illuminate muslim minds
                </h2>
              </div>

              <p
                className={`text-2xl   text-black leading-snug ${style.fontRozha}`}
              >
                Who We Are:
              </p>

              <p
              // text-[#333333]
                className={`text-[20px] md:text-base lg:text-lg text-black  ${style.fontPoppins}`}
              >
                Illuminate Muslim Minds is dedicated to fostering a lifelong
                love for reading by offering a carefully curated selection of
                books that appeal to young minds. With a focus on Arabic,
                Islamic, and appropriate English literature, we simplify the
                search for the perfect read through our expertly selected
                monthly subscriptions and engaging book fairs. Utilizing a blend
                of expert recommendations and data science, we aim to provide a
                reading experience that is both enriching and enjoyable for
                children at every reading level. 
              </p>
            </div>
            {/* Right content - Books */}
            <div className="  flex items-center justify-center">  
         
              <div className="">
                <Image
                  src={aboutTop}
                  alt="I've Loved You Since Forever book cover"
                  width={500}
                  height={500}
                  className="rounded-md "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default AboutBanner;
