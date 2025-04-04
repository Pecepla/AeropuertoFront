import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TextField, Button, Paper } from "@mui/material";
import axios from "axios";

const CreateAirport = () => {
 

  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    city: "",
    code: "",
    country: "",
   
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/api/airport/` , formData);
      alert("Airport created successfully!");
      navigate("../Airport"); 
    debugger;
    } catch (error) {
      console.error("Error creating Airport:", error);
      alert("Failed to create Airport.");

    }
  };

  return (
    <Paper style={{ padding: "20px", maxWidth: "500px", margin: "20px auto" }}>
      <h2>Create Airport</h2>
      <form onSubmit={handleSubmit}>
      <TextField
          label="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="code"
          name="code"
         
          value={formData.code}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="country"
          name="country"
        
          value={formData.country}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Create Book
        </Button>
      </form>
    </Paper>
  );
};

export default CreateAirport;