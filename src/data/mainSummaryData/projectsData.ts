/*
  * File: src/data/mainSummaryData/projectsData.ts
  * Author: Samuel Manley
  * Last Modified: April 6th, 2026
  *
  * Description: This file contains structured data for the main Projects section of the portfolio website.
*/

import {
  capstoneAssets,
  capstoneMedia,
} from "../capstoneData/capstoneData";

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
        "Capstone redesign of a continuous passive motion machine, presented at Engineering Design Day with poster assets, demo media, and a full team showcase.",
      tags: ["Capstone", "Hardware", "Electronics", "Design Day"],
      preview: capstoneAssets.preview,
      media: capstoneMedia,
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
        "React Native + Expo app to track subscription costs with Firebase auth, real-time data, and charts. Account creation, login, and password reset included. Service-brand logo integration helps users quickly identify subscriptions, while Firebase securely stores account data.",
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
      description:
        "React Native + Expo app to track subscription costs with Firebase auth, real-time data, and charts. Account creation, login, and password reset included. Service-brand logo integration helps users quickly identify subscriptions, while Firebase securely stores account data.",
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
        "Real-time Hot Air Plant PID controller programmed with uC/OS-III to ensure responsiveness and safety. Auto and manual modes use an LCD display and button interface for real-time temperature monitoring and control. Auto mode regulates temperature from a set point, while manual mode allows direct voltage control.",
      tags: ["Embedded", "C", "Electronics"],
      preview: "/hotAirPlantPreview.JPEG",
      media: [
        { type: "image", src: "/hotAirPlantPreview.JPEG", alt: "LCD display showing temperature reading" },
        { type: "image", src: "/hotAirPlantManual.png", alt: "Manual Mode" },
        { type: "image", src: "/hotAirPlantAuto.png", alt: "Auto Mode" },
      ],
      description:
        "Real-time Hot Air Plant PID controller programmed with uC/OS-III to ensure responsiveness and safety. Auto and manual modes use an LCD display and button interface for real-time temperature monitoring and control. Auto mode regulates temperature from a set point, while manual mode allows direct voltage control.",
      bullets: ["User interface designed for usability", "PID for adjustable control", "Written in uC/OS-III for stability"],
    },
  
    {
      slug: slugify("Portfolio Website"),
      name: "Portfolio Website",
      blurb:
        "This portfolio site was built to feel responsive, animated, and polished across desktop and mobile. It uses React, Vite, Tailwind CSS, and Framer Motion, and is deployed on Vercel for fast global delivery.",
      tags: ["React", "Vite", "Vercel", "Tailwind CSS", "Framer Motion"],
      preview: "/portfolioWebsiteCodeSnip.png",
      media: [
        { type: "image", src: "/portfolioWebsitePreview.png", alt: "Website Preview" },
        { type: "image", src: "/portfolioWebsiteCodeSnip.png", alt: "Website Code Snippet" },
        { type: "image", src: "/react.svg", alt: "React logo" },
      ],
      description:
        "This portfolio site is a responsive, animated experience built with React, Vite, Tailwind CSS, and Framer Motion. It focuses on clean presentation, smooth transitions, and polished project storytelling.",
      bullets: ["Fully responsive design", "Accessible navigation and content", "Animated transitions for a modern feel"],
    },
  
  ];
