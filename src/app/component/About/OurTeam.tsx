/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";

import style from "@/app/styles.module.css";
import { useGetTeamsQuery } from "@/redux/features/others/othersApi";
import LoadingPage from "@/app/loading";

export default function OurTeam() {
  const { data: teams, isLoading } = useGetTeamsQuery(undefined);
  console.log("teams", teams);

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="w-full bg-[#FEECDE] relative">
   {teams?.data?.map((team: any, idx: number) => {
  const isEven = idx % 2 === 0; // even index
  return (
    <section className="px-4 sm:px-6 md:px-10 py-16 md:py-24" key={idx}>
      <div className="container mx-auto">
 
  
        <div
          className={`flex gap-12 items-center flex-col-reverse md:flex-row ${
            isEven ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* Text Content */}
          <div className="text-center md:text-left py-5 md:py-0 md:w-1/2 px-4 md:px-0">
                {idx === 0 && (
          <p className={`text-black text-3xl mb-8 ${style.fontJost}`}>
            Founders: <span>Khader Zahdan and Eanara Ghouleh</span>
          </p>
        )}

            <p className={`${style.fontJost} text-2xl font-bold mb-4`}>
              <span className="text-[#F37975]">{team.position}:</span>{" "}
              <span className="text-[#F37975]">{team?.name}</span>
            </p>

            <p
              className={`${style.fontPoppins} leading-relaxed text-[20px] lg:text-lg`}
            >
              {team.description}
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:w-1/2">
            <Image
              src={team.image}
              alt={`${team.name}`}
              width={500}
              height={500}
              className="w-full max-w-[500px] h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
})}

    </div>
  );
}
