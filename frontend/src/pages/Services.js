import React from "react";
import HeroCommon from "../components/common/HeroCommon";
import ServiceCard from "../components/serviceCard";
function Services() {
  return (
    <div>
      <HeroCommon
        data={{
          title: "our services",
          heading: "RESPECT & INTEGRITY IN ALL WE DO",
          body: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque sapiente sed quae consectetur in repellat, commodi similique perspiciatis eaque, vitae, saepe quo facilis cumque praesentium vel quidem amet provident esse?",
          image:
            "https://res.cloudinary.com/dbumvyukj/image/upload/v1725870937/jpmrxgxfnyv8fg9iopqc.webp",
        }}
      />
      <div className="service-container">
        <div className="services serviceGrid">
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
    </div>
  );
}

export default Services;
