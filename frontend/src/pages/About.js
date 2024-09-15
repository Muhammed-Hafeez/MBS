import React from "react";
import { AboutCardHome } from "../components/AboutCards";
import TeamCard from "../components/Team";

function About() {
  const teamdata = [
    {
      src: "https://img.freepik.com/free-photo/building-construction-worker-site_23-2149124283.jpg",
      alt: "worker image",
      name: "bot",
      role: "this is role",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veritatis provident a, ea deserunt maiores reprehenderit iure veniam dolorem eius vero, earum facilis iusto exercitationem? Non necessitatibus nihil nesciunt impedit.",
      id: 1,
    },
    {
      src: "https://img.freepik.com/free-photo/building-construction-worker-site_23-2149124283.jpg",
      alt: "worker image",
      name: "bot",
      role: "this is role",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veritatis provident a, ea deserunt maiores reprehenderit iure veniam dolorem eius vero, earum facilis iusto exercitationem? Non necessitatibus nihil nesciunt impedit.",
      id: 2,
    },
    {
      src: "https://img.freepik.com/free-photo/building-construction-worker-site_23-2149124283.jpg",
      alt: "worker image",
      name: "bot",
      role: "this is role",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veritatis provident a, ea deserunt maiores reprehenderit iure veniam dolorem eius vero, earum facilis iusto exercitationem? Non necessitatibus nihil nesciunt impedit.",
      id: 3,
    },
    {
      src: "https://img.freepik.com/free-photo/building-construction-worker-site_23-2149124283.jpg",
      alt: "worker image",
      name: "bot",
      role: "this is role",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veritatis provident a, ea deserunt maiores reprehenderit",
      id: 4,
    },
  ];
  return (
    <div className="About">
      <div className="home_about">
        <AboutCardHome />
        <AboutCardHome />
        <hr />
        <div>
          <h1 className="title col-rare" style={{margin:"2rem"}}>our team</h1>
          <div className="TeamData">
            {teamdata.map((data) => {
              return <TeamCard data={data} key={data.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
