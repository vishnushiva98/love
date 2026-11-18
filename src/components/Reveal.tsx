import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  x?: number;
  y?: number;
  delay?: number;
  amount?: number;
};

export function Reveal({
  children,
  className,
  x = 0,
  y = 40,
  delay = 0,
  amount = 0.3,
}: RevealProps) {
  const reduce = useReducedMotion() ?? false;

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, x }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: reduce ? 0.2 : 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay: reduce ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}
