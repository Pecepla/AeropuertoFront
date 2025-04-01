import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Layout/Sidebar";
import Home from "./Pages/Home";


const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
          
            
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;