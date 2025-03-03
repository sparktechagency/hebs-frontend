import Banner from "@/app/component/Home/Banner";
import FunFact from "@/app/component/Home/FunFact";
import HadithSlider from "@/app/component/Home/HadithSlider";
import Hero from "@/app/component/Home/Hero";
import LittleCalips from "@/app/component/Home/LittleCaliphs";
import TinyMuminsSection from "@/app/component/Home/TinyMumins";
import Work from "@/app/component/Home/Work";

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Hero/>
            <FunFact/>
            <Work/>
            <HadithSlider/>
            <TinyMuminsSection/>
            <LittleCalips/>
        </div>
    );
};

export default HomePage;