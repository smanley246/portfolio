/*
  * File: src/data/aboutData/aboutData.ts
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
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
      "I design and build hardware and software systems with an emphasis on reliability, clean architecture, and practical impact. Whether it's embedded systems, digital logic, or full-stack applications, I focus on solutions that work well, scale cleanly, and hold up in the real world.",
  },

  sections: [
    {
      id: "summary",
      navLabel: "Summary",
      title: "Summary",
      paragraphs: [
        "I'm a graduating Computer Engineering student from Guelph Ontario with a passion for building reliable and polished technical solutions. I work across both hardware and software, developing embedded systems, digital logic in hardware description languages, and modern mobile applications with React Native.",
        "I enjoy turning ideas into functional systems by writing firmware, designing circuits, creating user-friendly interfaces and anything else is required by the task.",
        "Outside of academics, I spend a lot of time working on self-driven engineering projects to strengthen my skills and explore new technologies. I like challenging myself through hands-on learning in areas such as robotics, real-time control, and full-stack development. When I'm not building something, I am usually playing squash, cycling, skiing, or cooking.",
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
        "I'm strongest when a project needs someone who can jump from requirements to architecture to implementation, whether that's firmware, FPGA logic, or a clean full-stack app.",
      skillGroups: [
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
            "Firebase (Auth + Realtime DB)",
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
        alt: "Cadence Circuit Design / electronics / VSLI",
        caption: "nmos Capacitor Cadence Design.",
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
            "\nDuring my time as team Captain of the University of Guelph Varsity Squash Team, I developed leadership and teamwork skills that I apply to group projects and collaborative work. Leading by example, fostering a positive team culture, and encouraging open communication are values I carry into all my endeavors.",
            "\nSquash also allows me to partake in the local community through coaching and volunteering at events, which helps me maintain a balanced lifestyle outside of academics and engineering.",
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
            "I genuinely enjoy staying current with new tech; from embedded platforms and tools to modern app stacks. I like exploring how systems work end-to-end, and I'm always looking for better ways to build, test, and ship clean solutions.",
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
