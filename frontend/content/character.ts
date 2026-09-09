/** One protagonist. The whole site is their chronicle — cinematic, not a resume dump. */

export const series = {
  title: "The Seat",
  subtitle: "A chronicle of systems that hold",
  season: "Season One",
  tagline: "In the realm of products, only what is built keeps the seat.",
};

export const realm = {
  headline: "A Developer of the Realm",
  line: "I build web applications, systems, and things that occasionally survive production.",
};

export const protagonist = {
  name: "Lata Amenu",
  epithet: "The Seatkeeper",
  house: "House Amenu",
  words: "What is built, endures.",
  billing: "Starring",
  role: "Full-stack engineer · Builder of backends",
  blurb:
    "One character. One craft. Lata raises the fortresses underneath products — APIs and services in Go, full-stack banners in React and Next.js — so clients keep the seat when the pressure comes.",
};

export type CastMember = {
  name: string;
  role: string;
  billing: "lead" | "supporting";
  line: string;
};

/** Languages & tools cast as the company around the Seatkeeper */
export const cast: CastMember[] = [
  {
    name: "Go",
    role: "Master of Arms",
    billing: "lead",
    line: "The steel of the backend — services that stand when the hall fills.",
  },
  {
    name: "React",
    role: "Herald of the Court",
    billing: "lead",
    line: "What the realm sees — interfaces that carry the banner forward.",
  },
  {
    name: "Next.js",
    role: "Lord of the Gates",
    billing: "lead",
    line: "The road into the product — routes, render, and the front of the keep.",
  },
  {
    name: "TypeScript",
    role: "Scribe of the Realm",
    billing: "supporting",
    line: "Contracts written before the battle — fewer surprises at dawn.",
  },
  {
    name: "Tailwind CSS",
    role: "Banner Weaver",
    billing: "supporting",
    line: "Swift cloth for the court — layout and polish without delay.",
  },
  {
    name: "shadcn/ui",
    role: "Court Artisan",
    billing: "supporting",
    line: "Composable pieces of the hall — buttons, dialogs, and quiet craft.",
  },
  {
    name: "Material UI",
    role: "Architect of Chambers",
    billing: "supporting",
    line: "Rooms of the product, ordered and ready for the people.",
  },
  {
    name: "Python",
    role: "Alchemist",
    billing: "supporting",
    line: "Scripts, rituals, and AI work behind the curtain.",
  },
  {
    name: "AI & ML",
    role: "Seer of Patterns",
    billing: "supporting",
    line: "Models that read the realm — insight where raw force is not enough.",
  },
];
