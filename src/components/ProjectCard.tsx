import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import "./ProjectCard.css";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`cp-project ${project.image ? "cp-project-visual" : ""}`}>
      {project.image && project.imageAlt && (
        <Link
          className="cp-project-image-link"
          to={`/projects/${project.slug}`}
          aria-label={`Read about ${project.title}`}
        >
          <img
            className="cp-project-image"
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
          />
        </Link>
      )}

      <Link className="cp-project-copy" to={`/projects/${project.slug}`}>
        <div className="cp-kicker">{project.kicker}</div>

        <h2>{project.title}</h2>

        <p>{project.description}</p>
      </Link>

      <footer>
        <div className="cp-tag-row">
          {project.technologies.map((technology) => (
            <span className="cp-tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="cp-project-actions">
          <Link
            className="cp-mono"
            to={`/projects/${project.slug}`}
            aria-label={`Read the ${project.title} project details`}
          >
            Details →
          </Link>
          {project.liveUrl && (
            <a
              className="cp-mono"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit site ↗
            </a>
          )}
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
        </div>
      </footer>
    </article>
  );
}

export default ProjectCard;
