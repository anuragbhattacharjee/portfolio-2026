import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'


import HomePage from "./pages/HomePage";
import WorkDetailPage from "./pages/WorkDetailPage";
// import ResearchPage from "./pages/ResearchPage";

const experience = [
  {
    period: "2023 — 2026",
    company: "Execulink Telecom",
    role: "Full Stack Developer",
  },
  {
    period: "2018 — 2021",
    company: "Webable Digital",
    role: "Senior Developer",
  },
  {
    period: "2016 — 2018",
    company: "IQVIA",
    role: "Software Developer",
  },
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <article className="cp-page" aria-label="Portfolio home page">
      <nav className={`cp-nav ${isScrolled ? "cp-nav-scrolled" : ""}`} aria-label="Primary navigation">
        <a className="cp-logo" href="index.html" aria-label="Anurag Bhattacharjee, home">
          <img src="/favicon.ico" alt="Anurag Bhattacharjee logo" height="32" width="32" />
        </a>
        <div className="cp-nav-links">
          <a className="cp-active" href="/" aria-current="page">Home</a>
          <a href="work">Work</a>
          <a href="research">Research</a>
          <a href="blogs">Blogs</a>
          <a className="cp-resume" href="/Anurag_Bhattacharjee_Resume_2026.pdf" target="_blank">Résumé</a>
        </div>
      </nav>
      <div className="cp-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<WorkDetailPage />} />
          {/* <Route path="/research" element={<ResearchPage />} /> */}
        </Routes>
      </div>
    </article>

  );
}

export default App;
