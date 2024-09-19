import React  from "react";
import ContactHome from "../components/ContactHome";
import { Icon } from "@iconify/react";

function ContactUs() {
  const data = {
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7830415122553!2d77.60022917380935!3d12.921661415973782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150095ff2ea9%3A0xef7799b4e82a6fa2!2s54%2C%208th%20Main%20Rd%2C%20New%20Gurappana%20Palya%2C%201st%20Stage%2C%20BTM%20Layout%2C%20Bengaluru%2C%20Karnataka%20560029%2C%20India!5e0!3m2!1sen!2sus!4v1726760949208!5m2!1sen!2sus",
    anchorlocation: "https://maps.app.goo.gl/9CVaHLvS1Ws3ohfX9",
    email: "mbsdemolition@gmail.com",
    phoneno: "9341449858",
  };
  return (
    <div>
      <ContactHome />
      <hr/>
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
              <p>Sunday To Saturday Morning 11:00 am to 8:00 pm Night</p>
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
