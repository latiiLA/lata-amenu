"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/** Full-bleed keep landscape — winter cool / fire warm grade. Image has no UI text. */
export default function RealmBackdrop() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isWinter = !mounted || resolvedTheme === "winter";

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-[filter] duration-700 ${
          isWinter ? "realm-bg-winter" : "realm-bg-fire"
        }`}
        style={{ backgroundImage: "url(/realm/winter-keep.jpg)" }}
      />

      {/* Readability wash only — plate itself has no copy */}
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(6,10,16,0.78)_0%,rgba(6,10,16,0.45)_38%,rgba(6,10,16,0.12)_62%,rgba(6,10,16,0.4)_100%)] winter:opacity-100 fire:opacity-0 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(12,8,6,0.82)_0%,rgba(12,8,6,0.5)_38%,rgba(20,10,6,0.15)_62%,rgba(12,8,6,0.45)_100%)] opacity-0 fire:opacity-100 transition-opacity duration-700" />

      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[var(--stone)]/75 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--stone)]/70 to-transparent" />
      <div className="absolute inset-0 grain opacity-30" />
    </div>
  );
}
