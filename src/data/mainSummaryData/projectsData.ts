/*
  * File: src/data/mainSummaryData/projectsData.ts
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: This file contains structured data for the main Projects section of the portfolio website.
*/

import { capstonePlaceholders } from "../capstoneData";

export type ProjectMedia = {
    type: "image" | "video";
    src: string;
    alt?: string;
  };
  
  export type Project = {
    slug: string;
    name: string;
    blurb: string;
    tags: string[];
    link?: string;
    repo?: string;
    preview?: string;
    media?: ProjectMedia[];
  
    // mobile-safe details
    description?: string;
    bullets?: string[];
  };
  
  const slugify = (s: string) =>
    s
      .toLowerCase()
      .trim()
      .replace(/['"]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/(^-|-$)/g, "");
  
  export const projects: Project[] = [
    {
      slug: slugify("Engineering Capstone Project"),
      name: "Engineering Capstone Project",
      blurb:
        "Capstone redesign of a continuous passive motion machine, presented at Engineering Design Day with poster, demo materials, and a full team showcase.",
      tags: ["Capstone", "Hardware", "Electronics", "Design Day"],
      preview: capstonePlaceholders.preview,
      media: [
        {
          type: "image",
          src: "/capstonePoster.png",
          alt: "Capstone design poster",
        },
        {
          type: "video",
          src: "/capstoneVideo.mp4",
          alt: "Capstone presentation video",
        },
        {
          type: "image",
          src: "/IMG_3106.JPEG",
          alt: "Capstone detail image 1",
        },
        {
          type: "image",
          src: "/IMG_3107.JPEG",
          alt: "Capstone detail image 2",
        },
        {
          type: "image",
          src: "/capstoneSchematic.jpg",
          alt: "Capstone electronics schematic",
        },
        {
          type: "image",
          src: "/IMG_3049.JPEG",
          alt: "Capstone dean group photo",
        },
        {
          type: "image",
          src: "/IMG_3057.JPEG",
          alt: "Capstone desk display photo",
        },
      ],
      description:
        "A team capstone project focused on redesigning a continuous passive motion machine and presenting the final build during Engineering Design Day at the University of Guelph.",
      bullets: [
        "Final poster and presentation assets",
        "Team showcase with judges and faculty",
        "Cross-disciplinary engineering execution",
      ],
    },
    {
      slug: slugify("Subscription Tracker App: SubView"),
      name: "Subscription Tracker App: SubView",
      blurb:
        "React Native + Expo app to track subscription costs with Firebase auth, realtime data, and charts. Account creation, login, and password reset included. API logo integration for popular services. Firebase database to store user data securely.",
      tags: ["React Native", "Expo Router", "Firebase", "TypeScript"],
      preview: "/IMG_1263.PNG",
      media: [
        { type: "image", src: "/IMG_1263.PNG", alt: "Image of App" },
        { type: "image", src: "/IMG_1264.PNG", alt: "Image of App" },
        { type: "image", src: "/IMG_1265.PNG", alt: "Image of App" },
        { type: "image", src: "/IMG_1266.PNG", alt: "Image of App" },
        { type: "image", src: "/IMG_1267.PNG", alt: "Image of App" },
        { type: "image", src: "/IMG_1271.PNG", alt: "Image of App" },
        { type: "image", src: "/IMG_1272.PNG", alt: "Image of App" },
        { type: "image", src: "/IMG_1273.PNG", alt: "Image of App" },
        { type: "image", src: "/subViewLogo.png", alt: "Image of App" },
      ],
      repo: "https://github.com/your-github/subView",
      description:
        "React Native + Expo app to track subscription costs with Firebase auth, realtime data, and charts. Account creation, login, and password reset included. API logo integration for popular services. Firebase database to store user data securely.",
      bullets: [
        "Built with Expo Router for navigation",
        "Uses Firebase for authentication and data storage",
        "Interactive charts for spending analysis",
        "Responsive UI with Tailwind CSS",
      ],
    },
  
    {
      slug: slugify("Real Time OS-III PID Controller"),
      name: "Real Time OS-III PID Controller",
      blurb:
        "Real time Hot Air Plant PID controller. Programmed with uCOS-III to ensure responsiveness and safety. Auto and manual modes with LCD display and button interface with real time temperature monitoring and control. Auto controls temperature based on set point, manual allows direct user control of voltage.",
      tags: ["Embedded", "C", "Electronics"],
      preview: "/hotAirPlantPreview.JPEG",
      media: [
        { type: "image", src: "/hotAirPlantPreview.JPEG", alt: "LCD display showing temperature reading" },
        { type: "image", src: "/hotAirPlantManual.png", alt: "Manual Mode" },
        { type: "image", src: "/hotAirPlantAuto.png", alt: "Auto Mode" },
      ],
      description:
        "Real time Hot Air Plant PID controller programmed with uCOS-III to ensure responsiveness and safety. Auto and manual modes with LCD display + button interface for real time temperature monitoring and control. Auto controls temperature based on set point; manual allows direct user control of voltage.",
      bullets: ["User interface designed for usability", "PID for adjustable control", "Written in uCOS-III for stability"],
    },
  
    {
      slug: slugify("Portfolio Website"),
      name: "Portfolio Website",
      blurb:
        "This very page, developed to be responsive, animated, and accessible single-page site with smooth scrolling. Uses React, Vite, Tailwind CSS, and Framer Motion. Hosted on Vercel for fast global delivery.",
      tags: ["React", "Vite", "Vercel", "Tailwind CSS", "Framer Motion"],
      repo: "https://github.com/your-github/portfolio",
      preview: "/portfolioWebsiteCodeSnip.png",
      media: [
        { type: "image", src: "/portfolioWebsitePreview.png", alt: "Website Preview" },
        { type: "image", src: "/portfolioWebsiteCodeSnip.png", alt: "Website Code Snippet" },
        { type: "image", src: "/react.svg", alt: "React logo" },
      ],
      description:
        "This very page: a responsive, animated, accessible single-page site with smooth scrolling. Built with React, Vite, Tailwind CSS, and Framer Motion. Hosted on Vercel for fast global delivery.",
      bullets: ["Fully responsive design", "Accessible navigation and content", "Animated transitions for a modern feel"],
    },
  
  ];
