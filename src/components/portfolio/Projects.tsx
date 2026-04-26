import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Github } from "lucide-react";

type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  glyph: string;
  /** HSL triplet (no "hsl()" wrapper) used for accent color + glow */
  accent: string;
  /** Tailwind gradient classes for the cover */
  cover: string;
  liveUrl: string;
  repoUrl: string;
};

const projects: Project[] = [
  {
    name: "TaskFlow",
    tagline: "Async-first project management",
    description:
      "A Linear-inspired workspace with realtime collaboration, AI-generated subtasks, and a delightful command palette.",
    tech: ["Next.js", "tRPC", "Postgres", "OpenAI"],
    glyph: "TF",
    accent: "270 91% 65%",
    cover: "from-violet-500 via-fuchsia-500 to-purple-600",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    name: "ShopBot",
    tagline: "Conversational commerce",
    description:
      "An AI shopping assistant that turns natural-language prompts into curated product carts using RAG over catalog data.",
    tech: ["Python", "LangChain", "Pinecone", "Stripe"],
    glyph: "SB",
    accent: "189 94% 55%",
    cover: "from-cyan-400 via-sky-500 to-blue-600",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    name: "DevMetrics",
    tagline: "Engineering analytics, beautifully",
    description:
      "A self-hosted dashboard for engineering teams. Pulls signals from GitHub, Jira, and CI to surface what actually matters.",
    tech: ["React", "Node", "ClickHouse", "Docker"],
    glyph: "DM",
    accent: "152 76% 55%",
    cover: "from-emerald-400 via-teal-500 to-cyan-600",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    name: "NightOwl UI",
    tagline: "Open-source component library",
    description:
      "A dark-first React component library with 60+ accessible primitives, themeable tokens, and zero runtime CSS.",
    tech: ["React", "TypeScript", "Radix", "Vite"],
    glyph: "NO",
    accent: "330 86% 65%",
    cover: "from-pink-500 via-fuchsia-500 to-violet-600",
    liveUrl: "#",
    repoUrl: "#",
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
            <article
              style={{ ["--accent" as string]: p.accent }}
              className="group relative rounded-3xl h-full transition-all duration-500 ease-out
                         hover:-translate-y-2"
            >
              {/* Glow halo behind card */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                style={{ background: "hsl(var(--accent) / 0.55)" }}
              />
              {/* Gradient border ring */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl p-px opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(140deg, hsl(var(--accent) / 0.9), hsl(var(--accent) / 0.1) 60%, hsl(var(--accent) / 0.9))",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              <div className="relative glass rounded-3xl overflow-hidden h-full">
                <div className={`relative h-48 bg-gradient-to-br ${p.cover} overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display font-bold text-7xl text-white/95 drop-shadow-lg group-hover:scale-110 transition-transform duration-700">
                      {p.glyph}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3
                      className="font-display text-2xl font-bold text-foreground transition-colors"
                      style={{ color: undefined }}
                    >
                      {p.name}
                    </h3>
                    <span
                      className="text-xs font-mono whitespace-nowrap"
                      style={{ color: "hsl(var(--accent))" }}
                    >
                      {p.tagline}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{p.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-muted/60 border border-border text-foreground/90 transition-colors group-hover:border-[hsl(var(--accent)/0.5)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
                      style={{
                        background: "hsl(var(--accent))",
                        boxShadow: "0 10px 30px -10px hsl(var(--accent) / 0.7)",
                      }}
                    >
                      Live Demo
                      <ArrowUpRight className="size-4" />
                    </a>
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-foreground border border-border bg-muted/50 hover:bg-muted transition-colors hover:border-[hsl(var(--accent)/0.6)]"
                    >
                      <Github className="size-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
