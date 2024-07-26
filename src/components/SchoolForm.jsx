import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SchoolForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    contact: "",
    image: null,
    email_id: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const schoolData = new FormData();
    schoolData.append("name", formData.name);
    schoolData.append("address", formData.address);
    schoolData.append("city", formData.city);
    schoolData.append("state", formData.state);
    schoolData.append("contact", formData.contact);
    schoolData.append("image", formData.image);
    schoolData.append("email_id", formData.email_id);

    try {
      const url = process.env.REACT_APP_BACKEND_URL;
      console.log(url);
      const { data } = await axios.post(`${url}/api/schools`, schoolData);
      alert(data?.message);
      setFormData({
        name: "",
        address: "",
        city: "",
        state: "",
        contact: "",
        image: null,
        email_id: "",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add School Information</h2>
      <form onSubmit={handleSubmit} className="school-form">
        <div className="form-group">
          <label htmlFor="name">School Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter school name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter state"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact Number:</label>
          <input
            type="number"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter contact number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image Upload:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Selected" />
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email_id">Email ID:</label>
          <input
            type="email"
            id="email_id"
            name="email_id"
            value={formData.email_id}
            onChange={handleChange}
            placeholder="Enter email ID"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SchoolForm;
