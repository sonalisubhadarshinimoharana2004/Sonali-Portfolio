import SectionTitle from "./SectionTitle";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-page">
        <SectionTitle title="Education" />

        <div className="relative ml-3 space-y-6 border-l-2 border-sky-400/40 pl-8 sm:pl-12">
          {education.map((item) => (
            <article key={item.degree} className="relative">
              <span className="absolute -left-[41px] top-8 h-4 w-4 rounded-full bg-sky-300 ring-4 ring-sky-300/20 sm:-left-[57px]" />

              <div className="glass rounded-2xl border border-sky-300/10 bg-gradient-to-br from-sky-500/[.08] to-transparent p-6 sm:p-7">
                <p className="text-sm font-semibold text-sky-300">
                  {item.duration}{item.status && ` · ${item.status}`}
                </p>
                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">{item.degree}</h3>
                <p className="mt-2 text-slate-200">{item.institution}</p>
                <p className="muted mt-1 text-sm">{item.affiliation}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}