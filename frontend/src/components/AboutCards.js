import React from "react";
import PropTypes from "prop-types";
function AboutCardHome({ title, children }) {
  return (
    <div className="about_sections">
      <div className="image">
        <img
          src="https://res.cloudinary.com/dbumvyukj/image/upload/v1725870938/e2xz0jpgafrczc0es0f9.webp"
          alt="worker"
          
        />
      </div>
      <div className="text_section">
        {title ? <h1 className="title col-rare">{title}</h1> : ""}
        <h1>Experienced Demolition Experts</h1>
        <p>
          With over 20 years of experience, we have successfully completed
          numerous demolition projects, earning a reputation for excellence and
          reliability in the industry.
        </p>
        <div className="aboutCardChildren">{children ? children : ""}</div>
      </div>
    </div>
  );
}
AboutCardHome.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
export { AboutCardHome };
