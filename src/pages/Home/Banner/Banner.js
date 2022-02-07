import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import chire from '../../../images/chair.png'
import bgimg from '../../../images/bg.png'

const Banner = () => {
    const bg = {
        marginTop: '16px',
        background: `url(${bgimg})`,
    }

    const verticleCenter = {
        display: 'flex',
        alignItems: 'center',
        height: '500px'
    }

  return (
    <Box style={bg} sx={{ flexGrow: 1 }}>
     <Container>
     <Grid container sx={{alignItems: 'center'}} spacing={2}>
        <Grid item xs={12} md={6} sx={{textAlign: 'left'}}>
          <Typography variant="h3" sx={{fontWeight: '500'}} gutterBottom component="div">
            Your New Smile <br /> Start Here
          </Typography>
          <Typography variant="body1" sx={{width: '75%', my: 4}} gutterBottom component="div">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dignissimos ex, alias illo cumque expedita! Nesciunt cumque tenetur reiciendis id hic porro unde voluptatum nisi sed? Sapiente autem totam praesentium!
          </Typography>
          <Button sx={{backgroundColor: '#3ECFB8'}} variant="contained">GET APPOINTMENT</Button>
        </Grid>
        <Grid item xs={12} md={6} style={verticleCenter}>
          <img style={{width: '75%'}} src={chire} alt="" />
        </Grid>
      </Grid>
     </Container>
    </Box>
  );
};

export default Banner;
