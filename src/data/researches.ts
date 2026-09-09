import bertKenmeshArchitecture from "../assets/research/bert-kenmesh-architecture.png";

export type Research = {
  slug: string;
  kicker: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;

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

  links: {
    label: string;
    url: string;
  }[];
};

export const researchItems: Research[] = [
  {
    slug: "bert-kenmesh",

    kicker: "Master’s research · Biomedical NLP",

    title: "BERT-KenMeSH",

    description:
      "Research into automatic Medical Subject Headings indexing: a multi-label classification problem for assigning relevant concepts to biomedical articles.",

    technologies: ["Python", "PyTorch", "BERT", "NLP"],

    image: bertKenmeshArchitecture,
    imageAlt:
      "BERT-KenMeSH architecture combining PubMedBERT, a dilated CNN, KNN masks, label attention and a graph convolutional network",
    imageCaption: "BERT-KenMeSH architecture from my master’s thesis.",

    question:
      "Can document language and label relationships work together?",

    questionDescription:
      "The work combined PubMedBERT document representations and a dilated CNN with candidate masks from similar articles, label attention and a graph over MeSH relationships.",

    modelFlow: [
      {
        label: "PubMedBERT + dilated CNN",
        detail: "document features",
      },
      {
        label: "KNN + journal signals",
        detail: "candidate MeSH masks",
      },
      {
        label: "MeSH embeddings + GCN",
        detail: "label relationships",
      },
      {
        label: "Label-aware output",
        detail: "ranked MeSH predictions",
      },
    ],

    result: "Up to 94% Precision@1",

    resultDescription:
      "Reported evaluation result. Publish alongside the exact dataset split, experimental setting and linked thesis or paper.",

    establishes:
      "Experience with NLP research, model development and evaluation—not professional experience operating modern LLM systems in production.",

    connection:
      "It provides a foundation for current exploration of embeddings, retrieval quality and evaluation harnesses without pretending the two eras are identical.",
    links: [
      {
        label: "Code repository",
        url: "https://github.com/anuragbhattacharjee/KenMeSH",
      },
      {
        label: "Master’s thesis",
        url: "https://uwo.scholaris.ca/items/5f8d2433-f707-4fdc-9049-316a8dfb6db6",
      },
    ],
  },
  {
    slug: "bangla-speech-corpus",

    kicker: "Undergraduate thesis · Speech recognition · 2014",

    title: "Bangla Speech Corpus For Large Vocabulary ASR System",

    description:
      "A speech-corpus and baseline recognition study by Anurag Bhattacharjee and Sujoy Datta, built around standard Bangla as spoken across regions of Bangladesh.",

    technologies: ["CMUSphinx", "PocketSphinx", "HMM", "Speech corpus"],

    question:
      "How can a Bangla speech corpus support a large-vocabulary ASR baseline?",

    questionDescription:
      "The thesis prepared text, recorded audio, phonetic labels, a pronunciation dictionary and phoneme bigrams, then trained and evaluated a recognition system with the CMUSphinx toolchain.",

    modelFlow: [
      {
        label: "Text + recordings",
        detail: "regional speech samples",
      },
      {
        label: "Phonetic resources",
        detail: "labels + dictionary",
      },
      {
        label: "SphinxTrain",
        detail: "acoustic model",
      },
      {
        label: "PocketSphinx",
        detail: "baseline evaluation",
      },
    ],

    result: "Approximately 39.39%",

    resultDescription:
      "Performance reported in the 2014 thesis. The corpus and evaluation are best understood as an early baseline with limited training data.",

    establishes:
      "Early experience with speech-corpus construction, phonetic resources, acoustic-model training and ASR evaluation.",

    connection:
      "This undergraduate work is a historical foundation for later NLP research; it is not presented as evidence of current production speech-AI experience.",

    links: [
      {
        label: "Read the 2014 thesis",
        url: "/research/bangla-speech-corpus-asr-thesis.pdf",
      },
    ],
  },
];
