import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import footer from '../../../images/footer-bg.png'

const Footer = () => {

    const footerImg = {
        background: `url(${footer})`
    }

  return (
    <Box style={footerImg} sx={{ flexGrow: 1, p: 5, mt: 5, textAlign: 'left'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
        <Typography sx={{ color: 'text.secondary', mt: 10, mb: 2 }} variant="subtitle2" gutterBottom component="div">
            Emergency Dental Care
          </Typography>
          <Typography sx={{ color: 'text.secondary', my: 2}} variant="subtitle2" gutterBottom component="div">
            Check up
          </Typography>
          <Typography sx={{ color: 'text.secondary', my: 2}} variant="subtitle2" gutterBottom component="div">
            Treatment of Personal Diseases
          </Typography>
          <Typography sx={{ color: 'text.secondary', my: 2}} variant="subtitle2" gutterBottom component="div">
            Tooth Extraction
          </Typography>
          <Typography sx={{ color: 'text.secondary', my: 2}} variant="subtitle2" gutterBottom component="div">
            Check Up
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography sx={{color: '#3ECFB8', fontWeight: 'bold', my: 3}} variant="h6" gutterBottom component="div">
            Services
          </Typography>
          <Typography sx={{ color: 'text.secondary', my: 2}} variant="subtitle2" gutterBottom component="div">
            Emergency Dental Care
          </Typography>
          <Typography sx={{ color: 'text.secondary', my: 2}} variant="subtitle2" gutterBottom component="div">
            Check up
          </Typography>
          <Typography sx={{ color: 'text.secondary', my: 2}} variant="subtitle2" gutterBottom component="div">
            Treatment of Personal Diseases
          </Typography>
          <Typography sx={{ color: 'text.secondary', my: 2}} variant="subtitle2" gutterBottom component="div">
            Tooth Extraction
          </Typography>
          <Typography sx={{ color: 'text.secondary', my: 2}} variant="subtitle2" gutterBottom component="div">
            Check Up
          </Typography>
          <Typography sx={{ color: 'text.secondary', my: 2}} variant="subtitle2" gutterBottom component="div">
            Check Up
          </Typography>
          <Typography sx={{ color: 'text.secondary', my: 2}} variant="subtitle2" gutterBottom component="div">
            Check Up
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography sx={{color: '#3ECFB8', fontWeight: 'bold', my: 3}} variant="h6" gutterBottom component="div">
            Oral Health
          </Typography>
          <Typography sx={{ color: 'text.secondary', my: 2}} variant="subtitle2" gutterBottom component="div">
            Emergency Dental Care
          </Typography>
          <Typography sx={{ color: 'text.secondary', my: 2}} variant="subtitle2" gutterBottom component="div">
            Check up
          </Typography>
          <Typography sx={{ color: 'text.secondary', my: 2}} variant="subtitle2" gutterBottom component="div">
            Treatment of Personal Diseases
          </Typography>
          <Typography sx={{ color: 'text.secondary', my: 2}} variant="subtitle2" gutterBottom component="div">
            Tooth Extraction
          </Typography>
          <Typography sx={{ color: 'text.secondary', my: 2}} variant="subtitle2" gutterBottom component="div">
            Check Up
          </Typography>
          <Typography sx={{ color: 'text.secondary', my: 2}} variant="subtitle2" gutterBottom component="div">
            Check Up
          </Typography>
          <Typography sx={{ color: 'text.secondary', my: 2}} variant="subtitle2" gutterBottom component="div">
            Check Up
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography sx={{color: '#3ECFB8', fontWeight: 'bold', my: 3}} variant="h6" gutterBottom component="div">
            Our Address
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
           
          </Typography>
          <Box sx={{display: 'flex', justifyContent: 'flex-start', mt: 5, mb: 8}}>
            <Typography sx={{color: '#3ECFB8', fontWeight: 'bold'}} variant="h4" gutterBottom component="div">
              <i className="fab fa-facebook"></i>
            </Typography>
            <Typography sx={{color: '#3ECFB8', fontWeight: 'bold', mx: 2}} variant="h4" gutterBottom component="div">
              <i className="fab fa-google"></i>
            </Typography>
            <Typography sx={{color: '#3ECFB8', fontWeight: 'bold'}} variant="h4" gutterBottom component="div">
              <i className="fab fa-twitter"></i>
            </Typography>
          </Box>
          <Typography variant="subtitle2" gutterBottom component="div">
            Call Now
          </Typography>
          <Button sx={{backgroundColor: '#3ECFB8'}} variant="contained">+55938572</Button>
        </Grid>
      </Grid>
      <Typography sx={{color: 'text.secondary', fontWeight: 'bold', mt: 5, textAlign: 'center'}} variant="subtitle1" gutterBottom component="div">
            Copyright 2022 By Sheikh Sadi
          </Typography>
    </Box>
  );
};

export default Footer;
