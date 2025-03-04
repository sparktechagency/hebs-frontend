"use client";


import SurveyNavbar from "../component/shared/SurveyNav";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div>
        <div className="">
          <SurveyNavbar/>
          {children}
        </div>
        <div>
    
        </div>
      </div>
    </>
  );
};

export default MainLayout;
