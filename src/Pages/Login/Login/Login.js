import { Container, Grid } from "@mui/material";
import React from "react";
import login from "../../../images/login.png";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const Login = () => {
  const {googleLogin,loginUser, user} = useAuth();
  const [email, setEmail] = useState('');
  const [password ,setPassword] = useState('');
  const [error ,setError] = useState('');
  const [success , setSuccess] = useState('');
  const handleLogin = async(e) => {

    e.preventDefault();
    try {
      await loginUser(email, password);
      setSuccess("User Login Successfully");
      setError("")
    } catch (error) {
      console.log(error)
      setSuccess('')
      setError('No Account Exists ? Please Create An Account')
    }

  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value)
  }

 
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant="h5" gutterBottom component="div">
            Please Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label=" Your Email"
              variant="standard"
              onBlur={handleEmail}
            />
            <TextField
              id="standard-password-input"
              sx={{ width: "75%", m: 1 }}
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onBlur={handlePassword}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ width: "75%", mt: 4 }}
            >
              Login
            </Button>
            {success && (
              <Typography variant="h6" gutterBottom component="div">
                {success}
              </Typography>
            )}
            {error && (
              <Typography variant="h6" gutterBottom component="div">
                {error}
              </Typography>
            )}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button sx={{ mt: 2 }} variant="text">
                New User ? Please Register Here.........
              </Button>
            </Link>
            <Button
              variant="contained"
              size="large"
              sx={{ width: "75%", mt: 2 }}
              onClick={googleLogin}
            >
              Google Login 
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
