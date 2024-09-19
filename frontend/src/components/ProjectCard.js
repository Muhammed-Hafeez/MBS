import React from "react";
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

const ProjectCards = () => {
  const projects = [
    {
      image:
        "https://res.cloudinary.com/dbumvyukj/image/upload/v1725870936/bakkvwxk3iva8xvooprf.webp",
      title: "Project 1",
      description: "This is a description for project 1.",
      link: "/project",
    },
    {
      image:
        "https://res.cloudinary.com/dbumvyukj/image/upload/v1725870936/bakkvwxk3iva8xvooprf.webp",
      title: "Project 2",
      description: "This is a description for project 2.",
      link: "/project",
    },
    // Add more projects as needed
  ];

  return (
    <div className="project-cards">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectCards;
