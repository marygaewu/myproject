import React from "react";
import { useUserContext } from "../context/userContext";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <div>
      <h1>Dashboard </h1>
      <h2>ID : {user.email}</h2>
      <h2>Email : {user.email}</h2>
      <button onClick={logoutUser}>Log out</button>
      {console.log(user.displayName + "  " + user.email)}
    </div>
  );
};

export default Dashboard;
