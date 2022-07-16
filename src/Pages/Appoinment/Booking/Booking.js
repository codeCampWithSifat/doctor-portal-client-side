import React from "react";
import { Grid, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Booking = ({ booking }) => {
  const { name, time, space } = booking;
  return (
    <>
      <Grid sx={{ py: 5, mt: 2 }} item xs={12} sm={6} md={4}>
        <Paper elevation={3}>
          <Typography sx={{py:1}} variant="h5" gutterBottom component="div">
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Available Right Now {space} Seats
          </Typography>
          <Button
            style={{ backgroundColor: "#16CBED", margin: "15px 0" }}
            variant="contained"
          >
            Book Appoinment
          </Button>
        </Paper>
      </Grid>
    </>
  );
};

export default Booking;
