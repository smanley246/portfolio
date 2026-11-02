import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projectDetailPath, type Project } from "../data/projectData/projectData";
import Card from "./Card";
import CustomButton from "./CustomButton";
import TagList from "./TagList";

type Props = { project: Project; variant?: "grid" | "featured" | "banner"; headingLevel?: 2 | 3 };

export default function ProjectCard({ project, variant = "grid", headingLevel = 3 }: Props) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const path = projectDetailPath(project.slug);
  if (variant === "banner") return (
    <Link to={path} className="project-banner" aria-label={`View project: ${project.name}`}>
      {(project.logo || project.preview) && <img src={project.logo || project.preview} alt="" className="project-banner__image" loading="lazy" width={64} height={64} />}
      <div className="min-w-0 flex-1">
        <p className="page-intro__eyebrow">{project.latest ? "Latest project" : project.completed}</p>
        <Heading className="card-title mt-2">{project.name}</Heading>
        <p className="prose-copy mt-2 text-sm">{project.blurb}</p>
      </div>
      <ArrowUpRight className="h-5 w-5 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
    </Link>
  );
  return <Card className={`project-card project-card--${variant}`}>
    <div className="project-card__layout">
      {project.preview && <Link to={path} className="interactive-media project-card__media" aria-label={`View project: ${project.name}`}>
        <img src={project.preview} alt={`${project.name} preview`} className="interactive-media__asset" loading="lazy" />
      </Link>}
      <div className="project-card__body">
        <p className="meta-line text-sm">{project.latest ? `Latest project · ${project.completed}` : project.completed}</p>
        <Heading className="card-title"><Link to={path}>{project.name}</Link></Heading>
        <p className="prose-copy text-sm">{project.blurb}</p>
        <TagList tags={project.tags} />
        <div className="project-card__actions"><CustomButton to={path}>View project <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></CustomButton></div>
      </div>
    </div>
  </Card>;
}
