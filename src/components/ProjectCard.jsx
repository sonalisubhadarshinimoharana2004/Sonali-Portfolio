import { Github, ExternalLink } from "lucide-react";

const gradients = [
  "from-violet-500/25 via-indigo-500/10 to-cyan-500/10",
  "from-cyan-500/20 via-blue-500/10 to-violet-500/20",
  "from-fuchsia-500/20 via-violet-500/10 to-blue-500/10",
  "from-blue-500/20 via-cyan-500/10 to-indigo-500/10",
];

export default function ProjectCard({ project, index = 0 }) {
  return (
    <article className="glass card-hover flex h-full flex-col overflow-hidden rounded-3xl">
      {project.image ? (
        <div className="relative aspect-video overflow-hidden bg-[#0b1022]">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1022]/80 via-transparent to-transparent" />
          <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-[#0b1022]/70 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            {project.category}
          </span>
          <span className="absolute bottom-3 right-5 text-4xl font-extrabold text-white/30">0{index + 1}</span>
        </div>
      ) : (
        <div className={`relative flex h-36 items-end justify-between overflow-hidden bg-gradient-to-br ${gradients[index % 4]} p-6`}>
          <div className="absolute -right-3 -top-12 h-40 w-40 rounded-full border border-white/10" />
          <div className="absolute right-8 top-6 h-24 w-24 rounded-full border border-white/10" />
          <span className="relative rounded-full border border-white/10 bg-[#0b1022]/65 px-3 py-1 text-xs text-slate-200 backdrop-blur">{project.category}</span>
          <span className="relative text-4xl font-extrabold text-white/20">0{index + 1}</span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">{project.team}</p>
        <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
        <p className="mt-1 text-sm text-violet-200">{project.subtitle}</p>
        <p className="muted mt-4 text-sm leading-6">{project.description}</p>

        <ul className="mt-4 grid gap-2">
          {project.features.slice(0, 4).map((f) => (
            <li key={f} className="flex gap-2 text-sm text-slate-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-md bg-white/[.055] px-2.5 py-1 text-xs text-slate-400">{t}</span>
          ))}
        </div>

        {(project.github || project.demo) && (
          <div className="mt-auto flex flex-wrap gap-3 border-t border-white/[.07] pt-5">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary !rounded-xl !px-3 !py-2 text-sm">
                <Github size={15} /> Source code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary !rounded-xl !px-3 !py-2 text-sm">
                Live demo <ExternalLink size={15} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}