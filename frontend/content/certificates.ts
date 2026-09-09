export type Certificate = {
  id: string;
  /** Name of the credential */
  title: string;
  /**
   * Where it was taken from — platform, school, or body
   * e.g. "Coursera", "A2SV", "AWS Training", "Google Cloud"
   */
  from: string;
  /** Month issued, e.g. "March" or "Mar" */
  month: string;
  /** Year issued, e.g. 2024 */
  year: number;
  /** Drive link or exact platform credential URL */
  href: string;
  /** Realm flavor label — optional */
  court?: string;
  /** Optional credential / license ID */
  credentialId?: string;
  topics?: string[];
  /** True until you drop in a real URL */
  placeholder?: boolean;
};

/** Display helper: "March 2024" */
export function certificateWhen(cert: Pick<Certificate, "month" | "year">): string {
  return `${cert.month} ${cert.year}`;
}

/**
 * The Oaths — certifications as medals in the Hall of Seals.
 * Set `from` (where taken), `month` + `year`, and `href` (Drive or platform URL).
 */
export const certificates: Certificate[] = [
  {
    id: "sample-cloud",
    title: "Your cloud or platform certificate",
    from: "Amazon Web Services",
    court: "The Outer Courts",
    month: "June",
    year: 2024,
    href: "https://drive.google.com/",
    topics: ["Cloud", "Architecture"],
    placeholder: true,
  },
  {
    id: "sample-algo",
    title: "Your algorithms / DSA certificate",
    from: "A2SV",
    court: "The Lists",
    month: "November",
    year: 2023,
    href: "https://drive.google.com/",
    topics: ["DSA", "Problem solving"],
    placeholder: true,
  },
  {
    id: "sample-course",
    title: "Your specialized course certificate",
    from: "Coursera",
    court: "The Scholar Halls",
    month: "March",
    year: 2023,
    href: "https://www.coursera.org/",
    topics: ["Craft"],
    placeholder: true,
  },
];

export function getCertificates() {
  return certificates;
}
