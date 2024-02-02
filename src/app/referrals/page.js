"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Referral/Header";
import ReferralTop from "@/components/Referral/ReferralTop";
import React, { useState } from "react";
import StepOne from "@/components/Referral/StepOne";
import StepTwo from "@/components/Referral/StepTwo";
import StepThree from "@/components/Referral/StepThree";

const page = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextClick = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-[100%]">
      <ReferralTop />
      <Header />

      <div className="bg-[#E6E6E6] my-[5%] mx-[20%] rounded-[20px] px-[3%] py-[3%] text-[#393637] max-[768px]:mx-[5%] max-[768px]:rounded-[10px]">
        <div className="text-center">
          <h1 className="text-[32px] font-bold max-[768px]:text-[24px]">
            Referral Form
          </h1>
          <p className="max-[768px]:text-[14px]">
            Get our expert advise on how to transform your brand ideas to
            something amazing
          </p>
        </div>
        <div className="bg-[white] py-[3%] px-[5%] rounded-[10px] mt-[3%] max-[768px]:rounded-[5px]">
          {currentStep === 1 && <StepOne />}
          {currentStep === 2 && <StepTwo />}
          {currentStep === 3 && <StepThree />}
          <div className="mt-[3%] ">
            <h1 className="max-[768px]:text-[14px]">
              Edwin Care Support Service needs the contact information you
              provide to us in order to contact you about our offers and
              services. You may unsubscribe from these communications at
              anytime. For information on how to unsubscribe, as well as our
              privacy practices and commitment to protecting your privacy, check
              out our Privacy Policy.
            </h1>
            {currentStep <= 3 && (
              <div className="text-center">
                <button
                  onClick={handleNextClick}
                  className="mt-[5%] bg-[#6A00C6] text-[white] px-[10%] mb-[5%] py-[2%] rounded-[8px]"
                >
                  {currentStep === 1 && "Next "}
                  {currentStep === 2 && "Next "}
                  {currentStep === 3 ? " Submit " : "Form"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
