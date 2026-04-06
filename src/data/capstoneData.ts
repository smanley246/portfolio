type CapstoneMaterialKind = "Image" | "Video" | "Document";

type CapstoneMaterialSlot = {
  title: string;
  kind: CapstoneMaterialKind;
  note: string;
};

export const capstonePlaceholders = {
  poster: "/capstonePoster.png",
  deanPhoto: "/IMG_3057.JPEG",
  displayPhoto: "/IMG_3049.JPEG",
  schematic: "/capstoneSchematic.jpg",
  preview: "/capstonePoster.png",
  presentationVideo: "/capstoneVideo.mp4",
};

export const capstoneSummary = {
  title: "Engineering Capstone Project",
  subtitle: "Continuous passive motion machine redesign",
  description:
    "Our capstone team redesigned a continuous passive motion machine and presented the final system to a panel of judges during Engineering Design Day at the University of Guelph.",
  narrative:
    "Alongside Angelina Seliverstova, James D'Silva, Emma Jenkins, and Samuel Manley, the team presented a redesigned continuous passive motion machine advised by Dr. Stephen Mattucci for client Mr. Ted Jacobs. The final product was presented to a panel of judges who were highly impressed by the team's work and execution.",
  reflection:
    "I am proud of what we built and of the way our team worked across different backgrounds to deliver a polished engineering result from concept through final presentation.",
  imageSlots: [
    {
      title: "Design poster",
      caption: "Final poster from Engineering Design Day.",
      src: capstonePlaceholders.poster,
    },
    {
      title: "Group photo with the Dean",
      caption:
        "Team photo with the Dean of Engineering at the University of Guelph.",
      src: capstonePlaceholders.deanPhoto,
    },
    {
      title: "Desk display",
      caption: "Final showcase table and display setup.",
      src: capstonePlaceholders.displayPhoto,
    },
  ],
  materialSlots: [
    {
      title: "Design poster image",
      kind: "Image" as CapstoneMaterialKind,
      note: "Final high-resolution poster from Engineering Design Day.",
    },
    {
      title: "Presentation video",
      kind: "Video" as CapstoneMaterialKind,
      note: "Presentation clip from Design Day judging.",
    },
    {
      title: "Device working demo",
      kind: "Video" as CapstoneMaterialKind,
      note: "Video of the redesigned device operating.",
    },
    {
      title: "Electronics schematic",
      kind: "Document" as CapstoneMaterialKind,
      note: "Circuit and control-system schematic shown before the Design Day photos.",
    },
    {
      title: "Group photo with the Dean",
      kind: "Image" as CapstoneMaterialKind,
      note: "Team photo featuring the final presentation group.",
    },
    {
      title: "Desk display photo",
      kind: "Image" as CapstoneMaterialKind,
      note: "Final booth and tabletop display from the event.",
    },
  ] satisfies CapstoneMaterialSlot[],
};
