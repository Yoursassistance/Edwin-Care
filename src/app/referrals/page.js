import Header from "@/components/Referral/Header";
import ReferralTop from "@/components/Referral/ReferralTop";
import React from "react";

const page = () => {
  return (
    <div className="w-[100%]">
      <ReferralTop />
      <Header />

      <div className="bg-[#E6E6E6] mt-[5%] mx-[15%] rounded-[20px] px-[3%] py-[3%]">
        <div className="text-center">
          <h1 className="text-[32px] font-bold">Referral Form</h1>
          <p>
            Get our expert advise on how to transform your brand ideas to
            something amazing
          </p>
        </div>
        
        <div>
            <h1>Participant incoming referral form</h1>

            <div>
                <h1>Client Name</h1>
                <input />
            </div>
        </div>
      </div>
    </div>
  );
};

export default page;
