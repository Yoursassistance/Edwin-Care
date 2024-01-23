import React from "react";
import Image from "next/image";
import serviceHome from "../../../public/Assets/Svg/serviceHome.svg";
import serviceHeart from "../../../public/Assets/Svg/serviceHeart.svg";
import serviceCommunity from "../../../public/Assets/Svg/serviceCommunity.svg";
import serviceWorld from "../../../public/Assets/Svg/serviceWorld.svg";
import arrowRight from "../../../public/Assets/Svg/arrowRight.svg";

const HomeServices = () => {
  return (
    <div className="px-[15%] bg-[#8DDFB3] py-[5%]">
      <div>
        <div className="flex justify-between mb-[4%]">
          <div>
            <h1 className="text-[#0B69FF] font-bold">SERVICES & TREATMENTS</h1>
            <h1 className="text-[46px] font-bold text-white w-[70%]">
              Offering 10 In-dept specialty and health care services
            </h1>
          </div>
          <div className="flex justify-end flex-col">
            <button className="w-[200px] h-[60px] text-white rounded-[5px] bg-[#0B69FF]">
              See all service
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="w-[48%] my-[2%] pt-[2%] pl-[2%] flex justify-between bg-white rounded-[10px]" >
            <div className="w-[15%] mr-[2%]">
              <Image src={serviceHome} width="100%" />
            </div>
            <div className="pb-[5%]">
              <h1 className="text-[30px] font-bold">In-Home Support</h1>
              <p className="w-[80%]">
                Our In-Home Support services are designed to empower individuals
                with disabilities, fostering independence within the comfort of
                their homes.
              </p>
            </div>
            <div className="flex flex-col justify-end items-end w-[20%]">
              <Image src={arrowRight} width="100%" />
            </div>
          </div>

          <div className="w-[48%] my-[2%] pt-[2%] pl-[2%] flex justify-between bg-white rounded-[10px]">
            <div className="w-[15%] mr-[2%]">
              <Image src={serviceCommunity} width="100%" />
            </div>
            <div className="pb-[5%]">
              <h1 className="text-[30px] font-bold">Community Participation</h1>
              <p className="w-[80%]">
                Engage, connect, and thrive through meaningful Community
                Participation initiatives that celebrate diversity and
                inclusivity.
              </p>
            </div>
            <div className="flex flex-col justify-end items-end w-[20%]">
              <Image src={arrowRight} width="100%" />
            </div>
          </div>

          <div className="w-[48%] my-[2%] pt-[2%] pl-[2%] flex justify-between bg-white rounded-[10px]">
            <div className="w-[15%] mr-[2%]">
              <Image src={serviceWorld} width="100%" />
            </div>
            <div className="pb-[5%]">
              <h1 className="text-[30px] font-bold">Assistance with Travel and Transport</h1>
              <p className="w-[80%]">
                Explore the world with confidence, knowing our Travel and
                Transport assistance is here to support your every step of the
                way.
              </p>
            </div>
            <div className="flex flex-col justify-end items-end w-[20%]">
              <Image src={arrowRight} width="100%" />
            </div>
          </div>

          <div className="w-[48%] my-[2%] pt-[2%] pl-[2%] flex justify-between bg-white rounded-[10px]">
            <div className="w-[15%] mr-[2%]">
              <Image src={serviceHeart} width="100%" />
            </div>
            <div className="pb-[5%]">
              <h1 className="text-[30px] font-bold">Allied Health</h1>
              <p className="w-[80%]"> 
                Elevate your well-being with our comprehensive Allied Health
                services, where expertise meets personalized care.
              </p>
            </div>
            <div className="flex flex-col justify-end items-end w-[20%]">
              <Image src={arrowRight} width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
