import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import "./ProjectCard.css";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link className="cp-project" to={`/work/${project.slug}`}>
      <div>
        <div className="cp-kicker">{project.kicker}</div>

        <h2>{project.title}</h2>

        <p>{project.description}</p>
      </div>

      <footer>
        <div className="cp-tag-row">
          {project.technologies.map((technology) => (
            <span className="cp-tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <b aria-hidden="true">↗</b>
      </footer>
    </Link>
  );
}

export default ProjectCard;