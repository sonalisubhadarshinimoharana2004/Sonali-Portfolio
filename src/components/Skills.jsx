import { Code2, PanelsTopLeft, Database, BrainCircuit, Wrench, BriefcaseBusiness } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { skillGroups, softSkills, languages, interests } from "../data/skills";
const icons = { Code2, PanelsTopLeft, Database, BrainCircuit, Wrench, BriefcaseBusiness };
function Tag({children}) { return <span className="rounded-lg border border-white/[.09] bg-white/[.035] px-3 py-2 text-sm text-slate-300 transition hover:border-violet-300/30 hover:text-white">{children}</span>; }
export default function Skills() {
  return <section id="skills" className="section border-y border-white/[.04] bg-[#0b0f1e]"><div className="container-page">
    <SectionTitle eyebrow="What I work with" title={<>My technical <span className="gradient-text">toolkit</span></>} description="A growing set of languages, frameworks, and tools I use while learning and building projects."/>
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{skillGroups.map(group=>{const Icon=icons[group.icon]; return <article key={group.title} className="glass card-hover rounded-2xl p-6"><div className="mb-5 flex items-center gap-3"><span className="rounded-xl bg-violet-400/10 p-2.5 text-violet-200"><Icon size={21}/></span><h3 className="font-bold">{group.title}</h3></div><div className="flex flex-wrap gap-2">{group.skills.map(skill=><Tag key={skill}>{skill}</Tag>)}</div></article>})}</div>
    <div className="mt-10 grid gap-7 lg:grid-cols-3"><div><h3 className="mb-4 font-bold">Soft skills</h3><div className="flex flex-wrap gap-2">{softSkills.map(x=><Tag key={x}>{x}</Tag>)}</div></div><div><h3 className="mb-4 font-bold">Languages</h3><div className="flex flex-wrap gap-2">{languages.map(x=><Tag key={x}>{x}</Tag>)}</div></div><div><h3 className="mb-4 font-bold">Interests</h3><div className="flex flex-wrap gap-2">{interests.map(x=><Tag key={x}>{x}</Tag>)}</div></div></div>
  </div></section>;
}