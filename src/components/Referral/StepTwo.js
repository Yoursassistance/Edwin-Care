import React from "react";

const StepTwo = () => {
  return (
    <div className="text-center mt-[3%] ">
      <h1 className="text-[20px] font-medium mt-[5%] max-[768px]:text-[14px]">
        Participant incoming referral form
      </h1>

      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          NDIS Support Coordinator Name and Contact (if applicable)
        </h1>
        <input
          className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
          type="text"
        />
      </div>
      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          NDIS Plan Manager Name and Contact (If applicable)
        </h1>
        <input
          className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
          type="text"
        />
      </div>
      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          Primary Concern or Functional Limitation
        </h1>
        <input
          className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
          type="text"
        />
      </div>

      <h1 className="text-[18px] font-semibold my-[2%]">Social History</h1>

      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">Phone Number</h1>
        <input
          className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
          placeholder="Enter Number"
          type="number"
        />
      </div>
      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">Living situation</h1>
        <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]" />
      </div>

      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">Mobility</h1>
        <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]" />
      </div>

      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">Transfers</h1>
        <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]" />
      </div>
      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          ADLs (ability to independently engage in showering; dressing; hygiene;
          or other daily tasks
        </h1>
        <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]" />
      </div>
      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          IADLs (ability to engage in meal preparation, cleaning, shopping, etc)
        </h1>
        <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]" />
      </div>

      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          Preferred availability (Dates and Times)
        </h1>
        <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]" />
      </div>

      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          Urgency (if applicable)
        </h1>
        <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]" />
      </div>

      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          Consent for OT to contact above parties
        </h1>
        <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]" />
      </div>
    </div>
  );
};

export default StepTwo;
