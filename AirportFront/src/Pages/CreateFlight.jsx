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
           <h2>Create Plane</h2>
           <form onSubmit={handleSubmit}>
         <TextField
               label="ArrivalTime"
               name="ArrivalTime"
               value={formData.arrivalTime}
               onChange={handleChange}
               fullWidth
               margin="normal"
               required
             />
             <TextField
               label="Departure"
               name="Departure"
               value={formData.departure}
               onChange={handleChange}
               fullWidth
               margin="normal"
             />
             <TextField
               label="ArrivalAirportId"
               name="ArrivalAirportId"
               value={formData.arrivalAirportId}
               onChange={handleChange}
               fullWidth
               margin="normal"
             />
             <TextField
               label="DepartureAirportId"
               name="DepartureAirportId"
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
               label="PlaneId"
               name="PlaneId"
               value={formData.planeId}
              onChange={handleChange}
               fullWidth
               margin="normal"
             />

            <TextField
               label="FlightNumber"
               name="FlightNumber"
               value={formData.flightNumber}
              onChange={handleChange}
               fullWidth
               margin="normal"
             />
             <TextField
               label="Status"
               name="Status"
               value={formData.status}
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

  export default CreateFlight;
  