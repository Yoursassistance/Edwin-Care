import React from "react";
import hSupport from "../../../public/Assets/Images/hSupport.png";
import sPart from "../../../public/Assets/Images/sPart.png";
import ySupport from "../../../public/Assets/Images/ySupport.png";
import Image from "next/image";

const DedicatedService = () => {
  return (
    <div className="px-[15%] bg-[#F8F9FE] py-[4%] max-[768px]:px-[8%] max-[768px]:py-[8%]">
      <div>
        <div>
          <h1 className="text-[#6A00C6] text-[42px] font-semibold max-[768px]:text-[22px] w-[100%]">
            Dedicated to provide best Services.
          </h1>
          <h1 className="text-[20px] text-[#979797] leading-[40px] mt-[3%] w-[80%] max-[768px]:text-[14px] max-[768px]:w-[100%]">
            Through meticulous attention to detail and a relentless pursuit of
            perfection, we bring you an extraordinary journey, where dedicated
            and top-notch services converge to create moments of unparalleled
            satisfaction.
          </h1>
        </div>

        <div className="flex justify-between mt-[5%] pb-[5%] max-[768px]:flex-col">
          <div className="w-[30%] max-[768px]:w-[100%] max-[768px]:my-[3%] max-[768px]:mb-[15%]">
            <Image src={hSupport} />
            <div className="bg-[#FDE101] py-[15px] px-[1%] rounded-[10px] w-[8%] ml-[1.5%] flex flex-col justify-start items-left mt-[-3%] absolute max-[768px]:w-[40%] max-[768px]:pl-[5%] max-[768px]:mt-[-7%] max-[768px]:py-[3%]">
              <h1 className="text-[14px] font-bold max-[768px]:text-[12px]">in-Home</h1>
              <h1 className="text-[18px] font-bold max-[768px]:text-[16px]">Support</h1>
            </div>
          </div>
          <div className="w-[30%] max-[768px]:w-[100%] max-[768px]:my-[3%] max-[768px]:mb-[15%]">
            <Image src={sPart} />
            <div className="bg-[#FDE101] py-[15px] px-[1%] rounded-[10px] w-[10%] ml-[1.5%] flex flex-col justify-start items-left mt-[-3%] absolute max-[768px]:w-[50%] max-[768px]:pl-[5%] max-[768px]:mt-[-7%]">
              <h1 className="text-[14px] font-bold max-[768px]:text-[12px]">Social & Community</h1>
              <h1 className="text-[18px] font-bold max-[768px]:text-[16px]">Participation</h1>
            </div>
          </div>
          <div className="w-[30%] max-[768px]:w-[100%] max-[768px]:my-[3%] max-[768px]:mb-[10%]">
            <Image src={ySupport} />
            <div className="bg-[#FDE101] py-[15px] px-[1%] rounded-[10px] w-[8%] ml-[1.5%] flex flex-col justify-start items-left mt-[-3%] absolute max-[768px]:w-[40%] max-[768px]:pl-[5%] max-[768px]:mt-[-7%]">
              <h1 className="text-[14px] font-bold max-[768px]:text-[12px]">Youth</h1>
              <h1 className="text-[18px] font-bold max-[768px]:text-[16px]">Support</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedicatedService;
