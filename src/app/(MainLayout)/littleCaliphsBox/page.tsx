import FeatureBook from "@/app/component/Home/FeatureBook";
import HowCaliphsWorks from "@/app/component/LittleCaliphs/HowCaliphsWork";
import InsideLittleCaliphs from "@/app/component/LittleCaliphs/InsideLittleCaliphs";
import LittleCaliphsHero from "@/app/component/LittleCaliphs/LittleCalipsBanner";


const LittleCalipsPage = () => {
    return (
        <div>
            <LittleCaliphsHero/>
            <InsideLittleCaliphs/>
            <HowCaliphsWorks/>
            <FeatureBook/>
        </div>
    );
};

export default LittleCalipsPage;