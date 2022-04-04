import React from "react";
import styled from "styled-components";
//import { BColor, hoverEffect } from "../../Utils";

function Note(props) {
  return (
    <ViewTranscript>
      <H3>{props.lev}</H3>
      <H3>{props.semester}</H3>
      <H5>View Transcript</H5>
    </ViewTranscript>
  );
}

const H3 = styled.h3`
  padding: 0.5rem;
  margin-left: 2px;
  color: rgba(0, 0, 0, 0.7);
`;

const ViewTranscript = styled.div`
  background-color: #dce4ff;
  cursor: pointer;
  height: 20%;
  width: 90%;
  border: none;
  margin: 2.5%;
`;

const H5 = styled.h5`
  text-align: center;
  font-weight: normal;
  width: 20%;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
  margin: 6px;
  float: right;
  bottom: 30px;
  cursor: pointer;
`;

export default Note;
