import React from "react";
import hSupport from "../../../public/Assets/Images/hSupport.png";
import sPart from "../../../public/Assets/Images/sPart.png";
// import ySupport from "../../../public/Assets/Images/ySupport.png";
import Image from "next/image";

const DedicatedService = () => {
  return (
    <div className="px-[15%] bg-[#F8F9FE] py-[4%]">
      <div>
        <div>
          <h1 className="text-[#6A00C6] text-[48px] font-bold">
            Dedicated to provide best Services.
          </h1>
          <h1 className="text-[24px] text-[#979797] w-[80%]">
            Through meticulous attention to detail and a relentless pursuit of
            perfection, we bring you an extraordinary journey, where dedicated
            and top-notch services converge to create moments of unparalleled
            satisfaction.
          </h1>
        </div>

        <div className="flex justify-between mt-[5%] pb-[5%]">
          <div className="w-[30%]">
            {/* <Image src={hSupport} /> */}
            <div className="bg-[#FDE101] py-[1%] rounded-[10px] w-[10%] ml-[1.5%] flex flex-col justify-start items-center mt-[-3%] absolute">
              <h1 className="text-[18px] font-bold">in-Home</h1>
              <h1 className="text-[28px] font-bold">Support</h1>
            </div>
          </div>
          <div className="w-[30%]">
            <Image src={sPart} />
            <div className="bg-[#FDE101] py-[1%] rounded-[10px] w-[15%] ml-[1.5%] flex flex-col justify-start items-center mt-[-3%] absolute">
              <h1 className="text-[18px] font-bold">Social & Community</h1>
              <h1 className="text-[28px] font-bold">Participation</h1>
            </div>
          </div>
          <div className="w-[30%]">
            <Image src={ySupport} />
            <div className="bg-[#FDE101] py-[1%] rounded-[10px] w-[10%] ml-[1.5%] flex flex-col justify-start items-center mt-[-3%] absolute">
              <h1 className="text-[18px] font-bold">Youth</h1>
              <h1 className="text-[28px] font-bold">Support</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedicatedService;
