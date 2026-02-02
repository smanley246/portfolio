/*
  * File: src/data/mainSummaryData/experienceData.ts
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: This file contains structured data for the main Experience section of the portfolio website.
*/

export type ExperienceRole = {
    when: string;
    title: string;
    place: string;
    bullets: string[];
  };
  
  export type ExperienceData = {
    left: ExperienceRole[];
    right: ExperienceRole[];
  };
  
  export const experienceData: ExperienceData = {
    left: [
      {
        when: "Summer 2023, 2024, 2025",
        title: "IT Support Specialist CO-OP",
        place: "Skyline Group of Companies",
        bullets: [
          "Provided technical assistance and troubleshooting for hardware/software issues.",
          "Developed Powershell scripts to automate routine tasks and improve efficiency.",
          "Organized a donation of over 25 laptops, 50 iPhones, and 60 iPads for a local charity.",
        ],
      },
      {
        when: "Summer 2022",
        title: "App Developer CO-OP",
        place: "Skyjack Inc.",
        bullets: [
          "Full Stack Application Developer for internal tools.",
          "Developed .net core applications.",
          "Database management with SQL Server.",
        ],
      },
    ],
    right: [
      {
        when: "2021 - 2022",
        title: "Computer Technician Specialist",
        place: "Geek Squad",
        bullets: [
          "Provided technical support, diagnostics and repairs for tech devices.",
          "Assisted customers with data security, hacked recovery, and lockouts.",
          "Worked very well in the busy fast paced environment of retail tech support.",
        ],
      },
      {
        when: "Summer 2021",
        title: "IT Support Specialist CO-OP",
        place: "Linamar Corporation",
        bullets: [
          "Provided technical assistance and troubleshooting for hardware/software issues.",
          "Developed Powershell scripts to automate routine tasks and improve efficiency.",
          "Supported the electronic hardware of a pop up COVID-19 vaccination clinic hosted by Linamar.",
        ],
      },
    ],
  };
  