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
        decription: "this is social media link",
      },
      {
        mediaIcon: "ic:twotone-whatsapp",
        mediaLink: "/",
        decription: "this is social media link",
      },
      {
        mediaIcon: "ri:youtube-fill",
        mediaLink: "/",
        decription: "this is social media link",
      },
      {
        mediaIcon: "mdi:instagram",
        mediaLink: "/",
        decription: "this is social media link",
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
                <li key={m.mediaIcon}>
                  <a href={m.mediaLink} aria-label={m.decription}>
                    <Icon icon={m.mediaIcon}></Icon>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="footer__info">
          <div className="footer__column">
            <h2>ABOUT COMPANY</h2>
            <p>{data.aboutinfo}</p>
          </div>

          <div className="footer__column">
            <h2>COMPANY</h2>
            <ul>
              <li>
                <NavLink to="/" aria-label="home page">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" aria-label="projects page">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" aria-label="about page">
                  who we are
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" aria-label="our services page">
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" aria-label="contact page">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h2>DEMOLITION OFFICE</h2>
            <p>{data.address}</p>
            <p>
              <a href={`mailto:${data.email}`} aria-label="business email">
                {data.email}
              </a>
            </p>
            <a href={`tel:+91${data.phoneno}`} aria-label="business phoneno">
              {data.phoneno}
            </a>
          </div>

          <div className="footer__column">
            <h2>BUSINESS HOURS</h2>
            <p>{data.businessHours}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
