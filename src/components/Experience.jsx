import { BriefcaseBusiness, CalendarDays, ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { internshipProjects } from "../data/projects";
export default function Experience() {
  return <section id="experience" className="section"><div className="container-page">
    <SectionTitle eyebrow="Experience" title={<>Learning by <span className="gradient-text">building</span></>} description="Hands-on internship experience and practical project work."/>
    <div className="relative border-l border-violet-300/25 pl-6 sm:pl-8"><div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-[#080b16] bg-violet-300"/>
      <article className="glass rounded-3xl p-6 sm:p-8"><div className="flex flex-wrap items-start justify-between gap-4"><div><div className="mb-2 inline-flex items-center gap-2 text-sm text-cyan-200"><BriefcaseBusiness size={16}/> Virtual Internship</div><h3 className="text-2xl font-bold">Data Science Intern <span className="text-violet-300">@ CodSoft</span></h3><p className="muted mt-2 flex items-center gap-2 text-sm"><CalendarDays size={15}/> 15 June 2026 – 15 July 2026</p></div><span className="rounded-full border border-emerald-300/20 bg-emerald-300/[.07] px-3 py-1 text-xs font-semibold text-emerald-200">Completed</span></div>
        <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-300 sm:grid-cols-2">{["Performed data preprocessing and exploratory analysis on datasets.","Built and evaluated machine-learning models for predictive analytics.","Created visualizations to communicate data insights and model behavior."].map(x=><li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300"/>{x}</li>)}</ul>
        <div className="mt-8 border-t border-white/10 pt-6"><h4 className="mb-4 text-lg font-bold">Internship projects</h4><div className="grid gap-3 md:grid-cols-2">{internshipProjects.map((p,i)=><div key={p.title} className="rounded-xl border border-white/[.07] bg-black/10 p-4"><div className="flex items-start gap-3"><span className="text-xs font-bold text-violet-300">0{i+1}</span><div><h5 className="font-semibold">{p.title}</h5><p className="muted mt-2 text-sm leading-6">{p.description}</p></div></div></div>)}</div></div>
      </article>
    </div>
  </div></section>;
}