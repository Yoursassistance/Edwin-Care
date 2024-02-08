import React from "react";
import location from "../../../public/Assets/Svg/location.svg";
import whatsapp from "../../../public/Assets/Svg/whatsapp.svg";
import email from "../../../public/Assets/Svg/email.svg";
import Image from "next/image";

const HomeTop = () => {
  return (
    <div className="w-[100%] max-[768px]:hidden">
      <div className="bg-[#FAF3B7] flex items-center py-[1%] px-[8%] justify-between max-[768px]:py-[2%]">
        <div className="flex items-center w-[70%] max-[768px]:hidden">
          <div className="flex items-center w-[40%]">
            <Image src={location} width="100%" className="mr-[2%]" />
            <a
              href="https://maps.app.goo.gl/1N4jj9NhcUZzcqRq5"
              className="w-max"
            >
              153 Smith Rd, Woodridge, Qld 4114
            </a>
          </div>
          <div className="flex items-center max-[768px]:hidden">
            <Image src={email} width="100%" className="mr-[2%]" />
            <a href="mailto:info@edwinservices.com.au">
              info@edwinservices.com.au
            </a>
          </div>
        </div>
        <div className="flex w-[30%] items-end max-[768px]:w-[100%]">
          <div className="flex items-center w-[100%] justify-end">
            <Image src={whatsapp} width="100%" className="mr-[2%] max-[768px]:w-[5%]" />
            <a
              href="https://wa.link/v8f0pa"
              className="max-[768px]:text-[14px]"
            >
              Connect on Whatsapp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
