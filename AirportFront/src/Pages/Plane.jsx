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


const Plane = () => {

  
const [plane , setPlane] = useState([]);
const navigate = useNavigate();


const fetchPlane = async () => {
 
  try {
    const response = await axios.get(`http://localhost:8080/api/planes `);
    setPlane(response.data);
  } catch (error) {
    console.error("Error fetching: Plane", error) ;
  }
};

const deletePlane = async (id) => {
  try {

    await axios.delete(`http://localhost:8080/api/planes/${id}`);
    setPlane(plane.filter((plane) => plane.id !== id));
  } catch (error) {
    console.error("Error deleting Plane:", error);
  }
};

const updatePlane = (plane) => {
  navigate(`/Plane/${plane.id}`, { state: {plane}});
};

const CreatePlane = () => {
  navigate("/CreatePlane");
};


useEffect(() => {
  fetchPlane();

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
        <Button  variant="contained"  onClick={() => CreatePlane(plane)}>
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
                    {plane.model}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#000000" }}>
                
               Model: {plane.model}<br></br>
               manufacture: {plane.manufacture}<br></br>
               registrationNumber: {plane.registrationNumber}<br></br>
               capacity: {plane.capacity} <br></br>
               yearOfManufacture : {plane.yearOfManufacture}

         </Typography >
         <Button variant="contained" color="secondary" onClick={() => deletePlane(plane.id)}>
          Delete
         </Button> 
         <Button variant="contained" color="success" onClick={() => updatePlane(plane)}>
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

export default Plane;