import React from "react";
import SchoolApp from "./SchoolApp";
import Table from "../Table";
import Profile from "../studentDashboard/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../index.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<SchoolApp />} />
          <Route path="/trans" element={<Table />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
