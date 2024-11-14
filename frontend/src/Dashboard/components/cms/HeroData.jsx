import React, { useEffect, useState } from "react";
import { getHeroData } from "../../../services/cms/herodata";

function HeroData() {
  const [data, setData] = useState({
    About: { title: "", heading: "", body: "", image: "" },
    Services: { title: "", heading: "", body: "", image: "" },
    Projects: { title: "", heading: "", body: "", image: "" },
  });

  useEffect(() => {
    (async () => {
      const response = await getHeroData();
      if (response.success) {
        setData(response.data);
      }
    })();
  }, []);

  const handleOnChange = (field, subField, value) => {
    setData((prevData) => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        [subField]: value,
      },
    }));
  };

  return (
    <div className="ContactHome">
      <h1 className="title col-rare">Edit Hero Sections</h1>
      {Object.keys(data).map((section) => (
        <form className="ContactForm" key={section}>
          <h2 className="title">{section} Page</h2>
          <input
            type="text"
            placeholder={`Title for ${section} page`}
            onChange={(e) => handleOnChange(section, "title", e.target.value)}
            value={data[section].title}
          />
          <input
            type="text"
            placeholder={`Heading for ${section} page`}
            onChange={(e) => handleOnChange(section, "heading", e.target.value)}
            value={data[section].heading}
          />
          <textarea
            placeholder={`Body text for ${section} page`}
            className="message"
            onChange={(e) => handleOnChange(section, "body", e.target.value)}
            value={data[section].body}
          />
          <input
            type="text"
            placeholder={`Image URL for ${section} page`}
            onChange={(e) => handleOnChange(section, "image", e.target.value)}
            value={data[section].image}
          />
        </form>
      ))}
      <button className="btn">Save</button>
    </div>
  );
}

export default HeroData;
