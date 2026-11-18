import { useEffect, useState } from "react";
import { Bloom } from "./components/Bloom";
import { Fireflies } from "./components/Fireflies";
import { Gallery } from "./components/Gallery";
import { Gate } from "./components/Gate";
import { Hero } from "./components/Hero";
import { Letter } from "./components/Letter";
import { LightFlares } from "./components/LightFlares";
import { Proposal } from "./components/Proposal";
import { ScrollBackground } from "./components/ScrollBackground";
import type { Point, Stage } from "./types";

export default function App() {
  const [stage, setStage] = useState<Stage>("journey");
  const [bloom, setBloom] = useState<Point | null>(null);

  useEffect(() => {
    document.documentElement.style.overflow = stage === "journey" ? "" : "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [stage]);

  return (
    <>
      <ScrollBackground warm={stage === "proposal"} />
      <LightFlares warm={stage === "proposal"} />
      <Fireflies warm={stage === "proposal"} />
      {stage === "proposal" ? (
        <main className="relative z-10">
          <Proposal />
        </main>
      ) : (
        <main className="relative z-10">
          <Hero />
          <Gallery />
          <Letter />
          <Gate
            disabled={stage !== "journey"}
            onOpen={(point) => {
              setBloom(point);
              setStage("blooming");
            }}
          />
        </main>
      )}
      {bloom ? (
        <Bloom
          origin={bloom}
          onCovered={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            setStage("proposal");
          }}
          onFaded={() => setBloom(null)}
        />
      ) : null}
    </>
  );
}
