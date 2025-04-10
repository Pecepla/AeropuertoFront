import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { TextField, Button, Paper } from "@mui/material";
import axios from "axios";

const CreatePlane = () => {
 

 const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    Model: "",
    manufacture: "",
    registrationNumber: "",
    capacity: "",
    yearOfManufacture: "",
   
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/api/planes` , formData);
      alert("Pane created successfully!");
      navigate("../Plane"); 
    
    } catch (error) {
      console.error("Error creating Plane:", error);
      alert("Failed to create Plane.");

    }
  };

  return (
    <Paper style={{ padding: "20px", maxWidth: "500px", margin: "20px auto" }}>
      <h2>Create Plane</h2>
      <form onSubmit={handleSubmit}>
    <TextField
          label="model"
          name="model"
          value={formData.model}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="manufacture"
          name="manufacture"
          value={formData.manufacture}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="registrationNumbe"
          name="registrationNumbe"
         
          value={formData.registrationNumbe}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="capacity"
          name="capacity"
          value={formData.capacity}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
   <TextField
          label="yearOfManufacture"
          name="yearOfManufacture"
          value={formData.yearOfManufacture}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Create Plane
        </Button>
      </form>
    </Paper>
  );
};

export default CreatePlane;