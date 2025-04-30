'use client';

import frame1 from "@/assets/tinyMuminsFrame1.png";



import { useRouter } from "next/navigation";
import { useState } from "react";
import Name from "@/app/component/Survey/Name";
import Relation from "@/app/component/Survey/Relation";

const NamePage = () => {
const [data,setData]=useState({})
const [isName,setIsName]=useState(true)
const [isRelation,setIsRelation]=useState(false)
const [isBirthMonth,setIsBirthMonth]=useState(false)
const [isBirthYear,setIsBirthYear]=useState(false)
const [isBooksLevel,setIsBooksLevel]=useState(false)
const [isEmail,setIsEmail]=useState(false)
const [isInterested,setIsInterested]=useState(false)
const [isSpend,setIsSpend]=useState(false)
const [isTopics,setIsTopics]=useState(false)



  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-cover bg-no-repeat bg-center mt-24"
      style={{ backgroundImage: `url(${frame1.src})`, backgroundSize: "cover" }}
    >

 
   {isName &&   <Name setIsName={setIsName} setIsRelation={setIsRelation} setData={setData}/>}
 {  isRelation &&   <Relation setIsRelation={setIsRelation} setData={setData}  setIsBirthMonth={setIsBirthMonth}/>}

 
    </div>
  );
};

export default NamePage;
