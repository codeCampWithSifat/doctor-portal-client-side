import { Button, Container, Grid, Alert } from "@mui/material";
import React from "react";
import login from "../../../images/login.png";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from '../../../hooks/useAuth'
import CircularProgress from '@mui/material/CircularProgress';


const Login = () => {
  const [loginData , setLoginData] = useState({})
  const {user, loginUser, isLoading, authError, googleSignIn} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    // alert("Login Successfully");
    loginUser(loginData.email , loginData.password, navigate, location)

    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    googleSignIn(navigate, location)
  }

  const handleOnBlur = e => {
    const field = e.target.name ;
    const value = e.target.value;
    const newLoginData = {...loginData}
    newLoginData[field] = value
    setLoginData(newLoginData)
    // console.log(field, value)
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 7 }} item xs={12} md={6}>
          <h3>Please Login </h3>
          {!isLoading && <form onSubmit={handleLogin}>
            <TextField
              required
              id="standard-required"
              label="Your Email"
              variant="standard"
              type="email"
              sx={{ width: "75%" , mt:3 }}
              name="email"
              onBlur={handleOnBlur}
            />
            <TextField
              required
              id="standard-required"
              label="Your Password"
              variant="standard"
              type="password"
              sx={{ width: "75%",mt:3 }}
              name="password"
              onBlur={handleOnBlur}
            />
            <Button sx={{ width: "75%",mt:4 }} type="submit" variant="contained">Login</Button>
          </form>}

          {user.email && <Alert sx={{width:"75%", mt:3 , mx:9}} severity="success">User Login Successfully ! </Alert> }
          {authError && <Alert sx={{width:"75%", mt:3 , mx:9}} severity="error">User Not Found . Please Register</Alert>}

          {isLoading &&  <CircularProgress />}
          <Link to='/register' style={{textDecoration:"none"}}>
          <Button sx={{ width: "75%",mt:4 }}  variant="text">New User Please Register</Button>
          </Link>
          <Button sx={{ width: "75%",mt:4 }} onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
