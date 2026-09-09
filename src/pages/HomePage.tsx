import { Link } from "react-router-dom";
import fallbackBlogImage from "../assets/blogs/fallback.jpeg";
import ProfileIcon from "../components/ProfileIcon";
import ProjectCard from "../components/ProjectCard";
import Recommendations from "../components/Recommendations";
import ResearchCard from "../components/ResearchCard";
import { blogs } from "../data/blogs";
import { experiences } from "../data/experiences";
import { connectProfiles, externalProfiles } from "../data/links";
import { projects } from "../data/projects";
import { recommendations } from "../data/recommendations";
import { researchItems } from "../data/researches";
import "./HomePage.css";

const professionalProjects = projects.filter(
  (project) => project.category === "professional",
);

function HomePage() {
  return (
    <>
      <header
        className="cp-home-hero"
        id="home"
        aria-label="Anurag Bhattacharjee, senior full-stack engineer"
      >
        <div>
          <div className="cp-kicker">
            Senior full-stack software engineer · Canada{" "}
            <span className="cp-canada-flag" aria-hidden="true">
              🇨🇦
            </span>
          </div>
          <h1 className="cp-display cp-home-title">
            10+ years of professional experience, specialising
            on <em>Python, React/TypeScript and applied AI.</em>
          </h1>
        </div>
        <div className="cp-home-side">
          <p className="cp-body">
            For more than 10 years, I&apos;ve built enterprise applications,
            internal platforms and APIs across telecom, healthcare, banking and
            digital commerce. My work includes six years with Python,
            contributing to the incremental modernization of a decades-old
            telecom platform, and helping create a C#/ASP.NET framework that
            reduced dashboard development time by 60%. I also built a
            multilingual NLU microservice to help marketplace and e-commerce
            chatbots interpret common customer questions and automate parts of
            routine support. My M.Sc. research produced BERT-KenMeSH, which
            achieved 94% Precision@1, and led to continued work with NLP,
            embeddings, vector search and RAG.
          </p>
          <div className="cp-home-actions">
            <Link className="cp-text-link" to="/projects">
              Explore projects ↘
            </Link>
            <a
              className="cp-mono"
              href="/Anurag_Bhattacharjee_Resume_2026.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Read my résumé ↗
            </a>
          </div>
        </div>
      </header>

      <section className="cp-connect" aria-labelledby="connect-title">
        <div className="cp-connect-copy">
          <div className="cp-kicker">Open To Work</div>
          <h2 id="connect-title">Let&apos;s connect and discuss possibilities.</h2>
          <p>
            I&apos;m currently open to full-time software engineering roles,
            business ideas and creative ventures.
          </p>
        </div>
        <div className="cp-connect-links" aria-label="Ways to connect">
          {connectProfiles.map((profile) => {
            const opensNewTab = profile.url.startsWith("http");

            return (
              <a
                className="cp-connect-link"
                key={profile.name}
                href={profile.url}
                target={opensNewTab ? "_blank" : undefined}
                rel={opensNewTab ? "noreferrer" : undefined}
                aria-label={"Connect with Anurag on " + profile.name}
              >
                <ProfileIcon icon={profile.icon} color={profile.color} />
                <span>{profile.name}</span>
              </a>
            );
          })}
        </div>
      </section>

      <Recommendations items={recommendations} />

      <div className="cp-section-head">
        <h2 className="cp-section-title">Selected projects</h2>
        <Link className="cp-mono" to="/projects">
          All projects →
        </Link>
      </div>

      <section
        className="cp-project-grid"
        id="projects"
        aria-label="Selected projects"
      >
        {professionalProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>

      <section className="cp-experience" id="experiences">
        <div className="cp-section-head">
          <h2 className="cp-section-title">Professional experience</h2>
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
          <h2 className="cp-section-title">AI/ML research</h2>

          <Link className="cp-mono" to="/researches">
            All research →
          </Link>
        </div>

        {researchItems.slice(0, 2).map((research) => (
          <ResearchCard key={research.slug} research={research} />
        ))}
      </section>

      <section className="cp-currently-exploring">
        <b>Currently exploring</b>
        <p className="cp-body">
          I&apos;m also working on a small agentic AI feature that I plan to
          integrate into this portfolio: a chat experience where recruiters
          can ask about my résumé, experience, projects and potential fit for a
          role.
        </p>
      </section>

      <section className="cp-blogs" id="blogs">
        <div className="cp-section-head">
          <h2 className="cp-section-title">Blogs</h2>

          <Link className="cp-mono" to="/blogs">
            All blogs →
          </Link>
        </div>

        <div className="cp-blog-preview-grid">
          {blogs.slice(0, 3).map((blog) => (
            <a
              className="cp-blog-preview"
              key={blog.url}
              href={blog.url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={blog.image}
                alt={blog.imageAlt}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = fallbackBlogImage;
                }}
              />
              <div>
                <time className="cp-mono" dateTime={blog.date}>
                  {blog.date}
                </time>
                <h3>{blog.title}</h3>
                {blog.description && <p>{blog.description}</p>}
              </div>
              <span className="cp-index-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      <section
        className="cp-profile-section"
        aria-labelledby="profiles-title"
      >
        <div className="cp-section-head cp-section-head-with-copy">
          <div>
            <h2 className="cp-section-title" id="profiles-title">
              Code, writing & community
            </h2>
            <p className="cp-body">
              A wider trail of open-source projects, technical answers,
              programming practice and published writing.
            </p>
          </div>
        </div>

        <div className="cp-profile-grid">
          {externalProfiles.map((profile) => (
            <a
              className="cp-profile-link"
              key={profile.url}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="cp-profile-link-main">
                <ProfileIcon icon={profile.icon} color={profile.color} />
                <div>
                  <h3>{profile.name}</h3>
                  <p>{profile.description}</p>
                </div>
              </div>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
