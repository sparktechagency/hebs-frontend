'use client'
import FeatureBook from "@/app/component/Home/FeatureBook";
import LoadingPage from "@/app/loading";
import { useGetPrivacyPolicyQuery } from "@/redux/features/others/othersApi";
import { useEffect } from "react";

export default function PrivacyPolicy() {
  const { data: privacyData, isLoading,refetch } = useGetPrivacyPolicyQuery(undefined);
  console.log("privacy data", privacyData);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 5000); // Refetch every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, [refetch]);
  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <>
      <div className="min-h-screen text-black">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-black">Privacy Policy</h1>

          <div className="space-y-8 text-black">
            {/* Dynamically Rendering Privacy Policy Content */}
            <div dangerouslySetInnerHTML={{ __html: privacyData?.data?.privacyPolicy }} />

          </div>
        </div>
      </div>

      <FeatureBook />
    </>
  );
}








