import React from "react";

const StepThree = () => {
  return (
    <div className="text-center mt-[3%] ">
      <h1 className="text-[20px] font-medium mt-[5%] max-[768px]:text-[14px]">
        Safety Questions
      </h1>

      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          Are you, or have you been exposed to anyone with Covid19 within the
          last two weeks?
        </h1>
        <input
          className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
          type="text"
        />
      </div>
      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          Do you have any Covid19 symptoms, such as sore throat, cough, fever?
        </h1>
        <input
          className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
          type="text"
        />
      </div>
      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          Does anyone in the home smoke? *If yes, please refrain from smoking
          during the session.
        </h1>
        <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]" />
      </div>
      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          Are there any firearms or weapons within the home? If yes, are they
          locked away?
        </h1>
        <input
          className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]"
          type="number"
        />
      </div>
      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          Will anyone else be present at the time of the session?
        </h1>
        <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]" />
      </div>
      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          Does anyone in the house have a history of abuse or physical violence?
        </h1>
        <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]" />
      </div>

      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          Does anyone in the house have a criminal history?
        </h1>
        <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]" />
      </div>
      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          Do you provide consent for the OT session?
        </h1>
        <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]" />
      </div>
      <div className="text-left mt-[3%]">
        <h1 className="mb-[1%] max-[768px]:text-[14px]">
          Anything relevant for your OT to know? For example, hearing
          challenges, communication challenges, vision challenges, precautions?
        </h1>
        <input className="border-[1px] px-[2%] py-[1%] w-[100%] rounded-[5px] border-[#7A7A7A] max-[768px]:text-[14px]" />
      </div>
    </div>
  );
};

export default StepThree;
