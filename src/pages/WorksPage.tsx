import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import Breadcrumb from "../components/Breadcrumb";

function WorksPage() {
  return (
    <>
      <Breadcrumb
        items={[
            { label: "Home", to: "/" },
            { label: "Works" },
        ]}
        />

      <header className="cp-page-intro">
        <div>
          {/* <div className="cp-kicker">Selected work</div> */}

          <h1 className="cp-heading">
            Systems I helped shape, rebuild or take from idea to use.
          </h1>
        </div>

        <p className="cp-body">
          A deliberately small selection. Each case study separates the
          problem, my responsibility, technical decisions and evidence—without
          turning every result into a headline.
        </p>
      </header>

      <section className="cp-work-list" aria-label="Project index">
        {projects.map((project, index) => (
          <Link
            className="cp-work-row"
            key={project.slug}
            to={`/work/${project.slug}`}
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

            <div className="cp-work-evidence">
              <b>What it demonstrates:</b>{" "}
              {project.demonstrates}
            </div>

            <span className="cp-work-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}

export default WorksPage;