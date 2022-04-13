import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import Table from "../../Table";
// import Auth from "./auth";

const AdminSignin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) {
      //if (email === "admin@gmail.com" && password === "admin1234") {
      //  console.log(email + " " + password);
      signInUser(email, password);
      // } else {
      //   console.log("not an Admin");
      // }
    }
    //signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };
  const { user, loading, error } = useUserContext();

  return (
    <div className="form">
      <h2> Admin Login </h2>
      <form onSubmit={onSubmit}>
        <input
          className="input"
          placeholder="Email"
          type="email"
          ref={emailRef}
        />
        <input
          className="input"
          placeholder="Password"
          type="password"
          ref={psdRef}
        />
        <button className="button" type="submit">
          Sign In
        </button>
        <p onClick={forgotPasswordHandler}>Forgot Password?</p>
      </form>
      {user ? <Table /> : null}
    </div>
  );
};

export default AdminSignin;
