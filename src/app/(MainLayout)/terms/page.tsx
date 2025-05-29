'use client'
import FeatureBook from '@/app/component/Home/FeatureBook';
import LoadingPage from '@/app/loading';
import { useGetTermsQuery } from '@/redux/features/others/othersApi';
import React from 'react';

/* eslint-disable react/no-unescaped-entities */

const TermsPage = () => {
  const { data: termsData, isLoading } = useGetTermsQuery(undefined);
  console.log("terms data", termsData);

  if (isLoading) {
    return <LoadingPage />;
  }

 
 const termsHTML = termsData?.data?.termsCondition || 'Terms of Service';



  function extractH1Text(htmlString: string) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    const h1 = tempDiv.querySelector('h1');
    return h1 ? h1.textContent : '';
  }


  function removeH1Tag(htmlString: string) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    const h1 = tempDiv.querySelector('h1');
    if (h1) h1.remove();
    return tempDiv.innerHTML;
  }


  const h1Text = extractH1Text(termsHTML) || 'Terms of Services';
  console.log("title text", extractH1Text(termsHTML));
  const restHTML = removeH1Tag(termsHTML);
  console.log("restHTML",restHTML);

  return (
    <div className="min-h-screen text-black">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
  
        <h1 className="text-4xl font-bold text-center mb-12 text-black">{h1Text}</h1>

   
        <div className="space-y-8 text-black" dangerouslySetInnerHTML={{ __html: restHTML }} />
      </div>

      <FeatureBook />
    </div>
  );
};

export default TermsPage;
