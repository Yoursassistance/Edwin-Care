"use client";
import React from "react";
import Slider from "react-slick";
import slide1 from "../../public/Assets/Images/slide1.png";
import slide2 from "../../public/Assets/Images/slide2.png";
import slide3 from "../../public/Assets/Images/slide3.png";
import slide4 from "../../public/Assets/Images/slide4.png";
import slide5 from "../../public/Assets/Images/slide5.png";
import slide6 from "../../public/Assets/Images/slide6.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComp = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // adaptiveHeight: true
  };
  return (
    <div className="mt-[5%]">
      <Slider {...settings}>
        <div>
          <Image className="max-[768px]:h-[138px] max-[768px]:w-[260px]" src={slide1} />
        </div>
        <div className="mt-[5%]">
          <Image className="max-[768px]:h-[138px] max-[768px]:w-[260px]" src={slide2} />
        </div>
        <div>
          <Image className="max-[768px]:h-[138px] max-[768px]:w-[260px]" src={slide3} />
        </div>
        <div className="mt-[5%]">
          <Image className="max-[768px]:h-[138px] max-[768px]:w-[260px]" src={slide4} />
        </div>
        <div>
          <Image className="max-[768px]:h-[138px] max-[768px]:w-[260px]" src={slide5} />
        </div>
        <div className="mt-[5%]">
          <Image className="max-[768px]:h-[138px]" width={300} src={slide6} />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
