"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logoB from "../../../public/Assets/Svg/logoB.svg";
import phone from "../../../public/Assets/Svg/phoneG.svg";
import Link from "next/link";
import menu from "../../../public/Assets/Svg/menu.svg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);


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

  const handleClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div>
      {isSmallScreen ? (
        <div className="pt-[5%]">
          <div className="flex px-[2%] py-[5%] items-center bg-[#F5F5F5] mx-[4%] shadow-lg justify-between relative">
            <div className="w-[30%]">
              <Image width={60} src={logoB} />
            </div>
            <div className="flex items-end justify-end w-[50%]">
              <div>
                <Image onClick={handleClick} className="menu" src={menu} />

                {isDropdownVisible && (
                <div
                  id="dropDown"
                  className=" bg-white p-[4%] w-[40%] mt-[10%] ml-[-32%] flex-col absolute shadow-lg rounded-[10px] flex"
                >
                  <Link
                    href="/"
                    className="mr-[2%] text-[#979797] my-[3%]"
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
                    className="mr-[2%] font-bold text-[#6A00C6] text-[16px] my-[3%]"
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
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex  px-[2%] py-[1%] items-center mt-[2%] bg-[#F5F5F5] mx-[8%] shadow-lg">
          <div className="flex items-center w-[50%]">
            <Link href="/" className="mr-[2%] text-[#979797] text-[14px]">
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
              className="mr-[2%]  text-[#979797]  text-[14px]"
            >
              NDIS Information
            </Link>
            <Link
              href="/referrals"
              className="mr-[2%] font-bold text-[#6A00C6] text-[16px]"
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
            <Link href="#section1">
                <ScrollLink to="section1" smooth={true} duration={3000}>
                  <button className="bg-[#6A00C6] text-[#ffffff] px-[20%] py-[7%] rounded-[5px]">
                    Get in touch
                  </button>
                </ScrollLink>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
