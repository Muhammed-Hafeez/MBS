import React  from "react";
import { Icon } from "@iconify/react";

function ServiceCard({ heading, icon, body, children }) {
  return (
      <div className="service_card">
        <h1>{heading}</h1>
        <Icon
          icon={icon ? icon : "mdi:hand-saw"}
          width={100}
          className="service_icon"
        />
        <p>{body}</p>
        <div className="children">{children ? children : ""}</div>
    </div>
  );
}

export default ServiceCard;
