import Image from "next/image";
import React from "react";
import logoW from "../../public/Assets/Svg/logoW.svg";
import go from "../../public/Assets/Svg/go.svg";
import whatsappF from "../../public/Assets/Svg/whatsappF.svg";
import facebook from "../../public/Assets/Svg/facebook.svg";
import twitter from "../../public/Assets/Svg/twitter.svg";
import instagram from "../../public/Assets/Svg/instagram.svg";
import pintrest from "../../public/Assets/Svg/whatsappWW.svg";
import copyright from "../../public/Assets/Svg/copyright.svg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#E58A7B] px-[8%] py-[5%] text-[white] max-[768px]:py-[10%]">
      <div className=" flex justify-between max-[768px]:flex-col ">
        <div className="w-[20%] max-[768px]:w-[100%]">
          <div className="flex items-center my-[2%]">
            <Image src={logoW} />
            <h1 className="ml-[2%] text-[20px]">Edwin Care</h1>
          </div>

          <div className="flex my-[4%] items-center border-[1px] border-[white] py-[8%] px-[5%] rounded-[10px] max-[768px]:w-[70%]">
            <Image src={go} width="100%" />
            <h1 className="text-[18px] font-bold ml-[3%] max-[768px]:text-[14px]">
              <Link href="#section1">
                <ScrollLink to="section1" smooth={true} duration={3000}>
                  Get in touch
                </ScrollLink>
              </Link>
            </h1>
          </div>
          <div className="flex my-[4%] items-center border-[1px] border-[white] py-[8%] px-[5%] rounded-[10px] max-[768px]:w-[70%]">
            <Image src={whatsappF} />
            <a
              href="https://wa.me/0455733143"
              className="text-[18px] font-bold ml-[3%] max-[768px]:text-[14px]"
            >
              Connect on Whatsapp
            </a>
          </div>
          <div className="flex my-[2%] justify-between w-[50%]">
            <Image width={40} src={facebook} />
            <Image src={pintrest} />
            <Image src={twitter} />
            <Image src={instagram} />
          </div>
        </div>
        <div className="max-[768px]:my-[5%]">
          <h1 className="text-[20px] font-bold">Services</h1>
          <h1 className="my-[2%]">In-Home support</h1>
          <h1 className="my-[2%]">Community participation</h1>
          <h1 className="my-[2%]">Assist with travel and transport</h1>
          <h1 className="my-[2%]">Development of life skills</h1>
          <h1 className="my-[2%]">Allied Health</h1>
          <h1 className="my-[2%]">
            Assistance with social and community participation
          </h1>
          <h1 className="my-[2%]">Youth Support</h1>
          <h1 className="my-[2%]">Accommodation Assistance</h1>
          <h1 className="my-[2%]">Cleaning service</h1>
        </div>

        <div className="max-[768px]:my-[5%]">
          <h1 className="text-[20px] font-bold">Allied Health</h1>
          <h1 className="my-[2%]">Occupational Therapy (OT)</h1>
          <h1 className="my-[2%]">Psychology (PSYCH)</h1>
          <h1 className="my-[2%]">Positive Behaviour Support (PBS)</h1>
          <h1 className="my-[2%]">Physical Therapy (PT)</h1>
        </div>

        <div className="max-[768px]:my-[5%]">
          <h1 className="text-[20px] font-bold">QUICK LINKS</h1>
          <h1 className="my-[2%]">About us</h1>
          <h1 className="my-[2%]">Privacy Policy</h1>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[5%] max-[768px]:pb-[3%]">
        <Image src={copyright} />
        <h1>2023 Edwincare all rights reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
