import React, { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Appoinmentess = ({date}) => {
  const { user } = useAuth();
  const [appoinments, setAppoinments] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/appoinments?email=${user.email}&date=${date}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAppoinments(data);
      });
  }, [date]);
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="Appoinments Table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Service Name</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appoinments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">{row.serviceName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Appoinmentess;
