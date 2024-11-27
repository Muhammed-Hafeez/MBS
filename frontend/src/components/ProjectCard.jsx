import { NavLink } from "react-router-dom";
const ProjectCard = ({ image, title, description, link }) => {
  
  return (
    <div className="project-card">
      <div className="card">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>

          <NavLink to={link} aria-label={`page for ${link}`} className={"btn-p"}>
            View Project 
           </NavLink>
        </div>
      </div>
    </div>
  );
};

const ProjectCards = ({data}) => {
  
 const projects = data;
  return (
    <div className="project-cards">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          link={`/project/${project.id}`}
        />
      ))}
    </div>
  );
};

export default ProjectCards;
