//import react from "react";
import styled from "styled-components";

function Level({ content }) {
  return <Div>{content}</Div>;
}

const Div = styled.div`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: #6100d4;
  cursor: pointer;
`;

export default Level;
