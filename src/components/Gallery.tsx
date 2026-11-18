import { memories } from "../content";
import { MemoryFrame } from "./MemoryFrame";
import { Reveal } from "./Reveal";

const placements = [
  {
    reverse: false,
    frame: "md:w-[46%]",
    copy: "md:mt-16 md:w-[40%]",
    x: -70,
  },
  {
    reverse: true,
    frame: "md:mt-8 md:w-[38%]",
    copy: "md:w-[42%]",
    x: 76,
  },
  {
    reverse: false,
    frame: "md:ml-[7%] md:w-[40%]",
    copy: "md:mt-20 md:w-[38%]",
    x: -60,
  },
  {
    reverse: true,
    frame: "md:w-[48%]",
    copy: "md:mt-6 md:w-[36%]",
    x: 68,
  },
  {
    reverse: false,
    frame: "md:ml-[4%] md:w-[42%]",
    copy: "md:mt-12 md:w-[40%]",
    x: -64,
  },
];

export function Gallery() {
  return (
    <section id="memories" className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <div className="flex flex-col gap-24 md:gap-36">
        {memories.map((memory, index) => {
          const place = placements[index] ?? placements[0];
          return (
            <article
              key={memory.image}
              className={`flex flex-col items-center gap-8 md:gap-14 ${
                place.reverse ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <Reveal x={place.x} className={`w-full ${place.frame}`}>
                <MemoryFrame
                  src={memory.image}
                  video={memory.video}
                  alt={memory.title}
                  tall={memory.tall}
                />
              </Reveal>
              <Reveal
                x={place.reverse ? -36 : 36}
                delay={0.12}
                className={`w-full ${place.copy}`}
              >
                <div className="rounded-[2rem] bg-[#120818]/35 px-6 py-7 shadow-[0_10px_40px_rgba(12,6,24,0.12)] backdrop-blur-sm md:px-8 md:py-9">
                  <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight font-medium text-ivory">
                    {memory.title}
                  </h2>
                  <p className="mt-4 font-sans text-base leading-relaxed font-light text-ivory/90 md:text-lg">
                    {memory.caption}
                  </p>
                </div>
              </Reveal>
            </article>
          );
        })}
      </div>
    </section>
  );
}
