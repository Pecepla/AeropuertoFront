import React from "react";
import { Card, CardContent, Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography variant="h2">Welcome to Our Airport</Typography>
      <Card>
        <CardContent>
          <Typography variant="h5">Airport</Typography>
          <Typography variant="body2">
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;