import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import "../../LoginPage.css";
import db, { storage } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
let mail = [];
const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) {
      if (mail.includes(email)) {
        registerUser(email, password, name);
        console.log("Successful");
      } else {
        console.log("Student doesnt exist");
      }
    }
  };

  onSnapshot(collection(db, "StudentInfo"), (snapshot) => {
    let info = [];

    info = snapshot.docs.map((doc) => ({
      ...doc.data(),
    }));

    mail = info.map((items) => items.email);
    // console.log(mail);
    // console.log(mail.includes("ya"));
  });

  return (
    <div className="form">
      <h2> New User</h2>
      <form onSubmit={onSubmit}>
        <input
          className="input"
          placeholder="Email"
          type="email"
          ref={emailRef}
        />
        <input
          className="input"
          placeholder="Student ID"
          type="name"
          ref={nameRef}
        />
        <input
          className="input"
          placeholder="Password"
          type="password"
          ref={psdRef}
        />
        <button className="button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
