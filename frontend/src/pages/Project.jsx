import projectData from "../data/projects.json";
import { useParams } from "react-router-dom";
const ProjectPage = ({ project }) => {
  return (
    <div className="project-page">
      <div className="project-header">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>

      <div className="project-details">
        <div
          className="image-section"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        <div className="info-section">
          <h2>About the Project</h2>
          <p>{project.details}</p>
        </div>
      </div>
    </div>
  );
};

export default function Project() {
  const params = useParams();
  const id = params.id;
  const project = projectData.find((obj) => obj.id === Number(id));
  return <ProjectPage project={project} />;
}
