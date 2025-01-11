import Image from "next/image";
import React, { useRef } from "react";
import appEmail from "../../public/Assets/Svg/appEmail.svg";
import appPhone from "../../public/Assets/Svg/appPhone.svg";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Appointment = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const services = Array.from(form.current.elements)
      .filter((element) => element.type === "checkbox" && element.checked)
      .map((element) => element.value)
      .join(", ");

    // Temporarily append the 'services' field to the form
    const servicesField = document.createElement("input");
    servicesField.type = "hidden";
    servicesField.name = "services";
    servicesField.value = services;
    form.current.appendChild(servicesField);

    emailjs
      .sendForm(
        "service_bc4wuaw", // Replace with your EmailJS service ID
        "template_4u2h4aa", // Replace with your EmailJS template ID
        form.current,
        "Y25BllYFSc1kAvzil" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });

          // Clear input fields
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send the message, please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      )
      .finally(() => {
        // Remove the temporary 'services' field
        form.current.removeChild(servicesField);
      });
  };

  return (
    <div
      id="section1"
      className="bg-[#EFF5F5] flex px-[15%] py-[5%] justify-center items-center max-[768px]:flex-col max-[768px]:px-[4%]"
    >
     <ToastContainer />
      <div className="w-[40%] max-[768px]:w-[100%] max-[768px]:my-[5%]">
        <h1 className="text-[#0B69FF] font-bold">APPOINTMENT</h1>
        <h1 className="text-[36px] mt-[3%] font-bold max-[768px]:text-[24px] max-[768px]:py-[5%]">
          Get in touch to book your first appointment
        </h1>
        <h1 className="text-[20px] font-semibold my-[3%] max-[768px]:text-[16px]">
          Ready to connect? Feel free to reach out to us – your questions,
          feedback, and inquiries are always welcome!
        </h1>
        <div className="mt-[2%]">
          <div className="flex my-[4%]">
            <Image alt="" src={appEmail} className="mr-[2%]" />
            <h1>Admin@edwinservices.org</h1>
          </div>
          <div className="flex">
            <Image alt="" src={appPhone} className="mr-[2%]" />
            <h1>+614 1661 7927, After hours: 07 3803 2713</h1>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col w-[50%] p-[3%] rounded-[20px] ml-[3%] max-[768px]:w-[100%] max-[768px]:ml-[0] max-[768px]:p-[5%] max-[768px]:rounded-[10px]">
        <h1 className="font-semibold mt-[5%] mb-[3%] text-[#979797] text-[20px] ">
          Fill out our appointment form to get in touch with one of our experts
        </h1>

        <form className="flex flex-wrap" ref={form} onSubmit={sendEmail}>
          <input
            className="border-[1px] p-[2%] rounded-[5px] border-[#D9D9D9] my-[2%] w-[100%]"
            placeholder="Name"
            name="from_name"
          />
          <input
            className="border-[1px] w-[100%] p-[2%] rounded-[5px] border-[#D9D9D9] my-[2%]"
            placeholder="Phone Number"
            name="phone_number"
          />
          <input
            className="border-[1px] w-[100%] p-[2%] rounded-[5px] border-[#D9D9D9] my-[2%]"
            placeholder="Email"
            name="email_address"
          />

          <h1 className="font-semibold mt-[5%] mb-[3%] text-[#979797] text-[18px] ">
            Select Your Preferred Service / Services
          </h1>

          <label className="mr-[5%] w-[100%] my-[2%] text-[#979797] text-[14px] font-normal">
            <input
              className="mr-[1%]"
              type="checkbox"
              name="service[]"
              value="In Home Support"
            />
            In-Home Support
          </label>

          <label className="mr-[5%] w-[100%] my-[2%] text-[#979797] text-[14px] font-normal">
            <input
              className="mr-[1%]"
              type="checkbox"
              name="service[]"
              value="Social & Community Participation"
            />
            Social & Community Participation
          </label>

          <label className="mr-[5%] w-[100%] my-[2%] text-[#979797] text-[14px] font-normal">
            <input
              className="mr-[1%]"
              type="checkbox"
              name="service[]"
              value="Assistance with Travel and Transport"
            />
            Assistance with Travel and Transport
          </label>

          <label className="mr-[5%] w-[100%] my-[2%] text-[#979797] text-[14px] font-normal">
            <input
              className="mr-[1%]"
              type="checkbox"
              name="service[]"
              value="Development of life skills"
            />
            Development of life skills
          </label>

          <label className="mr-[5%] w-[100%] my-[2%] text-[#979797] text-[14px] font-normal">
            <input
              className="mr-[1%]"
              type="checkbox"
              name="service[]"
              value="Allied Health"
            />
            Allied Health
          </label>

          <label className="mr-[5%] w-[100%] my-[2%] text-[#979797] text-[14px] font-normal">
            <input
              className="mr-[1%]"
              type="checkbox"
              name="service[]"
              value="Youth Support"
            />
            Youth Support
          </label>

          <label className="mr-[5%] w-[100%] my-[2%] text-[#979797] text-[14px] font-normal">
            <input
              className="mr-[1%]"
              type="checkbox"
              name="service[]"
              value="Accommodation Assistance"
            />
            Accommodation Assistance
          </label>

          <label className="mr-[5%] w-[100%] my-[2%] text-[#979797] text-[14px] font-normal">
            <input
              className="mr-[1%]"
              type="checkbox"
              name="service[]"
              value="Nursing"
            />
            Nursing
          </label>

          <label className="mr-[5%] w-[100%] my-[2%] text-[#979797] text-[14px] font-normal">
            <input
              className="mr-[1%]"
              type="checkbox"
              name="service[]"
              value="Cleaning Services"
            />
            Cleaning Services
          </label>
          <textarea
            name="message"
            placeholder="Your Message"
            className="border-[1px] h-[100px] p-[2%] rounded-[5px] border-[#D9D9D9] my-[2%] w-[100%]"
          ></textarea>

          <button
            type="submit"
            className="bg-[#E58A7B] w-[100%] rounded-[8px] py-[4%] my-[2%] text-[white]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
