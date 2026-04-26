import { Reveal } from "@/components/Reveal";

const jobs = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Lumen AI",
    period: "2023 — Present",
    description:
      "Lead engineer on the agent platform. Designed the orchestration layer powering 2M+ monthly tool calls and shipped the React SDK.",
  },
  {
    role: "Full-Stack Developer",
    company: "Northwind Labs",
    period: "2021 — 2023",
    description:
      "Built data-heavy dashboards and internal tools. Migrated the monolith to a typed tRPC + Postgres stack, cutting p95 latency by 60%.",
  },
  {
    role: "Software Engineer",
    company: "Brightline",
    period: "2019 — 2021",
    description:
      "First engineering hire. Owned the customer-facing app end-to-end and helped scale the team from 2 to 15 engineers.",
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "2018 — 2019",
    description:
      "Designed and shipped marketing sites and small apps for early-stage startups across NYC and Berlin.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="container py-24 lg:py-32 scroll-mt-24">
      <Reveal>
        <p className="text-secondary font-mono text-sm uppercase tracking-widest mb-4">04 — Experience</p>
        <h2 className="font-display text-4xl lg:text-5xl font-bold max-w-2xl">
          Where I've <span className="text-gradient">built</span>.
        </h2>
      </Reveal>

      <div className="mt-14 relative max-w-4xl mx-auto">
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

        <div className="space-y-12">
          {jobs.map((job, i) => {
            const right = i % 2 === 1;
            return (
              <Reveal key={job.role} delay={i * 0.05}>
                <div className={`relative md:grid md:grid-cols-2 md:gap-12 ${right ? "md:[&>*:first-child]:col-start-2" : ""}`}>
                  <div className={`pl-14 md:pl-0 ${right ? "md:text-left" : "md:text-right"}`}>
                    <div className="glass rounded-2xl p-6 hover:border-primary/40 hover:shadow-glow transition-all">
                      <div className="font-mono text-xs text-secondary mb-2">{job.period}</div>
                      <h3 className="font-display text-xl font-bold text-foreground">{job.role}</h3>
                      <div className="text-primary-glow font-medium mb-3">{job.company}</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-5 md:left-1/2 top-6 -translate-x-1/2 size-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
