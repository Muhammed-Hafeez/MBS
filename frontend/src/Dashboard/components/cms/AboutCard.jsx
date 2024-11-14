import React, { useEffect, useState } from "react";
import { getAboutCard } from "../../../services/cms/aboutcard";

function AboutCard() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newDescription, setNewDescription] = useState("");

  // Update a specific card’s field
  const handleChange = (index, field, value) => {
    const updatedData = [...formData];
    updatedData[index][field] = value;
    setFormData(updatedData);
  };

  // Fetch cards from server on mount
  useEffect(() => {
    (async () => {
      const Carddata = await getAboutCard();
      setData(Carddata.data);
      setFormData(Carddata.data);
    })();
  }, []);

  return (
    <div className="ContactHome">
      {/* New Card Form */}
      <h1 className="title col-rare">create card</h1>
      <form className="ContactForm">
        <span>
          <input
            type="text"
            placeholder="title*"
            required
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="place an image URL*"
            onChange={(e) => setNewImage(e.target.value)}
          />
        </span>
        <input
          type="text"
          placeholder="description*"
          required
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button className="btn" type="submit">
          Add
        </button>
      </form>

      {/* Listing Existing Cards */}
      <h1 className="title col-rare">all cards</h1>
      {formData.map((element, index) => (
        <form className="ContactForm" key={element.id}>
          <div className="index">{index + 1}</div>
          <input
            type="text"
            placeholder="title*"
            required
            value={element.title}
            onChange={(e) => handleChange(index, "title", e.target.value)}
          />
          <div>
            <img src={element.image} alt="image about card" width="200px" />
            <br />
            <input
              type="text"
              placeholder="place an image URL"
              value={element.image}
              onChange={(e) => handleChange(index, "image", e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="description*"
            required
            value={element.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
          />
          <span className="btn-holder">
            <button className="btn" type="submit">
              Save
            </button>
            <button className="btn" type="button">
              Delete
            </button>
          </span>
        </form>
      ))}
    </div>
  );
}

export default AboutCard;
