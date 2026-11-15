import { BriefcaseBusiness, Download } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { internshipProjects } from "../data/projects";

// Certificate file placed in /public. Empty = shows "Completed" badge instead.
const certificateLink = "/codsoft-certificate.jpg";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-page">
        <SectionTitle title="Experience" />

        <div className="glass card-hover flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-sky-300/10 bg-gradient-to-r from-indigo-500/10 to-transparent p-5 sm:px-8 sm:py-6">
          <div className="flex items-center gap-4">
            <BriefcaseBusiness size={30} className="shrink-0 text-sky-300" />
            <div>
              <h3 className="text-base font-bold text-white sm:text-lg">Data Science Intern: CodSoft</h3>
              <p className="muted mt-1 text-sm">Virtual Internship · 15 June 2026 – 15 July 2026</p>
            </div>
          </div>

          {certificateLink ? (
            <a href={certificateLink} download className="btn-primary !px-5 !py-2.5 text-sm">
              <Download size={15} /> Download Certificate
            </a>
          ) : (
            <span className="rounded-full border border-emerald-300/20 bg-emerald-300/[.07] px-4 py-1.5 text-sm font-semibold text-emerald-200">
              Completed
            </span>
          )}
        </div>

        <h3 className="mb-4 mt-12 text-xl font-bold text-sky-200 sm:text-2xl">Internship Projects</h3>
        <div className="flex flex-wrap gap-3">
          {internshipProjects.map((p) => (
            <span
              key={p.title}
              className="rounded-full border border-indigo-300/20 bg-indigo-500/20 px-5 py-2.5 text-sm font-semibold text-indigo-100 sm:text-base"
            >
              {p.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}