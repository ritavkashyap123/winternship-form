import React from "react";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { db } from "./firebaseUtils";
import { collection, getDocs } from "firebase/firestore";

const Participants = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const empCollectionRef = collection(db, "forms");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <>
      {rows.length > 0 && (
        <Paper
          sx={{
            width: "auto",
            overflow: "hidden",
            padding: "10px",
            margin: "1rem",
            borderRadius: "20px",
          }}
        >
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    style={{ minWidth: "50px", fontWeight: "bold" }}
                  >
                    S No.
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Team Name
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Event Name
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Lead Name
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Lead mail
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Lead Ph No.
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Lead Age
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Lead Address
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Lead Institute
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Lead Course
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Lead Current year
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Lead Interest
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Lead Prior Work
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Lead Current Work
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Lead Category
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    2nd Member Name
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    2nd Member mail
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    2nd Member Ph No.
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    2nd Member Age
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    2nd Member Address
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    2nd Member Institute
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    2nd Member Course
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    2nd Member Current year
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    2nd Member Interest
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    2nd Member Prior Work
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    2nd Member Current Work
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    2nd Member Category
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    3rd Member Name
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    3rd Member mail
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    3rd Member Ph No.
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    3rd Member Age
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    3rd Member Address
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    3rd Member Institute
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    3rd Member Course
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    3rd Member Current year
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    3rd Member Interest
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    3rd Member Prior Work
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    3rd Member Current Work
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    3rd Member Category
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        <TableCell align="left">
                          {page * rowsPerPage + index + 1}
                        </TableCell>
                        <TableCell align="left">{row.teamName}</TableCell>
                        <TableCell align="left">{row.eventName}</TableCell>
                        <TableCell align="left">{row.leadName}</TableCell>
                        <TableCell align="left">{row.leadMail}</TableCell>
                        <TableCell align="left">{row.leadNumber}</TableCell>
                        <TableCell align="left">{row.leadAge}</TableCell>
                        <TableCell align="left">{row.leadLocation}</TableCell>
                        <TableCell align="left">{row.leadInstitute}</TableCell>
                        <TableCell align="left">{row.leadCourse}</TableCell>
                        <TableCell align="left">
                          {row.leadCurrentYear}
                        </TableCell>
                        <TableCell align="left">
                          {row.leadInterest[0]}
                          {row.leadInterest[1] ? <br /> : ""}
                          {row.leadInterest[1]}
                          {row.leadInterest[2] ? <br /> : ""}
                          {row.leadInterest[2]}
                        </TableCell>
                        <TableCell align="left">
                          {row.leadPriorWork[0]}
                          {row.leadPriorWork[1] ? <br /> : ""}
                          {row.leadPriorWork[1]}
                          {row.leadPriorWork[2] ? <br /> : ""}
                          {row.leadPriorWork[2]}
                          {row.leadPriorWork[3] ? <br /> : ""}
                          {row.leadPriorWork[3]}
                          {row.leadPriorWork[4] ? <br /> : ""}
                          {row.leadPriorWork[4]}
                        </TableCell>
                        <TableCell align="left">
                          {row.leadCurrentWork[0]}
                          {row.leadCurrentWork[1] ? <br /> : ""}
                          {row.leadCurrentWork[1]}
                          {row.leadCurrentWork[2] ? <br /> : ""}
                          {row.leadCurrentWork[2]}
                          {row.leadCurrentWork[3] ? <br /> : ""}
                          {row.leadCurrentWork[3]}
                          {row.leadCurrentWork[4] ? <br /> : ""}
                          {row.leadCurrentWork[4]}
                        </TableCell>
                        <TableCell align="left">
                          {row.leadCategory[0]}
                          {row.leadCategory[1] ? <br /> : ""}
                          {row.leadCategory[1]}
                          {row.leadCategory[2] ? <br /> : ""}
                          {row.leadCategory[2]}
                          {row.leadCategory[3] ? <br /> : ""}
                          {row.leadCategory[3]}
                          {row.leadCategory[4] ? <br /> : ""}
                          {row.leadCategory[4]}
                          {row.leadCategory[5] ? <br /> : ""}
                          {row.leadCategory[5]}
                          {row.leadCategory[6] ? <br /> : ""}
                          {row.leadCategory[6]}
                          {row.leadCategory[7] ? <br /> : ""}
                          {row.leadCategory[7]}
                          {row.leadCategory[8] ? <br /> : ""}
                          {row.leadCategory[8]}
                          {row.leadCategory[9] ? <br /> : ""}
                          {row.leadCategory[9]}
                        </TableCell>
                        <TableCell align="left">{row.mem2Name}</TableCell>
                        <TableCell align="left">{row.mem2Mail}</TableCell>
                        <TableCell align="left">{row.mem2Number}</TableCell>
                        <TableCell align="left">{row.mem2Age}</TableCell>
                        <TableCell align="left">{row.mem2Location}</TableCell>
                        <TableCell align="left">{row.mem2Institute}</TableCell>
                        <TableCell align="left">{row.mem2Course}</TableCell>
                        <TableCell align="left">
                          {row.mem2CurrentYear}
                        </TableCell>
                        <TableCell align="left">{row.mem2Interest}</TableCell>
                        <TableCell align="left">{row.mem2PriorWork}</TableCell>
                        <TableCell align="left">
                          {row.mem2CurrentWork}
                        </TableCell>
                        <TableCell align="left">{row.mem2Category}</TableCell>
                        <TableCell align="left">{row.mem3Name}</TableCell>
                        <TableCell align="left">{row.mem3Mail}</TableCell>
                        <TableCell align="left">{row.mem3Number}</TableCell>
                        <TableCell align="left">{row.mem3Age}</TableCell>
                        <TableCell align="left">{row.mem3Location}</TableCell>
                        <TableCell align="left">{row.mem3Institute}</TableCell>
                        <TableCell align="left">{row.mem3Course}</TableCell>
                        <TableCell align="left">
                          {row.mem3CurrentYear}
                        </TableCell>
                        <TableCell align="left">{row.mem3Interest}</TableCell>
                        <TableCell align="left">{row.mem3PriorWork}</TableCell>
                        <TableCell align="left">
                          {row.mem3CurrentWork}
                        </TableCell>
                        <TableCell align="left">{row.mem3Category}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
};

export default Participants;
