import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    name: "TaskFlow",
    tagline: "Async-first project management",
    description:
      "A Linear-inspired workspace with realtime collaboration, AI-generated subtasks, and a delightful command palette.",
    tech: ["Next.js", "tRPC", "Postgres", "OpenAI"],
    accent: "from-violet-500 to-fuchsia-500",
    glyph: "TF",
  },
  {
    name: "ShopBot",
    tagline: "Conversational commerce",
    description:
      "An AI shopping assistant that turns natural-language prompts into curated product carts using RAG over catalog data.",
    tech: ["Python", "LangChain", "Pinecone", "Stripe"],
    accent: "from-cyan-400 to-sky-500",
    glyph: "SB",
  },
  {
    name: "DevMetrics",
    tagline: "Engineering analytics, beautifully",
    description:
      "A self-hosted dashboard for engineering teams. Pulls signals from GitHub, Jira, and CI to surface what actually matters.",
    tech: ["React", "Node", "ClickHouse", "Docker"],
    accent: "from-emerald-400 to-cyan-500",
    glyph: "DM",
  },
  {
    name: "NightOwl UI",
    tagline: "Open-source component library",
    description:
      "A dark-first React component library with 60+ accessible primitives, themeable tokens, and zero runtime CSS.",
    tech: ["React", "TypeScript", "Radix", "Vite"],
    accent: "from-fuchsia-500 to-violet-600",
    glyph: "NO",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="container py-24 lg:py-32 scroll-mt-24">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-secondary font-mono text-sm uppercase tracking-widest mb-4">03 — Projects</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold max-w-2xl">
              Selected <span className="text-gradient">work</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A handful of products I've designed, built, and shipped. Each one taught me something I now bring to every new project.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <article className="group relative glass rounded-3xl overflow-hidden h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-glow hover:border-primary/40">
              <div className={`relative h-48 bg-gradient-to-br ${p.accent} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display font-bold text-7xl text-white/90 drop-shadow-lg group-hover:scale-110 transition-transform duration-700">
                    {p.glyph}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="size-9 rounded-full bg-background/30 backdrop-blur-md text-white grid place-items-center hover:bg-background/60 transition" aria-label="GitHub">
                    <Github className="size-4" />
                  </button>
                  <button className="size-9 rounded-full bg-background/30 backdrop-blur-md text-white grid place-items-center hover:bg-background/60 transition" aria-label="Live">
                    <ArrowUpRight className="size-4" />
                  </button>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-display text-2xl font-bold text-foreground">{p.name}</h3>
                  <span className="text-xs font-mono text-secondary">{p.tagline}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-muted/60 border border-border text-foreground/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
