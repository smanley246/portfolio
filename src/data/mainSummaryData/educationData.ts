/*
  * File: src/data/educationData/educationData.ts
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: This file contains structured data for the main Education section of the portfolio website.
*/

export type EducationDegree = {
    title: string;
    school: string;
    bullets: string[];
  };
  
  export type EducationKeySkill = {
    title: string;
    description: string;
  };
  
  export type EducationData = {
    degree: EducationDegree;
    highlights: string[];
    logo: {
      src: string;
      alt: string;
    };
    keySkills: EducationKeySkill[];
  };
  
  export const educationData: EducationData = {
    degree: {
      title: "B.Eng. (Computer Engineering)",
      school: "University of Guelph",
      bullets: [
        "Skills: Circuit Design, Software Programming, Data Structures, & FPGAs",
        "Capstone: Motorized Hand Rehabilitation Device & Mobile Application (Coming Winter 26)",
      ],
    },
    highlights: ["Capstone Engineering Project", "Captain of Varsity Squash Team", "Dean's List 2025"],
    logo: {
      src: "/UofGLogo.png",
      alt: "University of Guelph Logo",
    },
    keySkills: [
      {
        title: "Digital Design & FPGA Development",
        description:
          "Designed hardware systems in VHDL/Vivado with custom IP blocks, test simulation, and FPGA deployment on Nexys boards.",
      },
      {
        title: "Embedded Systems & Real-Time Control",
        description:
          "Built reliable real-time applications on STM32 using interrupts, timers, RTOS scheduling, and hardware-level debugging.",
      },
      {
        title: "Robotics Programming (KUKA & Fanuc)",
        description:
          "Programmed industrial robotic arms focusing on motion control, cell automation, and safety integration.",
      },
      {
        title: "Software Design & Data Structures",
        description:
          "Implemented algorithms and full-stack applications using C, C++, Python, JavaScript/TypeScript, and efficient data handling.",
      },
      {
        title: "Circuits & Electronics",
        description:
          "Analyzed and designed analog/digital circuits including op-amps, filters, transistor stages, and mixed-signal interfaces.",
      },
      {
        title: "Engineering Economics & Optimization",
        description:
          "Applied engineering decision models, cost analysis, and optimization methods to evaluate trade-offs in system design.",
      },
    ],
  };
  