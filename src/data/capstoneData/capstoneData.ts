/*
  * File: src/data/capstoneData/capstoneData.ts
  * Author: Samuel Manley
  * Last Modified: April 6th, 2026
  *
  * Description: Centralized capstone project content and media for the portfolio website.
*/

export type CapstoneMediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
};

export type CapstoneShowcaseCard = {
  title: string;
  caption: string;
  src: string;
  alt: string;
};

export const capstoneAssets = {
  poster: "/capstonePoster.png",
  deanPhoto: "/IMG_3057.JPEG",
  displayPhoto: "/IMG_3049.JPEG",
  schematic: "/capstoneSchematic.jpg",
  preview: "/capstonePoster.png",
  presentationVideo: "/capstoneVideo.mp4",
  detailPhotoOne: "/IMG_3106.JPEG",
  detailPhotoTwo: "/IMG_3107.JPEG",
} as const;

export const capstoneMedia: CapstoneMediaItem[] = [
  {
    type: "image",
    src: capstoneAssets.poster,
    alt: "Engineering capstone design poster",
  },
  {
    type: "video",
    src: capstoneAssets.presentationVideo,
    alt: "Engineering capstone presentation video",
  },
  {
    type: "image",
    src: capstoneAssets.detailPhotoOne,
    alt: "Engineering capstone device detail photo 1",
  },
  {
    type: "image",
    src: capstoneAssets.detailPhotoTwo,
    alt: "Engineering capstone device detail photo 2",
  },
  {
    type: "image",
    src: capstoneAssets.schematic,
    alt: "Engineering capstone electronics schematic",
  },
  {
    type: "image",
    src: capstoneAssets.deanPhoto,
    alt: "Engineering capstone group photo with the Dean",
  },
  {
    type: "image",
    src: capstoneAssets.displayPhoto,
    alt: "Engineering capstone desk display",
  },
];

export const capstoneSummary = {
  title: "Engineering Capstone Project",
  subtitle: "Continuous passive motion machine redesign",
  description:
    "Our capstone team redesigned a continuous passive motion machine and presented the final system to a panel of judges during Engineering Design Day at the University of Guelph.",
  reflection:
    "I am proud of what we built and of the way our team worked across different backgrounds to deliver a polished engineering result from concept through final presentation.",
  showcaseCards: {
    poster: {
      title: "Design poster",
      caption: "Final poster from Engineering Design Day.",
      src: capstoneAssets.poster,
      alt: "Engineering capstone design poster",
    },
    deanPhoto: {
      title: "Group photo with the Dean",
      caption:
        "Team photo with the Dean of Engineering at the University of Guelph.",
      src: capstoneAssets.deanPhoto,
      alt: "Engineering capstone group photo with the Dean",
    },
    schematic: {
      title: "Electronics schematic",
      caption: "Control electronics and system wiring overview.",
      src: capstoneAssets.schematic,
      alt: "Engineering capstone electronics schematic",
    },
    display: {
      title: "Desk display",
      caption: "Final showcase table and display setup.",
      src: capstoneAssets.displayPhoto,
      alt: "Engineering capstone desk display",
    },
  } satisfies Record<string, CapstoneShowcaseCard>,
};
