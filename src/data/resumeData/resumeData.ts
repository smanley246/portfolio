/*
  * File: src/data/resumeData/resumeData.ts
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: This file contains structured data for the Resume page of the portfolio website.
*/

export type ResumeAction = {
    label: string;
    href: string;
    targetBlank?: boolean;
    download?: boolean;
  };
  
  export type resumeData = {
    pageTitle: string;
    heading: string;
    actions: ResumeAction[];
    preview: {
      imageSrc: string;
      imageAlt: string;
      maxWidthPx: number;
    };
  };
  
  export const resumeData: resumeData = {
    pageTitle: "Resume",
    heading: "Resume",
    actions: [
      {
        label: "Open PDF",
        href: "/SamuelManleyResume.pdf",
        targetBlank: true,
      },
      {
        label: "Download PDF",
        href: "/SamuelManleyResume.pdf",
        download: true,
      },
    ],
    preview: {
      imageSrc: "/SamuelManleyResume.png",
      imageAlt: "Samuel Manley Resume",
      maxWidthPx: 1200,
    },
  };
  