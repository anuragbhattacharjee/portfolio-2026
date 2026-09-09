import discordBotImage from "../assets/projects/discord-smily-bot.png";
import musicPlayerImage from "../assets/projects/webpod.png";
import introductionToAiImage from "../assets/blogs/introduction-to-ai.png";
import mapFilterReduceImage from "../assets/blogs/map-filter-reduce.jpeg";
import nlpFutureImage from "../assets/blogs/nlp-future.gif";
import reactStateImage from "../assets/blogs/react-state.png";
import socialMediaImage from "../assets/blogs/social-media.jpeg";

export type Blog = {
  title: string;
  description?: string;
  date: string;
  url: string;
  image: string;
  imageAlt: string;
};

export const mediumProfileUrl =
  "https://medium.com/@anuragbhattacharjee";

export const blogs: Blog[] = [
  {
    title: "I created a Deep Learning powered Discord Bot to react with smily 😎",
    description:
      "I have created a discord bot to read messages and detect the sentiment, emotion and sarcasm of the message according to it’s 1.2B twitter…",
    date: "2020-07-28",
    url: `${mediumProfileUrl}/i-created-a-deep-learning-powered-discord-bot-to-react-with-smily-fec831d30d1b`,
    image: discordBotImage,
    imageAlt: "Cover image for the deep-learning Discord bot article",
  },
  {
    title: "Natural Language Processing will change the world.",
    description:
      "Welcome to 2050!! where Natural language processing has changed your daily experience in life.",
    date: "2020-07-21",
    url: `${mediumProfileUrl}/natural-language-processing-will-change-the-world-ef66e9c942b7`,
    image: nlpFutureImage,
    imageAlt: "Cover image for the natural-language-processing article",
  },
  {
    title: "DIY Music Player with React js 📻",
    description:
      "Distraction-free music player to search for music from youtube and play the audio.",
    date: "2020-06-30",
    url: `${mediumProfileUrl}/diy-music-player-with-react-js-309d63cfbcba`,
    image: musicPlayerImage,
    imageAlt: "Cover image for the React music-player article",
  },
  {
    title: "Social media & multitasking is affecting our brain 🧠",
    description:
      "Did you ever feel that your phone is vibrating while it actually wasn’t? Or did you just hear a sound of notification when there was…",
    date: "2020-06-04",
    url: `${mediumProfileUrl}/social-media-multitasking-is-affecting-our-brain-976f98f72f2e`,
    image: socialMediaImage,
    imageAlt: "Cover image for the social-media and multitasking article",
  },
  {
    title: "A brief introduction to AI",
    description:
      "AI and Machine Learning are two buzz words that everyone hears almost every day. But when we see the job requirements there is a miss…",
    date: "2020-05-13",
    url: `${mediumProfileUrl}/a-brief-introduction-to-ai-22ca582493f6`,
    image: introductionToAiImage,
    imageAlt: "Cover image for the introduction to artificial intelligence",
  },
  {
    title: "Why we should never update React State directly",
    description:
      "Whoever worked or learned a bit of React probably knows that we should never change or update the state directly. Rather we should always…",
    date: "2020-01-27",
    url: `${mediumProfileUrl}/why-we-should-never-update-react-state-directly-c1b794fac59b`,
    image: reactStateImage,
    imageAlt: "Cover image for the article about updating React state",
  },
  {
    title: "Map!! Filter!! Reduce !!",
    date: "2019-03-09",
    url: `${mediumProfileUrl}/map-filter-reduce-555b765f2645`,
    image: mapFilterReduceImage,
    imageAlt: "Cover image for the Map, Filter and Reduce article",
  },
];
