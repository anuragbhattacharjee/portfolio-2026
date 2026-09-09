type Experience = {
  period: string;
  company: string;
  role: string;
  summary: string;  
};

export const experiences: Experience[] = [
  {
    period: "2023 — 2026",
    company: "Execulink Telecom",
    role: "Full Stack Developer",
    summary:
      "Built and modernized internal and customer-facing systems across telecom operations, including Django/React modernization, DNS tooling and workflow automation.",
  },
  {
    period: "2018 — 2021",
    company: "Webable Digital",
    role: "Senior Developer",
    summary:
      "Led Python product development for conversational systems and backend services, working across research, architecture, implementation and delivery.",
  },
  {
    period: "2015 — 2018",
    company: "IQVIA",
    role: "Software Developer",
    summary:
      "Built analytics dashboards and reusable application frameworks using Angular and .NET for healthcare and pharmaceutical data products.",
  },
  {
    period: "2014 — 2015",
    company: "BRAC IT",
    role: "Software Engineer",
    summary:
      "Worked on enterprise ERP applications using Groovy, Grails and PostgreSQL.",
  },
];