import React from "react";
import { Icon } from "@iconify/react";
function EnquiryCard({ data }) {
  return (
    <div className="EnqCard">
      <ul>
        <li>{data.firstname + " " + data.lastname}</li>
        <li>
          <a href={`tel:+91${data.phoneNo}`}>{data.phoneNo}</a>
        </li>
        <li>
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </li>
      </ul>
      <div className="icon-div">
        <Icon icon={"mdi:message"} width={"25px"} className="icon"></Icon>
        <Icon icon={"mdi:trash"} width={"30px"} className="icon"></Icon> 
      </div>
    </div>
  );
}

export default EnquiryCard;
