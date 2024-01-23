import React from "react";
import location from "../../../public/Assets/Svg/location.svg";
import whatsapp from "../../../public/Assets/Svg/whatsapp.svg";
import email from "../../../public/Assets/Svg/email.svg";
import Image from "next/image";

const HomeTop = () => {
  return (
    <div className="w-[100%]">
      <div className="bg-[#FAF3B7] flex items-center py-[1%] px-[8%]">
        <div className="flex items-center w-[50%]">
          <div className="flex items-center w-[40%]">
            <Image src={location} width="100%" className="mr-[2%]" />
            <h1>153 Smith Rd, Woodridge, Qld 4114</h1>
          </div>
          <div className="flex items-center">
            <Image src={email} width="100%" className="mr-[2%]" />
            <h1>info@edwinservices.com.au</h1>
          </div>
        </div>
        <div className="flex w-[50%] items-end">
          <div className="flex items-center w-[100%] justify-end">
            <Image src={whatsapp} width="100%" className="mr-[2%]" />
            <h1>Connect on Whatsapp</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
