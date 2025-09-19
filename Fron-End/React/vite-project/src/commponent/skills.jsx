import React from "react";
import ScrollMouse from "./Scroll";
import { FiMonitor } from "react-icons/fi";
import { LuSmartphone } from "react-icons/lu";
import { RiHtml5Line } from "react-icons/ri";
import { FaCss3, FaReact } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";

const Skils = () => {
  const cardItem = [
    {
      id: 1,
      icon: <FiMonitor className="w-8 h-8 " />,
      title: "Web Developement",
      text: "html.css.js.react",
    },
    {
      id: 2,
      icon: <LuSmartphone className="w-8 h-8" />,
      title: "App Developement",
      text: "iOS.Android",
    },
  ];

  // ✅ Use Tailwind utility classes instead of hex codes
  const techSkill = [
    {
      id: 1,
      icon: <RiHtml5Line className="w-16 h-16 text-white" />,
      text: "html",
      bgColor: "bg-orange-600",
      textColor: "text-orange-600",
    },
    {
      id: 2,
      icon: <FaCss3 className="w-16 h-16 text-white" />,
      text: "css",
      bgColor: "bg-blue-600",
      textColor: "text-blue-600",
    },
    {
      id: 3,
      icon: <SiNodedotjs className="w-16 h-16 text-white" />,
      text: "js",
      bgColor: "bg-[#E54F26]",
      textColor: "text-yellow-500",
    },
    {
      id: 4,
      icon: <FaReact className="w-16 h-16 text-white" />,
      text: "react",
      bgColor: "bg-sky-500",
      textColor: "text-sky-500",
    },
  ];

  return (
    <section className="bg-primary-bg relative">
      <div className="absolute inset-0 bg-[url('/image/skill_bg.png')] bg-no-repeat bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto py-[128px] relative z-10 ">
        <div className="wrapper">
          <ScrollMouse />

          {/* skill-cards */}
          <div className="flex justify-center items-center gap-[152px] ">
            {cardItem.map((item) => (
              <div
                key={item.id}
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
          <div className="flex justify-center items-center gap-[128px] pt-[90px] flex-wrap">
            {techSkill.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center gap-6"
              >
                <div className={`p-[40px] rounded-full ${item.bgColor}`}>
                  {item.icon}
                </div>
                <p
                  className={`font-second font-medium text-[32px] leading-[42px] uppercase ${item.textColor}`}
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
