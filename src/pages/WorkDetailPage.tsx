import { projects } from "../data/projects";
import { useParams } from "react-router-dom";

function WorkDetailPage() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <main><p>Project not found</p></main>;
  }

  return (
    <main>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </main>
  );
}

export default WorkDetailPage;