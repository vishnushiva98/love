import confetti from "canvas-confetti";

const colors = ["#ffffff", "#fff4c8", "#ffe08a", "#ff8fab", "#e23d62", "#ffd0dc"];

export function celebrate(reduce: boolean) {
  const heart = confetti.shapeFromText({ text: "♥", scalar: 1.6 });
  const burst = (originX: number, count: number) => {
    void confetti({
      particleCount: count,
      spread: 78,
      startVelocity: reduce ? 22 : 46,
      origin: { x: originX, y: 0.62 },
      colors,
      shapes: ["circle", heart],
      scalar: reduce ? 0.9 : 1.05,
      ticks: reduce ? 120 : 240,
      zIndex: 80,
    });
  };

  if (reduce) {
    burst(0.5, 36);
    return;
  }

  burst(0.18, 54);
  burst(0.82, 54);
  window.setTimeout(() => burst(0.5, 90), 180);
  window.setTimeout(() => {
    burst(0.1, 36);
    burst(0.9, 36);
  }, 420);
}
