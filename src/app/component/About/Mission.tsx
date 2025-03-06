import frame2 from "@/assets/mission.png";
import style from "@/app/styles.module.css";

const Mission = () => {
  return (
    <div className="relative w-full  my-5 flex justify-center items-center px-4">
      <div className="container mx-auto flex justify-center items-center">
        
        {/* Wavy Background with Centered Text */}
        <div
          className="w-fit px-6 py-4 text-center bg-no-repeat bg-contain flex justify-center items-center"
          style={{
            backgroundImage: `url(${frame2.src})`,
            backgroundSize: "100% 100%",
          }}
        >
<div className="grid gap-3 py-5">
<div>
      <h3 className={`text-[#181816] font-bold text-3xl mb-1 text-center ${style.fontRozha}`}>
            Our <span className="relative">
              Mission
              <span className="absolute bottom-0 left-0 w-full h-[6px] bg-red-400"></span>
            </span>
          </h3>
      </div>
       
      <div>
      <h2 className={`text-2xl md:text-3xl font-semibold text-[#181816] text-center ${style.fontPoppins}`}>
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
