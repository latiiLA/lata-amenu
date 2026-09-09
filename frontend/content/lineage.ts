export type LineageKind = "education" | "order" | "service";

export type ServiceRole = {
  title: string;
  /** Fill in later — leave empty to hide per-role dates */
  years?: string;
};

export type LineageEntry = {
  kind: LineageKind;
  mark: string;
  title: string;
  place: string;
  /** Overall span — use "Dates forthcoming" until you send start/end */
  years: string;
  detail: string;
  /** Optional nested posts — prefer separate entries for career ladders */
  roles?: ServiceRole[];
};

/**
 * Lineage & seals — education, orders, and appointments that forged the Seatkeeper.
 * Dates marked "Dates forthcoming" are placeholders until you provide them.
 */
export const lineage: LineageEntry[] = [
  {
    kind: "education",
    mark: "I",
    title: "Bachelor of Science — Software Engineering",
    place: "Addis Ababa Science and Technology University",
    years: "2017 – 2021",
    detail:
      "The first forging. Four years in Software Engineering at Addis Ababa Science and Technology University — graduated 2021 with the foundations that still hold: systems thinking, discipline, and the craft of building under constraint.",
  },
  {
    kind: "order",
    mark: "II",
    title: "A2SV — Africa to Silicon Valley",
    place: "Competitive programming & project building",
    years: "2 years",
    detail:
      "An order of builders. One year of competitive programming — speed, clarity, and pressure. One year of project building — shipping with a company of peers bound for Silicon Valley standards.",
  },
  {
    kind: "education",
    mark: "III",
    title: "Master of Science — Artificial Intelligence",
    place: "Addis Ababa University",
    years: "2023 – present",
    detail:
      "The deeper study. Graduate work in Artificial Intelligence at Addis Ababa University — sharpening models, judgment, and the long game behind systems that must endure.",
  },
  {
    kind: "service",
    mark: "IV",
    title: "Associate Research Assistant",
    place: "Adama Science and Technology University",
    years: "Dates forthcoming",
    detail:
      "Service in the house of research — supporting inquiry and technical work at Adama Science and Technology University.",
  },
  {
    kind: "service",
    mark: "V",
    title: "IT Trainee",
    place: "Cooperative Bank of Oromia",
    years: "Dates forthcoming",
    detail:
      "The first post inside the bank. Learning the systems, the floor, and the discipline of payments under live pressure.",
  },
  {
    kind: "service",
    mark: "VI",
    title: "Associate Card Banking Officer",
    place: "Cooperative Bank of Oromia",
    years: "Dates forthcoming",
    detail:
      "Card banking in the ranks — supporting card products, operations, and the day-to-day flow of the payment realm.",
  },
  {
    kind: "service",
    mark: "VII",
    title: "Card Banking Officer",
    place: "Cooperative Bank of Oromia",
    years: "Dates forthcoming",
    detail:
      "Full officer’s charge over card banking — ownership of flows, incidents, and the standards that keep cards trusted.",
  },
  {
    kind: "service",
    mark: "VIII",
    title: "Senior Payment Switch and Card System",
    place: "Cooperative Bank of Oromia",
    years: "Dates forthcoming",
    detail:
      "Senior seat at the switch. Payment switch and card systems at scale — the backbone that must hold when the realm settles.",
  },
];

export function getForging() {
  return lineage.filter((e) => e.kind === "education" || e.kind === "order");
}

export function getService() {
  return lineage.filter((e) => e.kind === "service");
}

export function getBankService() {
  return lineage.filter(
    (e) => e.kind === "service" && e.place === "Cooperative Bank of Oromia",
  );
}
