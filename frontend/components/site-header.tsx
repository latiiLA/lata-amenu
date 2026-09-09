"use client";

import Link from "next/link";
import HouseSigil from "@/components/house-sigil";
import { ModeToggle } from "@/components/mode-toggle";
import { protagonist, series } from "@/content/character";

const NAV = [
  { href: "/", label: "The Realm" },
  { href: "/lineage", label: "The Story" },
  { href: "/work", label: "The Works" },
  { href: "/scrolls", label: "The Scrolls" },
  { href: "/oaths", label: "The Oaths" },
  { href: "/banners", label: "The Banners" },
  { href: "/cast", label: "The Arsenal" },
  { href: "/contact", label: "The Raven" },
] as const;

/** Name first on every page; The Seat rides as the series mark beneath. */
function BrandMark() {
  return (
    <Link
      href="/"
      className="group flex shrink-0 items-center gap-2.5 sm:gap-3"
      aria-label={`${protagonist.name} — ${series.title}. Home.`}
    >
      <HouseSigil className="h-7 w-7 shrink-0 text-[var(--parchment)]/80 transition-colors group-hover:text-[var(--sigil)]" />
      <span className="flex min-w-0 flex-col">
        <span className="font-heading text-[0.75rem] tracking-[0.22em] text-[var(--parchment)] uppercase transition-colors group-hover:text-[var(--sigil)] sm:text-[0.8rem] sm:tracking-[0.28em]">
          {protagonist.name}
        </span>
        <span className="font-heading mt-0.5 text-[0.55rem] tracking-[0.28em] text-[var(--sigil)] uppercase sm:tracking-[0.32em]">
          {series.title}
        </span>
      </span>
    </Link>
  );
}

export default function SiteHeader() {
  return (
    <header className="relative z-20 flex flex-col gap-4 px-6 pt-6 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:px-10 sm:pt-8">
      <BrandMark />
      <div className="flex flex-col items-start gap-3 sm:items-end">
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:justify-end sm:gap-x-5 lg:gap-x-7">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-heading text-[0.6rem] tracking-[0.16em] text-[var(--parchment-dim)] uppercase transition-colors hover:text-[var(--parchment)] sm:text-[0.65rem] sm:tracking-[0.18em]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
