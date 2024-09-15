import React from "react";
import PropTypes from "prop-types";
function TeamCard({ data }) {
  return (
    <div className="TeamCard">
        <div className="TeamCardHead">
          <img src={data.src} alt={data.alt} className="profileImage" />
          <h2 className="title">{data.name}</h2>
          <div className="caption">{data.role}</div>
        </div>
        <p>{data.desc}</p>
    </div>
  );
}
TeamCard.propTypes = { data: PropTypes.object.isRequired };

export default TeamCard;
