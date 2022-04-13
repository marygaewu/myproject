import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";
import { Button, Link, CircularProgress } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import db, { storage } from "./firebase";
import ProgressModal from "./schoolDashboard/ProgressModal";
import {
  collection,
  addDoc,
  getFirestore,
  onSnapshot,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

import {
  Edit,
  Search,
  FilterList,
  SaveAlt,
  ViewColumn,
  Clear,
  ChevronRight,
  ChevronLeft,
  Check,
} from "@material-ui/icons";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";

let Upload = [];
let Url = "";
let path = "";

function Table() {
  const [tableData, setTableData] = useState([{ fname: "Loading....." }]);
  const [progress, setProgress] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;
    onSnapshot(collection(db, "StudentInfo"), (snapshot) => {
      if (isMounted)
        setTableData(
          snapshot.docs.map((doc) => ({ ...doc.data(), mi: doc.id }))
        );
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const dele = async (id) => {
    const docRef = doc(db, "StudentInfo", id);
    deleteDoc(docRef);
  };

  const columns = [
    {
      title: "First Name",
      field: "fname",
      sorting: false,
      filtering: false,
      //cellStyle: { background: "#009688" },
      headerStyle: { color: "#fff" },
    },
    {
      title: "Last Name",
      field: "lname",
      sorting: false,
      filtering: false,
      //cellStyle: { background: "#009688" },
      headerStyle: { color: "#fff" },
    },
    {
      title: "Email",
      field: "email",
      filterPlaceholder: "filter",
      emptyValue: () => <em>null</em>,
    },
    { title: "Student ID", field: "id", align: "center", grouping: false },
    {
      title: "Date of Birth",
      field: "dob",

      emptyValue: () => <em>null</em>,

      searchable: false,
      export: false,
    },
    { title: "Course", field: "course", filterPlaceholder: "filter" },
    {
      title: "Level",
      field: "lv",
      lookup: { 1: "100", 2: "200", 3: "300", 4: "400" },
    },
    {
      title: "Year of Enrollment",
      field: "enroll",

      filterPlaceholder: "filter",
    },
    {
      title: "Year of Completion",
      field: "yof",

      headerStyle: { color: "#fff" },
    },
    {
      title: "Transcript",
      field: "tran",
      sorting: false,
      filtering: false,

      editComponent: (props) => (
        <input
          type="file"
          //onChange={((e) => props.onChange(e.target.files[0]))}
          onChange={function upload(up) {
            Upload = up.target.files[0];
            //uploadFiles(Upload);
            //console.log(Upload);

            props.onChange(Upload.name);
          }}
          value={props.name}
        />
      ),
      render: (rowData) => <Link href="">{rowData.tran}</Link>,
    },
  ];

  return (
    <div>
      {/* <h3>Uploaded {progress} %</h3> */}
      <MaterialTable
        style={{ position: "absolute", width: "100%" }}
        columns={columns}
        data={tableData}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              newRow["url"] = path;
              console.log(path);

              // console.log((data["tran"] = "hey"));
              const collectionRef = collection(db, "StudentInfo");
              const payload = newRow;

              const ref = addDoc(collectionRef, payload);
              console.log(typeof ref.id);

              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              // setProgress(0);
              newRow["url"] = path;
              // console.log(newRow);
              const payload = newRow;
              setDoc(doc(db, "StudentInfo", payload.mi), payload);
              console.log(payload.mi);

              setTimeout(() => resolve(), 500);

              console.log(newRow.mi);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              dele(selectedRow.mi);
              // const updatedData = [...tableData];
              //updatedData.splice(selectedRow.tableData.id, 1);
              //setTableData(updatedData);
              setTimeout(() => resolve(), 1000);
            }),
        }}
        actions={[
          {
            icon: () => (
              // <Button variant="contained" component="label" >
              //   <GetAppIcon />
              //   <input type="file" hidden />
              // </Button>
              <div>
                <GetAppIcon />
              </div>
            ),
            tooltip: "upload",

            onClick: (e, data) => {
              const uploadFiles = async (file) => {
                if (!file) return;
                const storageRef = ref(storage, `/files/${file.name}`);
                const uploadTask = uploadBytesResumable(storageRef, file);

                uploadTask.on(
                  "state_changed",
                  (snapshot) => {
                    const prog = Math.round(
                      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(prog);
                    setModalOpen(true);
                  },
                  (err) => console.log(err),

                  // This gets the url for the files in storage

                  async () => {
                    path = await getDownloadURL(uploadTask.snapshot.ref);
                    data.url = path;
                    const payload = data;
                    setDoc(doc(db, "StudentInfo", payload.mi), payload);
                    console.log(path);
                    console.log(data.url);
                    console.log(payload.mi);
                  }
                );
              };

              uploadFiles(Upload);
            },
          },
        ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true,
          search: true,
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          searchFieldVariant: "standard",
          filtering: true,
          paging: true,
          pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
          pageSize: 20,
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          paginationPosition: "bottom",
          exportButton: true,
          exportAllData: true,
          exportFileName: "TableData",
          addRowPosition: "first",
          actionsColumnIndex: -1,
          showSelectAllCheckbox: false,
          showTextRowsSelected: false,
          selectionProps: (rowData) => ({
            disabled: rowData.age == null,
            // color: "primary",
          }),
          grouping: true,
          columnsButton: true,
          rowStyle: (data, index) =>
            index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#f44336", color: "#fff" },
        }}
        title="Student Information"
        icons={{
          Add: () => <AddIcon />,
          Delete: () => <DeleteIcon />,
          Edit: () => <Edit />,
          Filter: () => <FilterList />,
          Search: () => <Search />,
          Export: () => <SaveAlt />,
          ViewColumn: () => <ViewColumn />,
          Check: () => <Check />,
          Clear: () => <Clear />,
          NextPage: () => <ChevronRight />,
          PreviousPage: () => <ChevronLeft />,
          ResetSearch: () => <Clear />,
        }}
      />

      {modalOpen && (
        <ProgressModal
          progress={progress}
          setOpenModal={setModalOpen}
          callModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}

export default Table;
