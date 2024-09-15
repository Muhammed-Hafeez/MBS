import React from "react";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
function ServiceCard({ heading, icon, body, children }) {
  return (
    <div className="service_card">
      <h1>{heading}</h1>
      <Icon
        icon={icon ? icon : "mdi:hand-saw"}
        width={120}
        className="service_icon"
      />
      <p>{body}</p>
      <div className="children">{children ? children : ""}</div>
    </div>
  );
}
ServiceCard.propTypes = {
  heading: PropTypes.string.isRequired,
  icon: PropTypes.string,
  body: PropTypes.string.isRequired,
  children: PropTypes.object,
};
export default ServiceCard;
