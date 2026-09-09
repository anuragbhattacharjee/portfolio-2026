import { useState } from "react";
import type { Recommendation } from "../data/recommendations.ts";
import "./Recommendations.css";

type RecommendationsProps = {
  items: Recommendation[];
};

function Recommendations({ items }: RecommendationsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = items[currentIndex];

  const previous = () => {
    setCurrentIndex((index) =>
      index === 0 ? items.length - 1 : index - 1
    );
  };

  const next = () => {
    setCurrentIndex((index) =>
      index === items.length - 1 ? 0 : index + 1
    );
  };

  return (
    <section className="cp-recommendations" aria-label="Recommendations">
      <div className="cp-recommendation-content">
        <p className="cp-recommendation-quote">“{current.quote}”</p>
        {current.readMoreUrl && (
          <a
            className="cp-recommendation-read-more"
            href={current.readMoreUrl}
            target="_blank"
            rel="noreferrer"
          >
            Read full recommendation ↗
          </a>
        )}

        <div className="cp-recommendation-person">
          <a
            className="cp-recommendation-avatar"
            href={current.profileUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${current.name}'s LinkedIn profile`}
          >
            <img src={current.image} alt={current.imageAlt} />
          </a>

          <div>
            <a
              className="cp-recommendation-name"
              href={current.profileUrl}
              target="_blank"
              rel="noreferrer"
            >
              <b>{current.name}</b>
            </a>
            <span>{current.role}</span>
          </div>
        </div>
        <div className="cp-recommendation-controls">
          <button onClick={previous} aria-label="Previous recommendation">
            ←
          </button>

          <span className="cp-mono">
            {currentIndex + 1} / {items.length}
          </span>

          <button onClick={next} aria-label="Next recommendation">
            →
          </button>
        </div>
      </div>

    </section>
  );
}

export default Recommendations;
