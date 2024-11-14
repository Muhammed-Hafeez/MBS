import React, { useEffect, useState } from "react";
import { getTeamCard } from "../../../services/cms/teamcard";

function TeamCard() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState([]);

  // New card form inputs
  const [newSrc, setNewSrc] = useState("");
  const [newAlt, setNewAlt] = useState("");
  const [newName, setNewName] = useState("");

  // Function to update individual card data
  const handleChange = (index, field, value) => {
    const updatedData = [...formData];
    updatedData[index][field] = value;
    setFormData(updatedData);
  };

  // Fetch team cards from server
  useEffect(() => {
    (async () => {
      const teamData = await getTeamCard();
      setData(teamData.data);
      setFormData(teamData.data);
    })();
  }, []);

  return (
    <div className="ContactHome">
      {/* New Team Card Form */}
      <h1 className="title col-rare">Create Team Card</h1>
      <form className="ContactForm">
          <input
            type="text"
            placeholder="Image Source URL*"
            required
            onChange={(e) => setNewSrc(e.target.value)}
          />
          <input
            type="text"
            placeholder="Alt Text*"
            required
            onChange={(e) => setNewAlt(e.target.value)}
          />
          <input
            type="text"
            placeholder="Name*"
            required
            onChange={(e) => setNewName(e.target.value)}
          />
        <button className="btn" type="submit">Add</button>
      </form>

      {/* Displaying All Team Cards */}
      <h1 className="title col-rare">All Team Cards</h1>
      {formData.map((element, index) => (
        <form className="ContactForm" key={element.id}>
          <div className="index">{index + 1}</div>
          <img src={element.src} alt={element.alt} width="200px" />
          <input
            type="text"
            placeholder="Image Source URL*"
            required
            value={element.src}
            onChange={(e) => handleChange(index, "src", e.target.value)}
          />
          <input
            type="text"
            placeholder="Alt Text*"
            required
            value={element.alt}
            onChange={(e) => handleChange(index, "alt", e.target.value)}
          />
          <input
            type="text"
            placeholder="Name*"
            required
            value={element.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
          />
          <span className="btn-holder">
            <button className="btn" type="submit">Save</button>
            <button className="btn" type="button">Delete</button>
          </span>
        </form>
      ))}
    </div>
  );
}

export default TeamCard;
