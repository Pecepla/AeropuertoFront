import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { TextField, Button, Paper } from "@mui/material";
import axios from "axios";

const CreatePassengers = () => {
 

 const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
     lastnamee:"",
     passportNumber: "",
     nationality: "",
     age: "",
     contactNumber: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/api/passenger` , formData);
      alert("Passenger created successfully!");
      navigate("../Passenger"); 
    
    } catch (error) {
      console.error("Error creating Plane:", error);
      alert("Failed to create passenger.");

    }
  };

  return (
    <Paper style={{ padding: "20px", maxWidth: "500px", margin: "20px auto" }}>
      <h2>Create Plane</h2>
      <form onSubmit={handleSubmit}>
    <TextField
          label="name"
          name=" name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="lastnamee"
          name="lastnamee"
          value={formData.lastnamee}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="passportNumber"
          name="passportNumber"
         
          value={formData.passportNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="nationality"
          name=" nationality"
          value={formData.nationality}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
   <TextField
          label="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

<TextField
          label="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
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

export default CreatePassengers;