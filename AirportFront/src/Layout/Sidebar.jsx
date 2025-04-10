import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar,
} from '@mui/material';
import {
  Home as HomeIcon,
  Flight as FlightIcon,
  LocationOn as AirportIcon,
  AirplanemodeActive as PlaneIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

const Sidebar = () => {
  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Airport', icon: <AirportIcon />, path: '/Airport' },
    { text: 'Plane', icon: <PlaneIcon />, path: '/Plane' },
    { text: 'Flight', icon: <FlightIcon />, path: '/Flight' },
    { text: 'Passengers', icon: <FlightIcon />, path: '/Passengers' },
  ];
  


  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        ['& .MuiDrawer-paper']: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} component={RouterLink} to={item.path}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;