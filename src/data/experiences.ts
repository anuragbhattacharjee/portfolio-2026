type Experience = {
  period: string;
  company: string;
  role: string;
  summary: string;  
};

export const experiences: Experience[] = [
  {
    period: "Aug 2023 — Jun 2026",
    company: "Execulink Telecom",
    role: "Full Stack Developer",
    summary:
      "Worked across Execulink's telecom platforms, maintaining existing Perl and MySQL systems, contributing to a Django and React modernization foundation, and building operational tools for DNS management, provisioning, monitoring and reporting.",
  },
  {
    period: "Sep 2018 — Aug 2021",
    company: "Webable Digital",
    role: "Senior Developer",
    summary:
      "Led Python product development for conversational systems and backend services, working across research, architecture, implementation and delivery.",
  },
  {
    period: "Jul 2015 — Aug 2018",
    company: "IQVIA",
    role: "Software Developer",
    summary:
      "Built analytics dashboards and reusable application frameworks using Angular and .NET for healthcare and pharmaceutical data products.",
  },
  {
    period: "Dec 2014 — Apr 2015",
    company: "BRAC IT",
    role: "Software Engineer",
    summary:
      "Worked on enterprise ERP applications using Groovy, Grails and PostgreSQL.",
  },
];
