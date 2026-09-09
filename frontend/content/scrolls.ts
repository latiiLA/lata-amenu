export type ScrollSection = {
  heading?: string;
  body: string;
};

export type Scroll = {
  slug: string;
  /** Roman mark on the parchment */
  mark: string;
  title: string;
  tagline: string;
  /** ISO date or display string */
  dated: string;
  reading: string;
  topics: string[];
  sections: ScrollSection[];
  featured?: boolean;
  placeholder?: boolean;
};

/**
 * The Scrolls — sealed letters from the Seatkeeper (your articles / blog).
 * In the realm, word travels on parchment. Each entry here is one letter.
 * To seal a new one: add an object below.
 */
export const scrolls: Scroll[] = [
  {
    slug: "systems-that-hold",
    mark: "I",
    title: "Systems that hold",
    tagline: "Why the Seatkeeper builds fortresses under products — not just screens.",
    dated: "2026-03-12",
    reading: "6 min",
    topics: ["Architecture", "Go", "Craft"],
    featured: true,
    placeholder: true,
    sections: [
      {
        body: "Clients do not hire a banner. They hire what stands when the hall fills — APIs, queues, auth, and the dull courage of migrations done right.",
      },
      {
        heading: "The keep, not the court",
        body: "UI is the court. Backend is the keep. Both matter — but when pressure comes, only what is built underneath keeps the seat.",
      },
      {
        heading: "Seal this letter",
        body: "This letter is still unsealed. Write your real words in content/scrolls.ts — title, tagline, and sections — and the parchment will carry them.",
      },
    ],
  },
  {
    slug: "from-switch-to-service",
    mark: "II",
    title: "From payment switch to product service",
    tagline: "Lessons from card systems that transfer when you ship for clients.",
    dated: "2026-01-28",
    reading: "8 min",
    topics: ["Payments", "Reliability", "Career"],
    featured: true,
    placeholder: true,
    sections: [
      {
        body: "A switch does not forgive. Latency, reconciliation, and quiet failures at 2 a.m. teach a builder how services must behave under load.",
      },
      {
        heading: "What transfers",
        body: "Idempotency, clear boundaries, and observability are not bank jargon — they are the same steel you raise for any product that must endure.",
      },
      {
        heading: "Seal this letter",
        body: "Swap in your real story: what you learned at Cooperative Bank of Oromia and how it shapes how you build today.",
      },
    ],
  },
  {
    slug: "a2sv-and-the-long-game",
    mark: "III",
    title: "A2SV and the long game",
    tagline: "Competitive programming as tempering — then shipping with a company of peers.",
    dated: "2025-11-04",
    reading: "5 min",
    topics: ["A2SV", "Learning", "Shipping"],
    featured: true,
    placeholder: true,
    sections: [
      {
        body: "Speed under a clock is one forge. Building with others toward Silicon Valley standards is another. Both leave marks on the Seatkeeper.",
      },
      {
        heading: "Seal this letter",
        body: "Tell what A2SV changed in how you think, code, and collaborate — then delete this line.",
      },
    ],
  },
];

export function getFeaturedScrolls() {
  return scrolls.filter((s) => s.featured !== false);
}

export function getScrollBySlug(slug: string) {
  return scrolls.find((s) => s.slug === slug);
}
