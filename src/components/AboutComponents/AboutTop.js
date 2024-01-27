import React from "react";
import location from "../../../public/Assets/Svg/locationW.svg";
import whatsapp from "../../../public/Assets/Svg/whatsappW.svg";
import email from "../../../public/Assets/Svg/emailW.svg";
import Image from "next/image";

const AboutTop = () => {
  return (
    <div className="w-[100%] max-[768px]:hidden">
      <div className="bg-[#0B69FF] text-[white] flex items-center py-[1%] px-[8%]">
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

export default AboutTop;
