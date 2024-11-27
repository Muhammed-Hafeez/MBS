import { useEffect, useState } from "react";
import HeroCommon from "../components/common/HeroCommon.jsx";
import ProjectCards from "../components/ProjectCard.jsx";
import { getProjectCard } from "../services/cms/projectcard.js";

function Projects() {
  const [projectData, setProjectData] = useState([]);
  const [error, setError] = useState(null); // Error state for handling fetch errors
  const [loading, setIsLoading] = useState(true);

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

  if (loading) return null;

  if (error) {
    return (
      <div className="error-message">
        <h1>Oops!</h1>
        <p>{error}</p>
      </div>
    );
  }
  return (
    <div>
      <HeroCommon
        data={{
          title: "our services",
          heading: "RESPECT & INTEGRITY IN ALL WE DO",
          body: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque sapiente sed quae consectetur in repellat, commodi similique perspiciatis eaque, vitae, saepe quo facilis cumque praesentium vel quidem amet provident esse?",
          image:
            "https://res.cloudinary.com/dbumvyukj/image/upload/v1725870937/jpmrxgxfnyv8fg9iopqc.webp",
        }}
      />
      <ProjectCards data={projectData} />
    </div>
  );
}

export default Projects;
