import React from "react";
import Header from "@/components/AboutComponents/Header";
import heroImg from "../../../public/Assets/Images/aboutHero.png";
import Image from "next/image";
import shield from "../../../public/Assets/Svg/shield.svg";
import humanLove from "../../../public/Assets/Svg/humanLove.svg";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";
import AboutTop from "@/components/AboutComponents/AboutTop";
import SliderComp from "@/components/Slider";
import Story from "@/components/AboutComponents/Story";

const page = () => {
  return (
    <div className="w-[100%]">
      <div className="bg-[#F1EDFB] h-[100vh]">
        <AboutTop />
        <Header />
        <div className="px-[13%]">
          <div className="ml-[25%] mt-[4%] mb-[-9%] flex justify-start items-start">
            <Image src={shield} width="120%" className="mt-[1%]" />
            <div>
              <h1 className="text-[1.5em] font-bold text-[#6A00C6] ">
                Registered NDIS provider
              </h1>
              <p className="text-[18px]">Click to view</p>
            </div>
          </div>
          <div className="bg-white p-[1%] w-[12%] mb-[-2%] mt-[9%] ml-[77%] flex absolute shadow-lg">
            <Image src={humanLove} width="10%" className="mr-[5%]" />
            <div className="w-fit">
              <h1 className="font-[600]">More than 500+</h1>
              <p className="font-[600]">active participant</p>
            </div>
          </div>
          <Image src={heroImg} width="100%" className="mt-[4%]" />
        </div>
      </div>

      <div className="px-[8%] py-[5%]">
        <div>
          <h1 className="text-[48px] font-bold">About us</h1>
          <p className="text-[20px] text-[#979797] w-[70%]">
            At <span className="font-bold text-[#E58A7B]">Edwin Care Support Service</span>, we are more than just a
            care provider – we are a dedicated team committed to enhancing the
            lives of individuals with disabilities. Our mission is to empower
            and support our clients, fostering a community that embraces
            inclusivity, dignity, and independence.
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
