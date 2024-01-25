import React, { useEffect, useState } from "react";
import { db } from "./firebaseUtils";
import { collection, getDocs } from "firebase/firestore";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const SubmissionList = () => {
  const [rows, setRows] = useState([]);
  const empCollectionRef = collection(db, "submission");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const columns = [
    {
      field: "id",
      headerName: "id",
      width: 200,
      align: "start",
    },
    {
      field: "teamName",
      headerName: "Team Name",
      width: 200,
      align: "start",
    },
    {
      field: "eventName",
      headerName: "Participating Event",
      width: 200,
      align: "start",
    },
    {
      field: "leadName",
      headerName: "Lead Name",
      width: 200,
      align: "start",
    },
    {
      field: "fileUrls",
      headerName: "Document Link",
      width: 300,
      align: "start",
      renderCell: (cellValues) => {
        return <Link target="_blank" to={`${cellValues.row.fileUrls}`}>{cellValues.row.fileUrls}</Link>;
      },
    },
    {
      field: "mem2Name",
      headerName: "2nd Member Name",
      width: 200,
      align: "start",
    },
    {
      field: "mem3Name",
      headerName: "3rd Member Name",
      width: 200,
      align: "start",
    },
    {
      field: "gitLink",
      headerName: "Github Repository Link",
      width: 200,
      align: "start",
    },
  ];

  const getRowId = (row) => row.id;

  return (
    <div className="box">
      <DataGrid
        style={{ height: "50rem" }}
        rows={rows}
        columns={columns}
        {...rows}
        autoPageSize
        pageSizeOptions={[10]}
        getRowId={getRowId}
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </div>
  );
};

export default SubmissionList;
