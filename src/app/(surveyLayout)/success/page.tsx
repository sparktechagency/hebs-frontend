
import sucess from "@/assets/sucess.png"
import Image from "next/image";
const SucessPage = () => {
    return (
        <div className="h-screen container mx-auto flex flex-col gap-6 justify-center items-center">
            <Image src={sucess} alt="sucess"/>
            <p>Your payment is successful!</p>
        </div>
    );
};

export default SucessPage;