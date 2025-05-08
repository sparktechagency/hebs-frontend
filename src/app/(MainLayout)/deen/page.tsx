import DeenHero from "@/app/component/Deen/DeenHero";
import InsideDeen from "@/app/component/Deen/InsideDeen";
import FeatureBook from "@/app/component/Home/FeatureBook";
import HowItWorks from "@/app/component/TinyMuslimBox/HowItWorks";


const DeenPage = () => {
    return (
        <div>
            <DeenHero/>
            <InsideDeen/>
            <HowItWorks/>
            <FeatureBook/>
        </div>
    );
};

export default DeenPage;