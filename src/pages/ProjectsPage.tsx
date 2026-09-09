import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import "./PageLayout.css";
import "./ProjectsPage.css";

const professionalProjects = projects.filter(
  (project) => project.category === "professional",
);
const personalProjects = projects.filter(
  (project) => project.category === "personal",
);

function ProjectsPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Projects" },
        ]}
      />

      <header className="cp-page-intro">
        <div>
          <h1 className="cp-heading">
            Systems I helped shape—and experiments I built because the idea was
            worth trying.
          </h1>
        </div>

        <p className="cp-body">
          Professional case studies show how I approach complex systems.
          Personal projects show the curiosity behind the work: focused tools,
          playful NLP and reusable foundations.
        </p>
      </header>

      <section aria-labelledby="professional-projects-title">
        <div className="cp-section-head">
          <h2 className="cp-section-title" id="professional-projects-title">
            Professional project case studies
          </h2>
        </div>

        <div className="cp-index-list" aria-label="Professional project index">
          {professionalProjects.map((project, index) => (
            <Link
              className="cp-index-row"
              key={project.slug}
              to={"/projects/" + project.slug}
            >
              <span className="cp-mono">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h2>{project.title}</h2>

                <div className="cp-tag-row">
                  {project.technologies.map((technology) => (
                    <span className="cp-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="cp-index-evidence">
                <b>What it demonstrates:</b> {project.demonstrates}
              </div>

              <span className="cp-index-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="cp-personal-projects"
        aria-labelledby="personal-projects-title"
      >
        <div className="cp-section-head cp-section-head-with-copy">
          <div>
            <h2 className="cp-section-title" id="personal-projects-title">
              Projects I built for myself
            </h2>
            <p className="cp-body">
              Small ideas became useful tools, learning projects and stories I
              could share. Every card links directly to its original source.
            </p>
          </div>
          <a
            className="cp-mono"
            href="https://github.com/anuragbhattacharjee"
            target="_blank"
            rel="noreferrer"
          >
            More on GitHub ↗
          </a>
        </div>

        <div className="cp-personal-project-grid">
          {personalProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
