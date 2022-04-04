import React, { useState } from "react";
import Signin from "./signin";
import Signup from "./signup";
import AdminSignin from "./adminSignIn";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const [show, setShow] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="flex-container">
      <div className="container">
        {!index ? <Signin /> : <Signup />}

        <p onClick={toggleIndex}>
          {!index ? "New user? Click here " : "Already have an acount?"}
        </p>
        {show ? <AdminSignin /> : null}

        <span style={{ display: "flex", cursor: "pointer" }}>
          <p
            onClick={() => {
              setShow(true);
              setIndex(null);
            }}
          >
            Login as admin
          </p>
          <p>| |</p>
          <p onClick={() => setShow(false)}>Login as student</p>
        </span>
      </div>
    </div>
  );
};

export default Auth;
