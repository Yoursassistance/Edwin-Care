import React from "react";
import Image from "next/image";
import checked from "../../../public/Assets/Svg/checked.svg";
import checkedB from "../../../public/Assets/Svg/checkedB.svg";
import logoIcon from "../../../public/Assets/Svg/logoIcon.svg";
import circleLeft from "../../../public/Assets/Svg/circleLeft.svg";
import circleRight from "../../../public/Assets/Svg/circleRight.svg";
import qutation from "../../../public/Assets/Svg/qutation.svg";
import fstar from "../../../public/Assets/Svg/fstar.svg";
import chooseUs from "../../../public/Assets/Images/chooseUs.png";
import plansImg from "../../../public/Assets/Images/plansImg.png";
import testi from "../../../public/Assets/Images/texti.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

const ChooseUs = () => {
  return (
    <div>
      <div className="py-[5%] px-[8%] max-[768px]:py-[8%]">
        <div className="flex justify-center items-center max-[768px]:flex-col">
          <div className="mr-[15%] max-[768px]:mr-[0]">
            <Image src={chooseUs} />
          </div>

          <div>
            <h1 className="text-[40px] text-[#6A00C6] font-bold max-[768px]:mt-[5%] max-[768px]:text-[24px]">
              Why Choose Us?
            </h1>
            <div>
              <div className="flex my-[3%]">
                <Image src={checked} />
                <h1 className="ml-[2%]">
                  Unparalleled commitment to excellence
                </h1>
              </div>
              <div className="flex my-[3%]">
                <Image src={checked} />
                <h1 className="ml-[2%]">Unwavering dedication</h1>
              </div>
              <div className="flex my-[3%]">
                <Image src={checked} />
                <h1 className="ml-[2%]">
                  Experience the difference of our personalized attention and
                  expertise.
                </h1>
              </div>
              <div className="flex my-[3%]">
                <Image src={checked} />
                <h1 className="ml-[2%]">Proven track record of success</h1>
              </div>
              <div className="flex my-[3%]">
                <Image src={checked} />
                <h1 className="ml-[2%]">Transparent Pricing</h1>
              </div>
              <div className="flex my-[3%]">
                <Image src={checked} />
                <h1 className="ml-[2%]">Coordinated Care</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[13%] mt-[5%] max-[768px]:px-[0] text-center">
          <h1 className="text-[40px] font-bold max-[768px]:text-[24px]">
            Wellness, Compassion, Quality
          </h1>
          <h1 className="text-[20px] w-[100%] my-[1%] max-[768px]:text-[16px] max-[768px]:w-[100%] max-[768px]:py-[5%]">
            Your journey to health and happiness begins with our unwavering
            focus on Wellness, delivered with genuine Compassion and
            uncompromising Quality.
          </h1>
          <Link href="#section1">
            <ScrollLink to="section1" smooth={true} duration={3000}>
              <button className="bg-[#6A00C6] text-[white] w-[20%] h-[60px] rounded-[5px] max-[768px]:w-[60%] max-[768px]:h-[50px]">
                Get in Touch
              </button>
            </ScrollLink>
          </Link>
        </div>
      </div>

      <div className="py-[5%] px-[19%] text-center bg-[#F8F9FE] max-[768px]:px-[8%]">
        <div className="mb-[5%]">
          <h1 className="text-[40px] font-bold max-[768px]:text-[24px]">
            Health Checkup Plans
          </h1>
          <h1 className="mt-[2%]">
            Embrace a proactive approach to health maintenance with our Health
            Checkup Plans, ensuring a healthier and happier you.
          </h1>
        </div>
        <div>
          <div className="flex justify-between bg-white py-[2%] mx-[23%] px-[3%] mb-[3%] max-[768px]:mx-[0] max-[768px]:py-[5%]">
            <button className="bg-[#6A00C6] text-[white] h-[60px] px-[3%] rounded-[5px] max-[768px]:text-[13px] max-[768px]:h-[50px]">
              Occupational Therapy
            </button>
            <button className="max-[768px]:text-[13px]">
              Physical Therapy
            </button>
            <button className="max-[768px]:text-[13px]">
              Nursing Services
            </button>
          </div>
        </div>

        <div className="flex text-left items-center mt-[8%] max-[768px]:flex-col">
          <div>
            <Image width={40} src={logoIcon} />
            <h1 className="text-[32px] mt-[2%] font-bold max-[768px]:text-[22px]">
              Health Checkup
            </h1>
            <h1 className="w-[70%] mt-[2%] leading-[30px]">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring.
            </h1>

            <div className="flex my-[1%] mt-[3%]">
              <Image src={checkedB} />
              <h1 className="ml-[2%]">Occupational Therapy (OT)</h1>
            </div>
            <div className="flex my-[2%]">
              <Image src={checkedB} />
              <h1 className="ml-[2%]">Psychology (PSYCH)</h1>
            </div>
            <div className="flex my-[2%]">
              <Image src={checkedB} />
              <h1 className="ml-[2%]">Positive Behavior Support (PBS)</h1>
            </div>
            <div className="flex my-[2%]">
              <Image src={checkedB} />
              <h1 className="ml-[2%]">Physical Therapy (PT) (PBS)</h1>
            </div>
            <div className="mt-[5%]">
              <Link href="#section1">
                <ScrollLink to="section1" smooth={true} duration={3000}>
                  <buuton className="h-[60px] py-[3%] font-semibold bg-[#FDE101] px-[5%] rounded-[5px]">
                    Get in touch
                  </buuton>
                </ScrollLink>
              </Link>
            </div>
          </div>
          <div className="max-[768px]:mt-[5%]">
            <Image className="rounded-[10px] shadow-xl" src={plansImg} />
          </div>
        </div>

        <div className="flex justify-between items-center mt-[10%]">
          <div className="w-[10%]">
            <Image src={circleLeft} />
          </div>
          <div className="flex w-[80%] justify-between max-[768px]:flex-col max-[768px]:ml-[5%]">
            <div className="w-[49%] max-[768px]:w-[80%]">
              <Image src={testi} />
            </div>

            <div className="w-[49%] max-[768px]:w-[100%]">
              <Image className="my-[2%] max-[768px]:w-[10%]" src={qutation} />
              <Image className="mb-[2%] max-[768px]:w-[20%]" src={fstar} />
              <h1 className="text-left text-[20px] max-[768px]:text-[14px]">
                "As a parent of a child with a disability, I can't express how
                grateful I am for the valuable insights and support this website
                provides. It's a safe space to connect with others, share
                experiences, and access the latest information on various
                aspects of disability care.
              </h1>
              <div className="text-left mt-[2%] max-[768px]:text-[12px]">
                <h1>Mr Williams</h1>
                <h1>Daebitis patient</h1>
              </div>
            </div>
          </div>
          <div className="w-[10%] flex justify-end">
            <Image src={circleRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
