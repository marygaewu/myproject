import React from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { Link } from "react-router-dom";
let day = new Date().getHours();

let greeting = "";

if (day < 12) {
  greeting = "Good Morning";
} else if (day < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}

function NavBar() {
  return (
    <NavBarContainer>
      <Text>
        {greeting}, <span>Administrator</span>
      </Text>

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

export default NavBar;
