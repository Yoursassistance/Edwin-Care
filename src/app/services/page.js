"use client";
import Header from "@/components/SericeComponents/Header";
import ServiceTop from "@/components/SericeComponents/ServiceTop";
import React from "react";
import heroImg from "../../../public/Assets/Images/serviceHero.png";
import heroImgMobile from "../../../public/Assets/Images/serviceHeroMobile.png";
import Image from "next/image";
import shield from "../../../public/Assets/Svg/shield.svg";
import humanLove from "../../../public/Assets/Svg/humanLove.svg";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";
import serviceImg1 from "../../../public/Assets/Images/serviceImg1.png";
import serviceImg2 from "../../../public/Assets/Images/serviceImg2.png";
import AboutService from "@/components/SericeComponents/AboutService";
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
      <div className="bg-[#F1EDFB] h-[100vh] max-[768px]:h-[auto]">
        <ServiceTop />
        <Header />

        <div className="px-[13%] max-[768px]:px-[4%]">
          {isSmallScreen ? (
            <div>
              <Image src={heroImgMobile} width="100%" className="mt-[6%]" />
              <div className="mt-[1%] pb-[15%] flex justify-start items-start">
                <Image src={shield} width="120%" className="mt-[3px]" />
                <div>
                  <h1 className="text-[1.2em] font-bold text-[#6A00C6] max-[768px]:text-[16px]">
                    Registered NDIS provider
                  </h1>
                  <p className="text-[18px] max-[768px]:text-[13px]">Click to view</p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="ml-[50%] mt-[6%] mb-[-11%] flex justify-start items-start">
                <Image src={shield} width="120%" className="mt-[3px]" />
                <div>
                  <h1 className="text-[1.2em] font-bold text-[#6A00C6] ">
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
              <Image src={heroImg} width="100%" className="mt-[6%]" />
            </div>
          )}
        </div>
      </div>

      <div className="px-[8%] py-[5%] text-[black]">
        <div>
          <h1 className="text-[48px] font-bold max-[768px]:text-[28px]">Our Services</h1>
          <p className="text-[20px] text-[#979797] w-[70%] max-[768px]:text-[16px] max-[768px]:w-[100%] max-[768px]:my-[5%]">
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
        <div className="flex mt-[3%] items-center justify-center max-[768px]:flex-col">
          <div className="mr-[3%] max-[768px]:mr-[0] my-[5%]">
            <Image src={serviceImg1} />
          </div>
          <div>
            <Image src={serviceImg2} />
          </div>
        </div>
      </div>

      <AboutService />
      <Appointment />
      <Footer />
    </div>
  );
};

export default page;
