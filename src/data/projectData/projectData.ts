/*
  * File: src/data/mainSummaryData/projectsData.ts
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: This file contains structured data for the main Projects page of the portfolio website.
*/

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
    completed: string; 
  
    // links / assets
    preview?: string;
    link?: string;
    repo?: string;
    media?: ProjectMedia[];
  
    // detail page content
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
  
  export const projectDetailPath = (slug: string) => `/projects/${slug}`;
  
  export const projects: Project[] = [
    {
      slug: slugify("Subscription Tracker App: SubView"),
      name: "Subscription Tracker App: SubView",
      completed: "2025",
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
        { type: "image", src: "/subViewLogo.png", alt: "SubView Logo" },
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
      completed: "2025",
      blurb:
        "Real time Hot Air Plant PID controller. Programmed with uCOS-III to ensure responsiveness and safety. Auto and manual modes with LCD display and button interface with real time temperature monitoring and control.",
      tags: ["Embedded", "C", "Electronics"],
      preview: "/hotAirPlantPreview.JPEG",
      media: [
        {
          type: "image",
          src: "/hotAirPlantPreview.JPEG",
          alt: "LCD display showing temperature reading",
        },
        { type: "image", src: "/hotAirPlantManual.png", alt: "Manual Mode" },
        { type: "image", src: "/hotAirPlantAuto.png", alt: "Auto Mode" },
      ],
      description:
        "Real time Hot Air Plant PID controller programmed with uCOS-III to ensure responsiveness and safety. Auto and manual modes with LCD display + button interface for real time temperature monitoring and control. Auto controls temperature based on set point; manual allows direct user control of voltage.",
      bullets: [
        "User interface designed for usability",
        "PID for adjustable control",
        "Written in uCOS-III for stability",
      ],
    },
  
    {
      slug: slugify("Portfolio Website"),
      name: "Portfolio Website",
      completed: "2026",
      blurb:
        "This very page, developed to be responsive, animated, and accessible single-page site with smooth scrolling. Uses React, Vite, Tailwind CSS, and Framer Motion. Hosted on Vercel for fast global delivery.",
      tags: ["React", "Vite", "Vercel", "Tailwind CSS", "Framer Motion"],
      repo: "https://github.com/your-github/portfolio",
      preview: "/portfolioWebsiteCodeSnip.png",
      media: [
        { type: "image", src: "/portfolioWebsitePreview.png", alt: "Website Preview" },
        {
          type: "image",
          src: "/portfolioWebsiteCodeSnip.png",
          alt: "Website Code Snippet",
        },
        { type: "image", src: "/react.svg", alt: "React logo" },
      ],
      description:
        "This very page: a responsive, animated, accessible single-page site with smooth scrolling. Built with React, Vite, Tailwind CSS, and Framer Motion. Hosted on Vercel for fast global delivery.",
      bullets: [
        "Fully responsive design",
        "Accessible navigation and content",
        "Animated transitions for a modern feel",
      ],
    },
  
    {
      slug: slugify("Arduino Project: Sensor + RFID Automation"),
      name: "Arduino Project: Sensor + RFID Automation",
      completed: "In Progress",
      blurb:
        "Project in progress using Arduino to read RFID tags and sensor data for home automation. Many other projects have been completed using Arduino micro-controllers for various applications.",
      tags: ["Circuitry", "Arduino", "Programming"],
      preview: "/arduino.JPEG",
      media: [
        { type: "image", src: "/arduino.JPEG", alt: "Arduino project preview" },
        { type: "image", src: "/Arduino_Logo.png", alt: "Arduino logo" },
      ],
      description:
        "Project in progress using Arduino to read RFID tags and sensor data for home automation. Many other projects have been completed using Arduino micro-controllers for various applications.",
      bullets: ["Circuit Design", "Electrical Component Implementation", "Software Integration"],
    },
  ];
  
  export const getProjectBySlug = (slug: string) =>
    projects.find((p) => p.slug === slug);
  