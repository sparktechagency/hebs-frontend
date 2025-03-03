import Banner from "@/app/component/Home/Banner";
import FunFact from "@/app/component/Home/FunFact";
import HadithSlider from "@/app/component/Home/HadithSlider";
import Hero from "@/app/component/Home/Hero";
import Work from "@/app/component/Home/Work";

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Hero/>
            <FunFact/>
            <Work/>
            <HadithSlider/>
        </div>
    );
};

export default HomePage;