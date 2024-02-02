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
import { useState, useEffect } from "react";


// ... (imports)

const SliderComp = () => {
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

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const settingsMobile = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="mt-[5%]">
    {isSmallScreen ? (
      <Slider {...settingsMobile}>
        <div>
          <Image width={500} src={slide1} />
        </div>
        <div className="mt-[5%]">
          <Image width={500} src={slide2} />
        </div>
        <div>
          <Image width={500} src={slide3} />
        </div>
        <div className="mt-[5%]">
          <Image width={500} src={slide4} />
        </div>
        <div>
          <Image width={500} src={slide5} />
        </div>
        <div className="mt-[5%]">
          <Image width={500} src={slide6} />
        </div>
      </Slider>
    ) : (
      <Slider {...settings}>
        <div>
          <Image width={500} src={slide1} />
        </div>
        <div className="mt-[5%]">
          <Image width={500} src={slide2} />
        </div>
        <div>
          <Image width={500} src={slide3} />
        </div>
        <div className="mt-[5%]">
          <Image width={500} src={slide4} />
        </div>
        <div>
          <Image width={500} src={slide5} />
        </div>
        <div className="mt-[5%]">
          <Image width={500} src={slide6} />
        </div>
      </Slider>
    )}
      
    </div>
  );
};

export default SliderComp;

