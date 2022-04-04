import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import { useUserContext } from "./context/userContext";
import Apple from "../studentDashboard/Apple";
import SchoolApp from "../schoolDashboard/SchoolApp";
import Appl from "../schoolDashboard/App";

//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div>
      {error && <p className="error">{error}</p>}

      {loading ? <h2>Loading...</h2> : <> {user ? <Appl /> : <Auth />} </>}
    </div>
  );
}

export default App;
