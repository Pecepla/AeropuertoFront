import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Layout/Sidebar";
import Home from "./Pages/Home";
import Airport from "./Pages/Airport";
import Plane from "./Pages/Plane";
import Flight from "./Pages/Flight";
import UpdateAirportForm from "./Pages/UpdateForm";
import CreateAirport from  "./Pages/CreateAirport";
import UpdatePlaneForm from  "./Pages/UpdatePlaneForm";
import CreatePlane from  "./Pages/CreatePlane";


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
            <Route path="/Airport/UpdateForm/:id" element={<UpdateAirportForm />} /> 
            <Route path="/Airport/CreateAirport" element={<CreateAirport />} />
            <Route path="/Plane/UpdatePlaneForm/:id" element={<UpdatePlaneForm />} /> 
            <Route path="/Plane/CreatePlane" element={<CreatePlane />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;