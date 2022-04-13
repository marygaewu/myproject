import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Transcript from "./Transcript/Transcript";
import TranscriptPreview from "./TranscriptPreview";
import TransCript from "./TransCript";

function MainContent() {
  return (
    <Container>
      <NavBar />

      <SubContainer>
        <Transcript />

        <TranscriptPreview />
        <TransCript />
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background: linear-gradient(to bottom right, white 0%right, #e6e4ff 100%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
`;
const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;

  position: relative;
  gap: 4rem;
`;

// const SectionOne = styled.div`
//   display: flex;
//   justify-content: space-between;
//   height: 40%;
//   gap: 2rem;
//   width: 100%;
//   background-color: black;
//   flex-direction: column;
// `;
// const SectionTwo = styled.div`
//   display: flex;
//   gap: 2rem;
//   height: 26vh;
//   background-color: red;
// `;

// const ColumnOne = styled.div`
//   display: flex;
//   gap: 3rem;
//   background-color: pink;
// `;
// const ColumnTwo = styled.div``;

export default MainContent;
