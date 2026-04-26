import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Typewriter } from "@/components/portfolio/Typewriter";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="absolute -top-32 -left-32 size-[480px] rounded-full bg-primary/30 blur-[120px] animate-float" />
      <div className="absolute -bottom-32 -right-32 size-[480px] rounded-full bg-secondary/30 blur-[120px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6"
          >
            <Sparkles className="size-3.5 text-secondary" />
            Available for new projects
            <span className="size-2 rounded-full bg-secondary shadow-cyan" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight"
          >
            Hi, I'm <span className="text-gradient">Alex Rivera</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-2xl min-h-[2.5em]"
          >
            <Typewriter
              words={["Full-Stack Developer", "AI Engineer", "Open Source Builder"]}
              className="text-foreground font-semibold text-gradient"
            />{" "}
            <span className="block sm:inline">crafting elegant interfaces and intelligent systems that ship.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-semibold text-primary-foreground hover:scale-[1.04] transition-transform animate-btn-pulse-primary"
            >
              View My Work
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-semibold text-foreground hover:border-secondary/60 hover:shadow-cyan transition-all animate-btn-pulse-secondary"
            >
              Hire Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { k: "6+", v: "Years" },
              { k: "40+", v: "Projects" },
              { k: "12", v: "Open Source" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto hidden lg:block"
        >
          <div className="relative w-[420px] h-[420px]">
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-3xl animate-pulse-glow" />
            <div className="absolute inset-6 rounded-full glass shadow-glow grid place-items-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
              <div className="font-display text-[10rem] font-bold text-gradient relative">AR</div>
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-cyan animate-float">
              <div className="font-mono text-xs text-secondary">{`{ ai: true }`}</div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-glow animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="font-mono text-xs text-primary-glow">React • Python</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
