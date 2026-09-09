export type TrialSegment = {
  label: string;
  count: number;
  /** CSS color for the chart bar */
  tone: string;
};

export type TrialCourt = {
  id: "leetcode" | "codeforces" | "github";
  platform: string;
  /** Realm name for this prove-ground */
  court: string;
  handle: string;
  href: string;
  /** Primary tally shown large */
  total: number;
  /** What the total counts — “solved” vs forge strikes */
  unit: string;
  unitSingular: string;
  blurb: string;
  segments: TrialSegment[];
  /** Soft note under the chart — last verified snapshot */
  asOf: string;
};

/**
 * Trial Chart — LeetCode, Codeforces, and GitHub in one consistent ledger.
 * Update totals/segments when you want a fresh snapshot (or wire live APIs later).
 */
export const trials: TrialCourt[] = [
  {
    id: "leetcode",
    platform: "LeetCode",
    court: "The Proving Yard",
    handle: "@latii",
    href: "https://leetcode.com/u/latii/",
    total: 423,
    unit: "solved",
    unitSingular: "solved",
    blurb: "Blades tempered by daily trial.",
    asOf: "Snapshot · Sep 2026",
    segments: [
      { label: "Easy", count: 135, tone: "#5a8f6a" },
      { label: "Medium", count: 268, tone: "#c4a574" },
      { label: "Hard", count: 20, tone: "#c45c3e" },
    ],
  },
  {
    id: "codeforces",
    platform: "Codeforces",
    court: "The Lists",
    handle: "@latiiLA",
    href: "https://codeforces.com/profile/latiiLA",
    total: 151,
    unit: "solved",
    unitSingular: "solved",
    blurb: "Problems claimed across the lists.",
    asOf: "Snapshot · Sep 2026",
    segments: [
      { label: "< 1200", count: 138, tone: "#5a8f6a" },
      { label: "1200–1599", count: 12, tone: "#c4a574" },
      { label: "1600+", count: 1, tone: "#c45c3e" },
    ],
  },
  {
    id: "github",
    platform: "GitHub",
    court: "The Forge",
    handle: "@latiiLA",
    href: "https://github.com/latiiLA",
    total: 1223,
    unit: "contributions",
    unitSingular: "contribution",
    blurb: "Strikes at the forge this past year.",
    asOf: "Last 12 months · Sep 2026",
    segments: [
      { label: "Q1", count: 480, tone: "#5a8f6a" },
      { label: "Q2", count: 127, tone: "#c4a574" },
      { label: "Q3", count: 256, tone: "#c45c3e" },
      { label: "Q4", count: 360, tone: "#8f2433" },
    ],
  },
];
