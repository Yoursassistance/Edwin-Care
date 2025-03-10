import React from "react";
import Image from "next/image";
import serviceHome from "../../../public/Assets/Svg/serviceHome.svg";
import serviceHeart from "../../../public/Assets/Svg/serviceHeart.svg";
import serviceCommunity from "../../../public/Assets/Svg/serviceCommunity.svg";
import serviceWorld from "../../../public/Assets/Svg/serviceWorld.svg";
import arrowRight from "../../../public/Assets/Svg/arrowRight.svg";
import Link from "next/link";

const HomeServices = () => {
  return (
    <div className="px-[15%] bg-[#8DDFB3] py-[5%] max-[768px]:px-[8%] max-[768px]:py-[15%]">
      <div>
        <div className="flex justify-between mb-[4%] max-[768px]:flex-col">
          <div>
            <h1 className="text-[#0B69FF] font-bold">SERVICES & TREATMENTS</h1>
            <h1 className="text-[46px] font-semibold mt-[3%]  text-white w-[70%] max-[768px]:text-[22px] max-[768px]:w-[100%]">
              Offering 10 In-dept specialty and health care services
            </h1>
          </div>
          <div className="flex justify-end flex-col">
            <Link href="/services">
              <button className="w-[200px] h-[60px] text-white rounded-[5px] bg-[#0B69FF] max-[768px]:mt-[5%] max-[768px]:w-[170px] max-[768px]:h-[50px]">
                See all service
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap justify-between max-[768px]:flex-col max-[768px]:flex-no-wrap">
          <Link className="w-[100%] md:w-[48%]" href="/services">
            <div className="my-[2%] pt-[2%] pl-[2%] h-[250px] flex justify-between bg-white rounded-[10px] max-[768px]:w-[100%] max-[768px]:h-[100%] max-[768px]:pt-[5%]">
              <div className="w-[10%] mr-[2%] max-[768px]:w-[15%]">
                <Image src={serviceHome} width={35} />
              </div>
              <div className="pb-[5%] w-[100%] max-[768px]:-[65%]">
                <h1 className="text-[26px] font-bold max-[768px]:text-[18px]">
                  In-Home Support
                </h1>
                <p className="w-[100%] text-[#777777] leading-[40px] max-[768px]:text-[14px] max-[768px]:w-[100%] max-[768px]:leading-[25px]">
                  Our In-Home Support services are designed to empower
                  individuals with disabilities, fostering independence within
                  the comfort of their homes.
                </p>
              </div>
              <div className="flex flex-col justify-end items-end w-[15%] max-[768px]:w-[20%]">
                <Image src={arrowRight} width={35} />
              </div>
            </div>
          </Link>

          <Link className="w-[100%] md:w-[48%]" href="/services">
            <div className="my-[2%] pt-[2%] pl-[2%] h-[240px] flex justify-between bg-white rounded-[10px] max-[768px]:w-[100%] max-[768px]:pt-[5%] max-[768px]:h-[100%]">
              <div className="w-[10%] mr-[2%] max-[768px]:w-[15%]">
                <Image src={serviceCommunity} width={35} />
              </div>
              <div className="pb-[5%] w-[100%] max-[768px]:-[65%]">
                <h1 className="text-[26px] font-bold max-[768px]:text-[18px]">
                  Community Participation
                </h1>
                <p className="w-[100%] text-[#777777] leading-[40px] max-[768px]:text-[14px] max-[768px]:w-[100%] max-[768px]:leading-[25px]">
                  Engage, connect, and thrive through meaningful Community
                  Participation initiatives that celebrate diversity and
                  inclusivity.
                </p>
              </div>
              <div className="flex flex-col justify-end items-end w-[15%] max-[768px]:w-[20%]">
                <Image src={arrowRight} width={35} />
              </div>
            </div>
          </Link>

          <Link className="w-[100%] md:w-[48%]" href="/services">
            <div className="my-[2%] pt-[2%] pl-[2%] h-[240px] flex justify-between bg-white rounded-[10px] max-[768px]:w-[100%] max-[768px]:pt-[5%] max-[768px]:h-[100%]">
              <div className="w-[10%] mr-[2%] max-[768px]:w-[15%]">
                <Image src={serviceWorld} width={35} />
              </div>
              <div className="pb-[5%] w-[100%] max-[768px]:-[65%]">
                <h1 className="text-[26px] font-bold max-[768px]:text-[18px]">
                  Assistance with Travel and Transport
                </h1>
                <p className="w-[100%] leading-[40px] text-[#777777] max-[768px]:text-[14px] max-[768px]:w-[100%] max-[768px]:leading-[25px]">
                  Explore the world with confidence, knowing our Travel and
                  Transport assistance is here to support you every step of the
                  way.
                </p>
              </div>
              <div className="flex flex-col justify-end items-end w-[15%] max-[768px]:w-[20%]">
                <Image src={arrowRight} width={35} />
              </div>
            </div>
          </Link>

          <Link className="w-[100%] md:w-[48%]" href="/services">
            <div className="my-[2%] pt-[2%] pl-[2%] h-[240px] flex justify-between bg-white rounded-[10px] max-[768px]:w-[100%] max-[768px]:pt-[5%] max-[768px]:h-[100%]">
              <div className="w-[10%] mr-[2%] max-[768px]:w-[15%]">
                <Image src={serviceHeart} width={35} />
              </div>
              <div className="pb-[5%] w-[100%] max-[768px]:-[65%]">
                <h1 className="text-[26px] font-bold max-[768px]:text-[20px]">
                  Allied Health
                </h1>
                <p className="w-[90%] leading-[40px] text-[#777777] max-[768px]:text-[14px] max-[768px]:w-[100%] max-[768px]:leading-[25px]">
                  Elevate your well-being with our comprehensive Allied Health
                  services, where expertise meets personalized care.
                </p>
              </div>
              <div className="flex flex-col justify-end items-end w-[15%] max-[768px]:w-[20%]">
                <Image src={arrowRight} width={35} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
