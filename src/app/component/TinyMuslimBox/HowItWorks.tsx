import Image from 'next/image';
import work1 from "@/assets/tinyWork1.png"
import work2 from "@/assets/tinyWork2.png"
import work3 from "@/assets/TinyWork3.png"
import work4 from "@/assets/TinyWork4.png"
import Link from 'next/link';
import styles from "@/app/styles.module.css"
export default function HowItWorks() {
  return (
    <div className="bg-[#FBD5D4] py-16 text-center">
      <h2 className={`text-3xl font-bold text-black  ${styles.fontRozha}`}>How it Works</h2>
      <p className={`text-gray-700 mt-2  ${styles.fontPoppins}`}>Receive five books. Only buy the ones you love.</p>
       
      <div className="bg-white border border-red-400 rounded-lg p-8 mt-8 mx-auto max-w-5xl"> 
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="text-center">
            <Image src={work1} alt="Five Customized Picks" width={150} height={150} className="mx-auto" />
            <h3 className={`font-bold mt-4  ${styles.fontRozha}`}>Five Customized Picks</h3>
            <p className={`text-gray-600 text-sm  ${styles.fontInter}`}>Tell us about your reader & we’ll send curated book boxes that include a mix of Islamic and English books.</p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <Image src={work2} alt="Better with Every Box" width={150} height={150} className="mx-auto" />
            <h3 className={`font-bold mt-4  ${styles.fontRozha}`}>Better with Every Box</h3>
            <p className={`text-gray-600 text-sm  ${styles.fontInter}`}>Book choices will improve and change month by month.</p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <Image src={work3} alt="Free Unlimited Returns" width={150} height={150} className="mx-auto" />
            <h3 className={`font-bold mt-4  ${styles.fontRozha}`}>Free Unlimited Returns</h3>
            <p className={`text-gray-600 text-sm  ${styles.fontInter}`}>Keep the books they enjoy. Send back the books they don’t.</p>
          </div>

          {/* Feature 4 */}
          <div className="text-center">
            <Image src={work4} alt="Donate" width={150} height={150} className="mx-auto" />
            <h3 className={`font-bold mt-4  ${styles.fontRozha}`}>Donate</h3>
            <p className={`text-gray-600 text-sm  ${styles.fontInter}`}>We would love to pass along titles your child has outgrown! Send any books our way, and we will give them to kids in need.</p>
          </div>
        </div>

       <Link href={"/name"}>
       <button className="mt-6 relative top-12  px-6 py-2 bg-red-400 text-white font-semibold rounded-full shadow-md hover:bg-red-500">
          GET STARTED
        </button>
       </Link>
      </div>
    </div>
  );
}
