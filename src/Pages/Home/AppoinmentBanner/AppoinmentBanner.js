import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/sifat.png';
import { Button, Container, Typography } from '@mui/material';
import './AppoinmentBanner.css'

const appoinmentbg = {
    background : `url(${bg})`,
    marginTop : '150px',
    borderRadius : '15px',
    backgroundColor: 'rgba(121, 133, 161)',
    backgroundBlendMode : 'darken, luminosity',

}

const AppoinmentBanner = () => {
  return (
    <Container>
        <Box style={appoinmentbg} sx={{ flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img 
           style={{width: "80%", marginTop: "-120px"}}
           src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex',justifyContent: 'flex-start', textAlign : "left",  alignItems: 'center' }}>
            <Box>
            <Typography sx={{mb: 5}} style={{color : '#16CBED'}} variant='h6'> Appoinment</Typography>
          <Typography style={{color: "white", fontSize : "14", fontWeight: '400'}} variant='h6'>
            Make An Appoinment Today 
            </Typography>
            <Typography sx={{ color: 'success.main' }} variant='p'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet architecto iure, reiciendis tempore illo temporibus facere ipsam tenetur beatae id.
            </Typography>
            <br />
            <Button style={{marginTop: '50px', backgroundColor : "#16CBED"}} variant="contained">Learn More</Button>
            </Box>
        </Grid>
      </Grid>
    </Box>
    </Container>
  )
}

export default AppoinmentBanner
