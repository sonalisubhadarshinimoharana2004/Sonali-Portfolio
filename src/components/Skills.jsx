import {
  Code2, PanelsTopLeft, Server, Database, BrainCircuit, Wrench, BriefcaseBusiness,
  MessageCircle, Users, Puzzle, Crown, RefreshCw, Clock, Lightbulb,
  Languages as LanguagesIcon, BookOpen, Trophy, Palette, GraduationCap, Plane, Sparkles,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import { skillGroups, softSkills, languages, interests } from "../data/skills";

const icons = { Code2, PanelsTopLeft, Server, Database, BrainCircuit, Wrench, BriefcaseBusiness };

const extraIcons = {
  "Communication": MessageCircle,
  "Teamwork": Users,
  "Problem Solving": Puzzle,
  "Leadership": Crown,
  "Adaptability": RefreshCw,
  "Time Management": Clock,
  "Critical Thinking": Lightbulb,
  "English": LanguagesIcon,
  "Hindi": LanguagesIcon,
  "Odia": LanguagesIcon,
  "Reading books": BookOpen,
  "Badminton": Trophy,
  "Drawing": Palette,
  "Learning new skills": GraduationCap,
  "Traveling": Plane,
};

function IconTag({ label }) {
  const Icon = extraIcons[label] || Sparkles;
  return (
    <span
      title={label}
      aria-label={label}
      className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[.09] bg-white/[.04] shadow-lg transition duration-300 hover:-translate-y-1.5 hover:border-violet-300/40 hover:bg-white/[.08]"
    >
      <Icon size={30} className="text-violet-300 transition duration-300 group-hover:scale-110" />
    </span>
  );
}

function SkillTag({ skill }) {
  const Icon = skill.icon;
  return (
    <span
      title={skill.name}
      aria-label={skill.name}
      className="group flex h-20 w-20 items-center justify-center rounded-2xl border border-white/[.09] bg-white/[.04] shadow-lg transition duration-300 hover:-translate-y-1.5 hover:border-violet-300/40 hover:bg-white/[.08]"
    >
      <Icon size={42} style={{ color: skill.color }} className="transition duration-300 group-hover:scale-110" />
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section border-y border-white/[.04] bg-[#0b0f1e]">
      <div className="container-page">
        <SectionTitle
          eyebrow="What I work with"
          title={<>My technical <span className="gradient-text">toolkit</span></>}
          description="A growing set of languages, frameworks, and tools I use while learning and building projects."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = icons[group.icon];
            return (
              <article key={group.title} className="glass card-hover rounded-2xl p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-xl bg-violet-400/10 p-2.5 text-violet-200">
                    <Icon size={21} />
                  </span>
                  <h3 className="font-bold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <SkillTag key={group.title + skill.name} skill={skill} />
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 font-bold">Soft skills</h3>
            <div className="flex flex-wrap gap-2">{softSkills.map((x) => <IconTag key={x} label={x} />)}</div>
          </div>
          <div>
            <h3 className="mb-4 font-bold">Languages</h3>
            <div className="flex flex-wrap gap-2">{languages.map((x) => <IconTag key={x} label={x} />)}</div>
          </div>
          <div>
            <h3 className="mb-4 font-bold">Interests</h3>
            <div className="flex flex-wrap gap-2">{interests.map((x) => <IconTag key={x} label={x} />)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}