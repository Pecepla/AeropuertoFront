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

const Passengers = () => {

  
const [passenger , setPassenger] = useState([]);
const navigate = useNavigate();
const [value, setValue] = React.useState('recents');

const fetchPassenger = async () => {
 
  try {
    const response = await axios.get(`http://localhost:8080/api/passenger`);
    setPassenger(response.data);
  } catch (error) {
      console.error("Error fetching: Passenger", error) ;
  }
};

const deletePassenger = async (id) => {
  try {

    await axios.delete(`http://localhost:8080/api/passenger/${id}`);
    setPassenger(passenger.filter((passenger) => passenger.id !== id));
  } catch (error) {
    console.error("Error deleting Passenger", error);
  }
};

const updatePassenger = (passenger) => {
  navigate(`/Passenger/UpdatePassenger/${passenger.id}`, { state: {passenger}});
}

const CreatePassenger= () => {
  navigate(`/Passenger/CreatePassenger`);
};


useEffect(() => {
    fetchPassenger();

}, []);


return (
 
  <Container maxWidth="h6">
      <Box sx={{ my: 12 }}>
        <Typography
          variant="h4"
          component="h5"
          gutterBottom
          sx={{ color: "#000000" }}>
        Passengers List
        </Typography>
        <Button  variant="contained"  onClick={() => CreatePassenger(passenger)}>
         create
         </Button>
        <Grid container spacing={2}>
          {passenger.map((passenger) => (
            <Grid item xs={12} sm={6} md={4} key={passenger.id}>
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

     name: {passenger.name}<br></br>
     lastname:{passenger.lstname}<br></br>
     passportNumber: {passenger.passportNumber}<br></br>
     nationality:{passenger.nationality}<br></br>
     age: {passenger.age}<br></br>
     contactNumber:{passenger.contactNumber}<br></br>
               
         </Typography >
         <Button variant="contained" color="secondary" onClick={() => deletePassenger(passenger.id)}>
          Delete
         </Button> 
         <Button variant="contained" color="success" onClick={() => updatePassenger(passenger)}>
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

export default Passengers;