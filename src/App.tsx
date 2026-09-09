import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";

import reactIcon from "./assets/icons/react.svg";
import typescriptIcon from "./assets/icons/typescript.svg";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ResearchesPage from "./pages/ResearchesPage";
import ResearchDetailPage from "./pages/ResearchDetailPage";
import BlogsPage from "./pages/BlogsPage";
import "./App.css";


function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

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
    <article className="cp-page" aria-label="Anurag Bhattacharjee portfolio">
      <nav className={`cp-nav ${isScrolled ? "cp-nav-scrolled" : ""}`} aria-label="Primary navigation">
        <Link className="cp-logo" to="/" aria-label="Anurag Bhattacharjee, home">
          <img src="/favicon.ico" alt="Anurag Bhattacharjee logo" height="32" width="32" />
        </Link>
        <div className="cp-nav-links">
          <NavLink
            className={({ isActive }) => isActive ? "cp-active" : undefined}
            to="/"
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive ? "cp-active" : undefined}
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive || pathname.startsWith("/research/")
                ? "cp-active"
                : undefined
            }
            to="/researches"
          >
            AI/ML Researches
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive ? "cp-active" : undefined}
            to="/blogs"
          >
            Blogs
          </NavLink>
          <a className="cp-resume" href="/Anurag_Bhattacharjee_Resume_2026.pdf" target="_blank" rel="noreferrer">Résumé</a>
        </div>
      </nav>
      <div className="cp-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/researches" element={<ResearchesPage />} />
          <Route path="/research/:slug" element={<ResearchDetailPage />} />
          <Route path="/blogs" element={< BlogsPage />} />
        </Routes>
      </div>
      <footer className="site-footer">
        <p>© 2026 Anurag Bhattacharjee</p>
        <div className="site-footer-meta">
          <a
            className="site-footer-archive"
            href="https://github.com/anuragbhattacharjee/my-potfolio"
            target="_blank"
            rel="noreferrer"
            aria-label="Previous portfolio design source archive on GitHub"
          >
            Previous portfolio design ↗
          </a>
          <p className="site-footer-built">
            <span>Built with</span>
            <span className="site-footer-tech">
              <img src={reactIcon} alt="" aria-hidden="true" />
              React
            </span>
            <span aria-hidden="true">+</span>
            <span className="site-footer-tech">
              <img src={typescriptIcon} alt="" aria-hidden="true" />
              TypeScript
            </span>
          </p>
        </div>
      </footer>
    </article>

  );
}

export default App;
