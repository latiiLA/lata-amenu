export type BannerCourt = {
  id: string;
  platform: string;
  court: string;
  line: string;
  handle: string;
  href: string;
  /** Cloth colors for the hanging pennant */
  cloth: string;
  clothDeep: string;
  /** Optional tally shown on the cloth (e.g. problems solved) */
  tally?: {
    value: number;
    label: string;
  };
  placeholder?: boolean;
};

/**
 * The Banners — social presence as house banners raised in foreign courts.
 */
export const banners: BannerCourt[] = [
  {
    id: "github",
    platform: "GitHub",
    court: "The Forge",
    line: "Repositories, commits, and open steel.",
    handle: "@latiiLA",
    href: "https://github.com/latiiLA",
    cloth: "#3a322c",
    clothDeep: "#1a1612",
  },
  {
    id: "leetcode",
    platform: "LeetCode",
    court: "Proving Yard",
    line: "Daily trials. Four hundred blades.",
    handle: "@latii",
    href: "https://leetcode.com/u/latii/",
    cloth: "#4a3a28",
    clothDeep: "#241a10",
    tally: { value: 423, label: "solved" },
  },
  {
    id: "codeforces",
    platform: "Codeforces",
    court: "The Lists",
    line: "Problems claimed on the open lists.",
    handle: "@latiiLA",
    href: "https://codeforces.com/profile/latiiLA",
    cloth: "#2a3550",
    clothDeep: "#121828",
    tally: { value: 151, label: "solved" },
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    court: "The Great Hall",
    line: "Alliances where houses meet.",
    handle: "@latiiLA",
    href: "https://www.linkedin.com/in/latiiLA",
    cloth: "#8f2433",
    clothDeep: "#5c1520",
  },
  {
    id: "x",
    platform: "X",
    court: "Whisper Gallery",
    line: "Short cries across the realm.",
    handle: "@latiiLAB",
    href: "https://x.com/latiiLAB",
    cloth: "#2a3a48",
    clothDeep: "#121820",
  },
  {
    id: "telegram",
    platform: "Telegram",
    court: "Raven Roads",
    line: "Swift words by winged messenger.",
    handle: "@latiiLA",
    href: "https://t.me/latiiLA",
    cloth: "#2a4a5c",
    clothDeep: "#122028",
  },
  {
    id: "upwork",
    platform: "Upwork",
    court: "Free Companies",
    line: "Contracts for coin and craft.",
    handle: "Hire the Seatkeeper",
    href: "https://www.upwork.com/",
    cloth: "#6e5b45",
    clothDeep: "#3a3228",
    placeholder: true,
  },
];
