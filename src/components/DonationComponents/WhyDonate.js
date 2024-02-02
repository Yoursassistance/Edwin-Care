import React from "react";
import hSupport from "../../../public/Assets/Images/hSupport.png";
import sPart from "../../../public/Assets/Images/sPart.png";
import ySupport from "../../../public/Assets/Images/y.png";
import Image from "next/image";

const WhyDonate = () => {
  return (
    <div className="px-[15%] bg-[#F8F9FE] py-[4%] max-[768px]:px-[8%] max-[768px]:py-[8%]">
      <div>
        <div>
          <h1 className="text-[#6A00C6] text-[42px] font-semibold max-[768px]:text-[22px] w-[100%]">
            Why Donate?
          </h1>
          <h1 className="text-[20px] text-[#979797] leading-[40px] mt-[3%] w-[80%] max-[768px]:text-[14px] max-[768px]:w-[100%]">
            Through meticulous attention to detail and a relentless pursuit of
            perfection, we bring you an extraordinary journey, where dedicated
            and top-notch services converge to create moments of unparalleled
            satisfaction.
          </h1>
        </div>

        <div className="mt-[5%] text-[28px] font-semibold text-[#7A7A7A] max-[768px]:text-[20px]">
            <h1>Every Contribution matters.</h1>
            <h1>By donating to Edwin Care, you are:</h1>
        </div>

        <div className="flex justify-between mt-[5%] pb-[5%] max-[768px]:flex-col">
          <div className="w-[30%] max-[768px]:w-[100%] max-[768px]:my-[3%] max-[768px]:mb-[15%]">
            <Image src={hSupport} />
            <div className="bg-[#FDE101] py-[15px] px-[1%] rounded-[10px] w-[17%] ml-[1.5%] flex flex-col justify-start items-left mt-[-3%] absolute max-[768px]:w-[60%] max-[768px]:pl-[5%] max-[768px]:mt-[-9%] max-[768px]:py-[3%]">
              <h1 className="text-[18px] font-bold max-[768px]:text-[16px]">Empowering</h1>
              <h1 className="text-[14px]  max-[768px]:text-[13px]">individuals with disabilities to overcome challenges.</h1>
            </div>
          </div>
          <div className="w-[30%] max-[768px]:w-[100%] max-[768px]:my-[3%] max-[768px]:mb-[15%]">
            <Image src={sPart} />
            <div className="bg-[#F99F9E] py-[15px] px-[1%] rounded-[10px] w-[17%] ml-[1.5%] flex flex-col justify-start items-left mt-[-3%] absolute max-[768px]:w-[60%] max-[768px]:pl-[5%] max-[768px]:mt-[-9%]">
              <h1 className="text-[18px] font-bold max-[768px]:text-[16px]">Supporting</h1>
              <h1 className="text-[14px]  max-[768px]:text-[13px]">programs that enhance independence and inclusion.</h1>
            </div>
          </div>
          <div className="w-[30%] max-[768px]:w-[100%] max-[768px]:my-[3%] max-[768px]:mb-[10%]">
            <Image src={ySupport} />
            <div className="bg-[#D9D9D9] py-[15px] px-[1%] rounded-[10px] w-[17%] ml-[1.5%] flex flex-col justify-start items-left mt-[-3%] absolute max-[768px]:w-[60%] max-[768px]:pl-[5%] max-[768px]:mt-[-9%]">
              <h1 className="text-[18px] font-bold max-[768px]:text-[16px]">Difference</h1>
              <h1 className="text-[14px]  max-[768px]:text-[13px]">Making a tangible difference in the lives of those who need it most.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDonate;
