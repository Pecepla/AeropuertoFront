
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
    TextField,
    Button,
    Paper,
    Typography,
  } from "@mui/material";
import { DepartureBoard } from "@mui/icons-material";


  
const  UpdateFlightsForm = () => {
 
  const location = useLocation();
  const navigate = useNavigate();
 
  const flight = location.state?.flight || {}; 

  const [formData, setFormData] = useState({
   
    ArrivalTime: flight.arrivalTime || "",
    Departure: flight.departureTure || "",
    ArrivalAirportId: flight.arrivalAirportId ||"",
    DepartureAirportId: flight.departureAirportId || "", 
     id: flight.id || "",
     PlaneId: flight.planeId || "",
   FlightNumber: flight.flightNumber || "",
   status: flight.status || "",
   
  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/flight/${flight.id}`, formData);
      alert("Flight updated successfully!");
      navigate("../Flight"); 
    } catch (error) {
      console.error("Error updating Flight", error);
    }
  };

  return (
     
      <Paper style={{ padding: "20px", maxWidth: "500px", margin: "20px auto" }}>
        <Typography variant="h5">Update User</Typography>
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
            label="departureTure"
            name="departureTure"
            value={formData.departureTure}
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
            margin="normal"
          />
           <TextField
            label="Id"
            name="Id"
            value={formData.id}
            onChange={handleChange}
            margin="normal"
          />
           <TextField
            label="planeId"
            name="planeId"
            value={formData.planeid}
            onChange={handleChange}
            margin="normal"
          />
           <TextField
            label="flightNumber"
            name="flightNumber"
            value={formData.flightNumber}
            onChange={handleChange}
            margin="normal"
          />
           <TextField
            label="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            margin="normal"
          />
    <br></br>
          <Button type="submit" variant="contained" color="primary">
            Update Flight
          </Button>
        </form>
      </Paper>
    );
  };;

export default UpdateFlightsForm;