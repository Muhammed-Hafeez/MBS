import React from "react";
import ContactHome from "../components/ContactHome";
import { Icon } from "@iconify/react";
import Websitedata from "../data/webdata.json";
function ContactUs() {
  const data = {
    location: Websitedata.addressForMaps,
    anchorlocation: Websitedata.addreaaForLink,
    email: Websitedata.email,
    phoneno: Websitedata.phoneNo,
    addressInWords:Websitedata.addressInWords
  };
  return (
    <div>
      <ContactHome />
      <hr />
      <div className="OurLocation">
        <iframe
          title="our location"
          src={data.location}
          style={{ border: "0px" }}
          loading="lazy"
        ></iframe>
        <div className="info">
          <ul>
            <li>
              <a href={data.anchorlocation} aria-label="location">
                <Icon icon="mdi:location" style={{ width: "30px" }}></Icon>
                <span>Ramdev Medical BTM Layout</span>
              </a>
            </li>
            <li>
              <Icon icon="mdi:clock" style={{ width: "30px" }}></Icon>
              <p>{ data.addressInWords}</p>
            </li>
            <li>
              <Icon icon="mdi:mail" style={{ width: "30px" }}></Icon>
              <a href={`mailto:${data.email}`} aria-label="business email">
                {data.email}
              </a>
            </li>
            <li>
              <Icon icon="mdi:phone" style={{ width: "30px" }}></Icon>
              <a href={`tel:+91${data.phoneno}`} aria-label="business phoneno">
                {data.phoneno}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
