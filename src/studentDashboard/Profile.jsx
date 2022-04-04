import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import db, { storage } from "../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useUserContext } from "../Auth/context/userContext";

function Profile() {
  const { user } = useUserContext();
  let email = user.email;
  const colRef = collection(db, "StudentInfo");
  const q = query(colRef, where("email", "==", email));
  let [fname, setfname] = useState("");
  let [studID, setstudID] = useState("");
  let [DoB, setDoB] = useState("");
  let [course, setcourse] = useState("");
  let [YoE, setYoE] = useState("");
  let [DoC, setDoC] = useState("");

  onSnapshot(q, async (snapshot) => {
    const info = await snapshot.docs.map((doc) => {
      // fname = doc.get("fname");
      setfname(doc.get("fname") + " " + doc.get("lname"));
      setstudID(doc.get("id"));
      setDoB(doc.get("dob"));
      setcourse(doc.get("course"));
      setYoE(doc.get("enroll"));
      setDoC(doc.get("yof"));

      console.log(fname);
    });
  });
  return (
    <Container>
      <SideBar />
      <SubContainer>
        <NavBar />
        <Div>
          <Img src="./noProfile.jpg" alt="student dp" />
          <H3>{fname}</H3>
        </Div>

        <Div2>
          <Table>
            <tbody>
              <tr>
                <th width="30%">Student ID</th>
                <td width="2%">:</td>
                <td>{studID}</td>
              </tr>
              <tr>
                <th width="30%">Date of Birth </th>
                <td width="2%">:</td>
                <td>{DoB}</td>
              </tr>
              <tr>
                <th width="30%">Course</th>
                <td width="2%">:</td>
                <td>{course}</td>
              </tr>
              <tr>
                <th width="30%">Year of Enrollment</th>
                <td width="2%">:</td>
                <td>{YoE}</td>
              </tr>
              <tr>
                <th width="30%">Year of Completion</th>
                <td width="2%">:</td>
                <td>{DoC}</td>
              </tr>
            </tbody>
          </Table>
        </Div2>
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
`;
const SubContainer = styled.div`
  width: 100%;
  background: linear-gradient(to bottom right, white 0%right, #e6e4ff 100%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
`;
const Div = styled.div`
  display: flex;
  height: 40%;
  width: 30%;

  background-color: blue;
  justify-content: center;
  margin-top: 7%;
  margin-left: 0%;
  border-radius: 20px;
  position: absolute;
`;

const Div2 = styled.div`
  height: 40%;
  width: 40%;
  display: flex;
  margin: 7% 3%;
  border-radius: 20px;
  position: absolute;
  left: 50%;
`;

const Img = styled.img`
  position: absolute;
  width: 45%;
  height: 60%;
  object-fit: cover;
  margin-top: 3%;
  display: flex;
  border: 10px solid #ccc;
  border-radius: 50%;
`;

const H3 = styled.h2`
  position: relative;
  display: block;
  margin-top: 50%;
`;

const Table = styled.table`
  height: 100%;
  width: 100%;
  background: pink;
  border-radius: 20px;
`;
export default Profile;
