import FeatureBook from "@/app/component/Home/FeatureBook";
import InsideLittleCaliphs from "@/app/component/LittleCaliphs/InsideLittleCaliphs";
import LittleCaliphsHero from "@/app/component/LittleCaliphs/LittleCalipsBanner";
import HowItWorks from "@/app/component/TinyMuslimBox/HowItWorks";


const LittleCalipsPage = () => {
    return (
        <div>
            <LittleCaliphsHero/>
            <InsideLittleCaliphs/>
            <HowItWorks/>
            <FeatureBook/>
        </div>
    );
};

export default LittleCalipsPage;