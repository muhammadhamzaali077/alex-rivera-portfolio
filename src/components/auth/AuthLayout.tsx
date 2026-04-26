import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const AuthLayout = ({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="absolute -top-32 -left-32 size-[420px] rounded-full bg-primary/30 blur-[120px] animate-float" />
      <div className="absolute -bottom-32 -right-32 size-[420px] rounded-full bg-secondary/30 blur-[120px] animate-float" style={{ animationDelay: "2s" }} />

      <Link
        to="/"
        className="absolute top-6 left-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
      >
        <ArrowLeft className="size-4" />
        Back to portfolio
      </Link>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 font-display font-bold text-xl">
            <span className="size-9 rounded-lg bg-gradient-primary shadow-glow grid place-items-center text-primary-foreground">AR</span>
            <span className="text-gradient">Alex Rivera</span>
          </Link>
          <h1 className="font-display text-3xl font-bold mt-6">{title}</h1>
          <p className="text-muted-foreground mt-2">{subtitle}</p>
        </div>

        <div className="glass rounded-3xl p-7 shadow-card">{children}</div>

        <div className="text-center mt-6 text-sm text-muted-foreground">{footer}</div>
      </div>
    </main>
  );
};
