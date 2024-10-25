import React from "react";
import Hero from "../components/Hero.jsx";
import { AboutCardHome } from "../components/AboutCards.jsx";
import { NavLink } from "react-router-dom";
import ServiceCard from "../components/serviceCard.jsx";
import ContactHome from "../components/ContactHome.jsx";
import ProjectCards from "../components/ProjectCard.jsx";
import aboutCardData from "../data/aboutCard.json";
import serviceCardData from "../data/ServiceCard.json";
function Home() {
  return (
    <div>
      <Hero />
      <div className="home_about">
        <h1 className="title col-rare about_title">about us</h1>
        <AboutCardHome data={aboutCardData[0]}>
          <NavLink className="btn" to={"/contact"} aria-label="contact page">
            get in touch
          </NavLink>
          <NavLink className="btn" to={"/about"} aria-label="about page">
            read more
          </NavLink>
        </AboutCardHome>
      </div>
      <hr />
      <div className="service-container">
        <h1 className="title col-rare">our services</h1>
        <div className="services">
          {serviceCardData.map((data) => {
            if (data.Home) {
              return (
                <ServiceCard
                  heading={data.heading}
                  body={data.body}
                  icon={data.icon}
                  key={data.id}
                />
              );
            }
            return "";
          })}
        </div>
      </div>
      <hr />
      <div className="home-gallery">
        <ProjectCards />
      </div>
      <hr />
      <ContactHome />
    </div>
  );
}

export default Home;
