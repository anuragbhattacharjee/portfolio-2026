import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { researchItems } from "../data/researches";

function ResearchesPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Research" },
        ]}
      />

      <header className="cp-page-intro">
        <div>
          {/* <div className="cp-kicker">Research</div> */}

          <h1 className="cp-heading">
            Research, experimentation and technical exploration.
          </h1>
        </div>

        <p className="cp-body">
          Academic and independent work around NLP, retrieval and applied AI,
          presented with the evaluation context and limitations that matter.
        </p>
      </header>

      <section className="cp-work-list">
        {researchItems.map((research, index) => (
          <Link
            className="cp-work-row"
            key={research.slug}
            to={`/research/${research.slug}`}
          >
            <span className="cp-mono">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h2>{research.title}</h2>

              <div className="cp-tag-row">
                {research.technologies.map((technology) => (
                  <span className="cp-tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="cp-work-evidence">
              {research.description}
            </div>

            <span className="cp-work-arrow">↗</span>
          </Link>
        ))}
      </section>
    </>
  );
}

export default ResearchesPage;