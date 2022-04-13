import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { FaBook, FaSchool, FaShareSquare } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useUserContext } from "../Auth/context/userContext";
import { ImProfile } from "react-icons/im";

function SideBar(props) {
  const { user, logoutUser } = useUserContext();
  return (
    <Container>
      <ProfileContainer>
        <Avatar src="./noProfile.jpg" />
        <Name>Administrator</Name>
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link to="/">
            <Li>
              <MdDashboard />
              <h3>Dashboard</h3>
            </Li>
          </Link>
          <Link to="trans">
            <Li>
              <ImProfile />
              <h3>Students</h3>
            </Li>
          </Link>
          <Li>
            <FiLogOut />
            <h3 onClick={() => props.callModalFun()}>Logout</h3>
          </Li>
        </Links>

        <ContactContainer>
          <span>Having troubles?</span>
          <a href="#">Contact us</a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 25%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  margin-left: 0%;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: #162349;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;
const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;
const Li = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 1%;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  a {
    color: white;
    text-decoraton: none;
  }
`;

export default SideBar;
