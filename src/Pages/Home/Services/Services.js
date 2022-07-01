import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Typography from '@mui/material/Typography';


const services = [
    {
        name : "Fluoride Treatment",
        description : "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing",
        img :fluoride
    },
    {
        name : "Cavity Filling",
        description : "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing",
        img :cavity
    },
    {
        name : "Teeth Whitening",
        description : "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing",
        img :whitening
    },
]


const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography sx={{ mb: 1.5,  color: 'secondary.main' }} variant="h5" color="text.secondary">
        Our Services
      </Typography>
      <Typography sx={{ mb: 1.5, fontWeight:600 }}variant="h4" color="text.secondary">
        Services We Provide
      </Typography>
      <Grid  sx={{ border: 0 }} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {services.map(service => (
          <Grid item xs={4} sm={4} md={4} sx={{border:0}} >
            <Service key={service.name} service={service}>

            </Service>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Box>
  )
}

export default Services
