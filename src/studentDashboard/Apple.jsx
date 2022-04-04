import React from "react";
import StudentApp from "../studentDashboard/StudentApp";
import TransCript from "./TransCript";
import Profile from "./Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../index.css";

function Apple() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<StudentApp />} />
          <Route path="/trans" element={<TransCript />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}
export default Apple;
