import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Certifications",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const goTo = (name) => {
    setActive(name);
    setOpen(false);

    document
      .getElementById(name.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#080b16]/85 backdrop-blur-xl">

      <nav
        className="container-page flex h-[80px] items-center justify-between"
        aria-label="Main navigation"
      >

        {/* SONALI LOGO */}
        <button
          onClick={() => goTo("Home")}
          className="whitespace-nowrap text-4xl font-black tracking-tight text-white font-sans"
          style={{
            fontWeight: 900,
            fontFamily: "Arial Black, Impact, sans-serif",
          }}
          aria-label="Sonali home"
        >
          SONALI<span className="text-lime-400">.</span>
        </button>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => goTo(link)}
              className={`text-sm transition duration-300 hover:text-lime-300 ${
                active === link
                  ? "font-semibold text-white"
                  : "text-slate-400"
              }`}
            >
              {link}
            </button>
          ))}

          <button
            onClick={() => goTo("Contact")}
            className="btn-secondary !px-4 !py-2 text-sm"
          >
            Let's Connect
            <ArrowUpRight size={15} />
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="rounded-lg border border-white/10 p-2 text-white hover:border-lime-400/50 hover:text-lime-400 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {open && (
        <div className="container-page grid gap-1 border-t border-white/10 pb-4 pt-3 lg:hidden">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => goTo(link)}
              className={`rounded-lg px-3 py-2.5 text-left text-sm transition ${
                active === link
                  ? "bg-lime-400/10 text-lime-400"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link}
            </button>
          ))}

          <button
            onClick={() => goTo("Contact")}
            className="btn-primary mt-2"
          >
            Let's Connect
            <ArrowUpRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}
