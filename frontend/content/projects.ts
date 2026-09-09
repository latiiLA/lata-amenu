export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  episode: number;
  chronicle: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  threat: string;
  strategy: string;
  claimed: string[];
  victory: string;
  links?: ProjectLink[];
  featured: boolean;
  placeholder?: boolean;
  /** Fantasy map label */
  realm: string;
  /** Position on the parchment map (0–100%) */
  map: { x: number; y: number };
};

/**
 * Replace these with your real work.
 * Each project = a realm on The Works map.
 */
export const projects: Project[] = [
  {
    slug: "flagship-api",
    episode: 1,
    chronicle: "I",
    title: "Your flagship API / service",
    tagline: "The opening siege — what realm you secured first.",
    year: "2024",
    role: "Backend / Full-stack",
    stack: ["Go", "PostgreSQL", "Redis", "Docker"],
    threat:
      "Describe the threat: scale, reliability, messy monolith, missing auth, slow endpoints — whatever you actually faced.",
    strategy:
      "Explain how the Seatkeeper designed the campaign: boundaries, data flow, auth, queues, trade-offs.",
    claimed: [
      "API design & implementation",
      "Data model & migrations",
      "Auth / access control",
      "Deploy & observability basics",
    ],
    victory:
      "Concrete outcome: faster responses, fewer incidents, shipped to N users — swap in real numbers.",
    links: [
      { label: "Live", href: "#" },
      { label: "Repo", href: "#" },
    ],
    featured: true,
    placeholder: true,
    realm: "The Iron Gate",
    map: { x: 22, y: 38 },
  },
  {
    slug: "fullstack-product",
    episode: 2,
    chronicle: "II",
    title: "Your end-to-end product build",
    tagline: "A banner raised across court and castle — UI to API to deploy.",
    year: "2024",
    role: "Full-stack",
    stack: ["Express", "React", "PostgreSQL", "Node.js"],
    threat:
      "What the client or users needed that did not exist yet — or what was broken in the old order.",
    strategy:
      "How you shaped the product surface and the Express backend underneath it.",
    claimed: [
      "Frontend flows",
      "Express API",
      "Database schema",
      "Hosting / CI basics",
    ],
    victory: "What shipped, who used it, and what improved after the banner was raised.",
    links: [{ label: "Live", href: "#" }],
    featured: true,
    placeholder: true,
    realm: "High Court",
    map: { x: 58, y: 28 },
  },
  {
    slug: "systems-hardening",
    episode: 3,
    chronicle: "III",
    title: "Your reliability or platform win",
    tagline: "The long night of outages — and the walls that held.",
    year: "2023",
    role: "Backend engineer",
    stack: ["Go", "Express", "Nginx", "Linux"],
    threat:
      "Outages, slow jobs, insecure endpoints, or a fragile deploy path — name the failure mode.",
    strategy:
      "How you held the line: caching, rate limits, logging, migrations, or load testing.",
    claimed: [
      "Diagnosis & profiling",
      "Hardening changes",
      "Docs / handoff for the team",
    ],
    victory: "Uptime, latency, or security outcome in plain language.",
    featured: true,
    placeholder: true,
    realm: "The Wall",
    map: { x: 72, y: 62 },
  },
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getArchiveProjects() {
  return projects.filter((p) => !p.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
