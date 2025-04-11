import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Layout/Sidebar";
import Home from "./Pages/Home";
import Airport from "./Pages/Airport";
import Plane from "./Pages/Plane";
import Flight from "./Pages/Flight";
import Reserve from "./Pages/Reserve";
import Passengers from "./Pages/Passengers";
import UpdateAirportForm from "./Pages/UpdateForm";
import CreateAirport from  "./Pages/CreateAirport";
import UpdatePlaneForm from  "./Pages/UpdatePlaneForm";
import CreatePlane from  "./Pages/CreatePlane";
import UpdateFlightsForm from  "./Pages/UpdateFlightsForm";
import CreateFlight from  "./Pages/CreateFlight";
import CreatePassengers from  "./Pages/CreatePassengers";
import UpdatePassengers from  "./Pages/UpdatePassenger";

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
            <Route path="/Reserve" element={<Reserve/>} /> 
            <Route path="/Passengers" element={<Passengers />} /> 
            <Route path="/Airport/UpdateForm/:id" element={<UpdateAirportForm />} /> 
            <Route path="/Airport/CreateAirport" element={<CreateAirport />} />
            <Route path="/Plane/UpdatePlaneForm/:id" element={<UpdatePlaneForm />} /> 
            <Route path="/Plane/CreatePlane" element={<CreatePlane />} /> 
            <Route path="/Flight/UpdateFlightsForm/:id" element={<UpdateFlightsForm/>} /> 
            <Route path="/Flight/CreateFlight" element={<CreateFlight />} />
            <Route path="/Passengers/CreatePassengers" element={<CreatePassengers />} /> 
            <Route path="/Passengers/UpdatePassenger/:id" element={<UpdatePassengers />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;