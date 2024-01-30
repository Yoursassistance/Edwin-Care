import Image from "next/image";
import React from "react";
import appEmail from "../../public/Assets/Svg/appEmail.svg";
import appPhone from "../../public/Assets/Svg/appPhone.svg";

const Appointment = () => {
  return (
    <div id="section1" className="bg-[#EFF5F5] flex px-[15%] py-[5%] justify-center items-center max-[768px]:flex-col max-[768px]:px-[8%]">
      <div className="w-[40%] max-[768px]:w-[100%] max-[768px]:my-[5%]">
        <h1 className="text-[#0B69FF] font-bold">APPOINTMENT</h1>
        <h1 className="text-[36px] mt-[3%] font-bold max-[768px]:text-[24px] max-[768px]:py-[5%]">
          Get in touch to book your first appointment
        </h1>
        <h1 className="text-[20px] font-semibold my-[3%] max-[768px]:text-[16px]">
          Ready to connect? Feel free to reach out to us – your questions,
          feedback, and inquiries are always welcome!
        </h1>
        <div className="mt-[2%]">
          <div className="flex my-[4%]">
            <Image src={appEmail} className="mr-[2%]" />
            <h1>info@edwinservices.com.au</h1>
          </div>
          <div className="flex">
            <Image src={appPhone} className="mr-[2%]" />
            <h1>0455 733 143, After hours: 07 3803 2713</h1>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col w-[40%] p-[3%] rounded-[20px] ml-[3%] max-[768px]:w-[100%] max-[768px]:ml-[0] max-[768px]:p-[5%] max-[768px]:rounded-[10px]">
        <h1 className="font-semibold mt-[5%] mb-[3%] text-[#979797] text-[20px] ">
          Fill out our appointment form to get in touch with one of our experts
        </h1>
        <input
          className="border-[1px] p-[2%] rounded-[5px] border-[#D9D9D9] my-[2%]"
          placeholder="Name"
        />
        <input
          className="border-[1px] p-[2%] rounded-[5px] border-[#D9D9D9] my-[2%]"
          placeholder="Phone Number"
        />
        <input
          className="border-[1px] p-[2%] rounded-[5px] border-[#D9D9D9] my-[2%]"
          placeholder="Email"
        />

        <form className="flex flex-wrap" action="/submit" method="post">
          <h1 className="font-semibold mt-[5%] mb-[3%] text-[#979797] text-[18px] ">
            Select Your Preferred Service / Services
          </h1>

          <label className="mr-[5%] w-[100%] my-[2%] text-[#979797] text-[14px] font-normal">
            <input
              className="mr-[1%]"
              type="checkbox"
              name="service[]"
              value="web_design"
            />
            In-Home Support
          </label>

          <label className="mr-[5%] w-[100%] my-[2%] text-[#979797] text-[14px] font-normal">
            <input
              className="mr-[1%]"
              type="checkbox"
              name="service[]"
              value="graphic_design"
            />
            Social & Community Participation
          </label>

          <label className="mr-[5%] w-[100%] my-[2%] text-[#979797] text-[14px] font-normal">
            <input
              className="mr-[1%]"
              type="checkbox"
              name="service[]"
              value="content_writing"
            />
            Assistance with Travel and Transport
          </label>

          <label className="mr-[5%] w-[100%] my-[2%] text-[#979797] text-[14px] font-normal">
            <input
              className="mr-[1%]"
              type="checkbox"
              name="service[]"
              value="seo"
            />
            Development of life skills
          </label>

          <label className="mr-[5%] w-[100%] my-[2%] text-[#979797] text-[14px] font-normal">
            <input
              className="mr-[1%]"
              type="checkbox"
              name="service[]"
              value="social_media"
            />
            Allied Health
          </label>

          <label className="mr-[5%] w-[100%] my-[2%] text-[#979797] text-[14px] font-normal">
            <input
              className="mr-[1%]"
              type="checkbox"
              name="service[]"
              value="app_development"
            />
            Youth Support
          </label>

          <label className="mr-[5%] w-[100%] my-[2%] text-[#979797] text-[14px] font-normal">
            <input
              className="mr-[1%]"
              type="checkbox"
              name="service[]"
              value="video_production"
            />
            Accommodation Assistance
          </label>

          <label className="mr-[5%] w-[100%] my-[2%] text-[#979797] text-[14px] font-normal">
            <input
              className="mr-[1%]"
              type="checkbox"
              name="service[]"
              value="video_production"
            />
            Nursing
          </label>

          <label className="mr-[5%] w-[100%] my-[2%] text-[#979797] text-[14px] font-normal">
            <input
              className="mr-[1%]"
              type="checkbox"
              name="service[]"
              value="video_production"
            />
            Cleaning Services
          </label>
        </form>

        <textarea className="border-[1px] h-[100px] p-[2%] rounded-[5px] border-[#D9D9D9] my-[2%]">
          Your Message
        </textarea>

        <button className="bg-[#E58A7B] rounded-[8px] py-[4%] my-[2%] text-[white]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Appointment;
