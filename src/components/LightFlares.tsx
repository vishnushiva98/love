import { motion, useScroll, useTransform } from "framer-motion";

type FlareSpec = {
  id: string;
  className: string;
  rate: number;
};

const nightFlares: FlareSpec[] = [
  {
    id: "violet",
    className: "top-[6vh] -left-[12vw] h-[48vh] w-[48vh] bg-[#7c5cff]/30",
    rate: 0.12,
  },
  {
    id: "gold",
    className: "top-[38vh] -right-[14vw] h-[40vh] w-[40vh] bg-[#f0c27a]/25",
    rate: 0.2,
  },
  {
    id: "rose",
    className: "top-[125vh] left-[4vw] h-[46vh] w-[46vh] bg-[#c45c8a]/20",
    rate: 0.32,
  },
  {
    id: "lilac",
    className: "top-[210vh] -right-[8vw] h-[50vh] w-[50vh] bg-[#b89bff]/20",
    rate: 0.26,
  },
  {
    id: "ember",
    className: "top-[320vh] -left-[10vw] h-[42vh] w-[42vh] bg-[#ffd7a8]/25",
    rate: 0.38,
  },
];

const dawnFlares: FlareSpec[] = [
  {
    id: "dawn-gold",
    className: "top-[4vh] -left-[10vw] h-[46vh] w-[46vh] bg-[#fff1c4]/60",
    rate: 0.08,
  },
  {
    id: "dawn-blush",
    className: "top-[36vh] -right-[12vw] h-[42vh] w-[42vh] bg-[#f4b6b6]/50",
    rate: 0.12,
  },
  {
    id: "dawn-peach",
    className: "bottom-[6vh] left-[18vw] h-[36vh] w-[36vh] bg-[#ffe08a]/45",
    rate: 0.05,
  },
];

function Flare({ className, rate }: FlareSpec) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (value) => value * -rate);

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none fixed rounded-full blur-3xl ${className}`}
      style={{ y }}
    />
  );
}

type LightFlaresProps = {
  warm: boolean;
};

export function LightFlares({ warm }: LightFlaresProps) {
  const flares = warm ? dawnFlares : nightFlares;

  return (
    <div aria-hidden className="pointer-events-none">
      {flares.map((flare) => (
        <Flare key={flare.id} {...flare} />
      ))}
    </div>
  );
}
