import { motion, useReducedMotion } from "framer-motion";
import { heroLine } from "../content";

export function Hero() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section className="relative flex min-h-svh items-center justify-center px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,10,24,0.28)_70%,rgba(8,10,24,0.55)_100%)]"
      />
      <motion.p
        className="relative max-w-4xl text-center font-serif text-[clamp(2.35rem,6vw,5.1rem)] leading-[1.12] font-medium tracking-tight text-ivory italic"
        initial={{ opacity: 0, y: reduce ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0.4 : 2.5, ease: "easeOut" }}
      >
        {heroLine}
      </motion.p>
      <motion.button
        type="button"
        aria-label="Scroll to the memories"
        className="absolute bottom-8 flex flex-col items-center gap-2 text-ivory/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-100"
        animate={reduce ? undefined : { y: [0, 10, 0], opacity: [0.45, 1, 0.45] }}
        transition={
          reduce ? undefined : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
        }
        onClick={() => {
          document.getElementById("memories")?.scrollIntoView({
            behavior: reduce ? "auto" : "smooth",
          });
        }}
      >
        <span className="font-sans text-[0.68rem] font-medium tracking-[0.32em] uppercase">
          Scroll
        </span>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
          <path
            d="M5 8.5 11 14.5 17 8.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </section>
  );
}
