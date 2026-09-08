import Recommendations from "../components/Recommendations";
import { recommendations } from "../data/recommendations.ts";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function HomePage() {
  return (  
    <>
        <header className="cp-home-hero">
        <div>
            <div className="cp-kicker">Senior full-stack engineer · Canada</div>
            <h1 className="cp-display cp-home-title">I build and modernize web software with <em>Python and React.</em></h1>
        </div>
        <div className="cp-home-side">
            <p className="cp-body">Over ten years building product and internal software across telecom, digital platforms and healthcare analytics. My NLP research background now informs hands-on work with retrieval and modern AI applications.</p>
            <div className="cp-home-actions">
            <a className="cp-text-link" href="work.html">View selected work ↘</a>
            <a className="cp-mono" href="https://github.com/anuragbhattacharjee" target="_blank">GitHub ↗</a>
            <a className="cp-mono" href="https://www.linkedin.com/in/anuragbhattacharjee/" target="_blank">LinkedIn ↗</a>
            </div>
        </div>
        </header>

        <Recommendations items={recommendations}/>

        <div className="cp-section-head">
        <h2 className="cp-section-title">Selected work</h2>
        <a className="cp-mono" href="work">All work →</a>
        </div>

        <section className="cp-project-grid" id="work" aria-label="Selected projects">
        {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
        ))}
        </section>

        <section className="cp-home-note">
        <b>Currently exploring</b>
        <p className="cp-body">Building CareerCopilot as a learning project for typed React, FastAPI and measurable retrieval—not presenting it as production AI experience.</p>
        <a className="cp-mono" href="#">Build log →</a>
        </section>
        <footer className="site-footer">
        <p>© 2026 Anurag Bhattacharjee</p>
        <p>Built with React + TypeScript</p>
        </footer>
    </>
  );
}

export default HomePage;