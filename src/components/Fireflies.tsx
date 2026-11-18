import { useMemo } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { motion, useScroll, useTransform } from "framer-motion";

type FirefliesProps = {
  warm: boolean;
};

function particleCount() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobile = window.matchMedia("(max-width: 768px)").matches;
  if (reduce) return 18;
  return mobile ? 60 : 110;
}

function fireflyOptions(warm: boolean): ISourceOptions {
  const mobile = window.matchMedia("(max-width: 768px)").matches;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return {
    fullScreen: { enable: false, zIndex: 0 },
    fpsLimit: mobile ? 40 : 60,
    detectRetina: true,
    pauseOnBlur: true,
    background: { color: "transparent" },
    particles: {
      number: { value: particleCount() },
      shape: { type: "circle" },
      paint: {
        color: {
          value: warm
            ? ["#fffdf8", "#ffe7a8", "#ffd0b0", "#fff4c8"]
            : ["#fff6d4", "#ffe08a", "#f3c56a", "#f4e8ff"],
        },
        fill: { enable: true },
      },
      opacity: {
        value: { min: 0.2, max: 0.95 },
        animation: {
          enable: !reduce,
          speed: 0.45,
          sync: false,
        },
      },
      size: { value: { min: 1.1, max: warm ? 3.4 : 3 } },
      move: {
        enable: true,
        speed: reduce ? 0.15 : warm ? 0.28 : 0.38,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
    },
  };
}

export function Fireflies({ warm }: FirefliesProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (value) => {
    const shift = value * -0.2;
    const limit = window.innerHeight * 0.75;
    return Math.max(shift, -limit);
  });
  const options = useMemo(() => fireflyOptions(warm), [warm]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[180vh]"
      style={{ y }}
    >
      <ParticlesProvider init={loadSlim}>
        <Particles
          id={warm ? "fireflies-dawn" : "fireflies-night"}
          className="relative h-full w-full"
          style={{ filter: "drop-shadow(0 0 6px rgba(255, 214, 140, 0.9))" }}
          options={options}
        />
      </ParticlesProvider>
    </motion.div>
  );
}
