import { Container, Grid } from "@mui/material";
import React from "react";
import login from "../../../images/login.png";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link} from 'react-router-dom';
const Register = () => {
    const handleRegistrationSubmit = e => {
        console.log('Button Clicked')
        e.preventDefault();
    }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant="h5" gutterBottom component="div">
            Please Register
          </Typography>
          <form onSubmit={handleRegistrationSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label=" User Name or Email"
              variant="standard"
            />
            <TextField
              id="standard-password-input"
              sx={{ width: "75%", m: 1 }}
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <TextField
              id="standard-password-input"
              sx={{ width: "75%", m: 1 }}
              label=" Confirm Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ width: "75%", mt: 4 }}
            >
              Register
            </Button>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button sx={{ mt: 2 }} variant="text">
                Already Have An Account ? Please Login.....
              </Button>
            </Link>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
