"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useTheme } from "next-themes";

export type RealmTheme = "fire" | "winter";

type RevealPayload = {
  next: RealmTheme;
  x: number;
  y: number;
};

type ThemeRevealContextValue = {
  revealTo: (next: RealmTheme, origin?: { x: number; y: number }) => void;
  isRevealing: boolean;
};

const ThemeRevealContext = createContext<ThemeRevealContextValue | null>(null);

export function useThemeReveal() {
  const ctx = useContext(ThemeRevealContext);
  if (!ctx) {
    throw new Error("useThemeReveal must be used within ThemeRevealProvider");
  }
  return ctx;
}

export function ThemeRevealProvider({ children }: { children: ReactNode }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [reveal, setReveal] = useState<RevealPayload | null>(null);
  const [active, setActive] = useState(false);
  const lock = useRef(false);

  const revealTo = useCallback(
    (next: RealmTheme, origin?: { x: number; y: number }) => {
      if (lock.current) return;
      const current = (resolvedTheme === "winter" ? "winter" : "fire") as RealmTheme;
      if (next === current) return;

      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduced) {
        setTheme(next);
        return;
      }

      lock.current = true;
      const x = origin?.x ?? window.innerWidth / 2;
      const y = origin?.y ?? window.innerHeight / 2;

      setReveal({ next, x, y });
      // Apply theme mid-spill so content under the liquid already matches
      window.setTimeout(() => setTheme(next), 280);
      requestAnimationFrame(() => setActive(true));

      window.setTimeout(() => {
        setActive(false);
        setReveal(null);
        lock.current = false;
      }, 1100);
    },
    [resolvedTheme, setTheme],
  );

  const value = useMemo(
    () => ({ revealTo, isRevealing: Boolean(reveal) }),
    [revealTo, reveal],
  );

  return (
    <ThemeRevealContext.Provider value={value}>
      {children}
      <LiquidWarpFilter />
      {reveal ? (
        <div
          className={`theme-reveal ${reveal.next}-reveal ${active ? "is-active" : ""}`}
          style={
            {
              ["--reveal-x" as string]: `${reveal.x}px`,
              ["--reveal-y" as string]: `${reveal.y}px`,
            } as CSSProperties
          }
          aria-hidden="true"
        >
          <div className="theme-reveal-surface" />
          <div
            className="absolute inset-0 opacity-40 mix-blend-soft-light"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
        </div>
      ) : null}
    </ThemeRevealContext.Provider>
  );
}

function LiquidWarpFilter() {
  return (
    <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
      <defs>
        <filter id="liquid-warp" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.018"
            numOctaves="3"
            seed="4"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="1.1s"
              values="0.012;0.028;0.015"
              repeatCount="1"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="28" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}
