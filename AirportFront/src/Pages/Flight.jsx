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
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';




const Flight = () => {

  
const [flight , setFlight] = useState([]);
const navigate = useNavigate();
const [value, setValue] = React.useState('recents');

const fetchFlight = async () => {
 
  try {
    const response = await axios.get(`http://localhost:8080/api/flight`);
    setFlight(response.data);
  } catch (error) {
    console.error("Error fetching: FLight", error) ;
  }
};

const deleteFlight = async (id) => {
  try {

    await axios.delete(`http://localhost:8080/api/flight/${id}`);
    setFlight(flight.filter((flight) => flight.id !== id));
  } catch (error) {
    console.error("Error deleting Flight:", error);
  }
};

const updateFlight = (flight) => {
  navigate(`/Flight/UpdateFlifgtForm/${flight.id}`, { state: {flight}});
};

const CreateFlight= () => {
  navigate("/CreateFlight");
};


useEffect(() => {
  fetchFlight();

}, []);


return (
 
  <Container maxWidth="md">
      <Box sx={{ my: 12 }}>
        <Typography
          variant="h4"
          component="h5"
          gutterBottom
          sx={{ color: "#000000" }}>
        Flight List
        </Typography>
        <Button  variant="contained"  onClick={() => CreateFlight(flight)}>
         create
         </Button>
        <Grid container spacing={2}>
          {flight.map((flight) => (
            <Grid item xs={12} sm={6} md={4} key={flight.id}>
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
                
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#000000" }}>
             Number: {flight.flightNumber}<br></br>
             Departure: {flight.departureTure}<br></br>
             Arrival: {flight.arrivalTime}<br></br>
             Status: {flight.status}<br></br>
             

         </Typography >
         <Button variant="contained" color="secondary" onClick={() => deleteFlight(flight.id)}>
          Delete
         </Button> 
         <Button variant="contained" color="success" onClick={() => updateFlight(flight)}>
         Update
         </Button>

                </CardContent>  
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <BottomNavigation md={{ width: 500 }} value={value}>
  <BottomNavigationAction
    label="Recents"
    value="recents"
    icon={<RestoreIcon />}
  />
  <BottomNavigationAction
    label="Favorites"
    value="favorites"
    icon={<FavoriteIcon />}
  />
  <BottomNavigationAction
    label="Nearby"
    value="nearby"
    icon={<LocationOnIcon />}
  />
  <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
</BottomNavigation>
    </Container>
    
  );
  
}

export default Flight;