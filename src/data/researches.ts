export type Research = {
  slug: string;
  kicker: string;
  title: string;
  description: string;
  technologies: string[];

  question: string;
  questionDescription: string;

  modelFlow: {
    label: string;
    detail: string;
  }[];

  result: string;
  resultDescription: string;

  establishes: string;
  connection: string;
};

export const researchItems: Research[] = [
  {
    slug: "bert-kenmesh",

    kicker: "Master’s research · Biomedical NLP",

    title: "BERT-KenMeSH",

    description:
      "Research into automatic Medical Subject Headings indexing: a multi-label classification problem for assigning relevant concepts to biomedical articles.",

    technologies: ["Python", "PyTorch", "BERT", "NLP"],

    question:
      "Can document language and label relationships work together?",

    questionDescription:
      "The work combined contextual document representations with sequence, local-feature and graph-based components to improve MeSH recommendation.",

    modelFlow: [
      {
        label: "BERT representations",
        detail: "document context",
      },
      {
        label: "Sequence + local features",
        detail: "text patterns",
      },
      {
        label: "Label graph",
        detail: "MeSH relationships",
      },
      {
        label: "Multi-label prediction",
        detail: "ranked terms",
      },
    ],

    result: "Up to 94% Precision@1",

    resultDescription:
      "Reported evaluation result. Publish alongside the exact dataset split, experimental setting and linked thesis or paper.",

    establishes:
      "Experience with NLP research, model development and evaluation—not professional experience operating modern LLM systems in production.",

    connection:
      "It provides a foundation for current exploration of embeddings, retrieval quality and evaluation harnesses without pretending the two eras are identical.",
  },
];