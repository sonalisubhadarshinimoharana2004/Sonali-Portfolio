import { useCallback, useEffect, useRef, useState } from "react";
import { Flame, RefreshCw, ArrowUpRight, Github, ExternalLink } from "lucide-react";

const USER = "sonalisubhadarshinimoharana2004";
const API = `https://github-contributions-api.jogruber.de/v4/${USER}?y=last`;
const LEARN = "https://docs.github.com/articles/viewing-contributions-on-your-profile";
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const LEVELS = ["bg-white/[.07]", "bg-sky-400/25", "bg-sky-400/45", "bg-sky-400/70", "bg-sky-300"];

const fmt = (d) =>
  new Date(d + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" });

function getStreaks(days) {
  let longest = { len: 0, start: null, end: null };
  let run = { len: 0, start: null };
  for (const d of days) {
    if (d.count > 0) {
      if (!run.len) run.start = d.date;
      run.len += 1;
      if (run.len > longest.len) longest = { len: run.len, start: run.start, end: d.date };
    } else {
      run = { len: 0, start: null };
    }
  }
  let i = days.length - 1;
  if (i >= 0 && days[i].count === 0) i -= 1;
  const cur = { len: 0, start: null, end: null };
  while (i >= 0 && days[i].count > 0) {
    if (!cur.len) cur.end = days[i].date;
    cur.len += 1;
    cur.start = days[i].date;
    i -= 1;
  }
  return { longest, cur };
}

function Heatmap({ days }) {
  const scroller = useRef(null);
  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, [days.length]);

  const max = Math.max(1, ...days.map((d) => d.count));
  const levelOf = (d) =>
    d.level ?? (d.count === 0 ? 0 : Math.min(4, Math.ceil((d.count / max) * 4)));

  const weeks = [];
  let week = [];
  const startDow = new Date(days[0].date + "T00:00:00").getDay();
  for (let i = 0; i < startDow; i++) week.push(null);
  days.forEach((d) => {
    week.push(d);
    if (week.length === 7) { weeks.push(week); week = []; }
  });
  if (week.length) weeks.push(week);

  let lastMonth = -1;
  return (
    <div ref={scroller} className="overflow-x-auto pb-2">
      <div className="inline-flex gap-[3px]">
        <div className="mr-1 flex flex-col gap-[3px]">
          <span className="h-4" />
          {["", "Mon", "", "Wed", "", "Fri", ""].map((l, i) => (
            <span key={i} className="h-3.5 text-[10px] leading-[14px] text-slate-400">{l}</span>
          ))}
        </div>

        {weeks.map((w, wi) => {
          const first = w.find(Boolean);
          const m = new Date(first.date + "T00:00:00").getMonth();
          const label = m !== lastMonth ? MONTHS[m] : "";
          lastMonth = m;
          return (
            <div key={wi} className="flex flex-col gap-[3px]">
              <span className="relative block h-4 w-3.5">
                <span className="absolute left-0 top-0 whitespace-nowrap text-[10px] leading-4 text-slate-400">{label}</span>
              </span>
              {w.map((d, di) =>
                d ? (
                  <div
                    key={d.date}
                    title={`${d.count} contributions on ${fmt(d.date)}`}
                    className={`h-3.5 w-3.5 rounded-[3px] transition hover:scale-125 hover:ring-1 hover:ring-sky-200 ${LEVELS[levelOf(d)]}`}
                  />
                ) : (
                  <div key={"e" + di} className="h-3.5 w-3.5" />
                )
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function GitHubActivity() {
  const [contrib, setContrib] = useState(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  const load = useCallback(() => {
    setLoading(true);
    fetch(API)
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json();
      })
      .then((data) => { setContrib(data); setFailed(false); })
      .catch(() => setFailed(true))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { load(); }, [load]);

  const today = new Date().toISOString().slice(0, 10);
  const days = (contrib?.contributions || [])
    .filter((d) => d.date <= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  const total = days.reduce((s, d) => s + d.count, 0);
  const { longest, cur } = getStreaks(days);
  const hasData = days.length > 0;

  return (
    <section id="github" className="section">
      <div className="container-page">
        {/* HEADING */}
        <div className="relative mb-12 text-center">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-6xl font-black tracking-[10px] text-white/[.04] sm:text-8xl"
          >
            GITHUB
          </span>
          <h2 className="relative text-2xl font-bold tracking-[2px] text-white sm:text-4xl">
            <span className="text-sky-300">—</span> GITHUB ACTIVITY <span className="text-violet-300">—</span>
          </h2>
        </div>

        {/* CONTRIBUTION CALENDAR */}
        <div className="glass rounded-2xl p-5 transition hover:border-sky-300/30 sm:p-7">
          <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                {hasData ? `${total} contributions in the last year` : "Contributions in the last year"}
              </h3>
              <p className="muted mt-1 text-sm">@{USER}</p>
            </div>
            <button
              type="button"
              onClick={load}
              disabled={loading}
              className="btn-secondary !rounded-xl !px-3 !py-2 text-sm disabled:opacity-60"
            >
              <RefreshCw size={15} className={loading ? "animate-spin" : ""} /> Refresh
            </button>
          </div>

          {hasData && <Heatmap days={days} />}
          {!hasData && loading && <p className="muted py-10 text-center">Loading contributions...</p>}
          {!hasData && !loading && failed && (
            <p className="py-10 text-center text-slate-300">
              GitHub data could not be loaded right now. Press Refresh to try again.
            </p>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <a href={LEARN} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-sky-300">
              Learn how contributions work <ArrowUpRight size={14} />
            </a>
            <div className="flex items-center gap-1.5">
              Less
              {LEVELS.map((c) => <span key={c} className={`h-3 w-3 rounded-[3px] ${c}`} />)}
              More
            </div>
          </div>
        </div>

        {/* GITHUB STATS */}
        <div className="mb-6 mt-14 text-center">
          <h3 className="text-xl font-extrabold tracking-[2px] sm:text-2xl">
            <span className="text-sky-300">GITHUB</span> <span className="text-violet-300">STATS</span>
          </h3>
          <div className="mx-auto mt-2 h-[2px] w-12 rounded-full bg-gradient-to-r from-sky-300 to-violet-300" />
        </div>

        {hasData && (
          <div className="glass mx-auto grid max-w-3xl rounded-2xl p-6 transition hover:-translate-y-1 hover:border-sky-300/30 sm:grid-cols-3 sm:divide-x sm:divide-white/10">
            <div className="px-4 py-5 text-center">
              <p className="text-4xl font-extrabold text-sky-300">{total}</p>
              <p className="mt-2 text-slate-300">Total Contributions</p>
              <p className="muted mt-1 text-sm">{fmt(days[0].date)} – Present</p>
            </div>

            <div className="px-4 py-5 text-center">
              <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-sky-300/70">
                <Flame size={22} className="absolute -top-3.5 rounded-full bg-[#0b0f1e] px-0.5 text-sky-300" />
                <span className="text-4xl font-extrabold text-violet-300">{cur.len}</span>
              </div>
              <p className="mt-3 text-slate-300">Current Streak</p>
              {cur.len > 0 && (
                <p className="muted mt-1 text-sm">{fmt(cur.start)} – {fmt(cur.end)}</p>
              )}
            </div>

            <div className="px-4 py-5 text-center">
              <p className="text-4xl font-extrabold text-sky-300">{longest.len}</p>
              <p className="mt-2 text-slate-300">Longest Streak</p>
              {longest.len > 0 && (
                <p className="muted mt-1 text-sm">{fmt(longest.start)} – {fmt(longest.end)}</p>
              )}
            </div>
          </div>
        )}

        {/* PROFILE BUTTON */}
        <div className="mt-8 text-center">
          <a
            href={`https://github.com/${USER}`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !rounded-xl !px-5 !py-2.5 text-sm"
          >
            <Github size={16} /> View GitHub Profile <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}