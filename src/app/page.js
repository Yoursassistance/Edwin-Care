import Header from "@/components/HomeComponents/Header";
import HomeTop from "@/components/HomeComponents/HomeTop";
import React from "react";
import heroImg from "../../public/Assets/Images/heroImg.png";
import Image from "next/image";
import shield from "../../public/Assets/Svg/shield.svg";
import humanLove from "../../public/Assets/Svg/humanLove.svg";
import DedicatedService from "@/components/HomeComponents/DedicatedService";
import HomeServices from "@/components/HomeComponents/HomeServices";
import ChooseUs from "@/components/HomeComponents/ChooseUs";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="w-[100%]">
      <div className="bg-[#F9F7E5] h-[100vh]">
        <HomeTop />
        <Header />
        <div className="px-[13%]">
          <div className="ml-[50%] mt-[4%] mb-[-9%] flex justify-start items-start">
            <Image src={shield} width="120%" className="mt-[1%]" />
            <div>
              <h1 className="text-[1.5em] font-bold text-[#6A00C6] ">
                Registered NDIS provider
              </h1>
              <p className="text-[18px]">Click to view</p>
            </div>
          </div>
          <div className="bg-white p-[1%] w-[12%] mb-[-2%] mt-[9%] ml-[-5%] flex absolute shadow-lg">
            <Image src={humanLove} width="10%" className="mr-[5%]" />
            <div className="w-fit">
              <h1 className="font-[600]">More than 500+</h1>
              <p className="font-[600]">active participant</p>
            </div>
          </div>
          <Image src={heroImg} width="100%" className="mt-[4%]" />
        </div>
      </div>
      <DedicatedService />
      <HomeServices />
      <ChooseUs />
      <Appointment />
      <Footer />
    </div>
  );
};

export default page;
