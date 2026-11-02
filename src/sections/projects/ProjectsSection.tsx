import ProjectCard from "../../components/ProjectCard";
import SectionHeading from "../../components/SectionHeading";
import { otherProjects } from "../../data/projectData/projectData";

export default function ProjectsSection() {
  return <section aria-labelledby="more-projects-title" className="page-section">
    <SectionHeading id="more-projects-title" title="More projects" />
    <div className="project-grid">{otherProjects.map(project => <ProjectCard key={project.slug} project={project} />)}</div>
  </section>;
}
