import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const {token} = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    e.preventDefault();
    fetch(`http://localhost:5000/users/admin`, {
      method: "PUT",
      headers: {
        'authorization' : `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
       
        if (data.modifiedCount) {
          setSuccess(true);
           console.log(data);
        }
      });
  };
  return (
    <div>
      <h2>Make An Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "75%" }}
          label="Your Email"
          variant="standard"
          type="email"
          name="email"
          onBlur={handleOnBlur}
        />
        <Button sx={{ width: "75%", mt: 5 }} type="submit" variant="contained">
          Make An Admin
        </Button>
      </form>
      {success && (
        <Alert sx={{ width: "75%", mt: 3, mx: 9 }} severity="success">
          Admin Created Successfully!{" "}
        </Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
