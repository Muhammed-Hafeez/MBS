import React, { useEffect, useState } from "react";
import { getProjectCard } from "../../../services/cms/projectcard";

function ProjectCard() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState([]);

  // For creating a new team card
  const [newImage, setNewImage] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDetails, setNewDetails] = useState("");

  // Update a specific card’s field
  const handleChange = (index, field, value) => {
    const updatedData = [...formData];
    updatedData[index][field] = value;
    setFormData(updatedData);
  };

  // Fetch team cards from server on mount
  useEffect(() => {
    (async () => {
      const projectData = await getProjectCard();
      setData(projectData.data);
      setFormData(projectData.data);
    })();
  }, []);

  return (
    <div className="ContactHome">
      {/* New Team Card Form */}
      <h1 className="title col-rare">create project card</h1>
      <form className="ContactForm">
        <span>
          <input
            type="text"
            placeholder="Image URL*"
            required
            onChange={(e) => setNewImage(e.target.value)}
          />
          <input
            type="text"
            placeholder="Title*"
            required
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </span>
        <input
          type="text"
          placeholder="Description*"
          required
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <textarea
          className="message"
          placeholder="Details*"
          required
          onChange={(e) => setNewDetails(e.target.value)}
        />
        <button className="btn" type="submit">
          Add
        </button>
      </form>

      {/* Listing Existing Team Cards */}
      <h1 className="title col-rare">all project cards</h1>
      {formData.map((element, index) => (
        <form className="ContactForm" key={element.id}>
          <div className="index">{index + 1}</div>
          <input
            type="text"
            placeholder="Image URL*"
            required
            value={element.image}
            onChange={(e) => handleChange(index, "image", e.target.value)}
          />
          <input
            type="text"
            placeholder="Title*"
            required
            value={element.title}
            onChange={(e) => handleChange(index, "title", e.target.value)}
          />
          <input
            type="text"
            placeholder="Description*"
            required
            value={element.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
          />
          <textarea
            className="message"
            placeholder="Details*"
            required
            value={element.details}
            onChange={(e) => handleChange(index, "details", e.target.value)}
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

export default ProjectCard;
