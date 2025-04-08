import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

import {
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  Box,
  Grid
} from "@mui/material";


const Airport = () => {

  
const [airport , setAirport] = useState([]);
const navigate = useNavigate();


const fetchAirport = async () => {
 
  try {
    const response = await axios.get(`http://localhost:8080/api/airport `);
    setAirport(response.data);
  } catch (error) {
    console.error("Error fetching: Airport", error) ;
  }
};

const deleteAirport = async (id) => {
  try {

    await axios.delete(`http://localhost:8080/api/airport/${id}`);
    setAirport(airport.filter((airport) => airport.id !== id));
  } catch (error) {
    console.error("Error deleting book:", error);
  }
};

const updateAirport = (airport) => {
  navigate(`/Airport/UpdateForm/${airport.id}`, { state: {airport}});
};

const CreateAirport = () => {
  navigate("/Airport/CreateAirport");
};


useEffect(() => {
  fetchAirport();

}, []);


return (
 
  <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="h5"
          gutterBottom
          sx={{ color: "#000000" }}>
         Airports List
        </Typography>
        <Button  variant="contained"  onClick={() => CreateAirport(airport)}>
         create
         </Button>
        <Grid container spacing={2}>
          {airport.map((airport) => (
            <Grid item xs={12} sm={6} md={4} key={airport.id}>
              <Card
                sx={{
                  backgroundColor: "rgba(240, 244, 248, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
                  },
                }}
                
              >
                
                  <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#000000" }}
                  >
                    {airport.city}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#000000" }}>
                
                Name: {airport.name}<br></br>
                City: {airport.city}<br></br>
                Code: {airport.code}<br></br>
                Country {airport.country} <br></br>
                

         </Typography >
         <Button variant="contained" color="secondary" onClick={() => deleteAirport(airport.id)}>
          Delete
         </Button> 
         <Button variant="contained" color="success" onClick={() => updateAirport(airport)}>
         Update
         </Button>

                </CardContent>  
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
    
  );
  
}

export default Airport;