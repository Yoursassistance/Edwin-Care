"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Referral/Header";
import ReferralTop from "@/components/Referral/ReferralTop";
import React, { useEffect, useState } from "react";
import StepOne from "@/components/Referral/StepOne";
import StepTwo from "@/components/Referral/StepTwo";
import StepThree from "@/components/Referral/StepThree";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const updateData = (stepData) => {
    setData((prevData) => ({
      ...prevData,
      ...stepData,
    }));
  };

  const handleNextClick = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_bc4wuaw", // Replace with your EmailJS service ID
        "template_4efcwre", // Replace with your EmailJS template ID
        data,
        "Y25BllYFSc1kAvzil" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          setLoading(false);
          handleNextClick();

          // Clear input fields
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          toast.error("Failed to send the message, please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      )
      .finally(() => {
        // Remove the temporary 'services' field
        form.current.removeChild(servicesField);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (loading === true) {
      sendEmail();
    }
  });

  return (
    <div className="w-[100%]">
      <ReferralTop />
      <Header />
      <ToastContainer />
      <div className="bg-[#E6E6E6] my-[5%] mx-[20%] rounded-[20px] px-[3%] py-[3%] text-[#393637] max-[768px]:mx-[2%] max-[768px]:rounded-[10px]">
        <div className="text-center">
          <h1 className="text-[32px] mt-5 font-bold max-[768px]:text-[24px]">
            Referral Form
          </h1>
          <p className="max-[768px]:text-[14px] max-[768px]:px-[8%]">
            Get our expert advise on how to transform your brand ideas to
            something amazing
          </p>
        </div>
        <div className="bg-[white] py-[3%] px-[5%] rounded-[10px] mt-[3%] max-[768px]:rounded-[5px]">
          {currentStep === 1 && (
            <StepOne
              updateData={updateData}
              handleNextClick={handleNextClick}
            />
          )}
          {currentStep === 2 && (
            <StepTwo
              updateData={updateData}
              handleNextClick={handleNextClick}
            />
          )}
          {currentStep === 3 && (
            <StepThree
              updateData={updateData}
              handleNextClick={handleNextClick}
              data={data}
              loading={loading}
              setLoading={setLoading}
            />
          )}
          {currentStep > 3 && (
            <div>
              <p className="text-[24px] font-bold text-center">
                Thank you for your interest in our services. <br /> We will be
                in touch with you soon.
              </p>
            </div>
          )}
          <div className="mt-[3%] ">
            <h1 className="max-[768px]:text-[14px]">
              Edwin Care Support Service needs the contact information you
              provide to us in order to contact you about our offers and
              services. You may unsubscribe from these communications at
              anytime. For information on how to unsubscribe, as well as our
              privacy practices and commitment to protecting your privacy, check
              out our Privacy Policy.
            </h1>
            {/* {currentStep <= 3 && (
              <div className="text-center">
                <button
                  onClick={handleNextClick}
                  className="mt-[5%] bg-[#6A00C6] text-[white] px-[10%] mb-[5%] py-[2%] rounded-[8px] max-[768px]:text-[13px]"
                >
                  {currentStep === 1 && "Next "}
                  {currentStep === 2 && "Next "}
                  {currentStep === 3 ? " Submit " : "Form"}
                </button>
              </div>
            )} */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
