'use client'
import FeatureBook from '@/app/component/Home/FeatureBook';
import LoadingPage from '@/app/loading';
import { useGetTermsQuery } from '@/redux/features/others/othersApi';
import React from 'react';
/* eslint-disable react/no-unescaped-entities */
const TermsPage = () => {
    const {data:termsData,isLoading}=useGetTermsQuery(undefined)
    console.log("about data",termsData);
    
    if(isLoading){
      return <LoadingPage/>
    }
    return (
  <div className="min-h-screen  text-black">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-black">Terms of Service</h1>
  
          <div className="space-y-8 text-black">
            {/* Introduction */}
            <p className="leading-relaxed">
        Assalamualikum! Welcome to Illuminate Muslim Minds! Illuminate Muslim Minds LLC, is the provider of the Illuminate Muslim Minds website and services. These terms and conditions govern your access to and use of the illuminatemuslimminds.com website, apps and, unless explicitly stated otherwise, all services offered by Illuminate Muslim Minds through the Website. This encompasses, but is not restricted to, our subscription products, single purchase products, and gift cards. Kindly review these terms of services attentively. By accessing or using the website and/or service, you affirm your agreement to abide by these terms and conditions, which include any updates or revisions posted here or communicated to you by other means. If you do not agree with the terms and conditions outlined herein, you are not permitted to access or use the website and/or the services. These terms and conditions necessitate the use of final and binding arbitration for the resolution of any dispute or claim arising from or related to these terms, your access to, or use of the website and/or the services. This includes matters concerning the validity, applicability, or interpretation of these terms and conditions. You agree that such claims will be addressed solely on an individual basis and not through a class, consolidated, or representative action, arbitration, or a similar process. It is important to carefully review the section titled "binding arbitration and class action waiver" below to comprehend your rights and obligations regarding the resolution of any claim. You affirm and guarantee that: (a) you have reached the legal age required to enter into a binding contract; (b) possess the right, authority, and capacity to consent to and comply with these Terms and Conditions; and (c) are not a person restricted from using the Website and/or Services by the laws of any applicable jurisdiction. It is important to note that the Website and/or Services are not intended for users below the age of 13, and such users are explicitly prohibited from submitting any personal data or utilizing any aspect of the Website and/or Services. By engaging in such actions, you assert, represent, and warrant that you are 13 years of age or older.
            </p>
 
        <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-black mt-8">
             Rights
              </h2>
              <p className="leading-relaxed">
      b. Google & Apple. If you download the App from the Apple App Store or Google Play Store, your usage of the App must align with the respective Apple App Store or Google Play Store Terms of Use. Both you and Illuminate Muslim Minds acknowledge the following: (i) These Terms and Conditions are an agreement between you and Illuminate Muslim Minds exclusively, not with Apple or Google; (ii) Neither Apple nor Google holds responsibility for the App or its contents; (iii) Apple and Google are not obliged to provide any maintenance or support services for the App; (iv) Illuminate Muslim Minds, not Apple or Google, is accountable for addressing claims from you or any third party related to the App, including product liability claims, non-conformity to legal or regulatory requirements, and claims under consumer protection or similar legislation; (v) Apple, Google, and their subsidiaries are considered third-party beneficiaries of these Terms and Conditions concerning the relevant App, possessing the right to enforce these Terms and Conditions against you as a third-party beneficiary; and (vi) Illuminate Muslim Minds, not Apple or Google, holds sole responsibility for investigating, defending, settling, and resolving any intellectual property infringement claim linked to the App.3.
              </p>
            </section>
            {/* Questions Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-black mt-8">
             Illuminate Muslim Minds Kids
              </h2>
              <p className="leading-relaxed">
               Your subscription provides access to a carefully curated blend of the best new releases and hidden gem classics. Depending on the subscription plan or membership level you choose, your options include: (i) a 7-day exploration period to read and enjoy the books with your children, with the ability to return any books you don't wish to keep, provided they are in untouched condition; (ii) an unlimited time to read and discover the books, with the freedom to send back any titles you decide not to hold onto, assuming they are in immaculate condition; or (iii) the opportunity to permanently add a specific number of books to your collection as part of your subscription, all in accordance with our detailed shipping and return policy. 
              </p>
            </section>
 
            {/* Information Collected Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-black mt-8">Acceptance of Terms</h2>
      
              <p className="leading-relaxed">
                Assalamualikum! Welcome to Illuminate Muslim Minds! Illuminate Muslim Minds LLC, is the provider of the Illuminate Muslim Minds website and services. These terms and conditions govern your access to and use of the illuminatemuslimminds.com website, apps and, unless explicitly stated otherwise, all services offered by Illuminate Muslim Minds through the Website. This encompasses, but is not restricted to, our subscription products, single purchase products, and gift cards. Kindly review these terms of services attentively. By accessing or using the website and/or service, you affirm your agreement to abide by these terms and conditions, which include any updates or revisions posted here or communicated to you by other means. If you do not agree with the terms and conditions outlined herein, you are not permitted to access or use the website and/or the services. These terms and conditions necessitate the use of final and binding arbitration for the resolution of any dispute or claim arising from or related to these terms, your access to, or use of the website and/or the services. This includes matters concerning the validity, applicability, or interpretation of these terms and conditions. You agree that such claims will be addressed solely on an individual basis and not through a class, consolidated, or representative action, arbitration, or a similar process. It is important to carefully review the section titled "binding arbitration and class action waiver" below to comprehend your rights and obligations regarding the resolution of any claim. You affirm and guarantee that: (a) you have reached the legal age required to enter into a binding contract; (b) possess the right, authority, and capacity to consent to and comply with these Terms and Conditions; and (c) are not a person restricted from using the Website and/or Services by the laws of any applicable jurisdiction. It is important to note that the Website and/or Services are not intended for users below the age of 13, and such users are explicitly prohibited from submitting any personal data or utilizing any aspect of the Website and/or Services. By engaging in such actions, you assert, represent, and warrant that you are 13 years of age or older.
              </p>

            </section>
  

          </div>
        </div>
        <FeatureBook/>
      </div>
    );
};

export default TermsPage;