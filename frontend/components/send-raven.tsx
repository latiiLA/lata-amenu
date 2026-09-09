"use client";

import { useEffect, useState, type FormEvent } from "react";

type Phase = "perch" | "flight" | "form";

function RavenWithScroll({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden="true">
      <g fill="currentColor">
        <path d="M8 48c14-6 24-22 34-22 5 0 8 3 13 8l8-14c3-5 8-8 13-5 10 5 15 18 18 28 10-3 20-3 30 2 8 3 12 10 10 15-8 3-20 0-30-3-3 8-10 15-20 18-8 2-15 0-20-5l-5 10c-2 3-8 3-10 0l3-12c-8-3-15-8-20-15-5 5-12 8-22 8-8 0-10-6-5-13z" />
      </g>
      {/* Tiny scroll */}
      <g transform="translate(78 52)">
        <rect x="0" y="0" width="28" height="10" rx="2" fill="#c4a574" opacity="0.9" />
        <rect x="2" y="2" width="24" height="6" rx="1" fill="#ebe3d4" opacity="0.85" />
        <line x1="5" y1="4" x2="20" y2="4" stroke="#8f2433" strokeWidth="0.8" opacity="0.5" />
        <line x1="5" y1="6.5" x2="17" y2="6.5" stroke="#8f2433" strokeWidth="0.6" opacity="0.35" />
      </g>
    </svg>
  );
}

export default function SendRaven() {
  const [phase, setPhase] = useState<Phase>("perch");
  const [reduced, setReduced] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  function launch() {
    if (reduced) {
      setPhase("form");
      return;
    }
    setPhase("flight");
    window.setTimeout(() => setPhase("form"), 1600);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Raven from ${name || "ally"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    // Placeholder mailbox until you set a real address
    window.location.href = `mailto:hello@lataamenu.dev?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="relative mx-auto flex w-full max-w-xl flex-col items-center">
      {phase === "perch" ? (
        <div className="flex flex-col items-center text-center">
          <div className="raven-perch text-[var(--parchment)]/80">
            <RavenWithScroll className="h-28 w-40 sm:h-36 sm:w-52" />
          </div>
          <button
            type="button"
            onClick={launch}
            className="mt-10 inline-flex h-14 items-center justify-center border border-[var(--crimson)] bg-[var(--crimson)] px-8 font-heading text-[0.8rem] tracking-[0.28em] text-[var(--parchment)] uppercase transition-colors hover:bg-[color-mix(in_srgb,var(--crimson)_85%,white)]"
          >
            Send a raven
          </button>
          <p className="mt-5 max-w-sm text-lg text-[var(--parchment-dim)]">
            The bird carries your scroll to the Seatkeeper.
          </p>
        </div>
      ) : null}

      {phase === "flight" ? (
        <div className="flex h-64 w-full items-center justify-center sm:h-80" aria-live="polite">
          <div className="raven-takeoff text-[var(--parchment)]">
            <RavenWithScroll className="h-32 w-48 sm:h-44 sm:w-64" />
          </div>
        </div>
      ) : null}

      {phase === "form" ? (
        <div className="raven-form-in w-full">
          <div className="mb-8 flex justify-center text-[var(--sigil)]">
            <RavenWithScroll className="h-16 w-24 opacity-70" />
          </div>
          <p className="text-center font-heading text-[0.65rem] tracking-[0.28em] text-[var(--crimson)] uppercase">
            The raven has arrived
          </p>
          <h2 className="mt-3 text-center font-heading text-3xl tracking-wide text-[var(--parchment)] uppercase">
            Your scroll
          </h2>

          {sent ? (
            <p className="mt-10 text-center text-xl text-[var(--parchment-dim)]">
              Your words are on the wing. If mail did not open, write directly when the seal is set.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mt-10 space-y-5">
              <label className="block">
                <span className="font-heading text-[0.6rem] tracking-[0.2em] text-[var(--parchment-dim)] uppercase">
                  Name
                </span>
                <input
                  name="name"
                  required
                  className="mt-2 w-full border border-[var(--sigil)]/30 bg-[var(--stone-lift)] px-4 py-3 text-lg text-[var(--parchment)] outline-none focus:border-[var(--ember)]"
                />
              </label>
              <label className="block">
                <span className="font-heading text-[0.6rem] tracking-[0.2em] text-[var(--parchment-dim)] uppercase">
                  Raven address (email)
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full border border-[var(--sigil)]/30 bg-[var(--stone-lift)] px-4 py-3 text-lg text-[var(--parchment)] outline-none focus:border-[var(--ember)]"
                />
              </label>
              <label className="block">
                <span className="font-heading text-[0.6rem] tracking-[0.2em] text-[var(--parchment-dim)] uppercase">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-y border border-[var(--sigil)]/30 bg-[var(--stone-lift)] px-4 py-3 text-lg text-[var(--parchment)] outline-none focus:border-[var(--ember)]"
                />
              </label>
              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center border border-[var(--crimson)] bg-[var(--crimson)] font-heading text-[0.75rem] tracking-[0.22em] text-[var(--parchment)] uppercase transition-colors hover:bg-[color-mix(in_srgb,var(--crimson)_85%,white)]"
              >
                Dispatch the raven
              </button>
            </form>
          )}
        </div>
      ) : null}
    </div>
  );
}
