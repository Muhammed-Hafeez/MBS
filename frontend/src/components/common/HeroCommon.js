import React, { useRef } from "react";
import PropTypes from "prop-types";
import Typed from "../../utils/Typed";
function HeroCommon({ data }) {
  const headingElement = useRef(null);
  Typed(data.heading, headingElement);
  return (
    <div
      className="HeroCommon"
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div className="hero-info">
        <h1 className="title col-rare">{data.title}</h1>
        <h2 className="heading" ref={headingElement}>{""}</h2>
        <p>{data.body}</p>
      </div>
    </div>
  );
}
HeroCommon.propTypes = { data: PropTypes.object.isRequired };
export default HeroCommon;
