/* eslint-disable react/no-unescaped-entities */
import blogbg from "@/assets/blog_bg.png (1).png"
import { Button, Input } from "antd";
import Image from "next/image";
import bookCover from "@/assets/bookCover.png.png"
import book2 from "@/assets/blog2.png"
import book3 from "@/assets/blog3.png"
import { FacebookOutlined, MailOutlined } from "@ant-design/icons";
import FeatureBook from "@/app/component/Home/FeatureBook";
import styles from "@/app/styles.module.css";
const BlogPage = () => {
  return (
    <div>
      <div>
        <Image alt="blogImg" src={blogbg} height={450} className=" w-full object-cover" />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center px-4 lg:px-0">
        {/* Left Column */}
        <div className="text-black py-8 px-6 hidden md:flex flex-col items-center text-center w-full lg:w-1/4">
          {/* Connect Section */}
          <h2 className={`text-orange-400 font-bold text-2xl ${styles.fontJosefin}`}>CONNECT</h2>
          <div className="flex space-x-4 mt-2">
            <FacebookOutlined className="text-red-400 text-xl" />
            <MailOutlined className="text-red-400 text-xl" />
          </div>

          {/* Categories Section */}
          <div className="bg-yellow-100 p-4 mt-6 w-60 text-black rounded-lg shadow-md">
            <h3 className={`tracking-widest ${styles.fontPoppins}`}>CATEGORIES</h3>
            <ul className={`mt-2 space-y-2 text-sm ${styles.fontPoppins}`}>
              <li>Babies & Toddlers</li>
              <li>Category Two</li>
              <li>Category Three</li>
              <li>Category Four</li>
              <li>Category Five</li>
            </ul>
          </div>

          {/* Search Section */}
          <h3 className={`text-gray-400 mt-6 tracking-widest ${styles.fontPoppins}`}>SEARCH</h3>
          <div className="w-full mt-2">
            <Input placeholder="Search..." className="bg-black text-white border-gray-600" />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-3/4">
          {/* First Article */}
          <div className="text-black py-16 px-6 flex flex-col items-center text-center relative mt-12">
            {/* Book Image */}
            <div className="flex justify-center items-center   w-40 h-40">
              <Image src={bookCover} alt="My Sadaqah Jar is Empty" width={160} height={160} className="rounded-full" />
            </div>

            {/* Article Title */}
            <h2 className={`text-red-400 text-3xl tracking-widest max-w-2xl mt-16 ${styles.fontPoppins}`}>
              TEACHING GENEROSITY: CREATING A CHARITY JAR WITH YOUR CHILD AFTER READING "MY SADAQAH JAR IS EMPTY"
            </h2>

            {/* Article Description */}
            <p className={`text-gray-400 text-xl md:text-sm tracking-widest max-w-3xl mt-4 ${styles.fontPoppins}`}>
              As parents, we strive to instill values of kindness, generosity, and empathy in our children. One effective and enjoyable way to teach these values is through stories and hands-on activities. At Illuminate Muslim Minds, we believe in the power of books to illuminate young minds and nurture Islamic morals. This month, we're excited to feature […]
            </p>

            {/* View Post Button */}
            <Button className={`mt-6 bg-red-500 border-none text-white px-6 py-2 rounded font-thin ${styles.fontJost} tracking-widest`}>+ VIEW POST</Button>
          </div>

          {/* Second Article */}
          <div className="text-black py-16 px-6 flex flex-col items-center text-center relative mt-8">
            {/* Book Image */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40">
              <Image src={book2} alt="My Sadaqah Jar is Empty" width={160} height={160} className="rounded-full" />
            </div>

            {/* Article Title */}
            <h2 className={`text-red-400 text-3xl tracking-widest max-w-2xl mt-16 ${styles.fontPoppins}`}>
              TEACHING GENEROSITY: CREATING A CHARITY JAR WITH YOUR CHILD AFTER READING "MY SADAQAH JAR IS EMPTY"
            </h2>

            {/* Article Description */}
            <p className={`text-gray-400 text-xl md:text-sm tracking-widest max-w-3xl mt-4 ${styles.fontPoppins}`}>
              As parents, we strive to instill values of kindness, generosity, and empathy in our children. One effective and enjoyable way to teach these values is through stories and hands-on activities. At Illuminate Muslim Minds, we believe in the power of books to illuminate young minds and nurture Islamic morals. This month, we're excited to feature […]
            </p>

            {/* View Post Button */}
            <Button className={`mt-6 bg-red-500 border-none text-white px-6 py-2 rounded font-thin ${styles.fontJost} tracking-widest`}>+ VIEW POST</Button>
          </div>

          {/* Third Article */}
          <div className="text-black py-16 px-6 flex flex-col items-center text-center relative mt-8">
            {/* Book Image */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40">
              <Image src={book3} alt="My Sadaqah Jar is Empty" width={160} height={160} className="rounded-full" />
            </div>

             {/* Article Title */}
             <h2 className={`text-red-400 text-3xl tracking-widest max-w-2xl mt-16 ${styles.fontPoppins}`}>
              TEACHING GENEROSITY: CREATING A CHARITY JAR WITH YOUR CHILD AFTER READING "MY SADAQAH JAR IS EMPTY"
            </h2>

            {/* Article Description */}
            <p className={`text-gray-400 md:text-sm text-xl tracking-widest max-w-3xl mt-4 ${styles.fontPoppins}`}>
              As parents, we strive to instill values of kindness, generosity, and empathy in our children. One effective and enjoyable way to teach these values is through stories and hands-on activities. At Illuminate Muslim Minds, we believe in the power of books to illuminate young minds and nurture Islamic morals. This month, we're excited to feature […]
            </p>

            {/* View Post Button */}  
              <Button className={`mt-6 bg-red-500 border-none text-white px-6 py-2 rounded font-thin ${styles.fontJost} tracking-widest`}>+ VIEW POST</Button>
          </div>
        </div>
      </div>
      <FeatureBook/>
    </div>
  );
};

export default BlogPage;
