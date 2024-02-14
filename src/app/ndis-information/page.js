"use client";
import Header from "@/components/NdisComponents/Header";
import NdisTop from "@/components/NdisComponents/NdisTop";
import React from "react";
import heroImg from "../../../public/Assets/Images/ndisHero.png";
import heroImgMobile from "../../../public/Assets/Images/ndisHeroMobile.png";
import Image from "next/image";
import shield from "../../../public/Assets/Svg/shield.svg";
import humanLove from "../../../public/Assets/Svg/humanLove.svg";
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
      <div className="bg-[#F9ECCD] h-[100%] pb-[5%] max-[768px]:h-[auto]">
        <NdisTop />
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
                  <p className="text-[18px] max-[768px]:text-[13px]">
                    Click to view
                  </p>
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

      <div className="px-[8%] py-[5%] text-[#6A00C6]">
        <div>
          <h1 className="text-[38px] font-bold max-[768px]:text-[22px]">
            Welcome to NDIS Information Hub
          </h1>
          <div>
            <h1 className="text-[22px] font-semibold text-[#7A7A7A] mt-[3%] max-[768px]:text-[16px]">
              Understanding the National Disability Insurance Scheme (NDIS)
            </h1>
            <p className="text-[16px] leading-[40px] text-[#979797] w-[70%] mt-[1%] max-[768px]:text-[14px] max-[768px]:w-[100%]">
              The National Disability Insurance Scheme (NDIS) is a
              transformative initiative designed to support Australians living
              with disabilities. At [Your Organization's Name], we are committed
              to providing comprehensive information to help you navigate and
              make the most of the NDIS.
            </p>
          </div>

          <div>
            <h1 className="text-[22px] font-semibold text-[#7A7A7A] mt-[3%] max-[768px]:text-[18px]">
              What is the NDIS?
            </h1>
            <p className="text-[16px] leading-[40px] text-[#979797] w-[70%] mt-[1%] max-[768px]:text-[16px] max-[768px]:w-[100%]">
              The NDIS is a government-funded program that aims to empower
              individuals with disabilities to lead fulfilling lives by
              providing access to necessary support and services. It operates on
              the principles of choice, control, and flexibility, allowing
              participants to tailor their plans to meet their unique needs.
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-[32px] font-semibold mt-[3%] max-[768px]:text-[24px]">
            Who is Eligible?
          </h1>
          <div>
            <p className="text-[16px] leading-[40px] text-[#979797] w-[70%] mt-[1%] max-[768px]:text-[16px] max-[768px]:w-[100%]">
              The NDIS is available to Australians under the age of 65 who have
              a permanent and significant disability. To determine eligibility,
              participants must undergo an assessment process that evaluates the
              impact of the disability on their daily life.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center px-[8%] my-[5%]">
        <div>
          <h1 className="text-[32px] font-semibold text-[#6A00C6] max-[768px]:text-[24px]">
          How does the NDIS work?
          </h1>
          <div className="text-left mt-[3%]">
            <h1 className="text-[22px] font-semibold text-[#0B69FF] max-[768px]:text-[18px]">
              Access and Planning:
            </h1>
            <ul className="text-[18px] text-[#979797] w-[70%] mt-[1%] max-[768px]:text-[16px] max-[768px]:w-[100%]">
              <li>Contact the NDIS to start the application process.</li>
              <li>
                Upon approval, a planner will work with you to identify goals
                and assess support needs.
              </li>
            </ul>
          </div>

          <div className="text-left mt-[3%]">
            <h1 className="text-[22px] font-semibold text-[#0B69FF] max-[768px]:text-[18px]">
              Create a plan:
            </h1>
            <ul className="text-[18px] text-[#979797] w-[70%] mt-[1%] max-[768px]:text-[16px] max-[768px]:w-[100%]">
              <li>
                Develop a personalized plan outlining the support and services
                required
              </li>
              <li>
                Emphasis on participant choice and control in selecting service
                providers.
              </li>
            </ul>
          </div>

          <div className="text-left mt-[3%]">
            <h1 className="text-[22px] font-semibold text-[#0B69FF] max-[768px]:text-[18px]">
              Funding and Budgeting:
            </h1>
            <ul className="text-[18px] text-[#979797] w-[70%] mt-[1%] max-[768px]:text-[16px] max-[768px]:w-[100%]">
              <li>Funding is allocated to assist with achieving plan goals.</li>
              <li>
                Participants manage their budget and choose service providers
                that best suit their needs.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center px-[8%] my-[5%]">
        <div>
          <h1 className="text-[32px] font-semibold text-[#6A00C6] max-[768px]:text-[24px]">
            Navigating the NDIS Portal
          </h1>
          <div className="text-left mt-[3%]">
            <h1 className="text-[18px] leading-[40px] text-[#7A7A7A] max-[768px]:text-[16px]">
              The NDIS portal is a key tool for participants to manage their
              plans. It allows you to view your plan, request plan reviews, and
              submit service provider invoices. We provide guidance and support
              to help you navigate the portal effectively.
            </h1>
          </div>

          <div className="text-left mt-[3%]">
            <h1 className="text-[24px] font-semibold text-[#0B69FF] max-[768px]:text-[18px]">
              Our Role in NDIS Support
            </h1>
            <h1 className="text-[18px] leading-[40px] text-[#7A7A7A] mt-[1%] w-[70%] max-[768px]:w-[100%] max-[768px]:text-[16px]">
              At Edwin Care Support Service, we are here to assist you in
              understanding, applying for, and maximizing the benefits of the
              NDIS. Our dedicated team is ready to provide:
            </h1>
            <ul className="text-[18px] text-[#979797] w-[70%] mt-[1%] max-[768px]:text-[14px] max-[768px]:w-[100%]">
              <li className="my-[2%]">
                Information Sessions: Regular sessions to explain NDIS processes
                and answer queries.
              </li>
              <li className="my-[2%]">
                Support Coordination: Assistance in finding and connecting with
                suitable service providers.
              </li>
              <li className="my-[2%]">
                Advocacy: Ensuring your voice is heard in the planning and
                review processes
              </li>
            </ul>
          </div>

          <div className="text-left mt-[3%]">
            <h1 className="text-[24px] text-[#0B69FF] max-[768px]:text-[18px]">
              NDIS Resources
            </h1>
            <h1 className="text-[18px] leading-[40px] text-[#7A7A7A] max-[768px]:text-[16px]">
              Explore our resources section for informative articles, guides,
              and downloadable materials that cover various aspects of the NDIS.
              Knowledge is power, and we aim to empower you with the information
              you need to make informed decisions about your support and
              services.
            </h1>
          </div>
        </div>
      </div>

      <Appointment />
      <Footer />
    </div>
  );
};

export default page;
