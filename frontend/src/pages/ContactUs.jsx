import { useEffect, useState} from "react";
import ContactHome from "../components/ContactHome.jsx";
import { Icon } from "@iconify/react";
import { getWebData } from "../services/cms/webdata.js";
import Spinner from "../components/Spinner.jsx";

export default function ContactUs() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const webData = await getWebData();
        setData(webData.data); // Normal synchronous update
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
      <ContactHome />
      <hr />
      <div className="OurLocation">
        <iframe
          title="our location"
          src={data.addressForMaps}
          style={{ border: "0px" }}
          loading="lazy"
        ></iframe>
        <div className="info">
          <ul>
            <li>
              <a href={data.addressForLink} aria-label="location">
                <Icon icon="mdi:location" style={{ width: "30px" }} />
                <span>{data.addressInWords}</span>
              </a>
            </li>
            <li>
              <Icon icon="mdi:clock" style={{ width: "30px" }} />
              <p>{data.timings}</p>
            </li>
            <li>
              <Icon icon="mdi:mail" style={{ width: "30px" }} />
              <a href={`mailto:${data.email}`} aria-label="business email">
                {data.email}
              </a>
            </li>
            <li>
              <Icon icon="mdi:phone" style={{ width: "30px" }} />
              <a href={`tel:+91${data.phoneno}`} aria-label="business phoneno">
                {data.phoneNo}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
