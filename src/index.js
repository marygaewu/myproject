import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LoginPage from "./LoginPage";
//import App from "./App";
import Apple from "./studentDashboard/Apple";
import TransCript from "./studentDashboard/TransCript";
import Table from "./Table";
//import Index from "./firebase/Index";
//import Profile from "./studentDashboard/Profile";
import { UserContextProvider } from "./Auth/context/userContext";
import App from "./Auth/App";
import Dashboard from "./Auth/components/dashboard";
import StudentApp from "./studentDashboard/StudentApp";

import SchoolApp from "./schoolDashboard/SchoolApp";
//import App from "./schoolDashboard/App";

ReactDOM.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
  document.getElementById("root")
);
