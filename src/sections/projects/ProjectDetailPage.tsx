import { useParams } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import BackLink from "../../components/BackLink";
import CustomButton from "../../components/CustomButton";
import PageIntro from "../../components/PageIntro";
import TagList from "../../components/TagList";
import ProjectGallery from "../../components/ProjectGallery";
import { getProjectBySlug } from "../../data/projectData/projectData";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  return <article className="site-container detail-page">
    <BackLink to="/projects">All projects</BackLink>
    {!project ? <PageIntro title="Project not found" description="This project is unavailable. Browse all projects to explore more work." /> : <>
      <PageIntro eyebrow={project.latest ? "Latest project" : "Project"} title={project.name} description={project.description ?? project.blurb}
        actions={project.link || project.repo ? <>
          {project.link && <CustomButton href={project.link} target="_blank" rel="noopener noreferrer">Live demo <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></CustomButton>}
          {project.repo && <CustomButton href={project.repo} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" aria-hidden="true" />Source code</CustomButton>}
        </> : undefined}>
        <p className="meta-line text-sm">{project.completed}</p>
        <TagList tags={project.tags} />
      </PageIntro>
      <ProjectGallery key={project.slug} project={project} />
      {project.bullets?.length || project.sections?.length ? <div className="project-story">
        {project.bullets?.length ? <section className="project-story__section" aria-labelledby="project-highlights">
          <h2 id="project-highlights" className="section-title">Key highlights</h2>
          <ul className="prose-copy reading-copy list-disc space-y-3 pl-5">{project.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
        </section> : null}
        {project.sections?.map((section, index) => <section key={section.title} className="project-story__section" aria-labelledby={`story-${index}`}>
          <div><p className="page-intro__eyebrow mb-3">{String(index + 1).padStart(2, "0")}</p><h2 id={`story-${index}`} className="section-title">{section.title}</h2></div>
          <div className="reading-copy">
            <div className="space-y-4">{section.paragraphs.map(paragraph => <p key={paragraph} className="prose-copy">{paragraph}</p>)}</div>
            {section.steps?.length ? <ol className="project-progress">{section.steps.map((step, i) => <li key={step}><span className="project-progress__number" aria-hidden="true">{i + 1}</span><span>{step}</span></li>)}</ol> : null}
          </div>
        </section>)}
      </div> : null}
    </>}
  </article>;
}
