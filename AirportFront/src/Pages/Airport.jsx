import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  Box,
  Grid,
} from "@mui/material";


const API_BASE_URL = "http://localhost:8080/api/airport/";

const Airport = () => {

const [airport , setAirport] = useState([]);



const fetchAirport = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    setAirport(response.data);
  } catch (error) {
    console.error("Error fetching :Airport", error);
  }
};

const deleteAirport = async (id) => {
  try {
    await axios.delete(API_BASE_URL);
    setAirport(airport.filter((airport) => airport.id !== id));
  } catch (error) {
    console.error("Error deleting book:", error);
  }
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
                    sx={{ color: "#F0F4F8" }}
                  >
                    {airport.city}
                  </Typography>
                
                  <Button
        variant="contained"
        color="primary"
        style={{ margin: "10px" }}
        onClick={deleteAirport()}
      >
        Back
      </Button>
                  <Typography variant="body2" sx={{ color: "#B0B8C" }}>
                   id: {airport.di}
         </Typography >

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