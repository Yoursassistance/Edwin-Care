import Image from "next/image";
import React from "react";
import storyImg from "../../../public/Assets/Images/storyImg1.png";
import storyImg2 from "../../../public/Assets/Images/storyImg2.png";
import serviceHome from "../../../public/Assets/Svg/serviceHome.svg";
import serviceHeart from "../../../public/Assets/Svg/serviceHeart.svg";
import serviceCommunity from "../../../public/Assets/Svg/serviceCommunity.svg";
import serviceWorld from "../../../public/Assets/Svg/serviceWorld.svg";
import serviceDevelop from "../../../public/Assets/Svg/serviceDevelop.svg";
import serviceClean from "../../../public/Assets/Svg/serviceClean.svg";
import serviceNursing from "../../../public/Assets/Svg/serviceNursing.svg";
import serviceAccomodate from "../../../public/Assets/Svg/serviceAccomodate.svg";
import serviceYouth from "../../../public/Assets/Svg/serviceYouth.svg";
const Story = () => {
  return (
    <div className="px-[15%] bg-[#45CD81] py-[5%]">
      <div className="my-[3%]">
        <h1 className="text-[40px] font-bold text-[white]">Our story</h1>
        <p className="text-[16px] text-[white] w-[70%] mt-[1%]">
          Our heartfelt mission, Edwin Care Support Service emerged from a
          passion for making a positive impact on the lives of those facing
          unique challenges. The journey began with a vision to create a caring,
          understanding, and accessible environment for individuals with
          disabilities.
        </p>
      </div>

      <div>
        <div className="flex justify-between items-center my-[3%]">
          <div className="w-[49%]">
            <Image width="100%" src={storyImg} />
            <div className="bg-[#0B69FF] text-[white] p-[2%] rounded-b-[13.23px]">
              <h1 className="text-[20px] font-semibold ">Our Mission</h1>
              <p className="text-[16px]">
                Edwin Care Support Services is a registered NDIS provider,
                working within Queensland. Our goal is to support our clients,
                by encouraging them to live a more autonomous life.{" "}
              </p>
            </div>
          </div>

          <div className="w-[49%]">
            <Image width="100%" src={storyImg2} />
            <div className="bg-[#FDE101] p-[2%] rounded-b-[13.23px]">
              <h1 className="text-[20px] font-semibold ">Our Mission</h1>
              <p className="text-[16px]">
                Edwin Care Support Services is a registered NDIS provider,
                working within Queensland. Our goal is to support our clients,
                by encouraging them to live a more autonomous life.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div
            className="w-[49%] bg-no-repeat bg-contain h-[350px]"
            style={{
              backgroundImage: `url("/Assets/Images/storyImg3.png")`,
            }}
          >
            <div className="bg-[rgba(0,0,0,0.4)] w-[100%] h-[100%] rounded-[13.23px] flex items-center justify-center text-[white] flex-col px-[4%]">
              <h1 className="text-[24px] font-bold">Our Mission</h1>
              <p className="text-[16px] text-center">
                Edwin Care Support Services is a registered NDIS provider,
                working within Queensland. Our goal is to support our clients,
                by encouraging them to live a more autonomous life.{" "}
              </p>
            </div>
          </div>

          <div
            className="w-[49%] bg-no-repeat bg-contain h-[350px]"
            style={{
              backgroundImage: `url("/Assets/Images/storyImg4.png")`,
            }}
          >
            <div className="bg-[rgba(0,0,0,0.4)] w-[100%] h-[100%] rounded-[13.23px] flex items-center justify-center text-[white] flex-col px-[4%]">
              <h1>Our Mission</h1>
              <p>
                Edwin Care Support Services is a registered NDIS provider,
                working within Queensland. Our goal is to support our clients,
                by encouraging them to live a more autonomous life.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[5%]">
        <h1 className="text-[40px] font-bold">What we do</h1>

        <div className="flex flex-wrap items-center justify-around">
          <div className="bg-[white] rounded-[10px] px-[3%] py-[2%] flex items-center justify-center w-[26%] mt-[3%]">
            <Image src={serviceHome} />
            <h1 className="ml-[2%] font-bold flex-1 text-[18px] ">
              In-Home Support
            </h1>
          </div>
          <div className="bg-[white] rounded-[10px] px-[3%] py-[2%] flex items-center justify-center w-[26%] mt-[3%]">
            <Image src={serviceCommunity} />
            <h1 className="ml-[2%] font-bold flex-1 text-[18px] ">
              Social & Community Participation
            </h1>
          </div>
          <div className="bg-[white] rounded-[10px] px-[3%] py-[2%] flex items-center justify-center w-[26%] mt-[3%]">
            <Image src={serviceWorld} />
            <h1 className="ml-[2%] font-bold flex-1 text-[18px] ">
              Assistance with Travel and Transport
            </h1>
          </div>
          <div className="bg-[white] rounded-[10px] px-[3%] py-[2%] flex items-center justify-center w-[26%] mt-[3%]">
            <Image src={serviceDevelop} />
            <h1 className="ml-[2%] font-bold flex-1 text-[18px] ">
              Development of life skills
            </h1>
          </div>
          <div className="bg-[white] rounded-[10px] px-[3%] py-[2%] flex items-center justify-center w-[26%] mt-[3%]">
            <Image src={serviceHeart} />
            <h1 className="ml-[2%] font-bold flex-1 text-[18px] ">
              Allied Health
            </h1>
          </div>
          <div className="bg-[white] rounded-[10px] px-[3%] py-[2%] flex items-center justify-center w-[26%] mt-[3%]">
            <Image src={serviceYouth} />
            <h1 className="ml-[2%] font-bold flex-1 text-[18px] ">
              Youth Support
            </h1>
          </div>
          <div className="bg-[white] rounded-[10px] px-[3%] py-[2%] flex items-center justify-center w-[26%] mt-[3%]">
            <Image src={serviceAccomodate} />
            <h1 className="ml-[2%] font-bold flex-1 text-[18px] ">
              Accommodation Assistance{" "}
            </h1>
          </div>
          <div className="bg-[white] rounded-[10px] px-[3%] py-[2%] flex items-center justify-center w-[26%] mt-[3%]">
            <Image src={serviceNursing} />
            <h1 className="ml-[2%] font-bold flex-1 text-[18px] ">Nursing</h1>
          </div>
          <div className="bg-[white] rounded-[10px] px-[3%] py-[2%] flex items-center justify-center w-[26%] mt-[3%]">
            <Image src={serviceClean} />
            <h1 className="ml-[2%] font-bold flex-1 text-[18px] ">
              Cleaning Service
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
