/*
  * File: src/data/workData/workData.ts
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: This file contains structured data for the Work Experience page of the portfolio website.
*/

export type WorkRole = {
    slug: string;
    when: string;
    title: string;
    place: string;
    bullets: string[];
  
    logo?: {
      src: string;
      alt: string;
    };
  };
  
  const slugify = (s: string) =>
    s
      .toLowerCase()
      .trim()
      .replace(/['"]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/(^-|-$)/g, "");
  
  /** Route helper */
  export const workDetailPath = (slug: string) => `/work/${slug}`;
  
  export const workRoles: WorkRole[] = [
    {
      slug: slugify("IT Support Specialist CO-OP Skyline Group of Companies Summer 2023 2024 2025"),
      when: "Summer 2023, 2024, 2025",
      title: "IT Support Specialist CO-OP",
      place: "Skyline Group of Companies",
      bullets: [
        "Provided technical assistance and troubleshooting for hardware/software issues.",
        "Developed Powershell scripts to automate routine tasks and improve efficiency.",
        "Organized a donation of over 25 laptops, 50 iPhones, and 60 iPads for a local charity.",
      ],
      logo: {
        src: "/logos/skyline.png",
        alt: "Skyline Group of Companies logo",
      },
    },
    {
      slug: slugify("App Developer CO-OP Skyjack Inc Summer 2022"),
      when: "Summer 2022",
      title: "App Developer CO-OP",
      place: "Skyjack Inc.",
      bullets: [
        "Full Stack Application Developer for internal tools.",
        "Developed .net core applications.",
        "Database management with SQL Server.",
      ],
      logo: {
        src: "/logos/skyjack.png",
        alt: "Skyjack logo",
      },
    },
    {
      slug: slugify("Computer Technician Specialist Geek Squad 2021 2022"),
      when: "2021 - 2022",
      title: "Computer Technician Specialist",
      place: "Geek Squad",
      bullets: [
        "Provided technical support, diagnostics and repairs for tech devices.",
        "Assisted customers with data security, hacked recovery, and lockouts.",
        "Worked very well in the busy fast paced environment of retail tech support.",
      ],
      logo: {
        src: "/logos/geeksquad.png",
        alt: "Geek Squad logo",
      },
    },
    {
      slug: slugify("IT Support Specialist CO-OP Linamar Corporation Summer 2021"),
      when: "Summer 2021",
      title: "IT Support Specialist CO-OP",
      place: "Linamar Corporation",
      bullets: [
        "Provided technical assistance and troubleshooting for hardware/software issues.",
        "Developed Powershell scripts to automate routine tasks and improve efficiency.",
        "Supported the electronic hardware of a pop up COVID-19 vaccination clinic hosted by Linamar.",
      ],
      logo: {
        src: "/logos/linamar.png",
        alt: "Linamar logo",
      },
    },
    {
      slug: slugify("Computer Specialist Best Buy 2017 2018 2019"),
      when: "2017 - 2019",
      title: "Computer Specialist",
      place: "Best Buy",
      bullets: [
        "Advised customers on computers, tablets, and consumer technology by assessing needs, budgets, and use cases to recommend appropriate solutions.",
        "Delivered high-quality customer service in a fast-paced retail environment, resolving questions and technical concerns to ensure confident purchase decisions.",
        "Consistently met sales and service expectations while maintaining strong product knowledge across evolving hardware and software offerings.",
      ],
      logo: {
        src: "/logos/bestBuyLogo.png",
        alt: "Best Buy logo",
      },
    },
  ];
  
  export const getWorkBySlug = (slug: string) =>
    workRoles.find((r) => r.slug === slug);
  