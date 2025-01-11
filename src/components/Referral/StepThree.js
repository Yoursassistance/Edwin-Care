import React, { useState } from "react";

const StepThree = ({ updateData, loading, setLoading }) => {
  const [formData, setFormData] = useState({
    covid_exposure: "",
    covid_symptoms: "",
    smoke_in_home: "",
    firearms_in_home: "",
    others_present: "",
    abuse_history: "",
    criminal_history: "",
    ot_consent: "",
    relevant_info: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    updateData(formData);
  };

  return (
    <div className="text-center mt-[3%] ">
      <h1 className="text-[20px] font-medium mt-[5%] max-[768px]:text-[14px]">
        Safety Questions
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            Are you, or have you been exposed to anyone with Covid19 within the
            last two weeks?
          </h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            type="text"
            name="covid_exposure"
            value={formData.covid_exposure}
            onChange={handleChange}
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            Do you have any Covid19 symptoms, such as sore throat, cough, fever?
          </h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            type="text"
            name="covid_symptoms"
            value={formData.covid_symptoms}
            onChange={handleChange}
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            Does anyone in the home smoke? *If yes, please refrain from smoking
            during the session.
          </h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            type="text"
            name="smoke_in_home"
            value={formData.smoke_in_home}
            onChange={handleChange}
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            Are there any firearms or weapons within the home? If yes, are they
            locked away?
          </h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            type="number"
            name="firearms_in_home"
            value={formData.firearms_in_home}
            onChange={handleChange}
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            Will anyone else be present at the time of the session?
          </h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            type="text"
            name="others_present"
            value={formData.others_present}
            onChange={handleChange}
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            Does anyone in the house have a history of abuse or physical
            violence?
          </h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            type="text"
            name="abuse_history"
            value={formData.abuse_history}
            onChange={handleChange}
          />
        </div>

        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            Does anyone in the house have a criminal history?
          </h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            type="text"
            name="criminal_history"
            value={formData.criminal_history}
            onChange={handleChange}
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            Do you provide consent for the OT session?
          </h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            // type="checkbox"
            name="ot_consent"
            value={formData.ot_consent}
            onChange={handleChange}
          />
        </div>
        <div className="text-left mt-[3%]">
          <h1 className="mb-[1%] max-[768px]:text-[14px]">
            Anything relevant for your OT to know? For example, hearing
            challenges, communication challenges, vision challenges,
            precautions?
          </h1>
          <input
            className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
            type="text"
            name="relevant_info"
            value={formData.relevant_info}
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="mt-[5%] bg-[#6A00C6] text-[white] px-[10%] mb-[5%] py-[2%] rounded-[8px] max-[768px]:text-[13px]"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
