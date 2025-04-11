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
  Grid,

} from "@mui/material";

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';



const Reserve = () => {

  
const [reserve , setReserve] = useState([]);
const navigate = useNavigate();
const [value, setValue] = React.useState('recents');

const fetchReserve = async () => {
 
  try {
    const response = await axios.get(`http://localhost:8080/api/reserve`);
    setReserve(response.data);
  } catch (error) {
    console.error("Error fetching: Reserve", error) ;
  }
};

const deleteReserve = async (id) => {
  try {

    await axios.delete(`http://localhost:8080/api/reserve/${id}`);
    setAirport(reserve.filter((reserve) => reserve.id !== id));
  } catch (error) {
    console.error("Error deleting reserve:", error);
  }
};

const updateReserve = (airport) => {
  navigate(`/Reservet/UpdateReserve/${reserve.id}`, { state: {reserve}});
};

const CreateReserve = () => {
  navigate("/Reserve/CreateReserve");
};


useEffect(() => {
  fetchReserve();

}, []);


return (
 
  <Container maxWidth="h6">
      <Box md={{ my: 100 }}>
        <Typography
          variant="h4"
          component="h5"
          gutterBottom
          sx={{ color: "#000000" }}>
        ReserveList List
        </Typography>
        <Button variant="contained"  onClick={() => CreateReserve(reserve.reserveCode)}>
         create
         </Button>
      </Box>
        <Grid container spacing={2}>
          {reserve.map((reserve) => (
            <Grid item xs={12} sm={6} md={4} key={reserve.id}>
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
                    {reserve.id}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#000000" }}>
                
               Reserve:  {reserve.reserveCode}
               Passenger:   {reserve.passenger}<br></br>
               flight:  {reserve.flight}<br></br>
               state:   {reserve.state}<br></br>
                

         </Typography >
         <Button variant="contained" color="secondary" onClick={() => deleteReserve(reserve.id)}>
          Delete
         </Button> 
         <Button variant="contained" color="success" onClick={() => updateReserve(reserve)}>
         Update
         </Button>

                </CardContent>  

              </Card>

       

            </Grid>
          ))}
        </Grid>
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

export default Reserve;