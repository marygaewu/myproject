import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
//import { Link } from "react-router-dom";
import db, { storage } from "../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useUserContext } from "../Auth/context/userContext";

let day = new Date().getHours();

export let details = [];

let greeting = "";
let f = "";

if (day < 12) {
  greeting = "Good Morning";
} else if (day < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}
export let info = [];

function NavBar() {
  const { user } = useUserContext();
  let email = user.email;
  const colRef = collection(db, "StudentInfo");
  const q = query(colRef, where("email", "==", email));
  let [fname, setfname] = useState("");

  // onSnapshot(q, async (snapshot) => {
  //   info = snapshot.docs.map((doc) => ({
  //     ...doc.data(),
  //   }));
  onSnapshot(q, async (snapshot) => {
    info = await snapshot.docs.map((doc) => {
      // fname = doc.get("fname");
      setfname(doc.get("fname"));
      console.log(fname);
    });
  });

  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <NavBarContainer>
      <Text>
        {greeting}, <span>{fname}</span>
      </Text>

      {/* <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" onClick={toggler} />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
      {toggle ? console.log("Access Granted") : console.log("Access Revoked")} */}

      <Avatar src="./noProfile.jpg" />

      <InputContainer>
        <Icon>
          <FiSearch />
        </Icon>
        <Input type="text" placeholder="search for tanscript" />
      </InputContainer>
    </NavBarContainer>
  );
}

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
`;
const Text = styled.h1`
  span {
    font-weight: 500;
    color: #484258;
  }
`;

const InputContainer = styled.div`
  display: flex;
`;

const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: #dce4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  svg {
    color: #555555;
  }
`;

const Input = styled.input`
  border: none;
  background-color: #dce4ff;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  &:focus {
    border: none;
    outline: none;
  }
`;
const Avatar = styled.img`
  position: relative;
  height: 3.7rem;
  width: 3rem;
  border-radius: 20%;
  left: 13%;
`;
const CheckBoxWrapper = styled.div`
  position: relative;
  left: 25%;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: -10px;
  left: 0;
  width: 57px;
  height: 50px;
  border-radius: 20%;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 20%;
    width: 18px;
    height: 40px;
    margin: 5px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 20%;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 20%;
      width: 18px;
      height: 40px;
      margin-left: 32px;
      transition: 0.2s;
    }
  }
`;

export default NavBar;
