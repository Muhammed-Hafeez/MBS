import React, { useEffect, useState } from "react";
import { getSwiperImages } from "../../../services/cms/swiper";

function Swiper() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState([]);

  // For creating a new swiper image card
  const [newUrl, setNewUrl] = useState("");
  const [newAlt, setNewAlt] = useState("");

  // Update a specific card’s field
  const handleChange = (index, field, value) => {
    const updatedData = [...formData];
    updatedData[index][field] = value;
    setFormData(updatedData);
  };

  // Fetch swiper images from server on mount
  useEffect(() => {
    (async () => {
      const response = await getSwiperImages();
      if (response.success) {
        setData(response.data);
        setFormData(response.data);
      }      
    })();
  }, []);

  return (
    <div className="ContactHome">
      {/* New Swiper Image Form */}
      <h1 className="title col-rare">Create Swiper Images</h1>
      <form className="ContactForm">
        <span>
          <input
            type="text"
            placeholder="Image URL"
            required
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
          />
          <input
            type="text"
            placeholder="Alternative Text"
            required
            value={newAlt}
            onChange={(e) => setNewAlt(e.target.value)}
          />
        </span>
        <button
          className="btn"
          type="button"
          onClick={() => {
            /* Add new image function here */
          }}
        >
          Add
        </button>
      </form>

      {/* Listing Existing Swiper Images */}
      <h1 className="title col-rare">All Swiper Images</h1>
      {formData.map((element, index) => (
        <form className="ContactForm" key={element.id}>
          <div className="index">{index + 1}</div>
          <img src={element.image} alt={element.alt} width="200px" />
          <input
            type="text"
            placeholder="Image URL"
            required
            value={element.image}
            onChange={(e) => handleChange(index, "image", e.target.value)}
          />
          <input
            type="text"
            placeholder="Alternative Text"
            required
            value={element.alt}
            onChange={(e) => handleChange(index, "alt", e.target.value)}
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

export default Swiper;
