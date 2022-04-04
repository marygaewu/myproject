import React from "react";
import styled from "styled-components";

import TransCript from "./TransCript";

function TranscriptPreview() {
  return (
    <TransCard>
      <Center className="preview">
        {/* <TransCript /> */}
        <h2>No Preview</h2>
      </Center>
    </TransCard>
  );
}

const TransCard = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  border-radius: 1rem;
  color: black;
  background-color: #e4e4e4;
  text-align: center;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  left: 45%;
  margin: 0%;
`;

const Center = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export default TranscriptPreview;
