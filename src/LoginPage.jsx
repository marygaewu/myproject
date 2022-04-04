import React, { useRef, useState } from "react";
//import "./LoginPage.css";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
//import { signup } from "./firebase";

function LoginPage() {
  const idRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup, currentUser, login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await createUserWithEmailAndPassword(auth, emailRef, passwordRef);
      //   await signup(emailRef.current.value, passwordRef.current.value);
      console.log(emailRef.current.value);
      // navigate.push("/");
    } catch (error) {
      console.log(error.message);
      //setError("Failed to create an account");
    }

    setLoading(false);
    console.log(emailRef.current.value);
  }
  return (
    <div className="container">
      {currentUser && console.log(currentUser.email)}
      {error && console.log(error)}
      <input type="checkbox" id="flip" />
      <div className="cover">
        <div className="front">
          <img src="./images/frontImg.jpg" alt="" />
          <div className="text">
            <span className="text-1">
              Benefits of Blockchain <br /> new adventure
            </span>
            <span className="text-2">Let's get connected</span>
          </div>
        </div>
        <div className="back">
          <img className="backImg" src="./images/backImg.jpg" alt="" />
          <div className="text">
            <span className="text-1">
              Complete miles of journey <br /> with one step
            </span>
            <span className="text-2">Let's get started</span>
          </div>
        </div>
      </div>
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
            <form action="#">
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="text">
                  <a href="/">Forgot password?</a>
                </div>
                <div className="button input-box">
                  <input type="submit" value="Login" />
                </div>
                <div className="text sign-up-text">
                  Don't have an account? <label htmlFor="flip">Sigup now</label>
                </div>
              </div>
            </form>
          </div>
          <div className="signup-form">
            <div className="title">Signup</div>
            <form onSubmit={handleSubmit}>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Enter your Student ID"
                    ref={idRef}
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    ref={emailRef}
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    ref={passwordRef}
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    ref={confirmPasswordRef}
                    required
                  />
                </div>
                <div className="button input-box">
                  <input
                    type="submit"
                    value="Sign Up"
                    // disabled={loading}
                  />
                </div>
                <div className="text sign-up-text">
                  Already have an account?{" "}
                  <label htmlFor="flip">Login now</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <button onClick={handleSubmit}>click</button>
    </div>
  );
}

export default LoginPage;
