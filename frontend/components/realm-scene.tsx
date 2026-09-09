"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ComponentType } from "react";

type SceneProps = {
  reducedMotion?: boolean;
};

const Scene = dynamic(
  () => import("@/components/scene"),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-[var(--stone)]" aria-hidden="true" />
    ),
  },
) as ComponentType<SceneProps>;

export default function RealmScene() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return <Scene reducedMotion={reducedMotion} />;
}
