import { Link } from "react-router-dom";
import type { Research } from "../data/research";

type ResearchCardProps = {
  research: Research;
};

function ResearchCard({ research }: ResearchCardProps) {
  return (
    <Link
      className="cp-project"
      to={`/research/${research.slug}`}
    >
      <div>
        <div className="cp-kicker">
          {research.kicker}
        </div>

        <h2>{research.title}</h2>

        <p>{research.description}</p>
      </div>

      <footer>
        <div className="cp-tag-row">
          {research.technologies.map((technology) => (
            <span className="cp-tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <b>↗</b>
      </footer>
    </Link>
  );
}

export default ResearchCard;