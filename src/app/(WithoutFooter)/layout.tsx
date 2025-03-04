"use client";


import Navbar from "../component/shared/Navbar";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div>
        <div className="">
          <Navbar />
          {children}
        </div>
        <div>
    
        </div>
      </div>
    </>
  );
};

export default MainLayout;
