import React from "react";
import { AboutCardHome } from "../components/AboutCards";
import TeamCard from "../components/Team";
import HeroCommon from "../components/common/HeroCommon";
import TeamData from "../data/TeamData.json";
import hero from "../data/hero.json";
import aboutCard from "../data/aboutCard.json";
function About() {
  return (
    <div className="About">
      <HeroCommon data={hero.About} />
      <div className="home_about">
        {aboutCard.map((data) => {
          return <AboutCardHome data={data} key={data.id}/>;
        })}
        <hr />
        <div>
          <h1 className="title col-rare" style={{ margin: "2rem" }}>
            our team
          </h1>
          <div className="TeamData">
            {TeamData.map((data) => {
              return <TeamCard data={data} key={data.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
