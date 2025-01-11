import React from "react";
import location from "../../../public/Assets/Svg/locationW.svg";
import whatsapp from "../../../public/Assets/Svg/whatsappW.svg";
import email from "../../../public/Assets/Svg/emailW.svg";
import Image from "next/image";

const NdisTop = () => {
  return (
    <div className="w-[100%]">
      <div className="bg-[#000000] text-[white] flex items-center py-[1%] px-[8%] justify-between max-[768px]:py-[2%]">
        <div className="flex items-center w-[70%] max-[768px]:hidden">
          <div className="flex items-center w-[30%]">
            <Image src={location} width="100%" className="mr-[2%]" />
            <a href="https://maps.app.goo.gl/1N4jj9NhcUZzcqRq5" className="w-max">153 Smith Rd, Woodridge, Qld 4114</a>
          </div>
          <div className="flex items-center max-[768px]:hidden">
            <Image src={email} width="100%" className="mr-[2%]" />
            <a href="mailto:admin@edwinservices.org">admin@edwinservices.org</a>
          </div>
        </div>
        <div className="flex w-[30%] items-end max-[768px]:w-[100%]">
          <div className="flex items-center w-[100%] justify-end max-[768px]:justify-start">
            <Image src={whatsapp} width="100%" className="mr-[2%] max-[768px]:w-[5%]" />
            <a href="https://wa.link/v8f0pa" className="max-[768px]:text-[14px]">Connect on Whatsapp</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NdisTop;
