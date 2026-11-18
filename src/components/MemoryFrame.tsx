import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type MemoryFrameProps = {
  src: string;
  alt: string;
  video?: string;
  tall?: boolean;
  className?: string;
  placeholder?: string;
};

export function MemoryFrame({
  src,
  alt,
  video,
  tall = true,
  className = "",
  placeholder = "a moment kept in light",
}: MemoryFrameProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const reduce = useReducedMotion() ?? false;
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(videoRef, { amount: 0.25 });
  const showVideo = Boolean(video) && !videoFailed && !reduce;

  useEffect(() => {
    const node = videoRef.current;
    if (!showVideo || !node) return;
    if (inView) {
      void node.play().catch(() => {});
    } else {
      node.pause();
    }
  }, [inView, showVideo]);

  return (
    <motion.figure
      aria-label={alt}
      className={`group relative overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(255,200,120,0.35)] ring-1 ring-white/20 ${className}`}
      whileHover={reduce ? undefined : { scale: 1.03 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`relative w-full ${tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
        {showVideo ? (
          <video
            ref={videoRef}
            src={video}
            poster={imageFailed ? undefined : src}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
            onError={() => setVideoFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : !imageFailed ? (
          <img
            src={src}
            alt=""
            draggable={false}
            onError={() => setImageFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-end bg-gradient-to-br from-[#1a1030] via-[#5a356e] to-[#e7b07a] p-6">
            <span className="font-serif text-2xl text-ivory/85 italic">{placeholder}</span>
          </div>
        )}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-[-10%] left-0 w-1/3 -translate-x-[220%] -skew-x-12 bg-gradient-to-r from-transparent via-amber-100/80 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-[380%] group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:translate-x-[-220%] motion-reduce:group-hover:opacity-0"
        />
      </div>
    </motion.figure>
  );
}
