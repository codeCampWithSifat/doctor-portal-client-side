import { Button, Container, Grid, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import login from "../../../images/login.png";

const Register = () => {
  const [loginData , setLoginData] = useState({});

  const handleOnChange = e => {
    const field = e.target.name ;
    const value = e.target.value ;
    const newLoginData = {...loginData}
    newLoginData[field] = value 
    setLoginData(newLoginData);
    // console.log(newLoginData)
  };
  const handleRegisterSubmit = e =>{
    e.preventDefault()
   
    if(loginData.password !== loginData.password2) {
      alert('Your Password Not Matched')
      return
    }
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 7 }} item xs={12} md={6}>
          <h3>Please Register </h3>
          <form onSubmit={handleRegisterSubmit}>
            <TextField
              required
              id="standard-required"
              label="Your Email"
              variant="standard"
              type="email"
              sx={{ width: "75%", mt: 3 }}
              name="email"
              onChange={handleOnChange}
            />
            <TextField
              required
              id="standard-required"
              label="Your Password"
              variant="standard"
              type="password"
              sx={{ width: "75%", mt: 3 }}
              name="password"
              onChange={handleOnChange}
            />
            <TextField
              required
              id="standard-required"
              label="Confirm Password"
              variant="standard"
              type="password"
              sx={{ width: "75%", mt: 3 }}
              name="password2"
              onChange={handleOnChange}
            />
            <Button
              sx={{ width: "75%", mt: 4 }}
              type="submit"
              variant="contained"
            >
              Register
            </Button>
          </form>

          <NavLink to="/login" style={{textDecoration:"none"}}>
            <Button sx={{ width: "75%", mt: 4 }} variant="text">
              Already Have An Account? Please Login.........
            </Button>
          </NavLink>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
