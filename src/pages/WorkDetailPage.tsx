import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { projects } from "../data/projects";

function WorkDetailPage() {
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
            { label: "Works", to: "/works" },
            { label: project.title },
        ]}
        />

      <header className="cp-case-head">
        <div className="cp-kicker">{project.kicker}</div>

        <h1 className="cp-display">
          {project.detail.headline}
        </h1>

        <p className="cp-body">
          {project.description}
        </p>
      </header>

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

export default WorkDetailPage;