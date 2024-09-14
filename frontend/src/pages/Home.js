import React from "react";
import Hero from "../components/Hero.js";
import { AboutCardHome } from "../components/AboutCards.js";
import { NavLink } from "react-router-dom";
import ServiceCard from "../components/serviceCard.js";
import ProjectsGallery from "../components/ProjectsGallery.js";
import ContactHome from "../components/ContactHome.js";
function Home() {
  return (
    <div>
      <Hero />
      <div className="home_about">
        <h1 className="title col-rare about_title">about us</h1>
        <AboutCardHome>
          <NavLink className="btn" to={"/contact"}>
            get in touch
          </NavLink>
          <NavLink className="btn" to={"/about"}>
            read more
          </NavLink>
        </AboutCardHome>
      </div>
      <hr />
      <div className="service-container">
        <h1 className="title col-rare">our services</h1>
        <div className="services">
          <ServiceCard
            heading={"this is heading"}
            body={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet rem, iste eos magni debitis! Consectetur magni quam vero nihil minus, veniam aut, quibusdam, fugit iusto voluptatum corporis iste atque. "
            }
          />
          <ServiceCard
            heading={"this is heading"}
            body={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet rem, iste eos magni debitis! Consectetur magni quam vero nihil minus, veniam aut, quibusdam, fugit iusto voluptatum corporis iste atque. "
            }
            icon="mdi:saw-blade"
          />
          <ServiceCard
            heading={"this is heading"}
            body={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet rem, iste eos magni debitis! Consectetur magni quam vero nihil minus, veniam aut, quibusdam, fugit iusto voluptatum corporis iste atque. "
            }
            icon={"f7:hammer"}
          />
        </div>
      </div>
      <hr />
      <ProjectsGallery
        images={[
          "https://res.cloudinary.com/dbumvyukj/image/upload/v1725870936/bakkvwxk3iva8xvooprf.webp",
          "https://res.cloudinary.com/dbumvyukj/image/upload/v1725870936/bakkvwxk3iva8xvooprf.webp",
        ]}
      />
      <ContactHome/>
    </div>
  );
}

export default Home;
