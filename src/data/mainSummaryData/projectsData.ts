import { getProjectBySlug, type Project } from "../projectData/projectData";

export const homepageProjectSlugs = [
  "engineering-capstone-project",
  "subscription-tracker-app-subview",
  "real-time-os-iii-pid-controller",
  "portfolio-website",
] as const;

export const projects: Project[] = homepageProjectSlugs.map(slug => {
  const project = getProjectBySlug(slug);
  if (!project) throw new Error(`Unknown homepage project: ${slug}`);
  return project;
});
