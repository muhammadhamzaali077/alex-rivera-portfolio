import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <nav
        className={cn(
          "container flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 border",
          scrolled
            ? "bg-background/40 backdrop-blur-xl backdrop-saturate-150 border-border/50 shadow-card"
            : "bg-transparent border-transparent backdrop-blur-0"
        )}
      >
        <a href="#hero" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="size-8 rounded-lg bg-gradient-primary shadow-glow grid place-items-center text-primary-foreground">
            AR
          </span>
          <span className="hidden sm:inline text-gradient">Alex Rivera</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/60 transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg hover:bg-muted text-foreground"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={cn("block w-5 h-0.5 bg-foreground transition-transform", open && "translate-y-2 rotate-45")} />
            <span className={cn("block w-5 h-0.5 bg-foreground transition-opacity", open && "opacity-0")} />
            <span className={cn("block w-5 h-0.5 bg-foreground transition-transform", open && "-translate-y-2 -rotate-45")} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden container mt-2 glass rounded-3xl p-4 animate-fade-in-up">
          <ul className="flex flex-col gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-foreground hover:bg-muted"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center mt-2 rounded-xl bg-gradient-primary px-4 py-3 font-semibold text-primary-foreground"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
