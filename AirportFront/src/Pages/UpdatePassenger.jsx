import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
    TextField,
    Button,
    Paper,
    Typography,
  } from "@mui/material";


  
const  UpdatePassenger = () => {
 
  const location = useLocation();
  const navigate = useNavigate();
 
  const passenger = location.state?.passenger  || {}; 

  const [formData, setFormData] = useState({
     id: passenger.id || "",
     name: passenger.name || "",
     lastname: passenger.lastname || "",
     passportNumber: passenger.passportNumbe || "",
     nationality: passenger.nationality || "",
     age: passenger.age || "",
     contactNumber: passenger.contactNumber || "",
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  
      await axios.put(`http://localhost:8080/api/passenger/${passenger.id}`, formData);
    
      alert("Passenger updated successfully!");
      navigate("../Passengers"); 
    } catch (error) {
      console.error("Error updating Passenger:", error);
    }
  };

  return (
   
    <Paper style={{ padding: "20px", maxWidth: "500px", margin: "20px auto" }}>
      <Typography variant="h5">Update Plane</Typography>
      <form onSubmit={handleSubmit}>
   
      contactNumber
        <TextField
          label="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        
        />
        <TextField
          label="lastname"
          name="lastname"
          value={formData.lastname}
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
          name="nationality"
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
          Update Passenger
        </Button>
      </form>
    </Paper>
  );
};

export default UpdatePassenger;