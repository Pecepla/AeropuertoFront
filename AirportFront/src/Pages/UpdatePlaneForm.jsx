
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
    TextField,
    Button,
    Paper,
    Typography,
  } from "@mui/material";


  
const  UpdatePlaneForm = () => {
 
  const location = useLocation();
  const navigate = useNavigate();
 
  const plane = location.state?.plane  || {}; 

  const [formData, setFormData] = useState({
   
    Model: plane.model || "",
    manufacture: plane.manufacture || "",
    registrationNumber: plane.registration_Number || "",
    capacity: plane.capacity || "",
    yearOfManufacture : plane.year_Of_Manufacture || "",
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/planes/${plane.id}`, formData);
      alert("Plane updated successfully!");
      navigate("../Plane"); 
    } catch (error) {
      console.error("Error updating Plane:", error);
    }
  };

  return (
   
    <Paper style={{ padding: "20px", maxWidth: "500px", margin: "20px auto" }}>
      <Typography variant="h5">Update Plane</Typography>
      <form onSubmit={handleSubmit}>
   

        <TextField
          label="model"
          name="model"
          value={formData.model}
          onChange={handleChange}
          fullWidth
          margin="normal"
        
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
          label="registrationNumber"
          name="registrationNumber"
         
          value={formData.registration_Number}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label=" capacity"
          name=" capacity"
          value={formData.capacity}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="yearOfManufacture"
          name="yearOfManufacture"
          value={formData.year_Of_Manufacture}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
  
        <Button type="submit" variant="contained" color="primary">
          Update Plane
        </Button>
      </form>
    </Paper>
  );
};

export default UpdatePlaneForm;