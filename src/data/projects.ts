export type Project = {
  slug: string;
  kicker: string;
  title: string;
  description: string;
  technologies: string[];
  demonstrates: string;
  detail: {
    headline: string;
    role: string;
    scope: string;
    context: string;
    responsibilities: string[];
    evidence: string;
  };
};

export const projects: Project[] = [
  {
    slug: "legacy-modernization",
    kicker: "Recent professional work · Modernization",
    title: "Reframing a legacy telecom CRM",
    demonstrates:
  "Navigating legacy constraints, designing role-aware workflows and translating a modernization idea into a working prototype.",
    description:
      "A Django and React prototype for moving role-aware workflows out of a decades-old Perl application, including staff authentication and Microsoft SSO integration.",
    technologies: ["Python", "Django", "React", "SSO"],
    detail: {
      headline:
        "Taking a Python NLP platform from research to real users.",

      role: "Senior Developer",

      scope: "Research and backend leadership",

      context:
        "The product needed to understand common user intents, route conversations through defined workflows and connect client experiences to Facebook’s messaging channels.",

      responsibilities: [
        "Researched the NLP approach and translated it into an implementable product direction.",
        "Led development of the Python and Flask backend from the initial implementation.",
        "Designed service boundaries for intent handling and conversational workflows.",
        "Worked across technical discussions, implementation and mentoring as the platform evolved.",
      ],

      evidence:
        "The architecture moved beyond a prototype and supported a public-facing conversational product.",
    }
  },
  {
    slug: "conversational-platform",
    kicker: "Earlier professional work · Platform",
    title: "Conversational platform",
    description:
      "Research, backend design and technical leadership for a Python NLP product integrated with Messenger and Instagram.",
    technologies: ["Flask", "NLP"],
    demonstrates:
  "Navigating legacy constraints, designing role-aware workflows and translating a modernization idea into a working prototype.",
    detail: {
      headline:
        "Taking a Python NLP platform from research to real users.",

      role: "Senior Developer",

      scope: "Research and backend leadership",

      context:
        "The product needed to understand common user intents, route conversations through defined workflows and connect client experiences to Facebook’s messaging channels.",

      responsibilities: [
        "Researched the NLP approach and translated it into an implementable product direction.",
        "Led development of the Python and Flask backend from the initial implementation.",
        "Designed service boundaries for intent handling and conversational workflows.",
        "Worked across technical discussions, implementation and mentoring as the platform evolved.",
      ],

      evidence:
        "The architecture moved beyond a prototype and supported a public-facing conversational product.",
    }
  },
];