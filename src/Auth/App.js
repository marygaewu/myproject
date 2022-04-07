import Auth from "./components/auth";
import React, { useState,useEffect } from "react";
// import Dashboard from "./components/dashboard";
import { useUserContext } from "./context/userContext";
import StudentRoutes from "../studentDashboard/Apple";
// import SchoolApp from "../schoolDashboard/SchoolApp";
 import AdminRoutes from "../schoolDashboard/App";

//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const { user, loading, error } = useUserContext();
  const [isAdmin, setIsAdmin] = useState(false);
  
  const setToAdmin= function(e){
    setIsAdmin(e);
    
  }
  
useEffect(()=>{
console.log("use effect fired" + isAdmin)
}, [isAdmin])

  return (
    <div>
      {error && <p className="error">{error}</p>}

      {loading ? <h2>Loading...</h2> :
      (user && isAdmin===false)? <StudentRoutes/>:
      (user && isAdmin===true) ? <AdminRoutes/>: <Auth isAdmin={isAdmin} setToAdmin={setToAdmin} />}
    </div>
  );
}

export default App;
