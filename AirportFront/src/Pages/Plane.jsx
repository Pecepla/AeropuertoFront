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

const Plane = () => {

  
const [plane , setPlane] = useState([]);
const navigate = useNavigate();
const [value, setValue] = React.useState('recents');

const fetchPlane = async () => {
 
  try {
    const response = await axios.get(`http://localhost:8080/api/planes`);
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
  navigate(`/Plane/UpdatePlaneForm/${plane.id}`, { state: {plane}});
};

const CreatePlane = () => {
  navigate(`/Plane/CreatePlane`);
};


useEffect(() => {
  fetchPlane();

}, []);


return (
 
  <Container maxWidth="h6">
      <Box sx={{ my: 12 }}>
        <Typography
          variant="h4"
          component="h5"
          gutterBottom
          sx={{ color: "#000000" }}>
         Plane List
        </Typography>
        <Button  variant="contained"  onClick={() => CreatePlane(plane)}>
         create
         </Button>
        <Grid container spacing={2}>
          {plane.map((plane) => (
            <Grid item xs={12} sm={6} md={4} key={plane.id}>
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

export default Plane;