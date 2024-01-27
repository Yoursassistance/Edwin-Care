"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logoB from "../../../public/Assets/Svg/logoB.svg";
import phone from "../../../public/Assets/Svg/phoneG.svg";
import Link from "next/link";
import menu from "../../../public/Assets/Svg/menu.svg";

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    const dropDown = document.getElementById("dropDown");
    if (dropDown.classList.contains("hidden")) {
      dropDown.classList.remove("hidden");
    } else {
      dropDown.classList.add("hidden");
    }
   
  };

  return (
    <div>
      {isSmallScreen ? (
        <div className="pt-[5%]">
          <div className="flex px-[2%] py-[5%] items-center bg-white mx-[4%] shadow-lg justify-between relative">
            <div className="w-[30%]">
              <Image width={60} src={logoB} />
            </div>
            <div className="flex items-end justify-end w-[50%]">
              <div>
                <Image onClick={handleClick} className="menu" src={menu} />

                <div
                  id="dropDown"
                  className=" bg-white p-[4%] w-[40%] mt-[10%] ml-[-32%] flex flex-col absolute shadow-lg rounded-[10px] hidden"
                >
                  <Link
                    href="/"
                    className="mr-[2%] font-bold text-[#45CD81] my-[3%]"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="mr-[2%] text-[#979797] text-[14px] my-[3%]"
                  >
                    About
                  </Link>
                  <Link
                    href="/services"
                    className="mr-[2%] text-[#979797] text-[14px] my-[3%]"
                  >
                    Services
                  </Link>
                  <Link
                    href="/ndis-information"
                    className="mr-[2%] text-[#979797] text-[14px] my-[3%]"
                  >
                    NDIS Information
                  </Link>
                  <Link
                    href="/referrals"
                    className="mr-[2%] text-[#979797] text-[14px] my-[3%]"
                  >
                    Referrals
                  </Link>
                  <Link
                    href="/donations"
                    className="mr-[2%] text-[#979797] text-[14px] my-[3%]"
                  >
                    Donations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex px-[2%] py-[1%] items-center mt-[2%] bg-white mx-[8%] shadow-lg">
          <div className="flex items-center w-[50%]">
            <Link href="/" className="mr-[2%] font-bold text-[#45CD81]">
              Home
            </Link>
            <Link href="/about" className="mr-[2%] text-[#979797] text-[14px]">
              About
            </Link>
            <Link
              href="/services"
              className="mr-[2%] text-[#979797] text-[14px]"
            >
              Services
            </Link>
            <Link
              href="/ndis-information"
              className="mr-[2%] text-[#979797] text-[14px]"
            >
              NDIS Information
            </Link>
            <Link
              href="/referrals"
              className="mr-[2%] text-[#979797] text-[14px]"
            >
              Referrals
            </Link>
            <Link
              href="/donations"
              className="mr-[2%] text-[#979797] text-[14px]"
            >
              Donations
            </Link>
          </div>
          <div className="w-[35%]">
            <Image src={logoB} width="100%" />
          </div>
          <div className="flex items-center w-[25%]">
            <div className="flex items-center w-[50%]">
              <Image src={phone} width="100%" />
              <h1 className="text-[#979797] text-[16px] ml-[3%]">
                0455 733 143
              </h1>
            </div>
            <div className="w-[50%]">
              <button className="bg-[#45CD81] text-[#ffffff] px-[20%] py-[10%] rounded-[5px]">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
