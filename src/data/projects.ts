export type Project = {
  slug: string;
  kicker: string;
  title: string;
  description: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    slug: "legacy-modernization",
    kicker: "Recent professional work · Modernization",
    title: "Reframing a legacy telecom CRM",
    description:
      "A Django and React prototype for moving role-aware workflows out of a decades-old Perl application, including staff authentication and Microsoft SSO integration.",
    technologies: ["Python", "Django", "React", "SSO"],
  },
  {
    slug: "conversational-platform",
    kicker: "Earlier professional work · Platform",
    title: "Conversational platform",
    description:
      "Research, backend design and technical leadership for a Python NLP product integrated with Messenger and Instagram.",
    technologies: ["Flask", "NLP"],
  },
];