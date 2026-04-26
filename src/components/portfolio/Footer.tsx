export const Footer = () => (
  <footer className="border-t border-border/60 mt-12">
    <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div>© {new Date().getFullYear()} Alex Rivera. Crafted with care.</div>
      <div className="font-mono">{"<built with React + Tailwind />"}</div>
    </div>
  </footer>
);
