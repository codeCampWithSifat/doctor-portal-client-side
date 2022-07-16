import { Container, Grid } from "@mui/material";
import React from "react";
import login from "../../../images/login.png";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  const handleLoginSubmit = (e) => {
    alert('Hello Sifat')
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant="h5" gutterBottom component="div">
            Please Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
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
            <Button type="submit" variant="contained" size="large" sx={{ width: "75%", mt: 4 }}>
              Login
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
