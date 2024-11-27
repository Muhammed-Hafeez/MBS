import React, { useEffect, useState } from "react";
import HeroCommon from "../components/common/HeroCommon";
import ServiceCard from "../components/serviceCard";
import { getServiceCard } from "../services/cms/servicecard";
import Spinner from "../components/Spinner";
function Services() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const serviceData = await getServiceCard();
        setData(serviceData.data); // Normal synchronous update
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <Spinner/>; // Fallback is already handled by Suspense
  }

  if (!data) {
    return <p>Error: Failed to load data</p>;
  }
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
          {data.map((elem) => {
            return (
              <ServiceCard
                heading={elem.heading}
                body={elem.body}
                icon={elem.icon}
                key={elem._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
