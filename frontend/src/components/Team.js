import React from "react";
import PropTypes from "prop-types";
function TeamCard({ data }) {
  return (
    <div className="TeamCard">
      <img src={data.src} alt={data.alt} className="profileImage" />
      <p className="name">{data.name}</p>
    </div>
  );
}
TeamCard.propTypes = { data: PropTypes.object.isRequired };

export default TeamCard;
