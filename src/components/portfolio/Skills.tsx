import { Reveal } from "@/components/Reveal";
import { Atom, Boxes, Brain, Cloud, Code2, Cpu, Database, GitBranch, Globe, Layers, Server, Workflow } from "lucide-react";

const groups = [
  {
    title: "Frontend",
    color: "from-primary to-primary-glow",
    skills: [
      { name: "React", icon: Atom },
      { name: "TypeScript", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "Tailwind", icon: Layers },
    ],
  },
  {
    title: "Backend",
    color: "from-secondary to-secondary-glow",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Python", icon: Code2 },
      { name: "PostgreSQL", icon: Database },
      { name: "GraphQL", icon: Workflow },
    ],
  },
  {
    title: "AI",
    color: "from-primary to-secondary",
    skills: [
      { name: "LangChain", icon: Brain },
      { name: "PyTorch", icon: Cpu },
      { name: "OpenAI", icon: Atom },
      { name: "Vector DBs", icon: Boxes },
    ],
  },
  {
    title: "DevOps",
    color: "from-secondary to-primary",
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
            <div className="glass rounded-3xl p-6 h-full hover:border-primary/40 hover:shadow-glow transition-all duration-500 group">
              <div className={`inline-block bg-gradient-to-r ${g.color} bg-clip-text text-transparent font-display font-bold text-2xl mb-6`}>
                {g.title}
              </div>
              <ul className="grid grid-cols-2 gap-3">
                {g.skills.map((s) => (
                  <li
                    key={s.name}
                    className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-muted/40 border border-border/60 p-4 hover:border-secondary/60 hover:bg-muted/70 transition-all"
                  >
                    <s.icon className="size-7 text-secondary group-hover:text-primary-glow transition-colors" />
                    <span className="text-xs font-medium text-foreground">{s.name}</span>
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
