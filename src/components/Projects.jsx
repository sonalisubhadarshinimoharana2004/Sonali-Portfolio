import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { featuredProjects } from "../data/projects";
export default function Projects() {
  return <section id="projects" className="section border-y border-white/[.04] bg-[#0b0f1e]"><div className="container-page">
    <SectionTitle eyebrow="Selected work" title={<>Projects with <span className="gradient-text">purpose</span></>} description="A mix of web applications and AI-focused work. Update the project data file whenever your repositories or demos are ready."/>
    <div className="grid gap-5 lg:grid-cols-2">{featuredProjects.map((project,index)=><ProjectCard key={project.title} project={project} index={index}/>)}</div>
  </div></section>;
}