import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
function ProjectsGallery({ images }) {
  let i = 0;
  return (
    <div className="projects_container">
      <h1 className="title">our projects</h1>
      <div className="gallery-box">
        {images.map((img) => {
          i++;
          return (
            <div className="gallery-item" key={i}>
              <NavLink to={"/projects"}>
                <img loading="lazy" src={img} alt="img" />
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
ProjectsGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ProjectsGallery;
