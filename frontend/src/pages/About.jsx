import { AboutCardHome } from "../components/AboutCards.jsx";
import TeamCard from "../components/Team.jsx";
import HeroCommon from "../components/common/HeroCommon.jsx";
import hero from "../data/hero.json";
import { useEffect, useState } from "react";
import { getAboutCard } from "../services/cms/aboutcard.js";
import { getTeamCard } from "../services/cms/teamcard.js";
import { Error } from "./ErrorPages.jsx";
import Spinner from "../components/Spinner.jsx";

function About() {
  const [aboutCardData, setAboutCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [TeamData, setTeamData] = useState([]);
  useEffect(() => {
    (async () => {
      const aboutCard = await getAboutCard();
      const teamData = await getTeamCard();
      setTeamData(teamData.data);
      setAboutCardData(aboutCard.data);
      setIsLoading(false);
    })();
  }, []);
  if (isLoading) {
    return <Spinner />;
  }
  if (!aboutCardData && !TeamData) {
    return <Error />; 
  }
  return (
    <div className="About">
      <HeroCommon data={hero.About} />
      <div className="home_about">
        {aboutCardData.map((data) => {
          return <AboutCardHome data={data} key={data.id} />;
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
