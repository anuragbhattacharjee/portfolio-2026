import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css'

import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import WorkDetailPage from "./pages/WorkDetailPage";
import ResearchesPage from "./pages/ResearchesPage";
import ResearchDetailPage from "./pages/ResearchDetailPage";
import BlogsPage from "./pages/BlogsPage";


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
        <Link className="cp-logo" to="/" aria-label="Anurag Bhattacharjee, home">
          <img src="/favicon.ico" alt="Anurag Bhattacharjee logo" height="32" width="32" />
        </Link>
        <div className="cp-nav-links">
          <Link className="cp-active" to="/" aria-current="page">Home</Link>
          <Link to="works">Projects</Link>
          <Link to="researches">AI/ML Researches</Link>
          <Link to="blogs">Blogs</Link>
          <a className="cp-resume" href="/Anurag_Bhattacharjee_Resume_2026.pdf" target="_blank">Résumé</a>
        </div>
      </nav>
      <div className="cp-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/work/:slug" element={<WorkDetailPage />} />
          <Route path="/researches" element={<ResearchesPage />} />
          <Route path="/research/:slug" element={<ResearchDetailPage />} />
          <Route path="/blogs" element={< BlogsPage />} />
        </Routes>
      </div>
      <footer className="site-footer">
        <p>© 2026 Anurag Bhattacharjee</p>
        <p>Built with React + TypeScript</p>
      </footer>
    </article>

  );
}

export default App;
