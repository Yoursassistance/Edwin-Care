"use client";
import HomeTop from "@/components/HomeComponents/HomeTop";
import React from "react";
import heroImg from "../../../public/Assets/Images/donationHero.png";
import heroImgMobile from "../../../public/Assets/Images/donationHeroMobile.png";
import Image from "next/image";
import shield from "../../../public/Assets/Svg/shield.svg";
import humanLove from "../../../public/Assets/Svg/humanLove.svg";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import WhyDonate from "@/components/DonationComponents/WhyDonate";
import logo from "../../../public/Assets/Svg/logoIcon.svg";
import donateImgM from "../../../public/Assets/Images/donateImgM.png";
import Header from "@/components/DonationComponents/Header";

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
    <div className="w-[100%] bg-[#F8F9FE]">
      <div className="bg-[#F9F7E5] h-[80vh] max-[768px]:h-[auto]">
        <HomeTop />
        <Header />
        <div className="px-[13%] max-[768px]:px-[4%]">
          {isSmallScreen ? (
            <div>
              <Image
                alt="hero"
                src={heroImgMobile}
                width="100%"
                className="mt-[6%]"
              />
              <div className="mt-[1%] pb-[15%] flex justify-start items-start">
                <Image
                  alt="shield"
                  src={shield}
                  width="120%"
                  className="mt-[3px]"
                />
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
                <Image
                  alt="shield"
                  src={shield}
                  width="120%"
                  className="mt-[3px]"
                />
                <div>
                  <h1 className="text-[1.2em] font-bold text-[#6A00C6] ">
                    Registered NDIS provider
                  </h1>
                  <p className="text-[18px]">Click to view</p>
                </div>
              </div>
              <div className="bg-white p-[1%] w-[12%] mb-[-2%] mt-[11%] ml-[-5%] flex absolute shadow-lg">
                <Image
                  alt="humanLove"
                  src={humanLove}
                  width="10%"
                  className="mr-[5%]"
                />
                <div className="w-fit">
                  <h1 className="font-[600]">More than 500+</h1>
                  <p className="font-[600]">active participant</p>
                </div>
              </div>
              <Image
                alt="hero"
                src={heroImg}
                width="100%"
                className="mt-[6%]"
              />
            </div>
          )}
        </div>
      </div>
      <WhyDonate />

      <div className="bg-white flex mx-[15%] my-[3%] p-[3%] rounded-[20px] max-[768px]:flex-col max-[768px]:mx-[2%] max-[768px]:my-[2%] max-[768px]:p-[2%] max-[768px]:rounded-[10px]">
        {isSmallScreen ? (
          <div>
            <Image alt="donateImgM" src={donateImgM} />
          </div>
        ) : (
          <div
            className="w-[500px] h-[696px] flex justify-center items-center flex-1 bg-no-repeat mr-[3%] max-[768px]:w-[100%] max-[768px]:h-[550px]"
            style={{
              backgroundImage: `url("/Assets/Images/donateImg.png")`,
            }}
          >
            <h1 className="text-[white] px-[15%] text-[64px] font-bold max-[768px]:text-[32px]">
              Become a part of the process
            </h1>
          </div>
        )}

        <div className="flex-[1.3] ">
          <div className="flex items-center max-[768px]:mt-[3%]">
            <Image alt="logo" src={logo} width={40} />
            <h1 className="text-[24px] font-semibold max-[768px]:text-[20px]">
              Edwin Care Support Service
            </h1>
          </div>
          <p className="text-[#828282] mt-[2%]">
            Welcome to Edwin Care donation, please fill out the form below.
            Hopefully it is blessed.
          </p>
          <div className="mt-[2%]">
            <p className="text-[20px] font-semibold">
              Choose your donation type
            </p>
            <select className="w-[100%] bg-zinc-200 py-[2%] px-[2%] rounded-[5px]">
              <option>Select donantion type</option>
              <option value="oneTime">One Time Donation</option>
              <option value="recurring">Recurring Monthly Donation</option>
              <option value="recurring">Recurring Annual Donation</option>
            </select>
          </div>
          <div className="mt-[3%]">
            <h1 className="text-[18px] font-semibold">
              Choose Donation Amount
            </h1>
            <div className="flex mt-[3%]">
              <input className="w-[20px]" type="radio" />
              <p className="text-[20px] font-semibold ml-[2%]">$25</p>
            </div>
            <div className="flex my-[3%]">
              <input className="w-[20px]" type="radio" />
              <p className="text-[20px] font-semibold ml-[2%]">$50</p>
            </div>
            <div className="flex">
              <input className="w-[20px]" type="radio" />
              <p className="text-[20px] font-semibold ml-[2%]">$100</p>
            </div>
            <p className="border-b-[1px] w-max cursor-pointer border-[green]">
              Enter a custom amount
            </p>
          </div>
          <div className="mt-[3%]">
            <h1 className="text-[20px] font-semibold justify-between">
              Choose a Donation Frequency
            </h1>
            <div className="flex">
              <div className="w-[49%] flex bg-[#27AE60] p-[2%] rounded-[5px] text-[white] mr-[2%]">
                <input className="w-[15px]" type="radio" />
                <p className="text-[18px] font-normal ml-[2%]">Monthly</p>
              </div>

              <div className="w-[49%] flex p-[2%] rounded-[5px] border-[1px]">
                <input className="w-[15px]" type="radio" />
                <p className="text-[18px] font-normal ml-[2%]">One Time</p>
              </div>
            </div>
            <p className="text-[14px] text-[#828282] mt-[2%]">
              Auctor ut gravida senectus sed imperdiet id. Enim mauris morbi
              suscipit tellus aliquam commodo iaculis tortor. Faucibus elit,
              convallis massa sed.{" "}
            </p>
          </div>
          <div className="flex justify-between mt-[7%]">
            <button className="w-[49%] flex p-[3%] rounded-[5px] border-[1px] border-[#27AE60]">
              Cancel
            </button>
            <button className="w-[49%] flex p-[3%] rounded-[5px] text-[white] bg-[#27AE60]">
              Go to Checkout
            </button>
          </div>
        </div>
      </div>

      <div className="px-[15%] py-[5%] max-[768px]:px-[5%]">
        <div>
          <h1 className="text-[42px] font-bold max-[768px]:text-[28px]">
            How your donations help:
          </h1>
          <p className="text-[18px] text-[#979797] max-[768px]:text-[16px] max-[768px]:mt-[2%]">
            At Edwin Care Support Service, your donations directly supports:
          </p>
        </div>

        <div className="flex justify-between mt-[3%] max-[768px]:flex-col max-[768px]:leading-[40px]">
          <div>
            <h1 className="text-[#E58A7B] text-[28px] font-semibold max-[768px]:text-[20px]">
              Programs:
            </h1>
            <p className="text-[18px] text-[#979797] max-[768px]:text-[15px]">
              At{" "}
              <span className="text-[#6A00C6] font-semibold">Edwin Care</span>,
              our programs are designed to empower individuals with disabilities
              by providing tailored support and resources. From educational
              initiatives to community outreach, our programs aim to foster
              independence and inclusion, ensuring that every person can thrive.
            </p>
          </div>

          <div className="ml-4">
            <h1 className="text-[#6A00C6] text-[28px] font-semibold max-[768px]:text-[20px]">
              Equipment:
            </h1>
            <p className="text-[18px] text-[#979797] max-[768px]:text-[15px]">
              Your donation contributes to acquiring essential equipment that
              enhances the quality of life for individuals with disabilities.
              Whether it's adaptive technologies, mobility aids, or specialized
              tools, these resources break down barriers and create
              opportunities for greater accessibility and autonomy.
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-[3%] max-[768px]:flex-col max-[768px]:leading-[40px]">
          <div className="w-[50%] max-[768px]:w-[100%]">
            <h1 className="text-[#F42BD3] text-[28px] font-semibold max-[768px]:text-[20px]">
              Support Services:
            </h1>
            <p className="text-[18px] text-[#979797] max-[768px]:text-[15px]">
              We offer a range of support services aimed at addressing the
              unique needs of individuals with disabilities. This includes
              counseling, advocacy, and assistance with daily living activities.
              Your contribution enables us to provide personalized support
              services, ensuring that everyone receives the care and assistance
              they require to lead fulfilling lives.
            </p>
          </div>

          <div className="w-[50%] ml-[3%] flex items-center  justify-start max-[768px]:w-[100%] max-[768px]:ml-[0] max-[768px]:mt-[3%]">
            <h1 className="bg-[#6F6F6F] text-[white] p-[5%] rounded-[5px] text-[20px] font-semibold max-[768px]:text-[15px]">
              Click to scroll to donation section
            </h1>
          </div>
        </div>

        <div className="flex justify-between rounded-[10px] bg-[#E58A7B] p-[2%] mt-[3%] items-center max-[768px]:flex-col max-[768px]:py-[7%] max-[768px]:px-[5%]">
          <div className="text-[white] w-[30%] max-[768px]:w-[100%] max-[768px]:text-center">
            <h1 className="text-[20px] font-semibold max-[768px]:text-[16px]">
              Do you have a major donation in mind?
            </h1>
            <p className="max-[768px]:text-[14px]">Talk to us</p>
          </div>
          <div className="w-[30%] max-[768px]:w-[100%] max-[768px]:my-[3%]">
            <a
              href="mailto:admin@edwinservices.org"
              className="text-[#979797] text-[13px] ml-[3%] md:text-[16px]"
            >
              <button className="p-[3%] text-[white] bg-[#E58A7B] border-[1px] w-[100%] rounded-[5px] border-[white]">
                Send an Email
              </button>
            </a>
          </div>
          <div className="w-[30%] max-[768px]:w-[100%]">
            <a
              href="tel:+61416617927"
              className="text-[#979797] text-[13px] ml-[3%] md:text-[16px]"
            >
              <button className="p-[3%] bg-[white] w-[100%] rounded-[5px]">
                Call Us
              </button>
            </a>
          </div>
        </div>
      </div>

      <Appointment />
      <Footer />
    </div>
  );
};

export default page;
