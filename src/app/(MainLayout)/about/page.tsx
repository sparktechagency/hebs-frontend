import AboutBanner from "@/app/component/About/AboutBanner";
import Mission from "@/app/component/About/Mission";
import NewsletterSignup from "@/app/component/About/NewsLetter";
import OurTeam from "@/app/component/About/OurTeam";
import ValuesSection from "@/app/component/About/OurValues";
import FeatureBook from "@/app/component/Home/FeatureBook";
import style from "@/app/styles.module.css";
const AboutPage = () => {
    return (
        <div>
            <AboutBanner/>
            <Mission/>
            <ValuesSection/> 
            <div className="text-center  relative z-10 mt-8">
            <h2 className={`text-4xl md:text-5xl  text-black  relative inline-block ${style.fontRozha}`}>
                Meet the      <span className="relative inline-block mr-3">
                Team
                  <span className="absolute left-0 bottom-0 w-full h-4 sm:h-6 md:h-[15px] bg-[#FAF397] -z-10"></span>
                </span>
                {/* <div className="absolute -bottom-1 right-0 w-1/4 h-3 bg-yellow-200 -z-10" /> */}
              </h2>
            </div>
            <OurTeam/>
            <NewsletterSignup/>
<FeatureBook/>
        </div>
    );
};

export default AboutPage;