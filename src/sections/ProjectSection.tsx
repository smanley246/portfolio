import React from "react";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { FolderGit2 } from "lucide-react";

const ProjectsSection: React.FC = () => (
  <Section id="projects" title="Projects" icon={<FolderGit2 />}>
    <div className="grid md:grid-cols-2 gap-6">
      <ProjectCard
        name="subView – Subscription Tracker"
        blurb="React Native + Expo app to track subscription costs with Firebase auth, realtime data, and charts."
        tags={["React Native", "Expo Router", "Firebase", "TypeScript"]}
        preview="/subViewLogo.png"
        media={[
          {type:"image", src: "/IMG_1263.PNG", alt: "Image of App" }, 
          {type:"image", src: "/IMG_1264.PNG", alt: "Image of App" }, 
          {type:"image", src: "/IMG_1265.PNG", alt: "Image of App" }, 
          {type:"image", src: "/IMG_1266.PNG", alt: "Image of App" }, 
          {type:"image", src: "/IMG_1267.PNG", alt: "Image of App" }, 
          {type:"image", src: "/IMG_1271.PNG", alt: "Image of App" }, 
          {type:"image", src: "/IMG_1272.PNG", alt: "Image of App" }, 
          {type:"image", src: "/IMG_1273.PNG", alt: "Image of App" }]}
        repo="https://github.com/your-github/subView"
        details={
          <>
            <p>
              subView is a mobile app built with React Native and Expo. It helps users track their subscription costs, supports Firebase authentication, and displays real-time data and charts.
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
      <ProjectCard
        name="Real Time µC/OS-III PID Controller"
        blurb="Microcontroller driver for BA56-126WA M3 7-segment display (multiplexing, brightness PWM)."
        tags={["Embedded", "C", "Electronics"]}
        preview="/hotAirPlantPreview.JPEG"
        media={[
          {type:"image", src: "/hotAirPlantPreview.JPEG", alt: "7-segment display showing temperature reading" }, 
          {type:"image", src: "/hotAirPlantManual.png", alt: "Schematic of the PID controller circuit" }, 
          {type:"image", src: "/hotAirPlantAuto.png", alt: "PCB layout for the PID controller" }]}
        details={
          <>
            <p>
              A custom driver for the BA56-126WA M3 7-segment display, supporting multiplexing and PWM-based brightness control. Designed for microcontroller projects and electronics prototyping.
            </p>
            <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
              <li>Efficient multiplexing for multiple digits</li>
              <li>PWM for adjustable brightness</li>
              <li>Written in C for portability</li>
            </ul>
          </>
        }
      />
      <ProjectCard
        name="Portfolio Website"
        blurb="This very page—responsive, animated, and accessible single-page site with smooth scrolling."
        tags={["React", "Tailwind", "Framer Motion"]}
        repo="https://github.com/your-github/portfolio"
        preview="/react.svg"
        media={[{type:"image", src: "/portfolioWebsitePreview.png", alt: "React logo" }, {type:"image", src: "/react.svg", alt: "React logo" }]}
        details={
          <>
            <p>
              My personal portfolio site, built with React and Tailwind CSS. Features smooth scrolling, accessibility, and animated transitions using Framer Motion.
            </p>
            <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
              <li>Fully responsive design</li>
              <li>Accessible navigation and content</li>
              <li>Animated transitions for a modern feel</li>
            </ul>
          </>
        }
      />
      <ProjectCard
        name="Current Arduino Project. Sensor + RFID Home Automation"
        blurb="Project in progress using Arduino to read RFID tags and sensor data for home automation."
        tags={["Circuitry", "Arduino", "Programming"]}
        preview="/arduino.JPEG"
        details={
          <>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra, enim et pharetra congue, nulla dolor fringilla sem, ut ullamcorper nibh tortor id elit. Curabitur vehicula pharetra augue, sed pretium quam interdum sit amet. Curabitur dapibus vitae nisi lacinia luctus. Morbi vel dapibus erat, nec ornare nisi. Nullam eu imperdiet risus, pretium porta odio. Curabitur scelerisque varius nibh, sed lobortis velit sagittis sit amet. Aenean dapibus nisi id dolor tempus, ac tristique libero fermentum.
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