import Image from "next/image";
import React from "react";
import service1 from "../../../public/Assets/Images/service1.png";
import service2 from "../../../public/Assets/Images/service2.png";
import service3 from "../../../public/Assets/Images/service3.png";
import service4 from "../../../public/Assets/Images/service4.png";
import service5 from "../../../public/Assets/Images/service5.png";
import service6 from "../../../public/Assets/Images/service6.png";
import service7 from "../../../public/Assets/Images/service7.png";
import service8 from "../../../public/Assets/Images/service8.png";
import service9 from "../../../public/Assets/Images/service9.png";
import home from "../../../public/Assets/Svg/home.svg";
import heart from "../../../public/Assets/Svg/heart.svg";
import nursing from "../../../public/Assets/Svg/nursing.svg";
import world from "../../../public/Assets/Svg/world.svg";
import develop from "../../../public/Assets/Svg/develop.svg";
import accomodate from "../../../public/Assets/Svg/accomodate.svg";
import youth from "../../../public/Assets/Svg/youth.svg";
import social from "../../../public/Assets/Svg/social.svg";
import clean from "../../../public/Assets/Svg/clean.svg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

const AboutService = () => {
  return (
    <div className="px-[15%] bg-[#FAEF99] py-[5%] max-[768px]:px-[8%]">
      <div className="my-[3%]">
        <h1 className="text-[42px] font-bold max-[768px]:text-[28px]">
          Our Story
        </h1>
        <p className="text-[16px] leading-[40px] w-[80%] mt-[1%] max-[768px]:w-[100%] max-[768px]:text-[14px] max-[768px]:my-[55]">
          Our heartfelt mission, Edwin Care Support Service emerged from a
          passion for making a positive impact on the lives of those facing
          unique challenges. The journey began with a vision to create a caring,
          understanding, and accessible environment for individuals with
          disabilities.
        </p>
      </div>

      <div className="flex flex-wrap justify-left items-center text-[white] max-[768px]:flex-no-wrap max-[768px]:flex-col">
        <div className="w-[45%] mx-[2%] my-[2%] max-[768px]:w-[100%]">
          <Link href="#section1">
            <ScrollLink to="section1" smooth={true} duration={3000}>
              <Image src={service1} />
              <div className="bg-[#0B69FF] rounded-b-[10px] px-[5%] py-[4%] flex items-center">
                <Image width={40} src={home} />
                <h1 className="text-[18px] font-bold ml-[3%] max-[768px]:text-[14px]">
                  In-Home Support
                </h1>
              </div>
            </ScrollLink>
          </Link>
        </div>

        <div className="w-[45%] mx-[2%] my-[2%] max-[768px]:w-[100%]">
          <Link href="#section1">
            <ScrollLink to="section1" smooth={true} duration={3000}>
              <Image src={service2} />
              <div className="bg-[#45CD81] rounded-b-[10px] px-[5%] py-[4%] flex items-center">
                <Image width={40} src={social} />
                <h1 className="text-[18px] font-bold ml-[3%] max-[768px]:text-[14px]">
                  Social & Community Participation
                </h1>
              </div>
            </ScrollLink>
          </Link>
        </div>

        <div className="w-[45%] mx-[2%] my-[2%] max-[768px]:w-[100%]">
          <Link href="#section1">
            <ScrollLink to="section1" smooth={true} duration={3000}>
              <Image src={service3} />
              <div className="bg-[#E58A7B] rounded-b-[10px] px-[5%] py-[4%] flex items-center">
                <Image width={40} src={world} />
                <h1 className="text-[18px] font-bold ml-[3%] max-[768px]:text-[14px]">
                  Assistance with Travel and Transport
                </h1>
              </div>
            </ScrollLink>
          </Link>
        </div>

        <div className="w-[45%] mx-[2%] my-[2%] max-[768px]:w-[100%]">
          <Link href="#section1">
            <ScrollLink to="section1" smooth={true} duration={3000}>
              <Image src={service4} />
              <div className="bg-[#F42BD3] rounded-b-[10px] px-[5%] py-[4%] flex items-center">
                <Image width={40} src={develop} />
                <h1 className="text-[18px] font-bold ml-[3%] max-[768px]:text-[14px]">
                  Development of life skills
                </h1>
              </div>
            </ScrollLink>
          </Link>
        </div>

        <div className="w-[45%] mx-[2%] my-[2%] max-[768px]:w-[100%]">
          <Link href="#section1">
            <ScrollLink to="section1" smooth={true} duration={3000}>
              <Image src={service5} />
              <div className="bg-[#6A00C6] rounded-b-[10px] px-[5%] py-[4%] flex items-center">
                <Image width={40} src={heart} />
                <h1 className="text-[18px] font-bold ml-[3%] max-[768px]:text-[14px]">Allied Health</h1>
              </div>
            </ScrollLink>
          </Link>
        </div>

        <div className="w-[45%] mx-[2%] my-[2%] max-[768px]:w-[100%]">
          <Link href="#section1">
            <ScrollLink to="section1" smooth={true} duration={3000}>
              <Image src={service6} />
              <div className="bg-[#0B69FF] rounded-b-[10px] px-[5%] py-[4%] flex items-center">
                <Image width={40} src={youth} />
                <h1 className="text-[18px] font-bold ml-[3%] max-[768px]:text-[14px]">Youth Support</h1>
              </div>
            </ScrollLink>
          </Link>
        </div>

        <div className="w-[45%] mx-[2%] my-[2%] max-[768px]:w-[100%]">
          <Link href="#section1">
            <ScrollLink to="section1" smooth={true} duration={3000}>
              <Image src={service7} />
              <div className="bg-[#F99F9E] rounded-b-[10px] px-[5%] py-[4%] flex items-center">
                <Image width={40} src={accomodate} />
                <h1 className="text-[18px] font-bold ml-[3%] max-[768px]:text-[14px]">
                  Accommodation Assistance{" "}
                </h1>
              </div>
            </ScrollLink>
          </Link>
        </div>

        <div className="w-[45%] mx-[2%] my-[2%] max-[768px]:w-[100%]">
          <Link href="#section1">
            <ScrollLink to="section1" smooth={true} duration={3000}>
              <Image src={service8} />
              <div className="bg-[#979797] rounded-b-[10px] px-[5%] py-[4%] flex items-center">
                <Image width={40} src={nursing} />
                <h1 className="text-[18px] font-bold ml-[3%] max-[768px]:text-[14px]">Nursing</h1>
              </div>
            </ScrollLink>
          </Link>
        </div>

        <div className="w-[45%] mx-[2%] my-[2%] max-[768px]:w-[100%]">
          <Link href="#section1">
            <ScrollLink to="section1" smooth={true} duration={3000}>
              <Image src={service9} />
              <div className="bg-[#45CD81] rounded-b-[10px] px-[5%] py-[4%] flex items-center">
                <Image width={40} src={clean} />
                <h1 className="text-[18px] font-bold ml-[3%] max-[768px]:text-[14px]">
                  Cleaning Services
                </h1>
              </div>
            </ScrollLink>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutService;
