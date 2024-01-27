import Footer from "@/components/Footer";
import Header from "@/components/Referral/Header";
import ReferralTop from "@/components/Referral/ReferralTop";
import React from "react";

const page = () => {
  return (
    <div className="w-[100%]">
      <ReferralTop />
      <Header />

      <div className="bg-[#E6E6E6] my-[5%] mx-[20%] rounded-[20px] px-[3%] py-[3%] text-[#393637] max-[768px]:mx-[5%] max-[768px]:rounded-[10px]">
        <div className="text-center">
          <h1 className="text-[32px] font-bold max-[768px]:text-[24px]">Referral Form</h1>
          <p className="max-[768px]:text-[14px]">
            Get our expert advise on how to transform your brand ideas to
            something amazing
          </p>
        </div>

        <div className="text-center mt-[3%] bg-[white] py-[3%] px-[5%] rounded-[10px] max-[768px]:rounded-[5px]">
          <h1 className="text-[20px] font-medium mt-[5%] max-[768px]:text-[14px]">
            Participant incoming referral form
          </h1>

          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%] max-[768px]:text-[14px]">Client Name</h1>
            <input
              className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
              placeholder="Enter client name"
              type="text"
            />
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%] max-[768px]:text-[14px]">Parent / Guardian Name</h1>
            <input
              className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
              placeholder="Enter parent name"
              type="text"
            />
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%] max-[768px]:text-[14px]">Date of Birth</h1>
            <input
              className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
              type="date"
            />
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%] max-[768px]:text-[14px]">Phone Number</h1>
            <input
              className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
              placeholder="Enter Number"
              type="number"
            />
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%] max-[768px]:text-[14px]">Preferred or Primary spoken language</h1>
            <input
              className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
              placeholder="Select Language"
            />
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%] max-[768px]:text-[14px]">Client Address</h1>
            <input
              className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
              placeholder="Enter your address"
            />
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%] max-[768px]:text-[14px]">NDIS Funding (Please Select)</h1>
            <select className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]">
              <option>Self Managed</option>
              <option>Plan Managed</option>
              <option>NDIA Managed</option>
            </select>
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%] max-[768px]:text-[14px]">NDIS Number</h1>
            <input
              className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
              placeholder="Enter NDIS Number"
            />
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%] max-[768px]:text-[14px]">Primary Diagnostics</h1>
            <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]" />
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%] max-[768px]:text-[14px]">
              Secondary or Other Relevant Health Conditions
            </h1>
            <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]" />
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%] max-[768px]:text-[14px]">
              NDIS GOALS (short and long term NDIS goals)
            </h1>
            <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]" />
          </div>

          <div className="mt-[3%]">
            <h1 className="max-[768px]:text-[14px]">
              Edwin Care Support Service needs the contact information you
              provide to us in order to contact you about our offers and
              services. You may unsubscribe from these communications at
              anytime. For information on how to unsubscribe, as well as our
              privacy practices and commitment to protecting your privacy, check
              out our Privacy Policy.
            </h1>

            <button className="mt-[5%] bg-[#6A00C6] text-[white] px-[10%] mb-[5%] py-[2%] rounded-[8px]">
              Submit Form
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
