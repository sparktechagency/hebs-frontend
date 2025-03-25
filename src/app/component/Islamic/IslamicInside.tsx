import inside1 from "@/assets/maliks.png"
import inside2 from "@/assets/commonInside.png"
import Image from "next/image";
import styles from "@/app/styles.module.css"
const IslamicInside = () => {
    return (
      <div className="bg-[#FFF7F3] py-16 text-center">
      <div className="relative z-10">
      <h2 className={`text-4xl  text-black tracking-wider  ${styles.fontRozha}`}>
      Inside the Islamic Explorers    <span className="relative inline-block mr-3">
                   Box
                   <span className="absolute left-0 bottom-0 w-full h-7 md:h-[15px] bg-yellow-200 -z-10"></span>
                 </span>
           </h2>
      </div>
           <p className={`text-black mt-2 max-w-lg mx-auto  ${styles.fontPoppins}`}>
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

export default IslamicInside;