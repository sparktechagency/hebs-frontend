import inside1 from "@/assets/deen.png"
import inside2 from "@/assets/commonInside.png"
import Image from "next/image";
import styles from "@/app/styles.module.css"
const InsideDeen = () => {
    return (
      <div className="bg-[#FFF7F3] py-16 text-center">
      <div className="relative z-10">
      <h2 className={`text-4xl  text-black tracking-wider  ${styles.fontRozha}`}>
             Inside the Deen     <span className="relative inline-block mr-3">
                   Box
                   <span className="absolute left-0 bottom-0 w-full h-7 md:h-[15px] bg-yellow-200 -z-10"></span>
                 </span>
           </h2>
      </div>
           <p className={`text-black mt-2 max-w-lg mx-auto  ${styles.fontPoppins}`}>
             Peek inside a sample box—your reader’s bundle will be personalized just for them.
           </p>
           <div className="flex flex-row justify-center gap-2 mt-12 ">  
             {/* Left Group */}
             <div className=" ">
               <div className="" />
               <Image src={inside1} alt="Bilal Cooks Daal" width={512} height={512}  className="w-[500px]" />
 {/* <div className="w-[50%]">
 <p className={`${styles.fontInter} `}>
Inside the Deen Discoverers Box
Peek inside a sample box—your reader’s bundle will be personalized just for them.
 Five hand-picked books, including engaging activity books, chapters books, and easy reader books.</p>
 </div> */}
             </div>
             
             {/* Right Group */}
             <div className=" ">
               <div className="" />
               <div>
            <Image
              src={inside2}
              alt="Bilal Cooks Daal"
              width={512}
              height={512}
              className="w-[500px]"
            />
            <p className={`${styles.fontInter} mt-11 md:mt-0`}>
              Stickers, frameable artwork, and surprise extras.
            </p>
          </div>
       
             </div>
           </div>
         </div>
    );
};

export default InsideDeen;