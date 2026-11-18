import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useReducedMotion } from "framer-motion";
import type { Point } from "../types";

type BloomProps = {
  origin: Point;
  onCovered: () => void;
  onFaded: () => void;
};

export function Bloom({ origin, onCovered, onFaded }: BloomProps) {
  const reduce = useReducedMotion() ?? false;
  const scale = useMotionValue(0);
  const opacity = useMotionValue(1);
  const onCoveredRef = useRef(onCovered);
  const onFadedRef = useRef(onFaded);
  const [diameter] = useState(() =>
    Math.ceil(Math.hypot(window.innerWidth, window.innerHeight) * 3.3),
  );

  useEffect(() => {
    onCoveredRef.current = onCovered;
    onFadedRef.current = onFaded;
  });

  useEffect(() => {
    let cancelled = false;
    const expansion = animate(scale, 1, {
      duration: reduce ? 0.2 : 1.15,
      ease: [0.4, 0, 0.2, 1],
    });

    void expansion
      .then(() => {
        if (cancelled) return;
        onCoveredRef.current();
        return animate(opacity, 0, {
          duration: reduce ? 0.2 : 0.95,
          ease: "easeInOut",
        });
      })
      .then(() => {
        if (!cancelled) onFadedRef.current();
      });

    return () => {
      cancelled = true;
      expansion.stop();
    };
  }, [opacity, reduce, scale]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-auto fixed z-[60] rounded-full"
      style={{
        left: origin.x,
        top: origin.y,
        width: diameter,
        height: diameter,
        x: "-50%",
        y: "-50%",
        scale,
        opacity,
        background:
          "radial-gradient(circle, #fffdf8 0%, #ffe7ad 26%, #ffd0a4 48%, rgba(244,182,182,0.96) 68%, rgba(255,216,176,0) 78%)",
      }}
    />
  );
}
