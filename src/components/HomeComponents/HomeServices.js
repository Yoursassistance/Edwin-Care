import React from "react";
import Image from "next/image";
import serviceHome from "../../../public/Assets/Svg/serviceHome.svg";
import serviceHeart from "../../../public/Assets/Svg/serviceHeart.svg";
import serviceCommunity from "../../../public/Assets/Svg/serviceCommunity.svg";
import serviceWorld from "../../../public/Assets/Svg/serviceWorld.svg";
import arrowRight from "../../../public/Assets/Svg/arrowRight.svg";

const HomeServices = () => {
  return (
    <div className="px-[15%] bg-[#8DDFB3] py-[5%] max-[768px]:px-[8%] max-[768px]:py-[15%]">
      <div>
        <div className="flex justify-between mb-[4%] max-[768px]:flex-col">
          <div>
            <h1 className="text-[#0B69FF] font-bold">SERVICES & TREATMENTS</h1>
            <h1 className="text-[46px] font-bold text-white w-[70%] max-[768px]:text-[28px] max-[768px]:w-[100%]">
              Offering 10 In-dept specialty and health care services
            </h1>
          </div>
          <div className="flex justify-end flex-col">
            <button className="w-[200px] h-[60px] text-white rounded-[5px] bg-[#0B69FF]">
              See all service
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-between max-[768px]:flex-col max-[768px]:flex-no-wrap">
          <div className="w-[48%] my-[2%] pt-[2%] pl-[2%] flex justify-between bg-white rounded-[10px] max-[768px]:w-[100%] max-[768px]:pt-[5%]" >
            <div className="w-[15%] mr-[2%] max-[768px]:w-[40%]">
              <Image src={serviceHome} width="100%" />
            </div>
            <div className="pb-[5%] max-[768px]:-[60%]">
              <h1 className="text-[30px] font-bold max-[768px]:text-[20px]">In-Home Support</h1>
              <p className="w-[80%] max-[768px]:text-[14px] max-[768px]:w-[100%]">
                Our In-Home Support services are designed to empower individuals
                with disabilities, fostering independence within the comfort of
                their homes.
              </p>
            </div>
            <div className="flex flex-col justify-end items-end w-[20%] max-[768px]:w-[50%]">
              <Image src={arrowRight} width="100%" />
            </div>
          </div>

          <div className="w-[48%] my-[2%] pt-[2%] pl-[2%] flex justify-between bg-white rounded-[10px] max-[768px]:w-[100%] max-[768px]:pt-[5%">
            <div className="w-[15%] mr-[2%] max-[768px]:w-[40%]">
              <Image src={serviceCommunity} width="100%" />
            </div>
            <div className="pb-[5%] max-[768px]:-[60%]">
              <h1 className="text-[30px] font-bold max-[768px]:text-[20px]">Community Participation</h1>
              <p className="w-[80%] max-[768px]:text-[14px] max-[768px]:w-[100%]">
                Engage, connect, and thrive through meaningful Community
                Participation initiatives that celebrate diversity and
                inclusivity.
              </p>
            </div>
            <div className="flex flex-col justify-end items-end w-[20%] max-[768px]:w-[50%]">
              <Image src={arrowRight} width="100%" />
            </div>
          </div>

          <div className="w-[48%] my-[2%] pt-[2%] pl-[2%] flex justify-between bg-white rounded-[10px] max-[768px]:w-[100%] max-[768px]:pt-[5%">
            <div className="w-[15%] mr-[2%] max-[768px]:w-[40%]">
              <Image src={serviceWorld} width="100%" />
            </div>
            <div className="pb-[5%] max-[768px]:-[60%]">
              <h1 className="text-[30px] font-bold max-[768px]:text-[20px]">Assistance with Travel and Transport</h1>
              <p className="w-[80%] max-[768px]:text-[14px] max-[768px]:w-[100%]">
                Explore the world with confidence, knowing our Travel and
                Transport assistance is here to support your every step of the
                way.
              </p>
            </div>
            <div className="flex flex-col justify-end items-end w-[20%] max-[768px]:w-[50%]">
              <Image src={arrowRight} width="100%" />
            </div>
          </div>

          <div className="w-[48%] my-[2%] pt-[2%] pl-[2%] flex justify-between bg-white rounded-[10px] max-[768px]:w-[100%] max-[768px]:pt-[5%">
            <div className="w-[15%] mr-[2%] max-[768px]:w-[40%]">
              <Image src={serviceHeart} width="100%" />
            </div>
            <div className="pb-[5%] max-[768px]:-[60%]">
              <h1 className="text-[30px] font-bold max-[768px]:text-[20px]">Allied Health</h1>
              <p className="w-[80%] max-[768px]:text-[14px] max-[768px]:w-[100%]"> 
                Elevate your well-being with our comprehensive Allied Health
                services, where expertise meets personalized care.
              </p>
            </div>
            <div className="flex flex-col justify-end items-end w-[20%] max-[768px]:w-[50%]">
              <Image src={arrowRight} width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
