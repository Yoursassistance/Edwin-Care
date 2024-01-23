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

const ChooseUs = () => {
  return (
    <div>
      <div className="py-[5%] px-[8%]">
        <div className="flex  justify-center items-center ">
          <div className="mr-[15%]">
            <Image src={chooseUs} />
          </div>

          <div>
            <h1 className="text-[40px] text-[#6A00C6] font-bold">
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
        <div className="px-[13%] mt-[5%]">
          <h1 className="text-[40px] font-bold">
            Wellness, Compassion, Quality
          </h1>
          <h1 className="text-[20px] w-[80%] my-[1%]">
            Your journey to health and happiness begins with our unwavering
            focus on Wellness, delivered with genuine Compassion and
            uncompromising Quality.
          </h1>
          <button className="bg-[#6A00C6] text-[white] w-[20%] h-[60px] rounded-[5px] ">
            Get in Touch
          </button>
        </div>
      </div>

      <div className="py-[5%] px-[19%] text-center bg-[#F8F9FE]">
        <div className="mb-[5%]">
          <h1 className="text-[40px] font-bold">Health Checkup Plans</h1>
          <h1>
            Embrace a proactive approach to health maintenance with our Health
            Checkup Plans, ensuring a healthier and happier you.
          </h1>
        </div>
        <div>
          <div className="flex justify-between bg-white py-[2%] mx-[23%] px-[3%] mb-[3%]">
            <button className="bg-[#6A00C6] text-[white] h-[60px] px-[3%] rounded-[5px]">
              Occupational Therapy
            </button>
            <button>Physical Therapy</button>
            <button>Nursing Services</button>
          </div>
        </div>

        <div className="flex text-left items-center mt-[8%]">
          <div>
            <Image src={logoIcon} />
            <h1 className="text-[32px] font-bold">Health Checkup</h1>
            <h1 className="w-[80%]">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring.
            </h1>

            <div className="flex my-[1%] mt-[3%]">
              <Image src={checkedB} />
              <h1 className="ml-[2%]">Occupational Therapy (OT)</h1>
            </div>
            <div className="flex my-[1%]">
              <Image src={checkedB} />
              <h1 className="ml-[2%]">Psychology (PSYCH)</h1>
            </div>
            <div className="flex my-[1%]">
              <Image src={checkedB} />
              <h1 className="ml-[2%]">Positive Behavior Support (PBS)</h1>
            </div>
            <div className="flex my-[1%]">
              <Image src={checkedB} />
              <h1 className="ml-[2%]">Physical Therapy (PT) (PBS)</h1>
            </div>
            <div className="mt-[5%]">
              <buuton className="h-[60px] py-[2%] bg-[#FDE101] px-[5%] rounded-[5px]">
                Get in touch
              </buuton>
            </div>
          </div>
          <div>
            <Image src={plansImg} />
          </div>
        </div>

        <div className="flex justify-between items-center mt-[8%]">
          <div className="w-[10%]">
            <Image src={circleLeft} />
          </div>
          <div className="w-[40%]">
            <Image src={testi} />
          </div>

          <div className="w-[40%]">
            <Image className="my-[2%]" src={qutation} />
            <Image className="mb-[2%]" src={fstar} />
            <h1 className="text-left text-[20px]">
              "As a parent of a child with a disability, I can't express how
              grateful I am for the valuable insights and support this website
              provides. It's a safe space to connect with others, share
              experiences, and access the latest information on various aspects
              of disability care.
            </h1>
            <div className="text-left mt-[2%]">
                <h1>Mr Williams</h1>
                <h1>Daebitis patient</h1>
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
