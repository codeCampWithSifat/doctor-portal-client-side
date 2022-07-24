import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    e.preventDefault();
    fetch(`http://localhost:5000/users/admin`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          setSuccess(true);
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
