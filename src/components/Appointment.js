import Image from "next/image";
import React from "react";
import appEmail from "../../public/Assets/Svg/appEmail.svg";
import appPhone from "../../public/Assets/Svg/appPhone.svg";

const Appointment = () => {
  return (
    <div className="bg-[#EFF5F5] flex px-[15%] py-[5%] justify-center items-center">
      <div className="w-[40%]">
        <h1 className="text-[#0B69FF] font-bold">APPOINTMENT</h1>
        <h1 className="text-[40px] font-bold">
          Get in touch to book your first appointment
        </h1>
        <h1 className="text-[20px] font-semibold my-[2%]">
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
            <h1>0455 733 143 After hours: 07 3803 2713</h1>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col w-[40%] p-[3%] rounded-[20px] ml-[3%]">
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

        <select
          className="border-[1px] p-[2%] rounded-[5px] border-[#D9D9D9] my-[2%]"
          id="selectOption"
          name="Select Service"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>

        <textarea className="border-[1px] h-[100px] p-[2%] rounded-[5px] border-[#D9D9D9] my-[2%]">
          Your Message
        </textarea>
        <button className="bg-[#E58A7B] py-[4%] my-[2%] text-[white]">Submit</button>
      </div>
    </div>
  );
};

export default Appointment;
