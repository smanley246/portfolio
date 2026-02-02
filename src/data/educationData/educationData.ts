/*
 * File: src/data/educationData/educationData.ts
 * Author: Samuel Manley
 * Last Modified: February 1st, 2026
 *
 * Description: This file contains structured data for the Education section of the portfolio website.
 */

export type EducationImage = {
  src: string;
  alt: string;
};

export type DegreeCard = {
  school: string;
  program: string;
  location: string;
  years: string;
  subtitle?: string;
  highlights?: string[];
  paragraphs?: string[];
  image?: EducationImage;
};

export type CourseCard = {
  code: string;
  title: string;
  term?: string;
  badge?: string;
  description?: string[] | string;
  tags?: string[];
  image?: EducationImage;
};

export type EducationData = {
  heading: string;
  degreeCard: DegreeCard;
  coursesHeading: string;
  courses: CourseCard[];
};

export const educationData: EducationData = {
  heading: "Education",
  degreeCard: {
    school: "University of Guelph",
    program: "Bachelor of Science (B.Sc.), Computer Engineering",
    location: "Guelph, Ontario, Canada",
    years: "2021 — 2026",
    subtitle:
      "Computer engineering degree with a focus on embedded systems, digital design, and full-stack development.",
    highlights: [
      "Embedded Systems",
      "FPGA / VHDL",
      "Real-Time Software",
      "Control Systems",
      "Mobile + Web Apps",
    ],
    paragraphs: [
      "I’m completing my Computer Engineering degree with hands-on coursework and projects spanning embedded firmware, FPGA digital logic, and modern software development.",
      "My focus is on building reliable systems end-to-end: requirements, implementation, testing, and clean presentation — from low-level hardware integration to polished user interfaces.",
    ],
    image: {
      src: "/compEnggLogo.png",
      alt: "University of Guelph campus",
    },
  },

  coursesHeading: "Relevant Courses",
  courses: [
    {
      code: "ENGG*4550",
      title: "VLSI Digital Design",
      badge: "Silicon-Level Circuits",
      description: [
        "Studied the fundamentals of very large scale integration (VLSI) design from device physics through logic circuits up to system implementation.",
        "Gained experience modeling MOS transistors, CMOS gates, memory elements, pipelining and timing considerations at multiple abstraction levels.",
        "Learned trade-offs in delay, power, and robustness to engineer high-performance digital circuits and datapath subsystems.",
      ],
      tags: ["MOSFETs", "CMOS Logic", "Timing & Pipelining"],
      image: {
        src: "/cadence.jpg",
        alt: "VLSI circuit layout graphic",
      },
    },
    {
      code: "ENGG*4540",
      title: "Advanced Computer Architecture",
      badge: "Parallel & Memory Systems",
      description: [
        "Explored deep principles of modern computer architecture including instruction-level and thread-level parallelism.",
        "Covered advanced pipelining, cache and memory hierarchies, multiprocessor design, and performance trade-offs.",
        "Applied architecture simulators and performance measurement to evaluate design decisions quantitatively.",
      ],
      tags: ["Pipelining", "Parallelism", "Cache/Mem Hierarchy"],
      image: {
        src: "/gpuDDP.jpg",
        alt: "Processor architecture chart",
      },
    },
    {
      code: "ENGG*4420",
      title: "Real-Time Systems Design",
      badge: "RTOS & Scheduling",
      description: [
        "Studied real-time computing from system modeling to practical RTOS usage for embedded applications.",
        "Learned scheduling algorithms, task classification and synchronization for systems with hard and soft time constraints.",
        "Designed and implemented real-time control and embedded applications using industry-relevant kernels like FreeRTOS and uC/OS-III.",
      ],
      tags: ["RTOS", "Scheduling Algorithms", "Embedded Control"],
      image: {
        src: "/freeRTOS.jpg",
        alt: "Real-time system timing graphic",
      },
    },
    {
      code: "ENGG*3050",
      title: "Embedded Reconfigurable Computing Systems",
      badge: "Programmable Hardware",
      description: [
        "Introduced embedded systems fused with reconfigurable computing principles using FPGAs and hardware description languages.",
        "Explored designing hardware accelerators and configurable logic to optimize performance for task-specific applications.",
        "Applied embedded design methodologies that bridge software control with custom hardware implementations.",
      ],
      tags: ["FPGA", "HDL", "Embedded Optimization"],
      image: {
        src: "/nexysA7.jpg",
        alt: "FPGA development board",
      },
    },
    {
      code: "ENGG*3100",
      title: "Engineering & Design III",
      badge: "Systematic Design Process",
      description: [
        "Advanced structured engineering design emphasizing full systems development and multidisciplinary integration.",
        "Applied iterative design cycles, prototyping, testing and documentation practices critical in real engineering projects.",
        "Developed communication and project management skills by collaborating on complex design challenges.",
      ],
      tags: ["Design Thinking", "Prototyping", "Team Communication"],
      image: {
        src: "/enggDesign.png",
        alt: "Engineering design workflow",
      },
    },
  ],
};
