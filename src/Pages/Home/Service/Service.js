import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


const Service = ({service}) => {
    console.log(service)
    const {name,description,img} = service;
  return (
    <Card sx={{ minWidth: 275 , }}>
    <CardContent >
    <CardMedia
        component="img"
        height="80px"
        image={img}
        style={{width:"auto" , margin: "0 auto"}}
        alt="Paella dish"
      />
     
      <Typography sx={{ mb: 1.5 }}variant="h5" color="text.secondary">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
        
      </Typography>
    </CardContent>
    
  </Card>
  )
}

export default Service
