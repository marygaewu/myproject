import React from "react";
import SideBar from "./SideBar";
import styled from "styled-components";
import "./styles.css";
import MainContent from "./MainContent";

function StudentApp() {
  return (
    <Container>
      <SideBar />
      <MainContent />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
`;

export default StudentApp;
