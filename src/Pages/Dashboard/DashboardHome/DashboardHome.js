import { Grid } from "@mui/material";
import React, { useState } from "react";
import Calander from "../../Shared/Calander/Calander";
import Appoinmentess from "../Appoinmentss/Appoinmentess";

const DashboardHome = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Calander date={date} setDate={setDate}></Calander>
      </Grid>
      <Grid item xs={12} md={6}>
        <Appoinmentess date={date}></Appoinmentess>
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
