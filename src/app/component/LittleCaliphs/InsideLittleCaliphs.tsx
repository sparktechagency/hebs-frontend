import inside1 from "@/assets/littleCaliphsInside.png"
import inside2 from "@/assets/tiniInside2.png"
import Image from "next/image";
import styles from "@/app/styles.module.css"
const InsideLittleCaliphs = () => {
    return (
        <div className="bg-[#FFF7F3] py-16 text-center">
        <h2 className={`text-4xl font-bold text-black  ${styles.fontRozha}`}>
          Inside the Little Caliphs <span className={`text-[#F37975]  ${styles.fontPoppins}`}>Box</span>
        </h2>
        <p className={`text-gray-600 mt-2 max-w-lg mx-auto  ${styles.fontPoppins}`}>
          Peek inside a sample box—your reader’s bundle will be personalized just for them.
        </p>
        <div className="flex flex-wrap justify-center gap-12 mt-12 ">
          {/* Left Group */}
          <div className=" ">
            <div className="" />
            <Image src={inside1} alt="Bilal Cooks Daal" width={512} height={512} className="" />
         
          </div>
          
          {/* Right Group */}
          <div className=" flex flex-wrap gap-6 justify-center">
            <div className="" />
            <Image src={inside2} alt="Bilal Cooks Daal" width={512} height={512} className="" />
    
          </div>
        </div>
      </div>
    );
};

export default InsideLittleCaliphs;