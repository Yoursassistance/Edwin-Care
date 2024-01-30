import React from "react";
import location from "../../../public/Assets/Svg/locationW.svg";
import whatsapp from "../../../public/Assets/Svg/whatsappW.svg";
import email from "../../../public/Assets/Svg/emailW.svg";
import Image from "next/image";

const AboutTop = () => {
  return (
    <div className="w-[100%] max-[768px]:hidden">
      <div className="bg-[#0B69FF] text-[white] flex items-center py-[1%] px-[8%] justify-between">
        <div className="flex items-center w-[70%]">
          <div className="flex items-center w-[40%]">
            <Image src={location} width="100%" className="mr-[2%]" />
            <a href="https://maps.app.goo.gl/1N4jj9NhcUZzcqRq5" className="w-max">153 Smith Rd, Woodridge, Qld 4114</a>
          </div>
          <div className="flex items-center">
            <Image src={email} width="100%" className="mr-[2%]" />
            <a href="mailto:info@edwinservices.com.au">info@edwinservices.com.au</a>
          </div>
        </div>
        <div className="flex w-[30%] items-end">
          <div className="flex items-center w-[100%] justify-end">
            <Image src={whatsapp} width="100%" className="mr-[2%]" />
            <a href="https://wa.me/0455733143">Connect on Whatsapp</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTop;
