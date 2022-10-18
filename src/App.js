import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Private from "./components/Health/Private";
import Privates from "./components/Health/Privates";
import Public from "./components/Health/Public";
import Publics from "./components/Health/Publics";
import Research from "./components/Health/Research";
import Researchs from "./components/Health/Researchs";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar bg-info">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link text-light">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/publics" className="nav-link text-light">
              Public Hospitals
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/researchs" className="nav-link text-light">
              Research and Training Hospitals
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/privates" className="nav-link text-light">
              Private Hospitals
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/publics" element={<Publics />} />
        <Route path="/researchs" element={<Researchs/>} />
        <Route path="/privates" element={<Privates />} />
        <Route path="/public/:id" element={<Public/>} />
        <Route path="/research/:id" element={<Research/>} />
        <Route path="/private/:id" element={<Private/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
