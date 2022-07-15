import React from "react";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography,Container } from "@mui/material";
import {Link} from 'react-router-dom';
 import './Banner.css';

// const bannerBg = {
//     background : `url(${bg})`
// }




const Banner = () => {
  return (
    <Container style={{marginTop: "13px"}} className="banner-background" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{textAlign: "justify"}}>
        <Grid item xs={12} md={5}>
          <Typography variant="h3">
            Your New Smile <br /> Starts Here{" "}
          </Typography>
          <Typography style={{marginTop: "30px"}} sx={{fontSize: 15, color: 'gray', fontWeight:'350'}} variant="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi voluptatibus sunt aperiam consequuntur temporibus expedita quidem voluptatem, labore fuga!
          </Typography>
         <Link to="/appoinment" style={{textDecoration : "none"}}>
         <Button style={{backgroundColor : "#16CBED", color: 'black',marginTop: "30px", }} variant="contained">Get Appoinment</Button>
         </Link>
        </Grid>
        <Grid  item xs={12} md={7}>
          <img style={{width : '400px', marginLeft: "200px"}} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
