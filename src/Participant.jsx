import React, { useEffect, useState } from "react";
import { db } from "./firebaseUtils";
import { collection, getDocs } from "firebase/firestore";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Participant = () => {
  const [rows, setRows] = useState([]);
  const empCollectionRef = collection(db, "forms");

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
      field: "leadMail",
      headerName: "Lead Mail",
      width: 200,
      align: "start",
    },
    {
      field: "leadNumber",
      headerName: "Lead Number",
      width: 200,
      align: "start",
    },
    {
      field: "leadAge",
      headerName: "Lead Age",
      width: 100,
      align: "start",
    },
    {
      field: "leadLocation",
      headerName: "Lead Location",
      width: 200,
      align: "start",
    },
    {
      field: "leadInstitute",
      headerName: "Lead Institute",
      width: 200,
      align: "start",
    },
    {
      field: "leadCourse",
      headerName: "Lead Course",
      width: 200,
      align: "start",
    },
    {
      field: "leadCurrentYear",
      headerName: "Lead Studying Year",
      width: 200,
      align: "start",
    },
    {
      field: "leadInterest",
      headerName: "Lead Interest",
      width: 200,
      align: "start",
    },
    {
      field: "leadPriorWork",
      headerName: "Lead Prior Work",
      width: 200,
      align: "start",
    },
    {
      field: "leadCurrentWork",
      headerName: "Lead Current Work",
      width: 200,
      align: "start",
    },
    {
      field: "leadCategory",
      headerName: "Lead Category",
      width: 200,
      align: "start",
    },
    {
      field: "mem2Name",
      headerName: "2nd Member Name",
      width: 200,
      align: "start",
    },
    {
      field: "mem2Mail",
      headerName: "2nd Member Mail>",
      width: 200,
      align: "start",
    },
    {
      field: "mem2Number",
      headerName: "2nd Member Number",
      width: 200,
      align: "start",
    },
    {
      field: "mem2Age",
      headerName: "2nd Member Age",
      width: 100,
      align: "start",
    },
    {
      field: "mem2Location",
      headerName: "2nd Member Address",
      width: 200,
      align: "start",
    },
    {
      field: "mem2Institute",
      headerName: "2nd Member Institute",
      width: 200,
      align: "start",
    },
    {
      field: "mem2Course",
      headerName: "2nd Member Course",
      width: 200,
      align: "start",
    },
    {
      field: "mem2CurrentYear",
      headerName: "2nd Member Studying Year",
      width: 200,
      align: "start",
    },
    {
      field: "mem2Interest",
      headerName: "2nd Member Interest",
      width: 200,
      align: "start",
    },
    {
      field: "mem2PriorWork",
      headerName: "2nd Member Prior Work",
      width: 200,
      align: "start",
    },
    {
      field: "mem2CurrentWork",
      headerName: "2nd Member Current Work",
      width: 200,
      align: "start",
    },
    {
      field: "mem2Category",
      headerName: "2nd Member Category",
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
      field: "mem3Mail",
      headerName: "3rd Member Mail",
      width: 200,
      align: "start",
    },
    {
      field: "mem3Number",
      headerName: "3rd Member Number",
      width: 200,
      align: "start",
    },
    {
      field: "mem3Age",
      headerName: "3rd Member Age",
      width: 100,
      align: "start",
    },
    {
      field: "mem3Location",
      headerName: "3rd Member Location",
      width: 200,
      align: "start",
    },
    {
      field: "mem3Institute",
      headerName: "3rd Member Institute",
      width: 200,
      align: "start",
    },
    {
      field: "mem3Course",
      headerName: "3rd Member Course",
      width: 200,
      align: "start",
    },
    {
      field: "mem3CurrentYear",
      headerName: "3rd Member Current Year",
      width: 200,
      align: "start",
    },
    {
      field: "mem3Interest",
      headerName: "3rd Member Interest",
      width: 200,
      align: "start",
    },
    {
      field: "mem3PriorWork",
      headerName: "3rd Member Prior Work",
      width: 200,
      align: "start",
    },
    {
      field: "mem3CurrentWork",
      headerName: "3rd Member Current Work",
      width: 200,
      align: "start",
    },
    {
      field: "mem3Category",
      headerName: "3rd Member Category",
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

export default Participant;
