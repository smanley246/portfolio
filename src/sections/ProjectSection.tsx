/*
 * ProjectSection.tsx
 * Projects section showing multiple ProjectCards
 * Each card can include preview media, gallery, tags, and detailed description
 */

import React from "react";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { FolderGit2 } from "lucide-react";

const ProjectsSection: React.FC = () => (
  // Section wrapper with folder icon
  <Section id="projects" title="Projects" icon={<FolderGit2 />}>
    {/* 2-column grid of projects on medium+ screens */}
    <div className="grid md:grid-cols-2 gap-6">
      {/* Project: Subscription Tracker App */}
      <ProjectCard
        name="Subscription Tracker App: SubView"
        blurb="React Native + Expo app to track subscription costs with Firebase auth, realtime data, and charts. Account creation, login, and password reset included. API logo integration for popular services. Firebase database to store user data securely."
        tags={["React Native", "Expo Router", "Firebase", "TypeScript"]}
        preview="/IMG_1263.PNG"
        media={[
          {type:"image", src: "/IMG_1263.PNG", alt: "Image of App" }, 
          {type:"image", src: "/IMG_1264.PNG", alt: "Image of App" }, 
          {type:"image", src: "/IMG_1265.PNG", alt: "Image of App" }, 
          {type:"image", src: "/IMG_1266.PNG", alt: "Image of App" }, 
          {type:"image", src: "/IMG_1267.PNG", alt: "Image of App" }, 
          {type:"image", src: "/IMG_1271.PNG", alt: "Image of App" }, 
          {type:"image", src: "/IMG_1272.PNG", alt: "Image of App" }, 
          {type:"image", src: "/IMG_1273.PNG", alt: "Image of App" },
          {type:"image", src: "/subViewLogo.png", alt: "Image of App" }]}
        repo="https://github.com/your-github/subView"
        details={
          <>
            <p>
            React Native + Expo app to track subscription costs with Firebase auth, realtime data, and charts. Account creation, login, and 
            password reset included. API logo integration for popular services. Firebase database to store user data securely.
            </p>
            <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
              <li>Built with Expo Router for navigation</li>
              <li>Uses Firebase for authentication and data storage</li>
              <li>Interactive charts for spending analysis</li>
              <li>Responsive UI with Tailwind CSS</li>
            </ul>
          </>
        }
      />

      {/* Project: Real Time OS-III PID Controller */}
      <ProjectCard
        name="Real Time OS-III PID Controller"
        blurb="Real time Hot Air Plant PID controller. Programmed with uCOS-III to ensure responsiveness and safety. Auto and manual modes with LCD display and button interface with real time temperature 
        monitoring and control. Auto controls temperature based on set point, manual allows direct user control of voltage."
        tags={["Embedded", "C", "Electronics"]}
        preview="/hotAirPlantPreview.JPEG"
        media={[
          {type:"image", src: "/hotAirPlantPreview.JPEG", alt: "LCD display showing temperature reading" }, 
          {type:"image", src: "/hotAirPlantManual.png", alt: "Manual Mode" }, 
          {type:"image", src: "/hotAirPlantAuto.png", alt: "Auto Mode" }]}
        details={
          <>
            <p>
            Real time Hot Air Plant PID controller. Programmed with uCOS-III to ensure responsiveness and safety. Auto and 
            manual modes with LCD display and button interface with real time temperature monitoring and control. 
            Auto controls temperature based on set point, manual allows direct user control of voltage.
            </p>
            <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
              <li>User interface designed for usability</li>
              <li>PID for adjustable control</li>
              <li>Written in uCOS-III for stability</li>
            </ul>
          </>
        }
      />

      {/* Project: Portfolio Website */}
      <ProjectCard
        name="Portfolio Website"
        blurb="This very page, developed to be responsive, animated, and accessible single-page site with smooth scrolling. Uses React, Vite, Tailwind CSS, and Framer Motion. Hosted on Vercel for fast global delivery."
        tags={["React", "Vite", "Vercel", "Tailwind CSS", "Framer Motion"]}
        repo="https://github.com/your-github/portfolio"
        preview="/portfolioWebsiteCodeSnip.png"
        media={[
          {type:"image", src: "/portfolioWebsitePreview.png", alt: "Website Preview" }, 
          {type:"image", src: "/portfolioWebsiteCodeSnip.png", alt: "Website Code Snipit" }, 
          {type:"image", src: "/react.svg", alt: "React logo" }]}
        details={
          <>
          <p>
            This very page, developed to be responsive, animated, and accessible single-page site with smooth scrolling. 
            Uses React, Vite, Tailwind CSS, and Framer Motion. Hosted on Vercel for fast global delivery.
          </p>
            <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
              <li>Fully responsive design</li>
              <li>Accessible navigation and content</li>
              <li>Animated transitions for a modern feel</li>
            </ul>
          </>
        }
      />

      {/* Project: Arduino Project placeholder */}
      <ProjectCard
        name="Arduino Project: Sensor + RFID Automation"
        blurb="Project in progress using Arduino to read RFID tags and sensor data for home automation. Many other projects have been completed using Arduino micro-controllers for various applications."
        tags={["Circuitry", "Arduino", "Programming"]}
        preview="/arduino.JPEG"
        media={[
          {type:"image", src: "/arduino.JPEG", alt: "Website Preview" }, 
          {type:"image", src: "/Arduino_Logo.png", alt: "Website Code Snipit" }]}
        details={
          <>
            <p>
              Project in progress using Arduino to read RFID tags and sensor data for home automation. 
              Many other projects have been completed using Arduino micro-controllers for various applications.
            </p>
            <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
              <li>Circuit Design</li>
              <li>Electrical Component Implementation</li>
              <li>Software Integration</li>
            </ul>
          </>
        }
      />
    </div>
  </Section>
);

export default ProjectsSection;
