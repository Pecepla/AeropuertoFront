import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Paper } from "@mui/material";

const CreateFlight = () => {
 

 const navigate = useNavigate();
  const [formData, setFormData] = useState({
   
    arrivalTime: "",
    departure: "",
    arrivalAirportId: "",
    departureAirportId: "", 
     id: "",
     planeId: "",
    flightNumber: "",
    status: "",
  }
);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post(`http://localhost:8080/api/flight` , formData);
        alert("Flight created successfully!");
        navigate("../Flight"); 
      } catch (error) {
        console.error("Error creating Flight", error);
        alert("Failed to create Flight");
  
      }
    };
  
return (
     <Paper style={{ padding: "20px", maxWidth: "500px", margin: "20px auto" }}>
           <h2>Create Flight</h2>
           <form onSubmit={handleSubmit}>
         <TextField
               label="arrivalTime"
               name="arrivalTime"
               value={formData.arrivalTime}
               onChange={handleChange}
               fullWidth
               margin="normal"
             />
             <TextField
               label="departure"
               name="departure"
               value={formData.departure}
               onChange={handleChange}
               fullWidth
               margin="normal"
             />
             <TextField
               label="arrivalAirportId"
               name="arrivalAirportId"
               value={formData.arrivalAirportId}
               onChange={handleChange}
               fullWidth
               margin="normal"
             />
             <TextField
               label="departureAirportId"
               name="departureAirportId"
               value={formData.departureAirportId}
               onChange={handleChange}
               fullWidth
               margin="normal"
             />
        <TextField
               label="id"
               name="id"
               value={formData.id}
               onChange={handleChange}
               fullWidth
               margin="normal"
             />

         <TextField
               label="planeId"
               name="planeId"
               value={formData.planeId}
               onChange={handleChange}
               fullWidth
               margin="normal"
             />

            <TextField
               label="flightNumber"
               name="flightNumber"
               value={formData.flightNumber}
              onChange={handleChange}
               fullWidth
               margin="normal"
             />

             <TextField
               label="status"
               name="status"
               value={formData.status}
              onChange={handleChange}
               fullWidth
               margin="normal"
             />
<br></br>
             <Button type="submit" variant="contained" color="primary">
               Create Flight
             </Button>
           </form>
         </Paper>



    );
  };

  export default CreateFlight;
  