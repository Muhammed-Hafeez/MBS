import React from "react";
import { NavLink } from "react-router-dom";

function ProjectsGallery({images}) {
  return (
    <div className="projects_container">
      <h1 className="title">our projects</h1>
      <div className="gallery-box">
       {images.map((img)=>{
           return (
             <div className="gallery-item">
               <NavLink to={"/projects"}>
                 <img src={img} alt="img" />
               </NavLink>
             </div>
           );
        })}
      </div>
    </div>
  );
}

export default ProjectsGallery;
