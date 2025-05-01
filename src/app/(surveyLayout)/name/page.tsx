'use client';

import frame1 from "@/assets/tinyMuminsFrame1.png";



import { useRouter } from "next/navigation";
import { useState } from "react";
import Name from "@/app/component/Survey/Name";
import Relation from "@/app/component/Survey/Relation";
import BirthMonth from "@/app/component/Survey/BirthMonth";
import BirthYear from "@/app/component/Survey/BirthYear";
import Topics from "@/app/component/Survey/Topics";
import Interested from "@/app/component/Survey/Interested";
import BooksLevel from "@/app/component/Survey/BooksLevel";
import Spend from "@/app/component/Survey/Spend";
import Email from "@/app/component/Survey/Email";
import Recommended from "@/app/component/Survey/Recommended";
import Gender from "@/app/component/Survey/Gender";

const NamePage = () => {
const [data,setData]=useState({})
const [isName,setIsName]=useState(true)
const [isRelation,setIsRelation]=useState(false)
const [isBirthMonth,setIsBirthMonth]=useState(false)
const [isBirthYear,setIsBirthYear]=useState(false)
const [isGender,setIsGender]=useState(false)
const [isBooksLevel,setIsBooksLevel]=useState(false)
const [isEmail,setIsEmail]=useState(false)
const [isInterested,setIsInterested]=useState(false)
const [isSpend,setIsSpend]=useState(false)
const [isTopics,setIsTopics]=useState(false)

console.log("surveyData",data);
    const router = useRouter();
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-cover bg-no-repeat bg-center mt-24"
      style={{ backgroundImage: `url(${frame1.src})`, backgroundSize: "cover" }}
    >

 
   {isName &&   <Name setIsName={setIsName} setIsRelation={setIsRelation} setData={setData}/>}
 {  isRelation &&   <Relation setIsRelation={setIsRelation} setData={setData}  setIsBirthMonth={setIsBirthMonth}/>}
{isBirthMonth && <BirthMonth setIsBirthYear={setIsBirthYear} setData={setData}  setIsBirthMonth={setIsBirthMonth} setIsRelation={setIsRelation} />}
{isBirthYear && <BirthYear setIsBirthYear={setIsBirthYear} setData={setData}  setIsBirthMonth={setIsBirthMonth} setIsGender={setIsGender}/>}
{isGender&&<Gender setIsBirthYear={setIsBirthYear} setData={setData}  setIsGender={setIsGender} setIsTopics={setIsTopics}/>}
{isTopics && <Topics setIsGender={setIsGender} setData={setData}  setIsInterested={setIsInterested} setIsTopics={setIsTopics}/>}
{isInterested && <Interested setIsBooksLevel={setIsBooksLevel} setData={setData}  setIsInterested={setIsInterested} setIsTopics={setIsTopics}/>}
{isBooksLevel&&<BooksLevel setIsSpend={setIsSpend} setData={setData}  setIsInterested={setIsInterested} setIsBooksLevel={setIsBooksLevel}/>}
{isSpend && <Spend  setIsEmail={setIsEmail} setData={setData}  setIsBooksLevel={setIsBooksLevel} setIsSpend={setIsSpend}/>}
{isEmail && <Email setIsEmail={setIsEmail} setData={setData}  setIsSpend={setIsSpend}/>}

    </div>
  );
};

export default NamePage;
