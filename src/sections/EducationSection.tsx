import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import { GraduationCap } from "lucide-react";

const EducationSection: React.FC = () => (
  <Section id="education" title="Education" icon={<GraduationCap />}>
    {/* Two-column education cards */}
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <h3 className="font-semibold mb-1">B.Eng. (Computer Engineering)</h3>
        <div className="text-sm text-blue-200/80">University of Guelph</div>
        <ul className="list-disc ml-5 mt-3 space-y-1 text-sm">
          <li>Skills: Circuit Design, Software Programming, Data Structures, & FPGAs</li>
          <li>Capstone: Motorized Hand Rehabilitation Device & Mobile Application (Coming Winter 26)</li>
        </ul>
      </Card>

      <Card>
        <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
          {/* LEFT SIDE: title + list */}
          <div className="flex-1">
            <h4 className="font-semibold mb-3">Highlights</h4>

            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Capstone Engineering Project</li>
              <li>Captain of Varsity Squash Team</li>
              <li>Dean&apos;s List 2025</li>
            </ul>
          </div>

          {/* RIGHT SIDE: image centered vertically */}
          <div className="w-full lg:w-[250px] flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden border border-blue-500/30 bg-blue-900/40">
              <img
                src="/UofGLogo.png"
                alt="University of Guelph Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>

    <div className="mt-6">
      <Card>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Text side */}
          <div className="flex-1">
            <h4 className="font-semibold mb-2">Key Skills</h4>
            <p className="text-sm text-blue-100/80 leading-relaxed">
              <ul className="list-disc ml-5 space-y-1 text-sm">
                <li><strong>Digital Design & FPGA Development</strong> - Designed hardware systems in VHDL/Vivado with custom IP blocks, test simulation, and FPGA deployment on Nexys boards.</li>
                <li><strong>Embedded Systems & Real-Time Control</strong> - Built reliable real-time applications on STM32 using interrupts, timers, RTOS scheduling, and hardware-level debugging.</li>
                <li><strong>Robotics Programming (KUKA & Fanuc)</strong> - Programmed industrial robotic arms using focusing on motion control, cell automation, and safety integration.</li>
                <li><strong>Software Design & Data Structures</strong> - Implemented algorithms and full-stack applications using C, C++, Python, JavaScript/TypeScript, and efficient data handling.</li>
                <li><strong>Circuits & Electronics</strong> - Analyzed and designed analog/digital circuits including op-amps, filters, transistor stages, and mixed-signal interfaces.</li>
                <li><strong>Engineering Economics & Optimization</strong> - Applied engineering decision models, cost analysis, and optimization methods to evaluate trade-offs in system design.</li>
              </ul>
            </p>
          </div>
        </div>
      </Card>
    </div>
  </Section>
);

export default EducationSection;
