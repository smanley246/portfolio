/*
  * File: src/data/mainSummaryData/aboutData.ts
  * Author: Samuel Manley
  * Last Modified: April 6th, 2026
  *
  * Description: This file contains structured data for the homepage About section of the portfolio website.
*/

export type AboutData = {
    paragraphs: string[];
    skills: string[];
  };
  
  export const aboutData: AboutData = {
    paragraphs: [
      "I'm a graduating Computer Engineering student from Guelph, Ontario, with a passion for building reliable and polished technical solutions. I work across both hardware and software, developing embedded systems, digital logic in hardware description languages, and modern mobile applications with React Native. I enjoy turning ideas into functional systems by writing firmware, designing circuits, creating user-friendly interfaces, and handling anything else the task requires.",
      "Outside of academics, I spend a lot of time working on self-driven engineering projects to strengthen my skills and explore new technologies. I like challenging myself through hands-on learning in areas such as robotics, real-time control, and full-stack development. When I'm not building something, I am usually playing squash, cycling, skiing, or cooking.",
    ],
    skills: [
      "Digital Design & FPGA Development",
      "Cadence & Vivado Digital Design Suites",
      "Embedded Systems & Real-Time Control",
      "Circuits & Electronics",
      "Robotics Programming",
      "Database & Full Stack Development",
      "React Native, SQL, & .NET Development",
      "Python, Java, C, VHDL & more",
    ],
  };
  
