import React, { useState } from "react";

const StepTwo = ({ updateData, handleNextClick }) => {
  const [formData, setFormData] = useState({
    ndis_support_coordinator: "",
    ndis_plan_manager: "",
    primary_concern: "",
    phone_number: "",
    living_situation: "",
    mobility: "",
    transfers: "",
    adls: "",
    iadls: "",
    availability: "",
    urgency: "",
    consent: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(formData); // Send form data to parent component
    handleNextClick();
  };

  return (
    <div className="text-center mt-[3%] ">
      <h1 className="text-[20px] font-medium mt-[5%] max-[768px]:text-[14px]">
        Participant incoming referral form
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            NDIS Support Coordinator Name and Contact (if applicable)
          </h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            type="text"
            name="ndis_support_coordinator"
            value={formData.ndis_support_coordinator}
            onChange={handleChange}
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            NDIS Plan Manager Name and Contact (If applicable)
          </h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            type="text"
            name="ndis_plan_manager"
            value={formData.ndis_plan_manager}
            onChange={handleChange}
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            Primary Concern or Functional Limitation
          </h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            type="text"
            name="primary_concern"
            value={formData.primary_concern}
            onChange={handleChange}
          />
        </div>

        <h1 className="text-[18px] font-semibold my-[2%]">Social History</h1>

        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">Phone Number</h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            placeholder="Enter Number"
            type="number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">Living situation</h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            name="living_situation"
            value={formData.living_situation}
            onChange={handleChange}
          />
        </div>

        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">Mobility</h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            name="mobility"
            value={formData.mobility}
            onChange={handleChange}
          />
        </div>

        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">Transfers</h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            name="transfers"
            value={formData.transfers}
            onChange={handleChange}
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            ADLs (ability to independently engage in showering; dressing;
            hygiene; or other daily tasks)
          </h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            name="adls"
            value={formData.adls}
            onChange={handleChange}
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            IADLs (ability to engage in meal preparation, cleaning, shopping,
            etc)
          </h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            name="iadls"
            value={formData.iadls}
            onChange={handleChange}
          />
        </div>

        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            Preferred availability (Dates and Times)
          </h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
          />
        </div>

        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            Urgency (if applicable)
          </h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
          />
        </div>

        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            Consent for OT to contact above parties
          </h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            name="consent"
            value={formData.consent}
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="mt-[5%] bg-[#6A00C6] text-[white] px-[10%] mb-[5%] py-[2%] rounded-[8px] max-[768px]:text-[13px]"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
