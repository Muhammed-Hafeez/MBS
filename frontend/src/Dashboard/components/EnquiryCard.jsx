import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { deleteLead } from "../../services/analytics";
import { useDispatch } from "react-redux";
import { alertIsCalled } from "../../features/counter";
function EnquiryCard({ data, dataList, setData }) {
  const [icon, setIcon] = useState("mdi:message");
  const dispatch = useDispatch();
  const handleOndelete = async (id) => {
    const responce = await deleteLead(id);
    if (!responce.success) {
      return dispatch(
        alertIsCalled({
          called: true,
          type: responce.type ? result.type : "error",
          message: responce.message,
        })
      );
    }
    dispatch(
      alertIsCalled({
        called: true,
        type: "success",
        message: responce.message,
      })
    );
    const DataToRemove = data;
    setData(
      dataList.filter((elem) => {
        return elem._id !== DataToRemove._id;
      })
    );
  };

  const credentials = (
    <ul>
      <li>{data.firstName + " " + data.lastName}</li>
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
        <Icon
          icon={"mdi:trash"}
          width={"30px"}
          className="icon"
          onClick={() => handleOndelete(data._id)}
        ></Icon>
      </div>
    </div>
  );
}

export default EnquiryCard;
