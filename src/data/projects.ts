import discordBotImage from "../assets/projects/discord-smily-bot.png";
import flaskStructureImage from "../assets/projects/flask-structure.jpg";
import flaskTranslatorImage from "../assets/projects/flask-translator.jpg";
import reactNativeImage from "../assets/projects/react-native-boilerplate.png";
import webpodImage from "../assets/projects/webpod.png";
import weddingImage from "../assets/projects/wedding-invitation.png";

export type Project = {
  slug: string;
  category: "professional" | "personal";
  kicker: string;
  title: string;
  description: string;
  technologies: string[];
  demonstrates: string;
  image?: string;
  imageAlt?: string;
  githubUrl?: string;
  liveUrl?: string;
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
    category: "professional",
    kicker: "Execulink Telecom · Legacy systems",
    title: "Contributed to the modernization of a 30 year old legacy telecom system.",
    demonstrates:
      "Understanding a large, interconnected system well enough to contribute to a gradual migration while keeping established telecom operations in view.",
    description:
      "Contributed to the early modernization of a 30-year-old Perl and MySQL platform that supports a telecom business end to end. The work included maintaining the existing system, helping shape a Django, React and MySQL foundation, migrating selected workflows, and sharing newer framework and Git practices with the team.",
    technologies: ["Perl", "MySQL", "Python", "Django", "React", "Git"],
    detail: {
      headline:
        "Contributed to the modernization of a 30 year old legacy telecom system.",
      role: "Full Stack Developer",
      scope: "Legacy system work, early modernization design, selected migrations and team training",
      context:
        "Execulink's core platform was a 30-year-old Perl and MySQL system supporting the telecom business end to end—from customer profiles and billing to employee management, provisioning, scheduled processes and many other connected operations. Several colleagues had worked with the company and its systems for 20 to 30 years, bringing essential business and technical context. The task was to understand those dependencies and contribute to a gradual path forward, not to replace the platform in one project.",
      responsibilities: [
        "Maintained and extended parts of the existing Perl and MySQL system, building an understanding of how its customer, employee and operational workflows were connected.",
        "Worked with senior colleagues on initial design decisions for a reusable application skeleton using Python, Django, React and MySQL.",
        "Implemented parts of that foundation and migrated selected workflows while the larger legacy platform continued to run.",
        "Prepared and delivered practical sessions on Python and Django, React, and Git to support adoption alongside the team's established Perl and SVN environment.",
      ],
      evidence:
        "By the end of my involvement, the team had established an initial Django, React and MySQL skeleton, completed selected migrations with it, and shared working knowledge of the newer frameworks and Git. The broader Perl and MySQL platform remained in active use, and its modernization continued as a long-term team effort.",
    },
  },
  {
    slug: "conversational-platform",
    category: "professional",
    kicker: "WebAble Digital · Marketplace and e-commerce support",
    title: "NLU microservice for customer-support chatbots",
    description:
      "A Flask service designed to help marketplace and e-commerce chatbots interpret common questions and automate parts of routine customer-support replies using language rules, curated datasets and lightweight statistical models.",
    technologies: ["Python", "Flask", "TF-IDF", "NLTK", "MySQL"],
    demonstrates:
      "Taking on an unfamiliar NLP problem, learning from real user messages and building a practical multilingual baseline before my formal AI/ML research.",
    githubUrl:
      "https://github.com/anuragbhattacharjee/nlu-microservice",
    detail: {
      headline:
        "Helping commerce chatbots understand routine customer questions.",
      role: "Senior Developer",
      scope: "User-query analysis, dataset creation and NLP service implementation",
      context:
        "Marketplace and e-commerce clients received recurring questions about products, specifications, orders, inventory, locations and contact information. The goal was not to replace customer-support teams, but to give chatbots enough structured understanding to automate parts of common replies and support the wider conversation workflow. This work preceded my formal AI/ML research, so I approached it as a practical engineering and data problem.",
      responsibilities: [
        "Reviewed real user queries and organized examples into commerce-focused intent, entity and sentiment datasets.",
        "Defined intents for common support needs, including product questions, purchases, specifications, order status, inventory, locations and organization contacts.",
        "Built Flask endpoints for intent and entity detection, sentiment analysis, date/time extraction and email parsing so the surrounding chatbot could consume structured results.",
        "Combined tokenization, language and part-of-speech processing, dictionary and conditional rules, and TF-IDF-based statistical classification.",
        "Supported English, Bengali and Banglish inputs and stored user context in MySQL as query patterns evolved.",
      ],
      evidence:
        "The preserved repository contains separate Flask resources for NLU, sentiment, email and date/time parsing; commerce-focused intent categories; English, Bengali and Banglish language resources; curated product, color and location data; TF-IDF model artifacts; and MySQL-backed user context. It documents a working support component within a broader chatbot workflow rather than a fully autonomous customer-service system.",
    },
  },
  {
    slug: "webpod",
    category: "personal",
    kicker: "Personal project · Focused listening",
    title: "WebPod by Anurag",
    description:
      "A distraction-free music player that searches YouTube and plays audio without pulling the listener into an endless recommendation feed.",
    technologies: ["React", "JavaScript", "YouTube API"],
    demonstrates:
      "Identifying a personal productivity problem and turning it into a focused, purpose-built interface.",
    image: webpodImage,
    imageAlt: "WebPod music player search and playback interface",
    githubUrl: "https://github.com/anuragbhattacharjee/webpod",
    detail: {
      headline:
        "A distraction-free music player I built to protect focused work.",
      role: "Designer and developer",
      scope: "Personal React application",
      context:
        "I wanted to listen to music while coding without landing on YouTube and getting pulled into recommendations. WebPod narrowed that experience to the useful part: searching for music and playing the audio.",
      responsibilities: [
        "Defined the project around one concrete productivity problem.",
        "Built the search, playback and instructional interface in React.",
        "Connected the application to YouTube search data.",
        "Published the source so the implementation could be explored and reused.",
      ],
      evidence:
        "The original source, component structure and YouTube service integration remain available in the GitHub repository.",
    },
  },
  {
    slug: "discord-nlp-smily-bot",
    category: "personal",
    kicker: "Personal project · NLP experiment",
    title: "Deep-learning Discord reaction bot",
    description:
      "A Discord bot that reads a message, detects sentiment, emotion and sarcasm, and replies with a suitable emoji.",
    technologies: ["Python", "Deep Learning", "NLP", "Discord"],
    demonstrates:
      "Turning a large language model experiment into a playful interaction that colleagues could actually use.",
    image: discordBotImage,
    imageAlt: "Discord conversation showing the NLP bot reacting with emoji",
    githubUrl:
      "https://github.com/anuragbhattacharjee/discord-nlp-smily-bot",
    detail: {
      headline:
        "Making sentiment, emotion and sarcasm visible through a playful Discord bot.",
      role: "Designer and developer",
      scope: "Personal deep-learning experiment",
      context:
        "I wanted to explore how a model trained on 1.2 billion tweets could interpret the tone of everyday team messages and turn its prediction into a lightweight social interaction.",
      responsibilities: [
        "Connected the trained language model to Discord messages.",
        "Mapped sentiment, emotion and sarcasm predictions to suitable emoji reactions.",
        "Packaged the experiment as a bot colleagues could interact with.",
        "Documented both the project and its source code publicly.",
      ],
      evidence:
        "The bot was deployed on an office server for colleagues to try, and the implementation remains linked on GitHub.",
    },
  },
  {
    slug: "swarnanurag-wedding",
    category: "personal",
    kicker: "Personal project · Storytelling",
    title: "My wedding invitation website",
    description:
      "A personal invitation with a wedding countdown, venue and timing details, the story of how we met, memorable dates and family photographs.",
    technologies: ["Web", "Responsive UI", "GitHub Pages"],
    demonstrates:
      "Using a small web experience to combine practical event information with warm, personal storytelling.",
    image: weddingImage,
    imageAlt: "SwarnAnurag wedding invitation website",
    githubUrl:
      "https://github.com/anuragbhattacharjee/swarnanurag-wedding",
    liveUrl:
      "https://anuragbhattacharjee.github.io/swarnanurag-wedding",
    detail: {
      headline:
        "Turning a wedding invitation into a small interactive story.",
      role: "Designer and developer",
      scope: "Personal event website",
      context:
        "A conventional invitation could share the date and venue, but a website offered room for a countdown, our story, a timeline of memorable dates and family photographs.",
      responsibilities: [
        "Organized essential event details into an easy-to-follow experience.",
        "Designed a visual timeline for personal milestones.",
        "Balanced practical information with photographs and storytelling.",
        "Published the finished site with its source available on GitHub.",
      ],
      evidence:
        "The archived project includes both a public GitHub Pages experience and its source repository.",
    },
  },
  {
    slug: "flask-project-skeleton",
    category: "personal",
    kicker: "Personal project · Backend foundations",
    title: "Flask project skeleton",
    description:
      "A reusable Flask structure created after maintaining an NLU microservice that had outgrown an ad-hoc project layout.",
    technologies: ["Python", "Flask", "Architecture"],
    demonstrates:
      "Extracting a repeatable engineering pattern from the maintainability problems encountered in a growing service.",
    image: flaskStructureImage,
    imageAlt: "Diagram of the Flask project structure",
    githubUrl: "https://github.com/anuragbhattacharjee/flask-structure",
    detail: {
      headline:
        "A practical Flask foundation shaped by a growing production service.",
      role: "Designer and developer",
      scope: "Reusable backend boilerplate",
      context:
        "While developing an NLU microservice, I found that its originally loose Flask layout became difficult to maintain as the application grew. Rebuilding the service was not practical, so I captured a clearer structure for future projects.",
      responsibilities: [
        "Identified the structural problems that emerged as the service grew.",
        "Organized a Flask application into reusable, maintainable boundaries.",
        "Created the repository as a starting point for later services.",
        "Shared the structure publicly for other Python developers.",
      ],
      evidence:
        "The resulting boilerplate is preserved as a public GitHub repository and documents the structure as working code.",
    },
  },
  {
    slug: "react-native-boilerplate",
    category: "personal",
    kicker: "Personal project · Mobile foundations",
    title: "React Native boilerplate",
    description:
      "A starter application with authentication and app screens, switch and stack navigation, reusable components, SafeAreaView and flex layouts.",
    technologies: ["React Native", "JavaScript", "Navigation"],
    demonstrates:
      "Packaging common mobile application patterns into a practical learning resource and reusable starting point.",
    image: reactNativeImage,
    imageAlt: "React Native starter application screens",
    githubUrl:
      "https://github.com/anuragbhattacharjee/rn_seed_navigation_login",
    detail: {
      headline:
        "A reusable React Native starting point for authentication and navigation.",
      role: "Designer and developer",
      scope: "Mobile application boilerplate",
      context:
        "Starting a mobile application often repeats the same foundational work: authentication screens, app screens, safe areas, layout, navigation and component organization.",
      responsibilities: [
        "Created authentication and application screen flows.",
        "Combined switch and stack navigation patterns.",
        "Demonstrated SafeAreaView and flex-based screen layouts.",
        "Organized reusable components, props and state into a starter project.",
      ],
      evidence:
        "The public repository preserves the boilerplate as a working reference for learning and new React Native projects.",
    },
  },
  {
    slug: "flask-translator",
    category: "personal",
    kicker: "Personal project · Language utility",
    title: "Flask translator",
    description:
      "A Python project for translating a list of text into a selected language through Google’s translation API.",
    technologies: ["Python", "Flask", "Translation API"],
    demonstrates:
      "Wrapping a language service in a focused utility with a small, understandable surface area.",
    image: flaskTranslatorImage,
    imageAlt: "Flask translator interface",
    githubUrl: "https://github.com/anuragbhattacharjee/google_translator",
    detail: {
      headline:
        "A focused Flask utility for translating batches of text.",
      role: "Designer and developer",
      scope: "Personal Python utility",
      context:
        "The project explored a straightforward workflow for sending multiple text values to a translation service and returning them in a chosen language.",
      responsibilities: [
        "Defined a simple input and output flow for a list of text.",
        "Connected the Python application to Google’s translation service.",
        "Used Flask to expose the translation workflow through a small web interface.",
        "Published the source as a compact reference implementation.",
      ],
      evidence:
        "The implementation remains available in its original public GitHub repository.",
    },
  },
];
