import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const AddDoctor = () => {
  const [email, setEmail] = useState("");
  const handleOnBlur = e => {
    setEmail(e.target.value)
  }
  const handleAdminSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h3>this is add a doctor</h3>
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
    </div>
  );
};

export default AddDoctor;
