import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import TimelineItem from "../components/TimelineItem";
import { Briefcase } from "lucide-react";

const ExperienceSection: React.FC = () => (
  <Section id="experience" title="Work Experience" icon={<Briefcase />}>
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <div className="border-l-2 border-white/10 pl-4 space-y-5">
          <TimelineItem
            when="Summer 2023, 2024, 2025"
            title="IT Support Specialist CO-OP"
            place="Skyline Group of Companies"
            bullets={[
              "Provided technical assistance and troubleshooting for hardware/software issues.",
              "Developed Powershell scripts to automate routine tasks and improve efficiency.",
              "Organized a dontion of over 25 laptops, 50 iPhones, and 60 iPads for a local charity.",
            ]}
          />
          <TimelineItem
            when="Summer 2022"
            title="App Developer CO-OP"
            place="Skyjack Inc."
            bullets={[
              "Full Stack Application Developer for internal tools.",
              "Developed .net core applications.",
              "Database management with SQL Server.",
            ]}
          />
        </div>
      </Card>
      <Card>
        <div className="border-l-2 border-white/10 pl-4 space-y-5">
          <TimelineItem
            when="2021 - 2022"
            title="Computer Technician Specialist"
            place="Geek Squad"
            bullets={[
              "Provided technical support, diagnostics and reprairs for tech devices.",
              "Assisted customers with data security, hacked recovery, and lockouts.",
              "Worked very well in the busy fast paced environment of retail tech support.",
            ]}
          />
          <TimelineItem
            when="Summer 2021"
            title="IT Support Specialist CO-OP"
            place="Linamar Corporation"
            bullets={[
              "Provided technical assistance and troubleshooting for hardware/software issues.",
              "Developed Powershell scripts to automate routine tasks and improve efficiency.",
              "Supported the electronic hardware of a pop up COVID-19 vaccination clinic hosted by Linamar.",
            ]}
          />
        </div>
      </Card>
    </div>
  </Section>
);

export default ExperienceSection;