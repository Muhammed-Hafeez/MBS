import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectCard } from "../services/cms/projectcard";
import Spinner from "../components/Spinner";

const ProjectPage = ({ project }) => {
  if (!project) {
    return (
      <div className="error-message">
        <h1>Project Not Found</h1>
        <p>
          The project you are looking for does not exist or has been removed.
        </p>
      </div>
    );
  }

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
  const [projectData, setProjectData] = useState([]);
  const [error, setError] = useState(null); // Error state for handling fetch errors
  const [loading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const projectCard = await getProjectCard();
        setProjectData(projectCard.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (loading) return <Spinner />;

  if (error) {
    return (
      <div className="error-message">
        <h1>Oops!</h1>
        <p>{error}</p>
        {/* Optionally add a retry button */}
      </div>
    );
  }
  
  const project = projectData.find((obj) => obj.id === id);

  if (!project) {
    return (
      <div className="error-message">
        <h1>Project Not Found</h1>
        <p>
          We couldn’t find the project you’re looking for. Check the URL or
          browse other projects.
        </p>
      </div>
    );
  }

  return <ProjectPage project={project} />;
}
