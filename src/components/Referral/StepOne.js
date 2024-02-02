import React from "react";

const StepOne = () => {
  return (
    <div className="text-center mt-[3%] ">
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
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          Parent / Guardian Name
        </h1>
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
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          Preferred or Primary spoken language
        </h1>
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
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          NDIS Funding (Please Select)
        </h1>
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
    </div>
  );
};

export default StepOne;
