import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Layout/Sidebar";
import Home from "./Pages/Home";
import Airport from "./Pages/Airport";
import Plane from "./Pages/Plane";
import Flight from "./Pages/Flight";



const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Airport" element={<Airport />} />
            <Route path="/Plane" element={<Plane />} />
            <Route path="/Flight" element={<Flight />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;