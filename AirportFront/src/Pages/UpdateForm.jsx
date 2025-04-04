import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
    TextField,
    Button,
    Paper,
    Typography,
  } from "@mui/material";



  
const  UpdateForm = () => {
 
  const location = useLocation();
  const navigate = useNavigate();
 
  const airport = location.state?.airport || {}; 

  const [formData, setFormData] = useState({
    id: airport.id || "",
    name: airport.name || "",
    city: airport.city || "",
    code: airport.code || "",
    country: airport.country || "",
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/airport/${airport.id}`, formData);
      alert("Book updated successfully!");
      navigate("../Airport"); 
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
   
    <Paper style={{ padding: "20px", maxWidth: "500px", margin: "20px auto" }}>
      <Typography variant="h5">Update User</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
          fullWidth
          margin="normal"
         
        />
        <TextField
          label="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        
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
          margin="normal"
        />
  
        <Button type="submit" variant="contained" color="primary">
          Update Airport
        </Button>
      </form>
    </Paper>
  );
};

export default UpdateForm;