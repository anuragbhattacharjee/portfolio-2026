import cassieHoltImage from "../assets/recommendations/cassie-holt.jpeg";
import tammyLewisImage from "../assets/recommendations/tammy-lewis.jpeg";
import debashisRoyImage from "../assets/recommendations/debashis-roy.jpeg";
import siddarthoSarkerImage from "../assets/recommendations/siddartho-zeet-sarker.jpeg";

export type Recommendation = {
  quote: string;
  name: string;
  role: string;
  profileUrl: string;
  image: string;
  imageAlt: string;
  readMoreUrl?: string;
};

export const recommendations: Recommendation[] = [
  {
    quote:
      "I recently worked with Anurag on a healthcare IT tool and he was a pleasure to work with and was very collaborative. We met on a weekly basis and discussed challenges and how to mitigate them. He was receptive to feedback but was also effective at providing his opinion for optimizing the tool. In addition, Anurag consistently provided me with an updated tool according to the timeline we established together. Lastly, Anurag strives to think about the client first. Where Anurag did not find the tool to be user-friendly or thought our client may get confused he was quick to point this out and help the team problem-solve.",
    name: "Cassie Holt, PhD",
    role: "Associate Director, Product Strategy Lead at IQVIA",
    profileUrl: "https://www.linkedin.com/in/cassiefickley/",
    image: cassieHoltImage,
    imageAlt: "Portrait of Cassie Holt",
  },
  {
    quote:
      "One of Anurag’s most notable accomplishments has been spearheading the development of our community website and subsequent updates-phase currently underway. This platform is not only functional and user-friendly but also a testament to Anurag’s ability to innovate under tight deadlines. His extensive knowledge of technologies such as JavaScript, Node.js, React.js, Linux servers, and MongoDB enabled him to build a robust website from scratch, which is now the cornerstone of our global community. Anurag consistently exceeds expectations. He approaches challenges with a proactive mindset, devising effective solutions that drive organizational growth. For instance, his ability to develop policies and procedures for technology risk management and optimization has ensured ...",
    name: "Tammy Lewis",
    role: "Founder, Community of Guardians | Policy Officer, Health Canada",
    profileUrl: "https://www.linkedin.com/in/tammylewis7939a364",
    image: tammyLewisImage,
    imageAlt: "Portrait of Tammy Lewis",
    readMoreUrl: "https://www.linkedin.com/in/anuragbhattacharjee/",
  },
  {
    quote:
      "I have worked with Anurag for more then a year on a project. I found Anurag as a hard working and very serious team player. Anurag is a great networker, and certainly can get my full recommendation.",
    name: "Debashis Roy",
    role: "Leadership | Agile | Project & Service Delivery | Entrepreneurial Venture | Innovative | Big Data | BlockChain | AI",
    profileUrl: "https://www.linkedin.com/in/debashis-roy-63ab907/",
    image: debashisRoyImage,
    imageAlt: "Portrait of Debashis Roy",
  },
  {
    quote:
      "Anurag and I worked on a project for over a year for a leading pharmaceutical MNC. He had been an integral and invaluable member of the team, taking genuine interest in the project and ensuring that there is no stone left unturned in providing high-quality deliverables.\n\nAnurag is a very professional and motivated individual.It has been a very engaging and fruitful experience working with him.I wish him all the best wishes in his future endeavors.",
    name: "Siddartho Zeet Sarker",
    role: "Manager | Life Sciences & Healthcare | Strategy | Market Access, HEOR, RWE | Harvard Business School",
    profileUrl: "https://www.linkedin.com/in/siddartho-zeet-sarker/",
    image: siddarthoSarkerImage,
    imageAlt: "Portrait of Siddartho Zeet Sarker",
  },
];
