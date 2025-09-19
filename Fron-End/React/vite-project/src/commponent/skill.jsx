import React from "react";
import ScrollMouse from "./Scroll";
import { FiMonitor } from "react-icons/fi";
import { LuSmartphone } from "react-icons/lu";
import SectionHead from "./SectionHead";
import { RiHtml5Line } from "react-icons/ri";
import { FaCss3, FaReact } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";

const Skils = () => {
  const cardItem = [
    {
      id: 1, 
      icon: <FiMonitor className="w-8 h-8 text-white" />, // Added text color
      title: "Web Development",
      text: "html.css.js.react",
    },
    {
      id: 2, // Added unique ID for key prop
      icon: <LuSmartphone className="w-8 h-8 text-white" />, // Added text color
      title: "App Development",
      text: "iOS.Android",
    },
  ];

  const techSkill = [
    {
      id: 1,
      icon: <RiHtml5Line className="w-16 h-16 text-white" />, // Changed to white for better contrast
      text: "HTML",
      bgColor: "#E54F26",
      textColor: "#E54F26",
    },
    {
      id: 2,
      icon: <FaCss3 className="w-16 h-16 text-white" />, // Changed to white for better contrast
      text: "CSS",
      bgColor: "#0C73B8",
      textColor: "#0C73B8",
    },
    {
      id: 3,
      icon: <SiNodedotjs className="w-16 h-16 text-white" />, // Changed to white for better contrast
      text: "Node.js",
      bgColor: "#E7A020",
      textColor: "#E7A020",
    },
    {
      id: 4,
      icon: <FaReact className="w-16 h-16 text-white" />, // Changed to white for better contrast
      text: "React",
      bgColor: "#28A9E0",
      textColor: "#28A9E0",
    },
  ];

  return (
    <section className="bg-primary-bg relative">
      <div className="absolute inset-0 bg-[url('/image/skill_bg.png')] bg-no-repeat bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto py-[128px] relative z-10">
        <div className="wrapper">
          <ScrollMouse />
          {/* Section-title */}
          <SectionHead
            title={"Skills"}
            text={"I am striving to never stop learning and improving"}
          />
          {/* skill-cards */}
          <div className="flex justify-center items-center gap-[152px]">
            {cardItem.map((item) => (
              <div
                key={item.id} // Use id instead of the whole item
                className="w-[288px] flex flex-col items-center justify-center gap-2 bg-brand-2 py-[16px] px-[24px] rounded-2xl"
              >
                <div>{item.icon}</div>
                <h5 className="font-second font-normal text-primary-bg text-[24px] leading-8 text-center">
                  {item.title}
                </h5>
                <p className="font-second font-normal text-[#43454D] text-[16px] leading-[20px] text-center uppercase">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          {/* Skill-technology */}
          <div className="flex justify-center items-center gap-[128px] pt-[90px]">
            {techSkill.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center gap-6"
              >
                <div
                  className="p-[40px] rounded-full"
                  style={{ backgroundColor: item.bgColor }} // Use inline style for bg color
                >
                  {item.icon}
                </div>
                <p
                  className="font-second font-medium text-[32px] leading-[42px] uppercase"
                  style={{ color: item.textColor }} // Use inline style for text color
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skils;