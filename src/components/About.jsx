import { GraduationCap, Code2, BrainCircuit, MapPin, Target } from "lucide-react";
import SectionTitle from "./SectionTitle";
const facts = [
  { label: "Current Degree", value: "MCA · 2025–2027", Icon: GraduationCap },
  { label: "Primary Focus", value: "Full-Stack Development", Icon: Code2 },
  { label: "Additional Interests", value: "AI, ML & Data Science", Icon: BrainCircuit },
  { label: "Location", value: "Khordha, Odisha, India", Icon: MapPin }
];
export default function About() {
  return <section id="about" className="section"><div className="container-page">
    <SectionTitle eyebrow="A little about me" title={<>Curious mind. <span className="gradient-text">Builder's mindset.</span></>} description="I enjoy turning ideas into practical, accessible digital experiences while continuously learning new technologies."/>
    <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
      <div className="glass rounded-3xl p-7 sm:p-9"><p className="leading-8 text-slate-300">I’m Sonali Subhadarshini Moharana, a Full-Stack Developer and MCA student at Gandhi Institute of Technology and Management, Bhubaneswar. I enjoy building responsive web applications and exploring how AI and Machine Learning can solve real-world problems. Through academic projects, internships, and collaborative development, I’m continuously strengthening my technical skills and preparing to contribute to innovative software solutions.</p>
        <div className="mt-7 flex gap-3 rounded-2xl border border-violet-300/15 bg-violet-400/[.06] p-4"><Target className="mt-1 shrink-0 text-violet-300" size={22}/><div><h3 className="font-semibold">Career objective</h3><p className="muted mt-1 text-sm leading-6">To contribute to meaningful software products, grow as a full-stack engineer, and explore responsible AI-powered solutions with a collaborative team.</p></div></div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">{facts.map(({label,value,Icon})=><div key={label} className="glass card-hover rounded-2xl p-5"><div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200"><Icon size={20}/></div><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p><p className="mt-2 font-semibold leading-6 text-slate-100">{value}</p></div>)}</div>
    </div>
  </div></section>;
}