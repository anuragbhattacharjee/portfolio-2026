import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { projects } from "../data/projects";
import "./DetailPageLayout.css";
import "./ProjectDetailPage.css";

function ProjectDetailPage() {
  const { slug } = useParams();

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return (
      <main>
        <h1>Project not found</h1>
        <Link to="/">Return home</Link>
      </main>
    );
  }

  return (
    <>
      <Breadcrumb
        items={[
            { label: "Home", to: "/" },
            { label: "Projects", to: "/projects" },
            { label: project.title },
        ]}
        />

      <header className="cp-detail-hero">
        <div>
          <div className="cp-kicker">{project.kicker}</div>

          <h1 className="cp-display">
            {project.detail.headline}
          </h1>
        </div>

        <div className="cp-detail-summary">
          <p className="cp-body">
            {project.description}
          </p>

          {(project.githubUrl || project.liveUrl) && (
            <div className="cp-case-actions">
              {project.githubUrl && (
                <a
                  className="cp-github-action"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span aria-hidden="true">★</span> View / star on GitHub ↗
                </a>
              )}
              {project.liveUrl && (
                <a
                  className="cp-text-link"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the archived site ↗
                </a>
              )}
            </div>
          )}
        </div>
      </header>

      {project.image && project.imageAlt && (
        <img
          className="cp-case-image"
          src={project.image}
          alt={project.imageAlt}
        />
      )}

      <section className="cp-case-meta">
        <div>
          <span>Role</span>
          <b>{project.detail.role}</b>
        </div>

        <div>
          <span>Scope</span>
          <b>{project.detail.scope}</b>
        </div>

        <div>
          <span>Stack</span>
          <b>{project.technologies.join(", ")}</b>
        </div>

        <div>
          <span>Project type</span>
          <b>{project.category === "professional" ? "Professional" : "Personal"}</b>
        </div>
      </section>

      <div className="cp-case-layout">
        <aside className="cp-case-index">
          <a href="#context">01 Context</a>
          <a href="#responsibility">02 Responsibility</a>
          <a href="#evidence">03 Evidence</a>
        </aside>

        <main>
          <section className="cp-case-section" id="context">
            <div className="cp-kicker">01 · Context</div>
            <h2 className="cp-section-title">The problem</h2>
            <p className="cp-body">
              {project.detail.context}
            </p>
          </section>

          <section
            className="cp-case-section"
            id="responsibility"
          >
            <div className="cp-kicker">
              02 · Responsibility
            </div>

            <h2 className="cp-section-title">
              What I was responsible for
            </h2>

            <ul className="cp-responsibilities">
              {project.detail.responsibilities.map(
                (responsibility, index) => (
                  <li key={responsibility}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {responsibility}
                  </li>
                )
              )}
            </ul>
          </section>

          <section className="cp-case-section" id="evidence">
            <div className="cp-kicker">03 · Evidence</div>

            <h2 className="cp-section-title">
              What happened
            </h2>

            <p className="cp-body">
              {project.detail.evidence}
            </p>
          </section>
        </main>
      </div>
    </>
  );
}

export default ProjectDetailPage;
