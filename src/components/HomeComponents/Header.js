"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logoB from "../../../public/Assets/Svg/logoBlue.svg";
import logoBlue from "../../../public/Assets/Svg/logoBlue.svg";
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
          <div className="flex px-[2%] py-[5%] items-center bg-white mx-[4%] shadow-lg justify-between relative">
            <div className="w-[30%]">
              <Image width={60} src={logoBlue} />
            </div>

            <div className="flex items-end justify-end w-[50%]">
              <div className="flex items-center w-[70%]">
                <Image src={phone} width="100%" />
                <a
                  href="tel:+61416617927"
                  className="text-[#979797] text-[13px] ml-[3%] md:text-[16px]"
                >
                  +614 1661 7927
                </a>
              </div>
              <div>
                <Image onClick={handleClick} className="menu" src={menu} />
                <div>
                  {isDropdownVisible && (
                    <div
                      id="dropDown"
                      className="bg-white p-[4%] w-[40%] mt-[10%] ml-[-32%] flex-col flex absolute shadow-lg rounded-[10px]"
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
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex px-[2%] py-[1%] items-center justify-between mt-[2%] bg-white mx-[8%] shadow-lg">
          <div className="flex items-center w-[45%]">
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

          <div className="w-[10%]">
            <Image src={logoB} width="10px" />
          </div>

          <div className="flex items-center justify-end w-[45%]">
            <div className="flex items-center w-[30%]">
              <Image src={phone} width="100%" />
              <a
                href="tel:61416617927"
                className="text-[#979797] text-[16px] ml-[3%]"
              >
                +614 1661 7927
              </a>
            </div>

            <div className="w-[150px]">
              <Link href="#section1">
                <ScrollLink to="section1" smooth={true} duration={3000}>
                  <button className="bg-[#45CD81] text-[#ffffff] px-[20%] py-[7%] rounded-[5px]">
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
