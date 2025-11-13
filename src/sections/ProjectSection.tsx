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
        repo="https://github.com/your-github/subView"
        details={
          <>
            <p>
              TEST POP UPsubView is a mobile app built with React Native and Expo. It helps users track their subscription costs, supports Firebase authentication, and displays real-time data and charts.
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
        name="Seven-Segment Display Driver"
        blurb="Microcontroller driver for BA56-126WA M3 7-segment display (multiplexing, brightness PWM)."
        tags={["Embedded", "C", "Electronics"]}
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
        name="CUDA/ML Experiments"
        blurb="Notes and scripts from debugging CUDA + PyTorch environments and optimizing DDP training."
        tags={["Python", "PyTorch", "CUDA"]}
        details={
          <>
            <p>
              A collection of scripts and notes from working with CUDA and PyTorch, focused on distributed data parallel (DDP) training and environment setup.
            </p>
            <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
              <li>Debugging CUDA environments</li>
              <li>Optimizing PyTorch DDP training</li>
              <li>Automation scripts for reproducibility</li>
            </ul>
          </>
        }
      />
    </div>
  </Section>
);

export default ProjectsSection;