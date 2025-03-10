import FeatureBook from "@/app/component/Home/FeatureBook";
// import HowCaliphsWorks from "@/app/component/LittleCaliphs/HowCaliphsWork";
import InsideLittleCaliphs from "@/app/component/LittleCaliphs/InsideLittleCaliphs";
import LittleCaliphsHero from "@/app/component/LittleCaliphs/LittleCalipsBanner";
import HowItWorks from "@/app/component/TinyMuslimBox/HowItWorks";


const LittleCalipsPage = () => {
    return (
        <div>
            <LittleCaliphsHero/>
            <InsideLittleCaliphs/>
            {/* <HowCaliphsWorks/> */}
            <HowItWorks/>
            <FeatureBook/>
        </div>
    );
};

export default LittleCalipsPage;