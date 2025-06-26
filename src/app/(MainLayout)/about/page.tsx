
import AboutBanner from "@/app/component/About/AboutBanner";
import Mission from "@/app/component/About/Mission";
import NewsletterSignup from "@/app/component/About/NewsLetter";
import OurTeam from "@/app/component/About/OurTeam";
import ValuesSection from "@/app/component/About/OurValues";
import FeatureBook from "@/app/component/Home/FeatureBook";

// import style from "@/app/styles.module.css";


const AboutPage = () => {



  return (  
    <div>
      <AboutBanner />
      <Mission />
      <ValuesSection />
      {/* <div className="text-center  relative z-10 mt-8 mb-3">
        <h2
          className={`text-4xl md:text-5xl  text-black  relative inline-block ${style.fontRozha}`}
        >
          Meet the{" "}
          <span className="relative inline-block mr-3">
            Team
            <span className="absolute left-0 bottom-0 w-full h-4 sm:h-6 md:h-[15px] bg-[#FAF397] -z-10"></span>
          </span>
        </h2>
      </div> */}
      <OurTeam />
      <div className="overflow-x-hidden">
        <NewsletterSignup />
      </div>
      <FeatureBook />
    </div>
  );
};

export default AboutPage;
