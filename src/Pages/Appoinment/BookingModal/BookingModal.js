import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
  const { name, time } = booking;
  const {user} = useAuth();
  const initialInfo = {patientName:user.displayName, email:user.email, phone:""}

  const [bookingInfo , setBookingInfo] = useState(initialInfo)

  
  
  const handleOnBlur = e => {
    const field = e.target.name ;
    const value = e.target.value;
    const newInfo = {...bookingInfo}
    newInfo[field] = value;
    console.log(newInfo)
    setBookingInfo(newInfo)
  };
  
  
  const handleBookSubmit = e => {

   //collect the data 
   const appoinment = {
    ...bookingInfo,
    time,
    serviceName: name,
    date: date.toLocalDateString()
   }
   // send data to the server
   console.log(appoinment)

    handleBookingClose()
    e.preventDefault()

  };


  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography style={{color :"#16CBED", textAlign:"center", fontWeight:'400'}} id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleBookSubmit}>
            <TextField
              disabled
              id="outlined-size-small"
              sx ={{width : "100%", m:1}}
              defaultValue={time}
              size="small"
            />
            <TextField    
              id="outlined-size-small"
              name="patientName"
              sx ={{width : "100%", m:1}}
              defaultValue={user.displayName}
              size="small"
              onBlur={handleOnBlur}
            />
            <TextField
              id="outlined-size-small"
              sx ={{width : "100%", m:1}}
              defaultValue={user.email}
              name="email"
              size="small"
              onBlur={handleOnBlur}
            />
            <TextField
              id="outlined-size-small"
              required
              sx ={{width : "100%", m:1}}
              defaultValue='Your Phone Number'
              size="small"
              name="Phone Number"
              onBlur={handleOnBlur}
            />
            <TextField
              disabled
              id="outlined-size-small"
              sx ={{width : "100%", m:1}}
              defaultValue={date.toDateString()}
              size="small"
            />
            <Button type='submit'  variant="contained" >Submit</Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
