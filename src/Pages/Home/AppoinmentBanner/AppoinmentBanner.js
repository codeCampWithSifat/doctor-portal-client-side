import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from  '../../../images/sifat.png'
import { Button, Container, Typography } from '@mui/material';
import './AppoinmentBanner.css'

const appoinmentbg = {
    background : `url{${bg}}`
}

const AppoinmentBanner = () => {
  return (
    <Container>
        <Box className='appoinment-banner' sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img 
           style={{width: "80%", marginTop: "-120px"}}
           src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ color: 'success.main' }} variant='h6'> Appoinment</Typography>
          <Typography sx={{ color: 'success.main' }} variant='h5'>Make An Appoinment Today</Typography>
          <Button variant="contained" color="success">
            More Info
          </Button>
           </Grid>
      </Grid>
    </Box>
    </Container>
  )
}

export default AppoinmentBanner
