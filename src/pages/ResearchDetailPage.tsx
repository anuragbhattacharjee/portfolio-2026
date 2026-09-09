import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { researchItems } from "../data/researches";

function ResearchDetailPage() {
  const { slug } = useParams();

  const research = researchItems.find(
    (item) => item.slug === slug
  );

  if (!research) {
    return (
      <main>
        <h1>Research not found</h1>
        <Link to="/research">Back to research</Link>
      </main>
    );
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Research", to: "/research" },
          { label: research.title },
        ]}
      />

      <header className="cp-research-hero">
        <div>
          <div className="cp-kicker">
            {research.kicker}
          </div>

          <h1 className="cp-display">
            {research.title}
          </h1>
        </div>

        <p className="cp-body">
          {research.description}
        </p>
      </header>

      <section className="cp-research-layout">
        <div className="cp-research-panel">
          <div className="cp-kicker">
            Research question
          </div>

          <h2 className="cp-section-title">
            {research.question}
          </h2>

          <p className="cp-body">
            {research.questionDescription}
          </p>

          <div className="cp-model-flow">
            {research.modelFlow.map((node) => (
              <div className="cp-model-node" key={node.label}>
                {node.label}
                <span>{node.detail}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cp-research-panel">
          <div className="cp-kicker">Evaluation</div>

          <h2 className="cp-section-title">
            Report the metric with its meaning and scope.
          </h2>

          <div className="cp-result">
            <b>{research.result}</b>
            <span>{research.resultDescription}</span>
          </div>

          <div className="cp-honesty">
            <h3>What this establishes</h3>
            <p>{research.establishes}</p>
          </div>

          <div className="cp-honesty">
            <h3>How it connects to current work</h3>
            <p>{research.connection}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResearchDetailPage;