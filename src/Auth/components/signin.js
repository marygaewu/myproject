import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { Link } from "react-router-dom";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <div className="form">
      <h2> Login </h2>
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
        <div className="point">
          <p onClick={forgotPasswordHandler}>Forgot Password?</p>
          {/* <Link to="admin">
            <p>Login as an Admin</p>
          </Link> */}
        </div>
      </form>
    </div>
  );
};

export default Signin;
