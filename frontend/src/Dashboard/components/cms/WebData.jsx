import React, { useEffect, useState } from "react";
import { getWebData } from "../../../services/cms/webdata";

function WebData() {
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({
    smallDescription: "",
    addressInWords: "",
    addressForMaps: "",
    addressForLink: "",
    email: "",
    phoneNo: "",
    timings: "",
    socialMedia: [],
  });

  // Update a specific field’s value
  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Update a specific social media field
  const handleSocialMediaChange = (index, field, value) => {
    const updatedSocialMedia = [...formData.socialMedia];
    updatedSocialMedia[index][field] = value;
    setFormData((prevData) => ({
      ...prevData,
      socialMedia: updatedSocialMedia,
    }));
  };

  // Fetch web data from server on mount
  useEffect(() => {
    (async () => {
      const response = await getWebData();
      if (response.success) {
        setData(response.data);
        setFormData(response.data || formData); // Fallback to ensure formData is initialized
      }
    })();
  }, []);

  // Ensure formData is fully populated before rendering
  return formData ? (
    <div className="ContactHome">
      <h1 className="title col-rare">edit web data</h1>
      <form className="ContactForm">
        <label>Small Description:</label>
        <textarea
          value={formData.smallDescription || ""}
          onChange={(e) => handleChange("smallDescription", e.target.value)}
          required
          className="message"
        />
        <label>Address (In Words):</label>
        <textarea
          value={formData.addressInWords || ""}
          onChange={(e) => handleChange("addressInWords", e.target.value)}
          required
          className="message"
        />
        <label>Address (For Maps Embed):</label>
        <textarea
          value={formData.addressForMaps || ""}
          onChange={(e) => handleChange("addressForMaps", e.target.value)}
          required
          className="message"
        />

        <label>Address (For Link):</label>
        <input
          type="text"
          value={formData.addressForLink || ""}
          onChange={(e) => handleChange("addressForLink", e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={formData.email || ""}
          onChange={(e) => handleChange("email", e.target.value)}
          required
        />

        <label>Phone Number:</label>
        <input
          type="text"
          value={formData.phoneNo || ""}
          onChange={(e) => handleChange("phoneNo", e.target.value)}
          required
        />

        <label>Timings:</label>
        <input
          type="text"
          value={formData.timings || ""}
          onChange={(e) => handleChange("timings", e.target.value)}
          required
        />

        <h2 className="title col-rare">Social Media Links</h2>
        {formData.socialMedia?.map((social, index) => (
          <div key={social._id || index} className="SocialMediaForm">
            <label>Media Icon:</label>
            <input
              type="text"
              value={social.mediaIcon || ""}
              onChange={(e) =>
                handleSocialMediaChange(index, "mediaIcon", e.target.value)
              }
              required
            />

            <label>Media Link:</label>
            <input
              type="text"
              value={social.mediaLink || ""}
              onChange={(e) =>
                handleSocialMediaChange(index, "mediaLink", e.target.value)
              }
              required
            />
          </div>
        ))}

        <button className="btn" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  ) : null;
}

export default WebData;
