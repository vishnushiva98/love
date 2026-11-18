import { motion, useScroll, useTransform } from "framer-motion";

const STOPS = [0, 0.18, 0.36, 0.5, 0.72, 1];
const COLORS = ["#0b1026", "#2a1b4a", "#5b3a6b", "#f4b6b6", "#ffd5b0", "#ffe8b0"];

type ScrollBackgroundProps = {
  warm: boolean;
};

export function ScrollBackground({ warm }: ScrollBackgroundProps) {
  const { scrollYProgress } = useScroll();
  const color = useTransform(scrollYProgress, STOPS, COLORS);

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 -z-20"
      style={{ backgroundColor: warm ? "#ffe8b0" : color }}
    />
  );
}
