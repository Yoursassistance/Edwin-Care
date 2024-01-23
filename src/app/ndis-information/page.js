import Header from "@/components/NdisComponents/Header";
import NdisTop from "@/components/NdisComponents/NdisTop";
import React from "react";
import heroImg from "../../../public/Assets/Images/ndisHero.png";
import Image from "next/image";
import shield from "../../../public/Assets/Svg/shield.svg";
import humanLove from "../../../public/Assets/Svg/humanLove.svg";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";


const page = () => {
  return (
    <div className="w-[100%]">
      <div className="bg-[#F9ECCD] h-[100vh]">
        <NdisTop />
        <Header />
        <div className="px-[13%]">
          <div className="ml-[50%] mt-[4%] mb-[-9%] flex justify-start items-start">
            <Image src={shield} width="120%" className="mt-[1%]" />
            <div>
              <h1 className="text-[1.5em] font-bold text-[#6A00C6] ">
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
          <Image src={heroImg} width="100%" className="mt-[4%]" />
        </div>
      </div>

      <div className="px-[8%] py-[5%] text-[#6A00C6]">
        <div>
          <h1 className="text-[48px] font-bold">
            Welcome to NDIS Information Hub
          </h1>
          <div>
            <h1 className="text-[24px] text-[#7A7A7A] mt-[3%]">
              Understanding the National Disability Insurance Scheme (NDIS)
            </h1>
            <p className="text-[20px] text-[#979797] w-[70%] mt-[1%]">
              The National Disability Insurance Scheme (NDIS) is a
              transformative initiative designed to support Australians living
              with disabilities. At [Your Organization's Name], we are committed
              to providing comprehensive information to help you navigate and
              make the most of the NDIS.
            </p>
          </div>

          <div>
            <h1 className="text-[24px] text-[#7A7A7A] mt-[3%]">What is the NDIS?</h1>
            <p className="text-[20px] text-[#979797] w-[70%] mt-[1%]">
              The NDIS is a government-funded program that aims to empower
              individuals with disabilities to lead fulfilling lives by
              providing access to necessary support and services. It operates on
              the principles of choice, control, and flexibility, allowing
              participants to tailor their plans to meet their unique needs.
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-[32px] font-bold mt-[3%]">Who is Eligible?</h1>
          <div>
            <p className="text-[20px] text-[#979797] w-[70%] mt-[1%]">
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
          <h1 className="text-[32px] font-bold text-[#0B69FF]">
            Welcome to NDIS Information Hub
          </h1>
          <div className="text-left mt-[3%]">
            <h1 className="text-[24px] text-[#0B69FF]">Access and Planning:</h1>
            <ul className="text-[20px] text-[#979797] w-[70%] mt-[1%]">
              <li>Contact the NDIS to start the application process.</li>
              <li>
                Upon approval, a planner will work with you to identify goals
                and assess support needs.
              </li>
            </ul>
          </div>

          <div className="text-left mt-[3%]">
            <h1 className="text-[24px] text-[#0B69FF]">Create a plan:</h1>
            <ul className="text-[20px] text-[#979797] w-[70%] mt-[1%]">
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
            <h1 className="text-[24px] text-[#0B69FF]">
              Funding and Budgeting:
            </h1>
            <ul className="text-[20px] text-[#979797] w-[70%] mt-[1%]">
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
          <h1 className="text-[32px] font-bold text-[#0B69FF]">Navigating the NDIS Portal</h1>
          <div className="text-left mt-[3%]">
            <h1 className="text-[20px] text-[#7A7A7A]">
              The NDIS portal is a key tool for participants to manage their
              plans. It allows you to view your plan, request plan reviews, and
              submit service provider invoices. We provide guidance and support
              to help you navigate the portal effectively.
            </h1>
          </div>

          <div className="text-left mt-[3%]">
            <h1 className="text-[24px] text-[#0B69FF]">
              Our Role in NDIS Support
            </h1>
            <h1 className="text-[20px] text-[#7A7A7A] mt-[1%] w-[70%]">
              At Edwin Care Support Service, we are here to assist you in
              understanding, applying for, and maximizing the benefits of the
              NDIS. Our dedicated team is ready to provide:
            </h1>
            <ul className="text-[18px] text-[#979797] w-[70%] mt-[1%]">
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
            <h1 className="text-[24px] text-[#0B69FF]">NDIS Resources</h1>
            <h1 className="text-[20px] text-[#7A7A7A]">
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
