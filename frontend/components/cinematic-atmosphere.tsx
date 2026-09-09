"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const EMBERS = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  delay: `${(i * 0.35) % 8}s`,
  duration: `${7 + (i % 5)}s`,
  size: 2 + (i % 4),
  drift: i % 2 === 0 ? 1 : -1,
}));

const SNOW = Array.from({ length: 36 }, (_, i) => ({
  id: i,
  left: `${(i * 29) % 100}%`,
  delay: `${(i * 0.28) % 9}s`,
  duration: `${9 + (i % 6)}s`,
  size: 1.5 + (i % 3),
  drift: ((i % 5) - 2) * 28,
}));

const RAVENS = [
  { id: 1, top: "14%", duration: "28s", delay: "0s", scale: 1 },
  { id: 2, top: "24%", duration: "34s", delay: "6s", scale: 0.75 },
  { id: 3, top: "10%", duration: "40s", delay: "14s", scale: 0.9 },
];

function RavenSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M2 18c6-2 10-8 14-8 2 0 3 1 5 3l3-6c1-2 3-3 5-2 4 2 6 7 7 11 4-1 8-1 12 1 3 1 5 4 4 6-3 1-8 0-12-1-1 3-4 6-8 7-3 1-6 0-8-2l-2 4c-1 1-3 1-4 0l1-5c-3-1-6-3-8-6-2 2-5 3-9 3-3 0-4-2-2-5z" />
    </svg>
  );
}

function DragonSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 64" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 36c8-2 14-10 22-12 4-1 8 1 12 4 2-8 8-16 16-18 6-2 10 2 12 8 10-6 22-10 34-6 8 2 12 10 10 16 14-2 28 2 36 12 4 4 2 10-4 10-10-2-20-8-30-8-2 6-8 12-16 14-6 2-12 0-16-4-2 4-6 8-12 8-8 0-12-6-10-12-6 2-12 2-18 0-4 6-10 8-16 6-8-2-10-10-4-14-6 0-12 2-18 6-4 2-8 0-6-6z" />
      <path
        d="M48 28 C40 18, 34 10, 42 4 C46 12, 52 18, 58 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.7"
      />
      <path
        d="M70 26 C78 12, 92 6, 104 14 C92 16, 82 22, 76 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.55"
      />
    </svg>
  );
}

type CinematicAtmosphereProps = {
  ravens?: boolean;
  dragons?: boolean;
  embers?: boolean;
  letterbox?: boolean;
  className?: string;
};

export default function CinematicAtmosphere({
  ravens = true,
  dragons = true,
  embers = true,
  letterbox = true,
  className = "",
}: CinematicAtmosphereProps) {
  const { resolvedTheme } = useTheme();
  const [reduced, setReduced] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const isWinter = mounted && resolvedTheme === "winter";
  const showEmbers = embers && !isWinter;
  const showSnow = isWinter;
  const showDragons = dragons && !isWinter;

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[15] overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="hearth-pulse absolute inset-x-0 bottom-0 h-1/3" />

      {showEmbers &&
        !reduced &&
        EMBERS.map((e) => (
          <span
            key={e.id}
            className="ember"
            style={{
              left: e.left,
              width: e.size,
              height: e.size,
              animationDelay: e.delay,
              animationDuration: e.duration,
              ["--ember-drift" as string]: `${e.drift * 40}px`,
            }}
          />
        ))}

      {showSnow &&
        !reduced &&
        SNOW.map((s) => (
          <span
            key={s.id}
            className="snowflake"
            style={{
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
              animationDuration: s.duration,
              ["--snow-drift" as string]: `${s.drift}px`,
            }}
          />
        ))}

      {ravens &&
        !reduced &&
        RAVENS.map((r) => (
          <div
            key={r.id}
            className="raven-flight text-[var(--stone)] opacity-50"
            style={{
              top: r.top,
              animationDuration: r.duration,
              animationDelay: r.delay,
              transform: `scale(${r.scale})`,
            }}
          >
            <RavenSilhouette className="h-6 w-12 sm:h-8 sm:w-16" />
          </div>
        ))}

      {showDragons && !reduced ? (
        <div className="dragon-flight text-[var(--crimson)]/45">
          <DragonSilhouette className="h-14 w-36 sm:h-20 sm:w-52" />
        </div>
      ) : null}

      {letterbox && (
        <>
          <div className="letterbox letterbox-top" />
          <div className="letterbox letterbox-bottom" />
        </>
      )}
    </div>
  );
}
