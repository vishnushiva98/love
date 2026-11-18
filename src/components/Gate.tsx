import { motion, useReducedMotion } from "framer-motion";
import type { Point } from "../types";

type GateProps = {
  disabled: boolean;
  onOpen: (point: Point) => void;
};

export function Gate({ disabled, onOpen }: GateProps) {
  const reduce = useReducedMotion() ?? false;

  return (
    <section className="flex min-h-svh items-center justify-center px-6">
      <motion.button
        type="button"
        disabled={disabled}
        className="rounded-full border border-white/70 bg-white/80 px-8 py-4 font-serif text-[clamp(1.45rem,3vw,2rem)] text-plum shadow-[0_0_28px_rgba(255,206,130,0.55)] backdrop-blur-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum disabled:cursor-default"
        animate={
          reduce || disabled
            ? undefined
            : {
                boxShadow: [
                  "0 0 22px rgba(255, 200, 120, 0.45)",
                  "0 0 48px rgba(255, 220, 150, 0.95)",
                  "0 0 22px rgba(255, 200, 120, 0.45)",
                ],
              }
        }
        transition={
          reduce || disabled
            ? undefined
            : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
        }
        whileHover={disabled || reduce ? undefined : { scale: 1.03 }}
        whileTap={disabled || reduce ? undefined : { scale: 0.98 }}
        onClick={(event) => {
          if (disabled) return;
          onOpen({ x: event.clientX, y: event.clientY });
        }}
      >
        Open our next chapter
      </motion.button>
    </section>
  );
}
