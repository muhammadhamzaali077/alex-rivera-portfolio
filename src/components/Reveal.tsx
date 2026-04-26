import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  as?: "section" | "div";
}

export const Reveal = ({ children, delay = 0, className, id, as = "div" }: RevealProps) => {
  const reduce = useReducedMotion();
  const Comp: any = as === "section" ? motion.section : motion.div;
  return (
    <Comp
      id={id}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
};
