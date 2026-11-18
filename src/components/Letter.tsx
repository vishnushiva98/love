import { letter } from "../content";
import { Reveal } from "./Reveal";

export function Letter() {
  return (
    <section id="letter" className="relative mx-auto max-w-3xl px-6 pt-[18vh] pb-12">
      {letter.map((sentence) => (
        <Reveal key={sentence} amount={0.55} className="flex min-h-[58vh] items-center">
          <p className="w-full text-center font-serif text-[clamp(1.85rem,4.2vw,3.35rem)] leading-snug font-medium text-plum">
            {sentence}
          </p>
        </Reveal>
      ))}
    </section>
  );
}
