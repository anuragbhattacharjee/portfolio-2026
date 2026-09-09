import Recommendations from "../components/Recommendations";
import { recommendations } from "../data/recommendations.ts";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import ResearchCard from "../components/ResearchCard.tsx";
import { researchItems } from "../data/researches.ts";
import { notes } from "../data/notes.ts";
import { experiences } from "../data/experiences.ts";

function HomePage() {
  return (  
    <>
        <header className="cp-home-hero" id="home" aria-label="Anurag Bhattacharjee, senior full-stack engineer">
        <div>
            <div className="cp-kicker">Senior full-stack engineer · Canada</div>
            <h1 className="cp-display cp-home-title">I build and modernize web software with <em>Python and React.</em></h1>
        </div>
        <div className="cp-home-side">
            <p className="cp-body">Over ten years building product and internal software across telecom, digital platforms and healthcare analytics. My NLP research background now informs hands-on work with retrieval and modern AI applications.</p>
            <div className="cp-home-actions">
            <Link className="cp-text-link" to="works">View selected work ↘ </Link>
            <a className="cp-mono" href="https://github.com/anuragbhattacharjee" target="_blank">GitHub ↗</a>
            <a className="cp-mono" href="https://www.linkedin.com/in/anuragbhattacharjee/" target="_blank">LinkedIn ↗</a>
            </div>
        </div>
        </header>

        <Recommendations items={recommendations}/>

        <div className="cp-section-head">
        <h2 className="cp-section-title">Selected works</h2>
        <Link className="cp-mono" to="works">All works →</Link>
        </div>

        <section className="cp-project-grid" id="works" aria-label="Selected projects">
        {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.slug} project={project} />
        ))}
        </section>

        <section className="cp-experience" id="experiences">
        <div className="cp-section-head">
            <h2 className="cp-section-title">Professional Experiences</h2>
        </div>

        <div className="cp-experience-list">
            {experiences.map((item) => (
            <article className="cp-experience-row" key={item.company}>
                <span className="cp-mono">{item.period}</span>

                <div>
                <h3>{item.company}</h3>
                <p className="cp-experience-role">{item.role}</p>
                </div>

                <p className="cp-body">{item.summary}</p>
            </article>
            ))}
        </div>
        </section>

        <section id="research">
        <div className="cp-section-head">
            <h2 className="cp-section-title">Researches</h2>

            <Link className="cp-mono" to="/researches">
            All research →
            </Link>
        </div>

        <ResearchCard research={researchItems[0]} />
        </section>

        <section className="cp-home-note">
        <b>Currently exploring</b>
        <p className="cp-body">Building CareerCopilot as a learning project for typed React, FastAPI and measurable retrieval—not presenting it as production AI experience.</p>
        <a className="cp-mono" href="#">Build log →</a>
        </section>




        <section className="cp-notes" id="blogs">
        <div className="cp-section-head">
            <h2 className="cp-section-title">
            Notes
            </h2>

            <a className="cp-mono" href="YOUR_BLOG_URL">
            All notes →
            </a>
        </div>

        <div className="cp-work-list">
            {notes.slice(0, 3).map((note) => (
            <a
                className="cp-work-row"
                key={note.url}
                href={note.url}
                target="_blank"
                rel="noreferrer"
            >
                <span className="cp-mono">
                {note.date}
                </span>

                <div>
                <h2>{note.title}</h2>
                </div>

                <div />

                <span className="cp-work-arrow">
                ↗
                </span>
            </a>
            ))}
        </div>
        </section>
    </>
  );
}

export default HomePage;