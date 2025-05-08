import frame2 from "@/assets/mission.png";
import style from "@/app/styles.module.css";

const Mission = () => {
  return (
    <div className="relative w-full my-5 flex justify-center items-center px-4">
      <div className="container mx-auto flex justify-center items-center">
        
        {/* Background Wrapper */}
        <div
          className=" w-fit px-6 py-4 text-center bg-no-repeat bg-contain flex justify-center items-center relative z-10 "
          style={{
            backgroundImage: `url(${frame2.src})`,
            backgroundSize: "100% 100%",
          }}
          // className="relative w-fit px-6 py-4 text-center flex justify-center items-center bg-yellow-100 rounded-lg"
        >
          <div className="grid gap-3 py-5">
            
            {/* "Our Mission" with Underline */}
            <div className="text-center">
              <p className={`text-[#181816] font-bold text-4xl mb-1 text-center ${style.fontRozha}`}>
                Our
                <span className={`relative inline-block ml-3 ${style.fontRozha}`}>
                  Mission 
                  {/* Background Line Behind Mission */}
                  <span className="absolute  left-0 bottom-0 w-full h-4 sm:h-6 md:h-[18px] bg-red-400 -z-10"></span>
                </span>
              </p>
            </div>

            {/* Subtitle */}
            <div>
              <h2 className={`text-xl md:text-2xl  text-[#181816] text-center ${style.fontPoppins}`}>
                Ignite a love of Islam and Learning
              </h2>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Mission;
