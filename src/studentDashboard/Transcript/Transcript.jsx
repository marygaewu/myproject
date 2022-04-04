import React from "react";
import styled from "styled-components";
import { hoverEffect } from "../../Utils";

import Note from "./Note";
import Trans from "./TransArray";

function click(note) {
  console.log(`its me ${note.key}`);
  console.log();
}
// document.querySelector(".transcript").addEventListener("click", function () {
//   document.querySelector(".preview").textContent = "hey";
// });

function Transcript() {
  return (
    <TransCard>
      {Trans.map((noteItem) => {
        return (
          <Button onClick={() => click(noteItem)} key={noteItem.key}>
            <Note
              className="transcript"
              key={noteItem.key}
              lev={noteItem.lv}
              semester={noteItem.sem}
            />
          </Button>
        );
      })}
    </TransCard>
  );
}

const TransCard = styled.div`
  position: absolute;
  height: 100%;
  width: 35%;
  background-color: #6100d4;

  border-radius: 1rem;
  left: 3%;
  overflow-x: hidden;
  color: white;
`;

const Button = styled.button`
  border-radius: 1rem;
  background-color: #dce4ff;
  width: 95%;
  margin: 2%;
  margin-right: 2%;
  font: inherit;
  outline: inherit;
  color: inherit;
  border: none;
  transition: 0ms.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }

  border-radius: 0.5rem;
  &:focus {
    border: none;
    outline: none;
  }
`;

export default Transcript;
