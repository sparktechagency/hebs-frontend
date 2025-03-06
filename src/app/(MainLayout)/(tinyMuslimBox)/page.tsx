


import FeatureBook from "@/app/component/Home/FeatureBook";
import HowItWorks from "@/app/component/TinyMuslimBox/HowItWorks";
import InsideTinyMuslim from "@/app/component/TinyMuslimBox/InsideTinyMuslim";
import TinyHero from "@/app/component/TinyMuslimBox/TinyMuslimbanner";

const TinyMuslimBoxPage = () => {
    return (
        <div>
            <TinyHero/>
            <InsideTinyMuslim/>
            <HowItWorks/>
            <FeatureBook/>
        </div>
    );
};

export default TinyMuslimBoxPage;