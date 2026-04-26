import { Reveal } from "@/components/Reveal";
import { Coffee, Lightbulb, Rocket } from "lucide-react";

const traits = [
  { icon: Rocket, title: "Ship Fast", text: "From idea to production with rigor and pace." },
  { icon: Lightbulb, title: "Think Deep", text: "Architecture that scales beyond the demo." },
  { icon: Coffee, title: "Stay Human", text: "Great teams build great products. Always." },
];

export const About = () => {
  return (
    <Reveal as="section" id="about" className="container py-24 lg:py-32 scroll-mt-24">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
        <div>
          <p className="text-secondary font-mono text-sm uppercase tracking-widest mb-4">01 — About</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
            Engineer at the <span className="text-gradient">intersection</span> of design & AI.
          </h2>
        </div>
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a full-stack developer with six years of experience designing and shipping web products
            used by hundreds of thousands of people. Lately I've been obsessed with applied AI —
            building agents, retrieval pipelines, and tools that feel less like software and more like
            a collaborator.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Based in Brooklyn. Open to remote roles and select consulting engagements.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            {traits.map((t) => (
              <div key={t.title} className="glass rounded-2xl p-5 hover:border-primary/50 hover:shadow-glow transition-all">
                <t.icon className="size-6 text-secondary mb-3" />
                <div className="font-display font-semibold text-foreground">{t.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{t.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};
