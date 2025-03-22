import Banner from "@/app/component/Home/Banner";
import Discover from "@/app/component/Home/Discover";
import FeatureBook from "@/app/component/Home/FeatureBook";
import FunFact from "@/app/component/Home/FunFact";
import HadithSlider from "@/app/component/Home/HadithSlider";
import Hero from "@/app/component/Home/Hero";
import Islamic from "@/app/component/Home/Islamic";
import LittleCalips from "@/app/component/Home/LittleCaliphs";
import TinyMuminsSection from "@/app/component/Home/TinyMumins";
import Work from "@/app/component/Home/Work";

const HomePage = () => {
    return (
        <div className="">
            <Banner/>
            <Hero/>
            <FunFact/>
            <Work/>
            <HadithSlider/>
            <TinyMuminsSection/>
            <LittleCalips/>
            <Discover/>
            <Islamic/>
            <FeatureBook/>
        </div>
    );
}

export default HomePage;