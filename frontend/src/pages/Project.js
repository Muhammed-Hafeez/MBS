import React from "react";

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

const project = {
  title: "Amazing Project",
  description:
    "This is an amazing project that demonstrates elegant design and functionality.",
  details:
    "This project uses SCSS and React to create a highly responsive and animated project card layout. It follows best practices in modern web development.",
  image:
    "https://res.cloudinary.com/dbumvyukj/image/upload/v1725870936/bakkvwxk3iva8xvooprf.webp",
};

export default function Project() {
  return <ProjectPage project={project} />;
}
