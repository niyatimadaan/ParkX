import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Home from "./pages/Home";
import ParkingLot from "./pages/ParkingLot";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" exact element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:parkId" element={<ParkingLot />} />
      </Routes>
    </main>
  </BrowserRouter>
);
