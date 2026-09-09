"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { useTheme } from "next-themes";
import { useThemeReveal, type RealmTheme } from "@/components/theme-reveal";

type ModeToggleProps = {
  /** Icon-only control for the cinematic Realm header */
  compact?: boolean;
};

export function ModeToggle({ compact = false }: ModeToggleProps) {
  const { resolvedTheme } = useTheme();
  const { revealTo, isRevealing } = useThemeReveal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const realm: RealmTheme = resolvedTheme === "winter" ? "winter" : "fire";
  const isWinter = realm === "winter";

  function onToggle(e: MouseEvent<HTMLButtonElement>) {
    const next: RealmTheme = isWinter ? "fire" : "winter";
    revealTo(next, { x: e.clientX, y: e.clientY });
  }

  if (!mounted) {
    return (
      <button
        type="button"
        className={
          compact
            ? "h-9 w-9 opacity-0"
            : "realm-toggle pointer-events-none h-9 min-w-[9.5rem] rounded-none px-3 opacity-0"
        }
        aria-hidden
        tabIndex={-1}
      />
    );
  }

  if (compact) {
    return (
      <button
        type="button"
        onClick={onToggle}
        disabled={isRevealing}
        className="flex h-9 w-9 items-center justify-center text-[var(--parchment)]/85 transition-colors hover:text-[var(--sigil)]"
        aria-label={
          isWinter
            ? "Switch to Fire and Blood mode"
            : "Switch to Winter is Coming mode"
        }
        title={isWinter ? "Fire and Blood" : "Winter is Coming"}
      >
        {isWinter ? <MoonIcon /> : <SunEmberIcon />}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={isRevealing}
      className="realm-toggle group relative flex h-9 items-center gap-2 rounded-none px-3"
      aria-label={
        isWinter
          ? "Switch to Fire and Blood mode"
          : "Switch to Winter is Coming mode"
      }
      title={isWinter ? "Fire and Blood" : "Winter is Coming"}
    >
      <span className="relative flex h-4 w-4 items-center justify-center text-[var(--ember)]" aria-hidden>
        {isWinter ? <SnowflakeIcon /> : <FlameIcon />}
      </span>
      <span className="flex flex-col items-start leading-none">
        <span className="font-heading text-[0.55rem] tracking-[0.18em] text-[var(--parchment)] uppercase">
          {isWinter ? "Winter is Coming" : "Fire and Blood"}
        </span>
        <span className="mt-1 font-heading text-[0.45rem] tracking-[0.14em] text-[var(--parchment-dim)] uppercase">
          {isWinter ? "Tap for dragonfire" : "Tap for the frost"}
        </span>
      </span>
    </button>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path
        d="M20 14.5A8.5 8.5 0 0 1 9.5 4 7 7 0 1 0 20 14.5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunEmberIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" strokeLinecap="round" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12 2c1.5 3 1 5.5-.5 7.2 1.8-.3 3.5-1.8 4.2-4.2 2.2 2.8 3.3 5.2 3.3 7.8A7 7 0 0 1 12 20a7 7 0 0 1-7-7c0-2.6 1.4-5.2 3.5-7.5C9.2 7.2 10.2 9 11 10.5 10.2 7.8 10.5 4.8 12 2z" />
    </svg>
  );
}

function SnowflakeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M12 2v20M4.9 6.5l14.2 11M4.9 17.5l14.2-11" strokeLinecap="round" />
      <path d="M9 4.5l3 2 3-2M9 19.5l3-2 3 2M3.5 9l2.5 1.5L4 13.5M20.5 9l-2.5 1.5L20 13.5" strokeLinecap="round" />
    </svg>
  );
}
