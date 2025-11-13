import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import { User2 } from "lucide-react";

const AboutSection: React.FC = () => (
  <Section id="about" title="About Me" icon={<User2 />}>
    <div className="grid md:grid-cols-3 gap-6">
      <Card className="md:col-span-2">
        <p>
          I'm Samuel, a graduating Computer Engineering in Canada, focused on hardware and software devlopment. I enjoy turning
          ideas into reliable, delightful products. My toolkit includes React Native applications, circuit design, VHDL programming,
          embedded systems and digital design.
        </p>
        <p className="mt-3">Outside of that I enjoy squash, cycling, skiing, cooking, and gaming when I can.</p>
      </Card>
      <Card>
        <h4 className="font-semibold mb-2">Skills</h4>
        <ul className="text-sm space-y-1">
          <li>VHDL Code</li>
          <li>C/C++ for Embedded Systems</li>
          <li>Circuit Design</li>
          <li>React Native & .net</li>
          <li>Firebase Auth & Realtime DB</li>
          <li>SQL Databasing & Git/GitHub</li>
          <li>Python, Java, C++, Swift, Assembly</li>
          <li>Digital Design & Microcontrollers</li>
        </ul>
      </Card>
    </div>
  </Section>
);

export default AboutSection;