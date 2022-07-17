import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import login from "../../../images/login.png";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { googleLogin, registerUser } = useAuth();

  async function handleRegistration(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password Not Matched");
      return;
    } else if (password.length < 6) {
      setError("Password At Least 6 Or More Character");
      return;
    }
    try {
      await registerUser(name, email, password);
      setSuccess("User Created Successfully");
      setError("");
    } catch (error) {
      setSuccess("");
      setError("This Account Already Used ? Please Try Another Account");
    }
  }

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfrimPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant="h5" gutterBottom component="div">
            Please Register
          </Typography>
          <form onSubmit={handleRegistration}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Name"
              variant="standard"
              type="text"
              onBlur={handleName}
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label=" Your Email"
              variant="standard"
              type="email"
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
            <TextField
              id="standard-password-input"
              sx={{ width: "75%", m: 1 }}
              label=" Confirm Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onBlur={handleConfrimPassword}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ width: "75%", mt: 4 }}
            >
              Register
            </Button>
            {success && (
              <Typography variant="h5" gutterBottom component="div">
                {success}
              </Typography>
            )}
            {error && (
              <Typography variant="h5" gutterBottom component="div">
                {error}
              </Typography>
            )}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button sx={{ mt: 2 }} variant="text">
                Already Have An Account ? Please Login.....
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

export default Register;
