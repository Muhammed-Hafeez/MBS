
const CloudinaryUpload = async (image) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append("upload_preset", "ml_default");
    formData.append("cloud_name", "dbumvyukj");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dbumvyukj/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
        return data;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

export default CloudinaryUpload;