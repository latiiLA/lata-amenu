"use client";

import { useEffect, useState } from "react";
import { series } from "@/content/character";

/**
 * Cold-open title card — burns in like a prestige drama open, then yields the page.
 */
export default function TitleSequence() {
  const [phase, setPhase] = useState<"play" | "done">("play");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      setPhase("done");
      return;
    }

    const seen = sessionStorage.getItem("seat-title-seen");
    if (seen) {
      setPhase("done");
      return;
    }

    const done = window.setTimeout(() => {
      sessionStorage.setItem("seat-title-seen", "1");
      setPhase("done");
    }, 3200);

    return () => window.clearTimeout(done);
  }, []);

  if (reduced || phase === "done") return null;

  return (
    <div
      className="title-sequence fixed inset-0 z-[60] flex items-center justify-center bg-[var(--stone)]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(143,36,51,0.25),transparent_55%)]" />
      <div className="relative px-6 text-center">
        <p className="title-seq-line font-heading text-[0.7rem] tracking-[0.5em] text-[var(--sigil)] uppercase">
          A chronicle
        </p>
        <h2 className="title-seq-title font-heading mt-6 text-[clamp(2.5rem,10vw,5.5rem)] font-bold tracking-[0.35em] text-[var(--parchment)] uppercase">
          {series.title}
        </h2>
        <div className="title-seq-line banner-rule mx-auto mt-8 w-40" />
        <p className="title-seq-line mt-6 font-heading text-[0.65rem] tracking-[0.35em] text-[var(--crimson)] uppercase">
          {series.season}
        </p>
      </div>
      <div className="letterbox letterbox-top opacity-100" />
      <div className="letterbox letterbox-bottom opacity-100" />
    </div>
  );
}
