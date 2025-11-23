/*
 * AboutSection.tsx
 * "About Me" section with bio and skills list
 * Uses Section and Card components to keep layout consistent
 */

import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import { User2 } from "lucide-react";

const AboutSection: React.FC = () => (
  // Wrap section with shared Section layout and icon
  <Section id="about" title="About Me" icon={<User2 />}>
    {/* Two-column layout on medium+ screens: bio + skills */}
    <div className="grid md:grid-cols-3 gap-6">
      {/* Main bio card spanning two columns */}
      <Card className="md:col-span-2">
        <p>
          I'm Samuel, a graduating Computer Engineering student from Canada with a passion for building
          reliable and polished technical solutions. I work across both hardware and software, developing
          embedded systems, digital logic in VHDL, and modern mobile applications with React Native. I enjoy
          turning ideas into functional systems by writing firmware, designing circuits, and creating
          clean, user-friendly interfaces and whatever else is required by the task.
        </p>

        <p className="mt-3">
          Outside of academics, I spend a lot of time working on self-driven engineering projects to strengthen
          my skills and explore new technologies. I like challenging myself through hands-on learning in areas
          such as robotics, real-time control, and full-stack development. When I'm not building something, I am
          usually playing squash, cycling, skiing, cooking, or relaxing with games.
        </p>
      </Card>
      
      {/* Skills card with bullet list */}
      <Card>
        <h4 className="font-semibold mb-2">Skills</h4>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Digital Design & FPGA Development</li>
          <li>Embedded Systems & Real-Time Control</li>
          <li>Circuits & Electronics</li>
          <li>Robotics Programming</li>
          <li>Database & Full Stack Development</li>
          <li>React Native, SQL, & .NET Development</li>
          <li>Python, Java, C, VHDL & more</li>
        </ul>
      </Card>
    </div>
  </Section>
);

export default AboutSection;
