"use client";
import Header from "@/components/HomeComponents/Header";
import HomeTop from "@/components/HomeComponents/HomeTop";
import React from "react";
import heroImg from "../../public/Assets/Images/hero.png";
import heroImgMobile from "../../public/Assets/Images/heroMobile.png";
import Image from "next/image";
import shield from "../../public/Assets/Svg/shield.svg";
import humanLove from "../../public/Assets/Svg/humanLove.svg";
import DedicatedService from "@/components/HomeComponents/DedicatedService";
import HomeServices from "@/components/HomeComponents/HomeServices";
import ChooseUs from "@/components/HomeComponents/ChooseUs";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const page = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Set the initial value of isSmallScreen
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-[100%]">
      <div className="bg-[#F9F7E5] h-[100%] pb-[5%] max-[768px]:h-[auto]">
        <HomeTop />
        <Header />
        <div className="px-[13%] max-[768px]:px-[4%]">
          {isSmallScreen ? (
            <div>
              <Image src={heroImgMobile} width="100%" className="mt-[6%]" />
              <div className="mt-[1%] pb-[15%] flex justify-start items-start">
                <Image src={shield} width="120%" className="mt-[3px]" />
                <div>
                  <h1 className="text-[16px] font-bold text-[#6A00C6] ">
                    Registered NDIS provider
                  </h1>
                  <p className="text-[13px]">Click to view</p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="ml-[50%] mt-[6%] mb-[-11%] flex justify-start items-start">
                <Image src={shield} width="120%" className="mt-[3px]" />
                <div>
                  <h1 className="text-[18px] font-bold text-[#6A00C6] ">
                    Registered NDIS provider
                  </h1>
                  <p className="text-[16px]">Click to view</p>
                </div>
              </div>
              <div className="bg-white p-[1%] w-max mb-[-2%] mt-[11%] ml-[-5%] flex absolute shadow-lg">
                <Image src={humanLove} width="10%" className="mr-[5%]" />
                <div className="w-[100%]">
                  <h1 className="font-[600] w-fit">More than 500+</h1>
                  <p className="font-[600] w-max">active participant</p>
                </div>
              </div>
              <Image src={heroImg} width="100%" className="mt-[6%]" />
            </div>
          )}
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
