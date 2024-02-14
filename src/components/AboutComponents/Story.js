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
    <div className="px-[15%] bg-[#45CD81] py-[5%] max-[768px]:px-[8%]">
      <div className="my-[3%]">
        <h1 className="text-[40px] font-bold text-[white] max-[768px]:text-[28px]">Our story</h1>
        <p className="text-[16px] text-[white] w-[70%] mt-[1%] max-[768px]:w-[100%] max-[768px]:leading-[40px]">
          Our heartfelt mission, Edwin Care Support Service emerged from a
          passion for making a positive impact on the lives of those facing
          unique challenges. The journey began with a vision to create a caring,
          understanding, and accessible environment for individuals with
          disabilities.
        </p>
      </div>

      <div>
        <div className="flex justify-between items-center my-[3%] max-[768px]:flex-no-wrap max-[768px]:flex-col">
          <div className="w-[49%] max-[768px]:w-[100%]">
            <Image width="100%" src={storyImg} />
            <div className="bg-[#0B69FF] text-[white] p-[2%] rounded-b-[13.23px]">
              <h1 className="text-[20px] font-semibold max-[768px]:text-[16px]">Our Mission</h1>
              <p className="text-[16px] max-[768px]:text-[13px]">
                Edwin Care Support Services is a registered NDIS provider,
                working within Queensland. Our goal is to support our clients,
                by encouraging them to live a more autonomous life.{" "}
              </p>
            </div>
          </div>

          <div className="w-[49%] max-[768px]:w-[100%] max-[768px]:mt-[8%]">
            <Image width="100%" src={storyImg2} />
            <div className="bg-[#FDE101] p-[2%] rounded-b-[13.23px]">
              <h1 className="text-[20px] font-semibold max-[768px]:text-[16px]">Our Mission</h1>
              <p className="text-[16px] max-[768px]:text-[13px]">
                Edwin Care Support Services is a registered NDIS provider,
                working within Queensland. Our goal is to support our clients,
                by encouraging them to live a more autonomous life.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center max-[768px]:flex-col">
          <div
            className="w-[49%] bg-no-repeat bg-contain h-[350px] max-[768px]:w-[100%] max-[768px]:my-[5%] max-[768px]:h-[200px] max-[768px]:rounded-[13.23px]"
            style={{
              backgroundImage: `url("/Assets/Images/storyImg3.png")`,
            }}
          >
            <div className=" w-[100%] h-[100%] rounded-[13.23px] flex items-center justify-center text-[white] flex-col px-[4%]">
              <h1 className="text-[24px] font-bold max-[768px]:text-[18px]">Our Mission</h1>
              <p className="text-[16px] text-center max-[768px]:text-[14px]">
                Edwin Care Support Services is a registered NDIS provider,
                working within Queensland. Our goal is to support our clients,
                by encouraging them to live a more autonomous life.{" "}
              </p>
            </div>
          </div>

          <div
            className="w-[49%] bg-no-repeat bg-contain h-[350px] max-[768px]:w-[100%] max-[768px]:my-[5%] max-[768px]:h-[201px] max-[768px]:rounded-[13.23px]"
            style={{
              backgroundImage: `url("/Assets/Images/storyImg4.png")`,
            }}
          >
            <div className="w-[100%] h-[100%] flex items-center justify-center text-[white] flex-col px-[4%]">
              <h1 className="text-[24px] font-bold max-[768px]:text-[18px]">Our Mission</h1>
              <p className="text-[16px] text-center max-[768px]:text-[14px]">
                Edwin Care Support Services is a registered NDIS provider,
                working within Queensland. Our goal is to support our clients,
                by encouraging them to live a more autonomous life.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[5%]">
        <h1 className="text-[40px] font-bold max-[768px]:text-[28px]">What we do</h1>
        <div className="flex flex-wrap items-center justify-around max-[768px]:leading-[15px]">
          <div className="bg-[white] rounded-[10px] px-[3%] py-[2%] flex items-center justify-center w-[26%] mt-[3%] max-[768px]:w-[49%] max-[768px]:py-[5%] max-[768px]:my-[5%]">
            <Image className="max-[768px]:w-[20%] max-[768px]mr-[5%]" src={serviceHome} />
            <h1 className="ml-[2%] font-bold flex-1 text-[18px] max-[768px]:text-[12px]">
              In-Home Support
            </h1>
          </div>
          <div className="bg-[white] rounded-[10px] px-[3%] py-[2%] flex items-center justify-center w-[26%] mt-[3%] max-[768px]:w-[49%] max-[768px]:py-[5%] max-[768px]:my-[5%]">
            <Image className="max-[768px]:w-[20%] max-[768px]mr-[5%]" src={serviceCommunity} />
            <h1 className="ml-[2%] font-bold flex-1 text-[18px] max-[768px]:text-[12px]">
              Social & Community Participation
            </h1>
          </div>
          <div className="bg-[white] rounded-[10px] px-[3%] py-[2%] flex items-center justify-center w-[26%] mt-[3%] max-[768px]:w-[49%] max-[768px]:py-[5%] max-[768px]:my-[5%]">
            <Image className="max-[768px]:w-[20%] max-[768px]mr-[5%]" src={serviceWorld} />
            <h1 className="ml-[2%] font-bold flex-1 text-[18px] max-[768px]:text-[12px]">
              Assistance with Travel and Transport
            </h1>
          </div>
          <div className="bg-[white] rounded-[10px] px-[3%] py-[2%] flex items-center justify-center w-[26%] mt-[3%] max-[768px]:w-[49%] max-[768px]:py-[5%] max-[768px]:my-[5%]">
            <Image className="max-[768px]:w-[20%] max-[768px]mr-[5%]" src={serviceDevelop} />
            <h1 className="ml-[2%] font-bold flex-1 text-[18px] max-[768px]:text-[12px]">
              Development of life skills
            </h1>
          </div>
          <div className="bg-[white] rounded-[10px] px-[3%] py-[2%] flex items-center justify-center w-[26%] mt-[3%] max-[768px]:w-[49%] max-[768px]:py-[5%] max-[768px]:my-[5%]">
            <Image className="max-[768px]:w-[20%] max-[768px]mr-[5%]" src={serviceHeart} />
            <h1 className="ml-[2%] font-bold flex-1 text-[18px] max-[768px]:text-[12px]">
              Allied Health
            </h1>
          </div>
          <div className="bg-[white] rounded-[10px] px-[3%] py-[2%] flex items-center justify-center w-[26%] mt-[3%] max-[768px]:w-[49%] max-[768px]:py-[5%] max-[768px]:my-[5%]">
            <Image className="max-[768px]:w-[20%] max-[768px]mr-[5%]" src={serviceYouth} />
            <h1 className="ml-[2%] font-bold flex-1 text-[18px] max-[768px]:text-[12px]">
              Youth Support
            </h1>
          </div>
          <div className="bg-[white] rounded-[10px] px-[3%] py-[2%] flex items-center justify-center w-[26%] mt-[3%] max-[768px]:w-[49%] max-[768px]:py-[5%] max-[768px]:my-[5%]">
            <Image className="max-[768px]:w-[20%] max-[768px]mr-[5%]" src={serviceAccomodate} />
            <h1 className="ml-[2%] font-bold flex-1 text-[18px] max-[768px]:text-[12px]">
              Accommodation Assistance{" "}
            </h1>
          </div>
          <div className="bg-[white] rounded-[10px] px-[3%] py-[2%] flex items-center justify-center w-[26%] mt-[3%] max-[768px]:w-[49%] max-[768px]:py-[5%] max-[768px]:my-[5%]">
            <Image className="max-[768px]:w-[20%] max-[768px]mr-[5%]" src={serviceNursing} />
            <h1 className="ml-[2%] font-bold flex-1 text-[18px] max-[768px]:text-[12px]">Nursing</h1>
          </div>
          <div className="bg-[white] rounded-[10px] px-[3%] py-[2%] flex items-center justify-center w-[26%] mt-[3%] max-[768px]:w-[49%] max-[768px]:py-[5%] max-[768px]:my-[5%]">
            <Image className="max-[768px]:w-[20%] max-[768px]mr-[5%]" src={serviceClean} />
            <h1 className="ml-[2%] font-bold flex-1 text-[18px] max-[768px]:text-[12px]">
              Cleaning Service
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
