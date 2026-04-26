import { Reveal } from "@/components/Reveal";
import { Atom, Boxes, Brain, Cloud, Code2, Cpu, Database, GitBranch, Globe, Layers, Server, Workflow } from "lucide-react";

type Group = {
  title: string;
  /** HSL triplet for header + bar */
  accent: string;
  level: number; // 0-100
  levelLabel: string;
  skills: { name: string; icon: typeof Atom }[];
};

const groups: Group[] = [
  {
    title: "Frontend",
    accent: "189 94% 55%", // cyan
    level: 95,
    levelLabel: "Expert",
    skills: [
      { name: "React", icon: Atom },
      { name: "TypeScript", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "Tailwind", icon: Layers },
    ],
  },
  {
    title: "Backend",
    accent: "152 70% 50%", // green
    level: 88,
    levelLabel: "Advanced",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Python", icon: Code2 },
      { name: "PostgreSQL", icon: Database },
      { name: "GraphQL", icon: Workflow },
    ],
  },
  {
    title: "AI & ML",
    accent: "270 91% 65%", // violet
    level: 82,
    levelLabel: "Advanced",
    skills: [
      { name: "LangChain", icon: Brain },
      { name: "PyTorch", icon: Cpu },
      { name: "OpenAI", icon: Atom },
      { name: "Vector DBs", icon: Boxes },
    ],
  },
  {
    title: "DevOps",
    accent: "38 95% 58%", // amber
    level: 75,
    levelLabel: "Proficient",
    skills: [
      { name: "Docker", icon: Boxes },
      { name: "AWS", icon: Cloud },
      { name: "GitHub Actions", icon: GitBranch },
      { name: "Kubernetes", icon: Workflow },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="container py-24 lg:py-32 scroll-mt-24">
      <Reveal>
        <p className="text-secondary font-mono text-sm uppercase tracking-widest mb-4">02 — Skills</p>
        <h2 className="font-display text-4xl lg:text-5xl font-bold max-w-2xl">
          A toolkit tuned for <span className="text-gradient">modern products</span>.
        </h2>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <div
              style={{ ["--accent" as string]: g.accent }}
              className="glass rounded-3xl p-6 h-full transition-all duration-500 hover:-translate-y-1
                         hover:border-[hsl(var(--accent)/0.5)]
                         hover:shadow-[0_20px_60px_-20px_hsl(var(--accent)/0.45)]"
            >
              {/* Category header */}
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="font-display font-bold text-2xl"
                  style={{ color: "hsl(var(--accent))" }}
                >
                  {g.title}
                </h3>
                <span
                  className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border"
                  style={{
                    color: "hsl(var(--accent))",
                    borderColor: "hsl(var(--accent) / 0.4)",
                    background: "hsl(var(--accent) / 0.08)",
                  }}
                >
                  {g.levelLabel}
                </span>
              </div>

              {/* Skill level bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
                  <span>Experience</span>
                  <span className="font-mono" style={{ color: "hsl(var(--accent))" }}>
                    {g.level}%
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-muted/60 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-[width] duration-1000 ease-out"
                    style={{
                      width: `${g.level}%`,
                      background: `linear-gradient(90deg, hsl(var(--accent) / 0.6), hsl(var(--accent)))`,
                      boxShadow: "0 0 12px hsl(var(--accent) / 0.6)",
                    }}
                  />
                </div>
              </div>

              {/* Icon grid with hover label */}
              <ul className="grid grid-cols-2 gap-3">
                {g.skills.map((s) => (
                  <li
                    key={s.name}
                    className="group/skill relative flex items-center justify-center rounded-2xl bg-muted/40 border border-border/60 p-4 h-20 overflow-hidden
                               hover:border-[hsl(var(--accent)/0.6)] hover:bg-muted/70 transition-all"
                  >
                    <s.icon
                      className="size-7 transition-all duration-300 group-hover/skill:-translate-y-3 group-hover/skill:opacity-0"
                      style={{ color: "hsl(var(--accent))" }}
                    />
                    <span
                      className="absolute inset-0 grid place-items-center text-sm font-semibold opacity-0 translate-y-3
                                 transition-all duration-300 group-hover/skill:opacity-100 group-hover/skill:translate-y-0"
                      style={{ color: "hsl(var(--accent))" }}
                    >
                      {s.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
