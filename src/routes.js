import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./views/Login";
import Register from "./views/Register";

export default function myRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}