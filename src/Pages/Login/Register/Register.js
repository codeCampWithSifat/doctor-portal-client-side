import { Alert, Button, Container, Grid, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";
import CircularProgress from '@mui/material/CircularProgress';


const Register = () => {
  const [loginData , setLoginData] = useState({});
  const {registerUser, isLoading , user , authError} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnChange = e => {
    const field = e.target.name ;
    const value = e.target.value ;
    const newLoginData = {...loginData}
    newLoginData[field] = value 
    setLoginData(newLoginData);
    console.log(newLoginData)
  };
  const handleRegisterSubmit = e =>{
    
   
    if(loginData.password !== loginData.password2) {
      alert('Your Password Not Matched')
      return
    }
    registerUser(loginData.email, loginData.password, loginData.name, navigate, location)
    
    e.preventDefault();

  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 7 }} item xs={12} md={6}>
          <h3>Please Register </h3>
         { !isLoading && <form onSubmit={handleRegisterSubmit}>
            <TextField
              required
              id="standard-required"
              label=" Name"
              variant="standard"
              type="text"
              sx={{ width: "75%", mt: 3 }}
              name="name"
              onBlur={handleOnChange}
            />
            <TextField
              required
              id="standard-required"
              label="Your Email"
              variant="standard"
              type="email"
              sx={{ width: "75%", mt: 3 }}
              name="email"
              onBlur={handleOnChange}
            />
            <TextField
              required
              id="standard-required"
              label="Your Password"
              variant="standard"
              type="password"
              sx={{ width: "75%", mt: 3 }}
              name="password"
              onBlur={handleOnChange}
            />
            <TextField
              required
              id="standard-required"
              label="Confirm Password"
              variant="standard"
              type="password"
              sx={{ width: "75%", mt: 3 }}
              name="password2"
              onBlur={handleOnChange}
            />
            <Button
              sx={{ width: "75%", mt: 4 }}
              type="submit"
              variant="contained"
            >
              Register
            </Button>
          </form>}

          {isLoading &&  <CircularProgress />}
          {user.email && <Alert severity="success">User Created Successfully ! </Alert> }
          {authError && <Alert severity="error">This Account Already In Used. Please Try Another Account</Alert>}

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
