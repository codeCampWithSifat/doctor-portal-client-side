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

const Appoinmentess = () => {
  const { user } = useAuth();
  const [appoinments, setAppoinments] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/appoinments?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAppoinments(data);
      });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="Appoinments Table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="right">Service Name</TableCell>
            <TableCell align="right">Action</TableCell>
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
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.serviceName}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Appoinmentess;
