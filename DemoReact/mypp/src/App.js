import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import OurProduct from "./OurProduct";
import Oursolution from "./Oursolution";
import Service from "./Service";
import Home from "./Home";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#051a69" }}>
        <div className="container-fluid">
          <div className="navbar-nav ms-auto" style={{ fontFamily: 'bold', color: 'white', marginTop: '20px', marginLeft: '60%' }}>
            <NavLink style={{ marginRight: "20px", color: 'white' }} className="nav-link" to="/about">
              ABOUT US
            </NavLink>
            <NavLink style={{ marginRight: "20px", color: 'white' }} className="nav-link" to="/service">
              SERVICES
            </NavLink>
            <NavLink style={{ marginRight: "20px", color: 'white' }} className="nav-link" to="/ourproduct">
              OUR PRODUCTS
            </NavLink>
            <NavLink style={{ marginRight: "20px", color: 'white' }} className="nav-link" to="/oursolution">
              OUR SOLUTIONS
            </NavLink>
            <NavLink style={{ marginRight: "20px", color: 'white' }} className="nav-link" to="/contact">
              CONTACT
            </NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourproduct" element={<OurProduct />} />
        <Route path="/oursolution" element={<Oursolution />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;
