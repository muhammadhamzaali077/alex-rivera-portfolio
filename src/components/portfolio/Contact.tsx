import { useState } from "react";
import { z } from "zod";
import { Reveal } from "@/components/Reveal";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Tell me a bit more (min 10 chars)").max(1000),
});

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: any = {};
      result.error.issues.forEach((i) => (fieldErrors[i.path[0] as string] = i.message));
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    toast({ title: "Message sent ✨", description: "Thanks! I'll reply within 24 hours." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="container py-24 lg:py-32 scroll-mt-24">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <Reveal>
          <p className="text-secondary font-mono text-sm uppercase tracking-widest mb-4">05 — Contact</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
            Let's build something <span className="text-gradient">memorable</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            Have a product idea, a tricky technical problem, or just want to say hi? Drop a line — I read everything.
          </p>

          <div className="mt-8 space-y-3">
            <a href="mailto:hello@alexrivera.dev" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition">
              <span className="size-10 rounded-xl glass grid place-items-center text-secondary"><Mail className="size-4" /></span>
              hello@alexrivera.dev
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="size-11 rounded-xl glass grid place-items-center text-muted-foreground hover:text-foreground hover:border-secondary/60 hover:shadow-cyan transition-all"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={onSubmit} className="glass rounded-3xl p-7 lg:p-9 space-y-5 shadow-card">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="w-full rounded-xl bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
                placeholder="Ada Lovelace"
              />
              {errors.name && <p className="text-destructive text-xs mt-1.5">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="w-full rounded-xl bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
                placeholder="ada@analytical.engine"
              />
              {errors.email && <p className="text-destructive text-xs mt-1.5">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={5}
                className="w-full rounded-xl bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none"
                placeholder="Tell me about your project…"
              />
              {errors.message && <p className="text-destructive text-xs mt-1.5">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-glow hover:scale-[1.01] transition-transform disabled:opacity-60 disabled:hover:scale-100"
            >
              {sending ? "Sending…" : "Send message"}
              <Send className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
