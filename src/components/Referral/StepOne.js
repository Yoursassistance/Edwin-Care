import React, { useState } from "react";

const StepOne = ({ updateData, handleNextClick }) => {
  const [formData, setFormData] = useState({
    clientName: "",
    parentGuardianName: "",
    dateOfBirth: "",
    phoneNumber: "",
    preferredLanguage: "",
    clientAddress: "",
    ndisFunding: "Self Managed",
    ndisNumber: "",
    primaryDiagnostics: "",
    secondaryHealthConditions: "",
    ndisGoals: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(formData); // Send form data to parent component
    handleNextClick()
  };

  return (
    <div className="text-center mt-[3%] ">
      <h1 className="text-[20px] font-semibold mt-[5%] max-[768px]:text-[16px]">
        Participant incoming referral form
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="text-left mt-[5%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">Client Name</h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            placeholder="Enter client name"
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleInputChange}
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
            name="parentGuardianName"
            value={formData.parentGuardianName}
            onChange={handleInputChange}
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">Date of Birth</h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">Phone Number</h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            placeholder="Enter Number"
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            Preferred or Primary spoken language
          </h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            placeholder="Select Language"
            name="preferredLanguage"
            value={formData.preferredLanguage}
            onChange={handleInputChange}
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">Client Address</h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            placeholder="Enter your address"
            name="clientAddress"
            value={formData.clientAddress}
            onChange={handleInputChange}
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            NDIS Funding (Please Select)
          </h1>
          <select
            name="ndisFunding"
            value={formData.ndisFunding}
            onChange={handleInputChange}
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
          >
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
            name="ndisNumber"
            value={formData.ndisNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            Primary Diagnostics
          </h1>
          <input
            name="primaryDiagnostics"
            value={formData.primaryDiagnostics}
            onChange={handleInputChange}
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            Secondary or Other Relevant Health Conditions
          </h1>
          <input
            name="secondaryHealthConditions"
            value={formData.secondaryHealthConditions}
            onChange={handleInputChange}
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            NDIS GOALS (short and long term NDIS goals)
          </h1>
          <input
            name="ndisGoals"
            value={formData.ndisGoals}
            onChange={handleInputChange}
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
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

export default StepOne;
