import FeatureBook from "@/app/component/Home/FeatureBook";
import IslamicHero from "@/app/component/Islamic/IslamicHero";
import IslamicInside from "@/app/component/Islamic/IslamicInside";
import HowItWorks from "@/app/component/TinyMuslimBox/HowItWorks";


const IslamicPage = () => {
    return (
        <div>
            <IslamicHero/>
            <IslamicInside/>
            <HowItWorks/>
            <FeatureBook/>
        </div>
    );
};

export default IslamicPage;