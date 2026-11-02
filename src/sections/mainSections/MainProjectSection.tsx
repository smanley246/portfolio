import Section from "../../components/Section";
import ProjectCard from "../../components/ProjectCard";
import { FolderGit2 } from "lucide-react";
import { projects } from "../../data/mainSummaryData/projectsData";

export default function MainProjectsSection() {
  return <Section id="projects" title="Projects" icon={<FolderGit2 />}>
    <div className="project-grid">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div>
  </Section>;
}
