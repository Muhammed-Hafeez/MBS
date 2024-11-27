import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
// import websiteData from "../../data/webdata.json";
import { getWebData } from "../../services/cms/webdata";

const Footer = () => {
  const [websiteData, setWebsiteData] = useState({
    smallDescription: "",
    addressInWords: "",
    email: "",
    phoneNo: "",
    timings: "",
    socialMedia: [],
  });
  useEffect(() => {
    (async () => {
      const response = await getWebData();
      setWebsiteData(response.data);
    })();
  }, []);
  const data = {
    aboutinfo: websiteData.smallDescription,
    address: websiteData.addressInWords,
    email: websiteData.email,
    phoneno: websiteData.phoneNo,
    businessHours: websiteData.timings,
    socialMedia: websiteData.socialMedia,
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__social">
          <p>Follow us</p>
          <ul className="social-icons">
            {data.socialMedia.map((m) => {
              return (
                <li key={m.mediaLink}>
                  <a href={m.mediaLink} aria-label={m.description}>
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
              <li>
                <NavLink to="/login" aria-label="login page">
                  dashboard page for admin's only
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
