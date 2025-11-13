import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import { GraduationCap } from "lucide-react";

const EducationSection: React.FC = () => (
  <Section id="education" title="Education" icon={<GraduationCap />}>
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <h3 className="font-semibold mb-1">B.Eng. (Computer Engineering)</h3>
        <div className="text-sm text-blue-200/80">University of Guelph</div>
        <ul className="list-disc ml-5 mt-3 space-y-1 text-sm">
          <li>Relevant: Circuit Design, Digital Systems, Data Structures, Software</li>
          <li>Capstone: Motorized Hand Rehabilitation Device & App</li>
        </ul>
      </Card>
      <Card>
        <h4 className="font-semibold mb-2">Highlights</h4>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>Captain of Varsity Squash Team for University of Guelph</li>
          <li>Dean's List 2025</li>
          <li>Dean's List 2026</li>
        </ul>
      </Card>
    </div>
  </Section>
);

export default EducationSection;