"use client";
import React from "react";
import Header from "@/components/AboutComponents/Header";
import heroImg from "../../../public/Assets/Images/aboutHero.png";
import heroImgMobile from "../../../public/Assets/Images/aboutHeroMobile.png";
import Image from "next/image";
import shield from "../../../public/Assets/Svg/shield.svg";
import humanLove from "../../../public/Assets/Svg/humanLove.svg";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";
import AboutTop from "@/components/AboutComponents/AboutTop";
import SliderComp from "@/components/Slider";
import Story from "@/components/AboutComponents/Story";
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
      <div className="bg-[#F1EDFB] h-[100%] pb-[5%] max-[768px]:h-[auto]">
        <AboutTop />
        <Header />
        <div className="px-[13%] max-[768px]:px-[4%]">
          {isSmallScreen ? (
            <div>
              <Image src={heroImgMobile} width="100%" className="mt-[6%]" />
              <div className="mt-[1%] pb-[15%] flex justify-end items-end">
                <Image src={shield} width="120%" className="mt-[3px]" />
                <div className="text-right">
                  <h1 className="text-[16px] font-bold text-[#6A00C6] ">
                    Registered NDIS provider
                  </h1>
                  <p className="text-[13px]">Click to view</p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="ml-[26%] mt-[6%] mb-[-9%] flex justify-start items-start">
                <Image src={shield} width="120%" className="mt-[3px]" />
                <div>
                  <h1 className="text-[18px] font-bold text-[#6A00C6]">
                    Registered NDIS provider
                  </h1>
                  <p className="text-[14px]">Click to view</p>
                </div>
              </div>
              <div className="bg-white p-[1%] w-max mb-[-2%] mt-[9%] ml-[67%] flex absolute shadow-lg">
                <Image src={humanLove} width="10%" className="mr-[5%]" />
                <div className="w-fit">
                  <h1 className="font-[600] w-fit">More than 500+</h1>
                  <p className="font-[600] w-max">active participant</p>
                </div>
              </div>
              <Image src={heroImg} width="100%" className="mt-[4%]" />
            </div>
          )}
        </div>
      </div>

      <div className="px-[8%] py-[5%]">
        <div>
          <h1 className="text-[42px] font-bold max-[768px]:text-[28px]">
            About us
          </h1>
          <p className="text-[20px] leading-[40px] mt-[1%] text-[#979797] w-[70%] max-[768px]:w-[100%] max-[768px]:text-[16px] max-[768px]:mt-[5%]">
            At{" "}
            <span className="font-bold text-[#E58A7B]">
              Edwin Care Support Service
            </span>
            , we are more than just a care provider – we are a dedicated team
            committed to enhancing the lives of individuals with disabilities.
            Our mission is to empower and support our clients, fostering a
            community that embraces inclusivity, dignity, and independence.
          </p>
        </div>
        <SliderComp />
      </div>

      <Story />

      <Appointment />
      <Footer />
    </div>
  );
};

export default page;
