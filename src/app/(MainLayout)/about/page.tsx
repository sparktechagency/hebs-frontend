import AboutBanner from "@/app/component/About/AboutBanner";
import Mission from "@/app/component/About/Mission";
import OurTeam from "@/app/component/About/OurTeam";
import ValuesSection from "@/app/component/About/OurValues";

const AboutPage = () => {
    return (
        <div>
            <AboutBanner/>
            <Mission/>
            <ValuesSection/>
            <div className="text-center my-3">
            <h2 className="text-4xl md:text-5xl font-bold text-black  relative inline-block">
                Meet the Team
                <div className="absolute -bottom-1 right-0 w-1/4 h-3 bg-yellow-200 -z-10" />
              </h2>
            </div>
            <OurTeam/>

        </div>
    );
};

export default AboutPage;