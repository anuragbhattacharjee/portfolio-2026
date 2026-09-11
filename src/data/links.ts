import codeIcon from "../assets/icons/code.svg";
import chessKnightIcon from "../assets/icons/chess-knight.svg";
import emailIcon from "../assets/icons/email.svg";
import githubIcon from "../assets/icons/github.svg";
import hackerRankIcon from "../assets/icons/hackerrank.svg";
import laptopCodeIcon from "../assets/icons/laptop-code.svg";
import linkedInIcon from "../assets/icons/linkedin.svg";
import mediumIcon from "../assets/icons/medium.svg";
import stackOverflowIcon from "../assets/icons/stack-overflow.svg";

export type ExternalProfile = {
  name: string;
  description: string;
  url: string;
  icon: string;
  color: string;
};

const githubProfile: ExternalProfile = {
  name: "GitHub",
  description: "Open-source projects and current engineering work",
  url: "https://github.com/anuragbhattacharjee",
  icon: githubIcon,
  color: "#6e7781",
};

const linkedInProfile: ExternalProfile = {
  name: "LinkedIn",
  description: "Professional experience and recommendations",
  url: "https://www.linkedin.com/in/anuragbhattacharjee/",
  icon: linkedInIcon,
  color: "#0a66c2",
};

const mediumProfile: ExternalProfile = {
  name: "Medium",
  description: "Technical and personal writing",
  url: "https://medium.com/@anuragbhattacharjee",
  icon: mediumIcon,
  color: "#169873",
};

const emailProfile: ExternalProfile = {
  name: "Email",
  description: "Start a conversation about engineering work",
  url: "mailto:bhattacharjee.anurag@outlook.com",
  icon: emailIcon,
  color: "#d34f3f",
};

export const connectProfiles: ExternalProfile[] = [
  linkedInProfile,
  emailProfile,
  githubProfile,
  mediumProfile,
];

export const externalProfiles: ExternalProfile[] = [
  githubProfile,
  linkedInProfile,
  {
    name: "Stack Overflow",
    description: "Programming questions and answers",
    url: "https://stackoverflow.com/users/2149373/anurag",
    icon: stackOverflowIcon,
    color: "#f48024",
  },
  {
    name: "Codewars",
    description: "Programming practice",
    url: "https://www.codewars.com/users/anuragbhattacharjee",
    icon: codeIcon,
    color: "#b1361e",
  },
  {
    name: "HackerRank",
    description: "Programming challenges under anuragon2",
    url: "https://www.hackerrank.com/profile/anuragon2",
    icon: hackerRankIcon,
    color: "#00a86b",
  },
  {
    name: "uHunt",
    description: "UVa Online Judge history",
    url: "https://uhunt.onlinejudge.org/id/71494",
    icon: laptopCodeIcon,
    color: "#7357a3",
  },
  mediumProfile,
  {
    name: "Chess.com",
    description: "Games and puzzles under bender_blunder",
    url: "https://www.chess.com/member/bender_blunder",
    icon: chessKnightIcon,
    color: "#769656",
  },
];
