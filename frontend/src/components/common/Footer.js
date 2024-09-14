import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
const Footer = () => {
  const data = {
    aboutinfo:
      "In addition to our demolition expertise, we are committed to sustainable practices, recycling materials and minimizing environmental impact in every project we undertake.",
    address:
      "Opposite of Ramdev medical 29th main road BTM lake road BTM 1st stage Bangalore",
    email: "mbsdemolition@gmail.com",
    phoneno: "9341449858",
    businessHours: "Mon-Sun 11am-8pm",
    socialMedia: [
      {
        mediaIcon: "ic:twotone-facebook",
        mediaLink: "/",
      },
      {
        mediaIcon: "ic:twotone-whatsapp",
        mediaLink: "/",
      },
      {
        mediaIcon: "ri:youtube-fill",
        mediaLink: "/",
      },
      {
        mediaIcon: "mdi:instagram",
        mediaLink: "/",
      },
    ],
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__social">
          <p>Follow us</p>
          <ul className="social-icons">
            {data.socialMedia.map((m) => {
              return (
                <li>
                  <a href={m.mediaLink}>
                    <Icon icon={m.mediaIcon}></Icon>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="footer__info">
          <div className="footer__column">
            <h3>ABOUT COMPANY</h3>
            <p>{data.aboutinfo}</p>
          </div>

          <div className="footer__column">
            <h3>COMPANY</h3>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/about">Who We Are</NavLink>
              </li>
              <li>
                <NavLink to="/services">Our Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>DEMOLITION OFFICE</h3>
            <p>{data.address}</p>
            <p>
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </p>
            <a href={`tel:+91${data.phoneno}`}>{data.phoneno}</a>
          </div>

          <div className="footer__column">
            <h3>BUSINESS HOURS</h3>
            <p>{data.businessHours}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
