import { Award, BadgeCheck } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { certifications } from "../data/certifications";
const achievements = [
  "Participated in hackathons and technical workshops.",
  "Successfully completed the Microsoft AI/ML Training Program.",
  "Completed five hands-on projects during the CodSoft Data Science Internship.",
  "Active participant in college events and team activities.",
  "Collaborated on team projects with Code Crafters."
];
export default function Certifications() {
  return <section id="certifications" className="section border-y border-white/[.04] bg-[#0b0f1e]"><div className="container-page">
    <SectionTitle eyebrow="Milestones" title={<>Certifications & <span className="gradient-text">achievements</span></>} description="Courses, learning milestones, and activities that support my ongoing development."/>
    <div className="grid gap-8 lg:grid-cols-2"><div><h3 className="mb-4 flex items-center gap-2 text-lg font-bold"><Award className="text-violet-300"/> Certifications & courses</h3><div className="grid gap-3 sm:grid-cols-2">{certifications.map(c=><div key={c} className="glass card-hover flex items-start gap-3 rounded-xl p-4"><span className="rounded-lg bg-violet-400/10 p-2 text-violet-200"><BadgeCheck size={18}/></span><p className="text-sm font-medium leading-6 text-slate-200">{c}</p></div>)}</div><p className="muted mt-3 text-xs">Certificate IDs, dates, and verification links are intentionally omitted unless supplied.</p></div>
      <div><h3 className="mb-4 flex items-center gap-2 text-lg font-bold"><Award className="text-cyan-200"/> Achievements & activities</h3><div className="glass rounded-2xl p-5"><ul className="grid gap-4">{achievements.map(a=><li key={a} className="flex gap-3 text-sm leading-6 text-slate-300"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300"/>{a}</li>)}</ul></div></div>
    </div>
  </div></section>;
}