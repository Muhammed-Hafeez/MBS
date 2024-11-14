import React, { useEffect, useState } from "react";
import { getServiceCard } from "../../../services/cms/servicecard";

function ServiceCard() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState([]);

  // For creating a new service card
  const [newHeading, setNewHeading] = useState("");
  const [newBody, setNewBody] = useState("");
  const [newHome, setNewHome] = useState(false);
  const [newIcon, setNewIcon] = useState("");

  // Update a specific card’s field
  const handleChange = (index, field, value) => {
    const updatedData = [...formData];
    updatedData[index][field] = value;
    setFormData(updatedData);
  };

  // Fetch service cards from server on mount
  useEffect(() => {
    (async () => {
      const serviceData = await getServiceCard();
      setData(serviceData.data);
      setFormData(serviceData.data);
    })();
  }, []);

  return (
    <div className="ContactHome">
      {/* New Service Card Form */}
      <h1 className="title col-rare">Create Service Card</h1>
      <form className="ContactForm">
        <span>
          <input
            type="text"
            placeholder="heading*"
            required
            onChange={(e) => setNewHeading(e.target.value)}
          />
          <input
            type="text"
            placeholder="icon* (e.g., mdi:saw-blade)"
            required
            onChange={(e) => setNewIcon(e.target.value)}
          />
        </span>
        <textarea
          placeholder="body*"
          required
          onChange={(e) => setNewBody(e.target.value)}
          className="message"
        />
        <label>
          <input
            type="checkbox"
            onChange={(e) => setNewHome(e.target.checked)}
            className="checkbox"
          />
          Display on Home
        </label>
        <button className="btn" type="submit">
          Add
        </button>
      </form>

      {/* Listing Existing Service Cards */}
      <h1 className="title col-rare">All Service Cards</h1>
      {formData.map((element, index) => (
        <form className="ContactForm" key={element.id}>
          <div className="index">{index + 1}</div>
          <input
            type="text"
            placeholder="heading*"
            required
            value={element.heading}
            onChange={(e) => handleChange(index, "heading", e.target.value)}
          />
          <input
            type="text"
            placeholder="icon*"
            required
            value={element.icon}
            onChange={(e) => handleChange(index, "icon", e.target.value)}
          />
          <textarea
            placeholder="body*"
            required
            value={element.body}
            onChange={(e) => handleChange(index, "body", e.target.value)}
            className="message"
          />
          <label>
            <input
              type="checkbox"
              checked={element.Home}
              onChange={(e) => handleChange(index, "Home", e.target.checked)}
              className="checkbox"
            />
            Display on Home
          </label>
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

export default ServiceCard;
