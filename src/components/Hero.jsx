import { useState } from "react";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Code2, BrainCircuit, Sparkles } from "lucide-react";
const social = [
  { label: "LinkedIn", href: "https://linkedin.com/in/sonali-subhadarshini-moharana", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/sonalisubhadarshinimoharana2004", Icon: Github }
];
export default function Hero() {
  const [photoLoaded, setPhotoLoaded] = useState(true);
  return <section id="home" className="relative flex min-h-[95vh] items-center overflow-hidden pt-24">
    <div className="grid-pattern absolute inset-0" aria-hidden="true"/>
    <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-violet-700/20 blur-[110px]" aria-hidden="true"/>
    <div className="absolute right-0 top-36 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" aria-hidden="true"/>
    <div className="container-page relative grid items-center gap-14 py-16 lg:grid-cols-[1.25fr_.75fr]">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-200"><Sparkles size={15}/> Open to learning and opportunities</div>
        <p className="mb-3 text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Hello, I'm</p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-.05em] sm:text-5xl xl:text-6xl">SONALI SUBHADARSHINI <span className="gradient-text">MOHARANA</span></h1>
        <h2 className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">Full-Stack Developer <span className="text-violet-300">|</span> <span className="text-cyan-200">AI/ML Enthusiast</span></h2>
        <p className="muted mt-6 max-w-2xl text-base leading-8">I turn creative ideas into functional digital solutions by blending innovative web development with the power of AI and Machine Learning. Currently pursuing my MCA, I’m passionate about crafting seamless user experiences and building technology that makes a difference.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn-primary" href="#projects">View My Projects <ArrowDown size={17}/></a>
          <a className="btn-secondary" href="/resume.pdf" download>Download Resume <Download size={16}/></a>
          <a className="btn-secondary" href="#contact">Contact Me <ArrowUpRight size={16}/></a>
        </div>
        <div className="mt-8 flex items-center gap-3">
          {social.map(({label,href,Icon}) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="rounded-full border border-white/10 bg-white/[.04] p-3 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"><Icon size={19}/></a>)}
          <span className="ml-2 h-px w-12 bg-white/15"/>
          <span className="text-xs text-slate-500">Khordha, Odisha, India</span>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">{["React", "Tailwind CSS", "Python", "Machine Learning"].map((tech,i)=><span key={tech} className="rounded-full border border-white/10 bg-white/[.035] px-3 py-1.5 text-xs text-slate-300">{i===3 ? <BrainCircuit className="mr-1 inline" size={13}/> : <Code2 className="mr-1 inline" size={13}/>} {tech}</span>)}</div>
      </div>
      <div className="relative mx-auto w-full max-w-[360px]">
        <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-violet-500/30 via-indigo-500/10 to-cyan-400/25 blur-2xl" aria-hidden="true"/>
        <div className="glass relative rounded-[2rem] p-4">
          <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#211b45] via-[#121a35] to-[#0c2635]">
            {photoLoaded ? <img src="/sonali.jpg" alt="Sonali Subhadarshini Moharana" className="h-full w-full object-cover" onError={() => setPhotoLoaded(false)} /> : <div className="flex h-full min-h-[330px] flex-col items-center justify-center px-6 text-center" aria-label="Photo placeholder">
              <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-violet-300/40 bg-violet-400/10 text-3xl font-bold text-violet-200">SM</div>
              <p className="font-semibold text-white">Your portrait goes here</p>
              <p className="mt-2 max-w-[220px] text-sm leading-6 text-slate-400">Add your photo as <code className="text-cyan-200">public/sonali.jpg</code></p>
            </div>}
          </div>
          <div className="absolute -bottom-5 -left-6 rounded-2xl border border-white/10 bg-[#11162a] px-4 py-3 shadow-xl"><p className="text-xs text-slate-400">Currently exploring</p><p className="mt-1 text-sm font-semibold text-cyan-200">AI + Web Experiences</p></div>
          <div className="absolute -right-4 top-10 rounded-2xl border border-white/10 bg-[#11162a] p-3 shadow-xl"><BrainCircuit className="text-violet-300" size={24}/></div>
        </div>
      </div>
    </div>
  </section>;
}