import React, { useState, useEffect } from "react";
import axios from "..Middelware/api.js";
import { Card, CardContent, Typography, Container } from "@mui/material";


const [airport , setAirport] = useState([]);

const fetchAirport = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/airport");
    setAirport(response.data);
  } catch (error) {
    console.error("Error fetching :Airport", error);
  }
};

const deleteAirport = async (id) => {
  try {
    await axios.delete('http://localhost:8080/api/airport/${id}');
    
    
    setAirport(airport.filter((airport) => airport.id !== id));
  } catch (error) {
    console.error("Error deleting book:", error);
  }
};

useEffect(() => {
  fetchAirport();
}, []);

return (
  <>
    <Box sx={{ width: 250 }} role="presentation" onClick={}>
    <List>
      {airport.map((airport) => (
        <ListItem key={airport.id} disablePadding> 
        {airport.code}
        </ListItem>
      
      ))}
    </List>
    
    <Divider />
  </Box>
  <Button
  color="secondary"
  onClick={() => deleteAirport(airport.id)}
>
  Delete
  </Button>
  </>

);
export default airport;