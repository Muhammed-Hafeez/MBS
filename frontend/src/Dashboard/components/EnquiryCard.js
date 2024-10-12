import React, { useState } from "react";
import { Icon } from "@iconify/react";
function EnquiryCard({ data }) {
  const [icon, setIcon] = useState("mdi:message");
  const credentials = (
    <ul>
      <li>{data.firstname + " " + data.lastname}</li>
      <li>
        <a href={`tel:+91${data.phoneNo}`}>{data.phoneNo}</a>
      </li>
      <li>
        <a href={`mailto:${data.email}`}>{data.email}</a>
      </li>
    </ul>
  );
  const [showCredentials, setCredentials] = useState(credentials);
  return (
    <div className="EnqCard">
      {showCredentials}
      <div className="icon-div">
        <Icon
          icon={icon}
          width={"25px"}
          className="icon"
          onClick={() => {
            if (icon === "mdi:message") {
              setCredentials(<p>{data.message}</p>);
              return setIcon("ic:round-cancel");
            }
            setCredentials(credentials);
            return setIcon("mdi:message");
          }}
        ></Icon>
        <Icon icon={"mdi:trash"} width={"30px"} className="icon"></Icon>
      </div>
    </div>
  );
}

export default EnquiryCard;
