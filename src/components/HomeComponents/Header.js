import Image from "next/image";
import React from "react";
import logoB from "../../../public/Assets/Svg/logoB.svg";
import phone from "../../../public/Assets/Svg/phoneG.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex  px-[2%] py-[1%] items-center mt-[2%] bg-white mx-[8%] shadow-lg">
      <div className="flex items-center w-[50%]">
        <Link href="/" className="mr-[2%] font-bold text-[#45CD81]">Home</Link>
        <Link href="/about" className="mr-[2%] text-[#979797] text-[14px]">About</Link>
        <Link href="/services" className="mr-[2%] text-[#979797] text-[14px]">Services</Link>
        <Link href="/ndis-information" className="mr-[2%] text-[#979797] text-[14px]">NDIS Information</Link>
        <Link href="/referrals" className="mr-[2%] text-[#979797] text-[14px]">Referrals</Link>
        <Link href="/donations" className="mr-[2%] text-[#979797] text-[14px]">Donations</Link>
      </div>
      <div className="w-[35%]">
        <Image src={logoB} width="100%" />
      </div>
      <div className="flex items-center w-[25%]">
        <div className="flex items-center w-[50%]">
          <Image src={phone} width="100%" />
          <h1 className="text-[#979797] text-[16px] ml-[3%]">0455 733 143</h1>
        </div>
        <div className="w-[50%]">
          <button className="bg-[#45CD81] text-[#ffffff] px-[20%] py-[10%] rounded-[5px]">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
