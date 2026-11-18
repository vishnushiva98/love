import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { closingMessage, finalImage, finalVideo, proposalQuestion } from "../content";
import { celebrate } from "../lib/celebrate";
import { MemoryFrame } from "./MemoryFrame";

export function Proposal() {
  const reduce = useReducedMotion() ?? false;
  const [answered, setAnswered] = useState(false);

  const sayYes = () => {
    setAnswered(true);
    celebrate(reduce);
  };

  return (
    <section className="flex h-svh items-center justify-center overflow-y-auto px-6 py-10">
      <div className="flex w-full max-w-xl flex-col items-center">
        <motion.div
          className="w-[min(72vw,300px)]"
          initial={{ opacity: 0, y: reduce ? 0 : 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0.25 : 1.05, delay: reduce ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <MemoryFrame
            src={finalImage}
            video={finalVideo}
            alt="The moment we keep"
            placeholder="our favorite view"
          />
        </motion.div>
        <motion.h1
          className="mt-8 text-center font-serif text-[clamp(2.3rem,6vw,4.4rem)] leading-[1.12] font-medium text-plum italic"
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0.25 : 1.15, delay: reduce ? 0.05 : 0.7 }}
        >
          {proposalQuestion}
        </motion.h1>
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0.2 : 0.8, delay: reduce ? 0.1 : 1.15 }}
        >
          <button
            type="button"
            className="rounded-full bg-plum px-7 py-3 font-serif text-2xl text-ivory shadow-[0_0_24px_rgba(255,200,120,0.45)] transition hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum motion-reduce:transition-none"
            onClick={sayYes}
          >
            Yes
          </button>
          <button
            type="button"
            className="rounded-full border border-plum/30 bg-white/70 px-7 py-3 font-serif text-2xl text-plum shadow-[0_0_24px_rgba(255,200,120,0.35)] transition hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum motion-reduce:transition-none"
            onClick={sayYes}
          >
            Absolutely Yes
          </button>
        </motion.div>
        {answered ? (
          <motion.p
            className="mt-8 max-w-lg text-center font-serif text-[clamp(1.45rem,3vw,2rem)] leading-snug text-plum italic"
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0.2 : 0.9 }}
          >
            {closingMessage}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}
