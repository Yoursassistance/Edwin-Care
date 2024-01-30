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
                  className=" bg-white p-[4%] w-[45%] mt-[10%] ml-[-37%] flex-col absolute shadow-lg rounded-[10px] hidden"
                >
                  <Link
                    href="/"
                    className="mr-[2%] text-[#979797] text-[14px] my-[3%]"
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
                    className="mr-[2%] font-bold text-[#F42BD3] my-[3%]"
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
        <div className="flex  px-[2%] py-[1%] items-center mt-[2%] bg-white mx-[8%] shadow-lg">
          <div className="flex items-center w-[45%]">
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
              className="mr-[2%] font-bold text-[#F42BD3] text-[16px]"
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
          <div className="w-[15%]">
            <Image src={logoB} width="100%" />
          </div>
          <div className="flex items-center justify-end w-[40%]">
            <div className="flex items-center w-[30%]">
              <Image src={phone} width="100%" />
              <a
                href="tel:0455733143"
                className="text-[#979797] text-[16px] ml-[3%]"
              >
                0455 733 143
              </a>
            </div>
            <div className="w-[40%]">
              <button className="bg-[#F42BD3] text-[#ffffff] px-[20%] py-[7%] rounded-[5px]">
                <Link href="#section1">
                  <ScrollLink to="section1" smooth={true} duration={3000}>
                    Get in touch
                  </ScrollLink>
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
