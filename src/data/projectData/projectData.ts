/*
  * File: src/data/projectData/projectData.ts
  * Author: Samuel Manley
  * Last Modified: April 6th, 2026
  *
  * Description: This file contains structured data for the dedicated Projects page of the portfolio website.
*/

import {
  capstoneAssets,
  capstoneMedia,
} from "../capstoneData/capstoneData";

export type ProjectMedia = {
    type: "image" | "video";
    src: string;
    alt?: string;
    caption?: string;
  };

  export type Project = {
    slug: string;
    name: string;
    blurb: string;
    tags: string[];
    completed: string; 
    latest?: boolean;
    logo?: string;
  
    // links / assets
    preview?: string;
    link?: string;
    repo?: string;
    media?: ProjectMedia[];
  
    // detail page content
    description?: string;
    bullets?: string[];
    sections?: { title: string; paragraphs: string[]; steps?: string[] }[];
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
      slug: "readyracquets",
      name: "ReadyRacquets",
      completed: "Live website",
      latest: true,
      logo: "/projects/readyracquets/icon.webp",
      blurb:
        "A squash racquet stringing platform connecting a public string catalog, a customer service portal, and a private workspace for day-to-day operations.",
      tags: ["Web Platform", "Customer Portal", "Service Management", "Responsive Design"],
      preview: "/projects/readyracquets/home-desktop.webp",
      link: "https://readyracquets.vercel.app/",
      description:
        "ReadyRacquets brings the squash stringing experience into one place. Players can explore strings and follow their racquet's progress, while the owner manages intake, stringing, inventory, and payments in a private Command center.",
      media: [
        {
          type: "image", src: "/projects/readyracquets/home-desktop.webp",
          alt: "ReadyRacquets homepage with squash stringing service information and string selection links",
          caption: "The public homepage introduces the service and helps players find their next string.",
        },
        {
          type: "image", src: "/projects/readyracquets/catalog.webp",
          alt: "ReadyRacquets squash string catalog with string options and all-in CAD pricing",
          caption: "A seven-string catalog organized into Essential, Performance, and Pro price tiers.",
        },
        {
          type: "image", src: "/projects/readyracquets/product.webp",
          alt: "ReadyRacquets string product page with photography, playing characteristics, and tension guidance",
          caption: "Individual product pages explain how each string feels and plays.",
        },
        {
          type: "image", src: "/projects/readyracquets/home-mobile.webp",
          alt: "ReadyRacquets homepage displayed in a phone-sized layout",
          caption: "A responsive mobile layout keeps the service accessible on the go.",
        },
      ],
      bullets: [
        "Public string catalog with clear, all-in service pricing",
        "Customer accounts for progress updates and service history",
        "Private owner workspace for everyday stringing operations",
      ],
      sections: [
        {
          title: "The use case",
          paragraphs: ["Squash players need a clear way to choose a string and keep track of their racquet's service. A stringing business needs a reliable way to manage that work. ReadyRacquets connects both sides through a public website, a customer portal, and a private owner workspace."],
        },
        {
          title: "A catalog built around the player",
          paragraphs: [
            "Seven squash strings span three all-in CAD tiers: Essential ($40), Performance ($45), and Pro ($50). Each product page includes photography, gauge, construction, playing characteristics, and tension guidance to help players make an informed choice.",
            "The service price includes string and labour. No customer GST/HST is charged at launch, and payment is by e-transfer.",
          ],
        },
        {
          title: "A personal customer portal",
          paragraphs: [
            "Customers can create an account, sign in, track ongoing services, and revisit completed work in History. Service details bring together the selected string, tension, quoted price, progress, and payment status.",
            "Account settings include profile, email, password, and session controls. Only the signed-in customer's records are available in their portal.",
          ],
        },
        {
          title: "The owner's Command center",
          paragraphs: ["The private workspace supports customer records, stringing intake, service progress, inventory, and payment recording. Operational reporting and account administration help the owner manage the business alongside the work at the stringing machine."],
        },
        {
          title: "From intake to a finished racquet",
          paragraphs: ["Customers can follow progress updates in their account throughout the ordinary service path, then return to completed services in History."],
          steps: ["Received", "Stringing", "Quality check", "Complete"],
        },
        {
          title: "Designed for everyday access",
          paragraphs: ["ReadyRacquets supports phone, tablet, and desktop layouts, touch and keyboard controls, and reduced-motion preferences. Its own visual identity and self-hosted Outfit typography carry across the experience."],
        },
      ],
    },
    {
      slug: slugify("Engineering Capstone Project"),
      name: "Engineering Capstone Project",
      completed: "2026",
      blurb:
        "Team redesign of a continuous passive motion machine, presented at the University of Guelph Engineering Design Day to judges, faculty, and guests.",
      tags: ["Capstone", "Mechanical Design", "Electronics", "Prototyping"],
      preview: capstoneAssets.preview,
      media: capstoneMedia,
      description:
        "Samuel Manley, Angelina Seliverstova, James D'Silva, and Emma Jenkins presented a redesigned continuous passive motion machine during Engineering Design Day at the University of Guelph. The project was advised by Dr. Stephen Mattucci for client Mr. Ted Jacobs and received strong feedback from the judging panel.",
      bullets: [
        "Presented the final prototype and system story to a panel of judges",
        "Worked across disciplines to turn the redesign into a polished final product",
        "Prepared poster, display material, and demonstration assets for Design Day",
        "Built a project that balanced engineering rigor with real client needs",
      ],
    },
    {
      slug: slugify("Subscription Tracker App: SubView"),
      name: "Subscription Tracker App: SubView",
      completed: "2025",
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
        { type: "image", src: "/subViewLogo.png", alt: "SubView Logo" },
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
      completed: "2025",
      blurb:
        "Real-time Hot Air Plant PID controller programmed with uC/OS-III to ensure responsiveness and safety. Auto and manual modes use an LCD display and button interface for real-time temperature monitoring and control.",
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
        "Real-time Hot Air Plant PID controller programmed with uC/OS-III to ensure responsiveness and safety. Auto and manual modes use an LCD display and button interface for real-time temperature monitoring and control. Auto mode regulates temperature from a set point, while manual mode allows direct voltage control.",
      bullets: [
        "User interface designed for usability",
        "PID for adjustable control",
        "Written in uC/OS-III for stability",
      ],
    },
  
    {
      slug: slugify("Portfolio Website"),
      name: "Portfolio Website",
      completed: "2026",
      blurb:
        "This portfolio site was built to feel responsive, animated, and polished across desktop and mobile. It uses React, Vite, Tailwind CSS, and Framer Motion, and is deployed on Vercel for fast global delivery.",
      tags: ["React", "Vite", "Vercel", "Tailwind CSS", "Framer Motion"],
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
        "This portfolio site is a responsive, animated experience built with React, Vite, Tailwind CSS, and Framer Motion. It focuses on clean presentation, smooth transitions, and polished project storytelling.",
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
        "Project in progress using Arduino to read RFID tags and sensor data for home automation. I have also completed several other Arduino-based builds for a range of practical applications.",
      tags: ["Circuitry", "Arduino", "Programming"],
      preview: "/arduino.JPEG",
      media: [
        { type: "image", src: "/arduino.JPEG", alt: "Arduino project preview" },
        { type: "image", src: "/Arduino_Logo.png", alt: "Arduino logo" },
      ],
      description:
        "Project in progress using Arduino to read RFID tags and sensor data for home automation. I have also completed several other Arduino-based builds for a range of practical applications.",
      bullets: ["Circuit Design", "Electrical Component Implementation", "Software Integration"],
    },
  ];
  
  export const getProjectBySlug = (slug: string) =>
    projects.find((p) => p.slug === slug);

  export const latestProjects = projects.filter((project) => project.latest);
  export const otherProjects = projects.filter((project) => !project.latest);
  
