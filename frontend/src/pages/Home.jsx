import React, { useEffect, useState } from "react";
import Hero from "../components/Hero.jsx";
import { AboutCardHome } from "../components/AboutCards.jsx";
import { NavLink } from "react-router-dom";
import ServiceCard from "../components/serviceCard.jsx";
import ContactHome from "../components/ContactHome.jsx";
import Spinner from "../components/Spinner.jsx";
import { getAboutCard } from "../services/cms/aboutcard.js";
import { getServiceCard } from "../services/cms/servicecard.js";
import { getProjectCard } from "../services/cms/projectcard.js";
import ProjectCards from "../components/ProjectCard.jsx";

function Home() {
  const [loading, setIsLoading] = useState(true);
  const [aboutCardData, setAboutCardData] = useState([]);
  const [serviceCardData, setServiceCardData] = useState([]);
  const [projectCardData, setProjectCardData] = useState([]);
  const [error, setError] = useState(null); // Error state for handling fetch errors

  useEffect(() => {
    (async () => {
      try {
        const aboutCard = await getAboutCard();
        const serviceCard = await getServiceCard();
        const projectCard = await getProjectCard();

        setAboutCardData(aboutCard.data);
        setServiceCardData(
          serviceCard.data.filter((elem) => {
            return elem.Home === true;
          })
        );
        setProjectCardData(projectCard.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (loading) return <Spinner />;

  if (error) {
    return <div className="error-message">{error}</div>; // Display error message
  }

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
          {serviceCardData.map((data,index) => {
            if (data.Home) {
              return (
                <ServiceCard
                  heading={data.heading}
                  body={data.body}
                  icon={data.icon}
                  key={data.id + index}
                />
              );
            }
            return "";
          })}
        </div>
      </div>
      <hr />
      <div className="home-gallery">
        <ProjectCards data={projectCardData} />
      </div>
      <hr />
      <ContactHome />
    </div>
  );
}

export default Home;
