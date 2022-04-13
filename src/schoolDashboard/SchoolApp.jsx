import React, { useState } from "react";
import SideBar from "./SideBar";
import styled from "styled-components";
import "./styles.css";
import MainContent from "./MainContent";
import Modal from "../studentDashboard/Modal";

function SchoolApp() {
  const [modalOpen, setModalOpen] = useState(false);

  const callModal = () => {
    setModalOpen(true);
  };
  return (
    <Container>
      <SideBar callModalFun={() => callModal()} />
      <MainContent />
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
`;

export default SchoolApp;
