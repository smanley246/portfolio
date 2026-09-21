/*
  * File: src/data/aboutData/aboutData.ts
  * Author: Samuel Manley
  * Last Modified: April 6th, 2026
  *
  * Description: This file contains structured data for the About page of the portfolio website.
*/

export type AboutImage = {
  src: string;
  alt: string;
  caption: string;
};

export type AboutSkillGroup = {
  title: string;
  items: string[];
};

export type AboutPersonalCard = {
  title: string;
  body: string | string[];
  tags: string[];
  image?: AboutImage;
};

export type AboutSection =
  | {
      id: "summary";
      navLabel: string;
      title: string;
      paragraphs: string[];
      highlights: string[];
      image: AboutImage;
    }
  | {
      id: "skills";
      navLabel: string;
      title: string;
      pitch: string;
      skillGroups: AboutSkillGroup[];
      image1: AboutImage;
      image2: AboutImage;
    }
  | {
      id: "interests";
      navLabel: string;
      title: string;
      cards: [AboutPersonalCard, AboutPersonalCard, AboutPersonalCard];
    };

export const aboutPageData: {
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
  };
  sections: AboutSection[];
} = {
  hero: {
    kicker: "About",
    title: "A bit more about me.",
    subtitle:
      "I build custom software, Microsoft Fabric data platforms, automation, and AI-driven tools. My B.Eng. in Computer Engineering adds depth across full-stack development, embedded systems, and digital hardware.",
  },

  sections: [
    {
      id: "summary",
      navLabel: "Summary",
      title: "Summary",
      paragraphs: [
        "I currently build custom software, develop Microsoft Fabric data platforms, automate business processes, and contribute to applied AI initiatives. I take projects from requirements through architecture, implementation, testing, and delivery.",
        "I have built full-stack and mobile applications, cloud-connected dashboards, embedded control systems, FPGA and VLSI designs, and automation scripts. These projects include subscription analytics, real-time temperature control, rehabilitation hardware, and internal business tools.",
        "My experience covers data and software engineering, embedded systems and digital hardware, and technical operations. I work with SQL, Python, TypeScript, .NET, React Native, C, VHDL, Firebase, PowerShell, and real-time systems. Outside of engineering, I spend time playing squash, cycling, skiing, and cooking.",
      ],
      highlights: [
        "Electrical Systems",
        "Software Development",
        "Embedded Systems",
        "FPGA / Digital Logic",
        "Leadership",
        "Teamwork",
        "Problem Solving",
      ],
      image: {
        src: "/IMG_3040.JPEG",
        alt: "Samuel working on an engineering project",
        caption: "Turning ideas into reliable, polished systems.",
      },
    },

    {
      id: "skills",
      navLabel: "Technical Skills",
      title: "Technical Skills",
      pitch:
        "I'm strongest when a project needs someone who can move from requirements to architecture to implementation, whether that's a data platform, custom software solution, automation workflow, or the embedded and FPGA systems that shaped my engineering foundation.",
      skillGroups: [
        {
          title: "Business Intelligence & Automation",
          items: [
            "Microsoft Fabric",
            "Data lakes",
            "Custom software solutions",
            "Business process automation",
            "AI initiatives",
            "SQL",
          ],
        },
        {
          title: "Digital Design & FPGA",
          items: [
            "VHDL / Verilog",
            "Cadence Virtuoso + Spectre",
            "Vivado",
            "FPGA Reconfiguration Techniques",
            "Timing + Constraint Implementation",
          ],
        },
        {
          title: "Embedded & Real-Time",
          items: [
            "Embedded C",
            "STM32",
            "Real-time control",
            "RTOS concepts",
            "Peripheral integration",
            "Debugging with logic + scope mindset",
          ],
        },
        {
          title: "Software & Full Stack",
          items: [
            "React Native (Expo)",
            "TypeScript",
            "Firebase (Auth + Realtime Database)",
            "Custom software development",
            "SQL",
            ".NET",
            "SwiftUI",
            "Tailwind CSS",
          ],
        },
        {
          title: "Tools & Workflow",
          items: [
            "Git / GitHub",
            "Linux (Ubuntu)",
            "Vercel deployment",
            "Clean component design",
            "Documentation & iteration",
          ],
        },
        {
          title: "Core Languages",
          items: ["Python", "Java", "C", "VHDL", "TypeScript", "SQL"],
        },
        {
          title: "Robotics & Systems",
          items: [
            "Sensors + actuation",
            "Control loops",
            "System integration",
            "Data logging + telemetry mindset",
          ],
        },
      ],
      image1: {
        src: "/hotAirPlantPreview.JPEG",
        alt: "Technical workspace / electronics / code",
        caption: "Comfortable from low-level logic to high-level apps.",
      },
      image2: {
        src: "/vsli1.JPEG",
        alt: "Cadence circuit design and VLSI coursework",
        caption: "NMOS capacitor Cadence design.",
      },
    },

    {
      id: "interests",
      navLabel: "Personal Interests",
      title: "Personal Interests",
      cards: [
        {
          title: "Squash",
          body: [
            "Squash has been a huge part of my life. Competing has taught me consistency, composure under pressure, and how to keep improving over time. I bring that same mindset into engineering projects: train the fundamentals, iterate quickly, and show up prepared.",
            "During my time as captain of the University of Guelph Varsity Squash Team, I developed leadership and teamwork skills that I apply to group projects and collaborative work. Leading by example, fostering a positive team culture, and encouraging open communication are values I carry into all my endeavors.",
            "Squash also allows me to take part in the local community through coaching and volunteering at events, which helps me maintain a balanced lifestyle outside of work and engineering.",
          ],
          tags: ["Discipline", "Team Leadership", "Competitive", "Volunteering"],
          image: {
            src: "/IMG_3070.JPEG",
            alt: "Samuel playing squash",
            caption: "Competitive mindset, long-term consistency.",
          },
        },
        {
          title: "Technology & Computers",
          body:
            "I stay current with new tools, from Microsoft data platforms and AI workflows to embedded systems and modern app stacks. I like understanding how systems work end-to-end and finding cleaner ways to build, test, and ship software.",
          tags: ["Cutting Edge Tech", "Systems Thinking", "Efficient Solutions"],
        },
        {
          title: "Pets",
          body:
            "I'm a big animal person. My pets keep life balanced and remind me to step away from the screen once in a while. They're also a good reminder that the best routines are consistent, simple, and sustainable.",
          tags: ["Balance", "Routine", "Good energy", "Companionship"],
          image: {
            src: "/nachoVet.jpg",
            alt: "Samuel with pets",
            caption: "A little chaos, a lot of good energy.",
          },
        },
      ],
    },
  ],
};
