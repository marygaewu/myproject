import React from "react";
import StudentApp from "../studentDashboard/StudentApp";
import TransCript from "./TransCript";
import Profile from "./Profile";
import AdminRoutes from "../schoolDashboard/App"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../index.css";

function StudentRoutes() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<StudentApp />} />
          <Route path="/mytrans" element={<TransCript />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}
export default StudentRoutes;
