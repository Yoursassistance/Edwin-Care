import Footer from "@/components/Footer";
import Header from "@/components/Referral/Header";
import ReferralTop from "@/components/Referral/ReferralTop";
import React from "react";

const page = () => {
  return (
    <div className="w-[100%]">
      <ReferralTop />
      <Header />

      <div className="bg-[#E6E6E6] my-[5%] mx-[20%] rounded-[20px] px-[3%] py-[3%] text-[#393637]">
        <div className="text-center">
          <h1 className="text-[32px] font-bold">Referral Form</h1>
          <p>
            Get our expert advise on how to transform your brand ideas to
            something amazing
          </p>
        </div>

        <div className="text-center mt-[3%] bg-[white] py-[3%] px-[5%] rounded-[10px]">
          <h1 className="text-[20px] font-medium mt-[5%]">
            Participant incoming referral form
          </h1>

          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%]">Client Name</h1>
            <input
              className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A]"
              placeholder="Enter client name"
              type="text"
            />
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%]">Parent / Guardian Name</h1>
            <input
              className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A]"
              placeholder="Enter parent name"
              type="text"
            />
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%]">Date of Birth</h1>
            <input
              className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A]"
              type="date"
            />
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%]">Phone Number</h1>
            <input
              className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A]"
              placeholder="Enter Number"
              type="number"
            />
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%]">Preferred or Primary spoken language</h1>
            <input
              className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A]"
              placeholder="Select Language"
            />
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%]">Client Address</h1>
            <input
              className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A]"
              placeholder="Enter your address"
            />
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%]">NDIS Funding (Please Select)</h1>
            <select className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A]">
              <option>Self Managed</option>
              <option>Plan Managed</option>
              <option>NDIA Managed</option>
            </select>
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%]">NDIS Number</h1>
            <input
              className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A]"
              placeholder="Enter NDIS Number"
            />
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%]">Primary Diagnostics</h1>
            <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A]" />
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%]">
              Secondary or Other Relevant Health Conditions
            </h1>
            <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A]" />
          </div>
          <div className="text-left mt-[3%]">
            <h1 className="mb-[1%]">
              NDIS GOALS (short and long term NDIS goals)
            </h1>
            <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A]" />
          </div>

          <div className="mt-[3%]">
            <h1>
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
