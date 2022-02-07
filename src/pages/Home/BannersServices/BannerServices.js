import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const BannerServices = () => {
  return (
    <Container sx={{ flexGrow: 1, mt: -8}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper  sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#3ECFB8', color: 'white'}} elevation={3}>
            <Typography variant="h3" gutterBottom component="div">
              <i className="far fa-clock"></i>
            </Typography>
            <Box sx={{ p: 5 }}>
              <Typography variant="h5" gutterBottom component="div">
                Opaining Hours
              </Typography>
              <Typography
                sx={{ textAlign: "left" }}
                variant="body"
                gutterBottom
                component="div"
              >
                9 AM - 8 Pm
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper  sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'text.disabled', color: 'white'}} elevation={3}>
            <Typography variant="h3" gutterBottom component="div">
              <i className="fas fa-map-marker-alt"></i>
            </Typography>
            <Box sx={{ p: 5 }}>
              <Typography variant="h5" gutterBottom component="div">
                Visits our location
              </Typography>
              <Typography
                sx={{ textAlign: "center" }}
                variant="body"
                gutterBottom
                component="div"
              >
                New York - 101010
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#3ECFB8', color: 'white'}} elevation={3}>
            <Typography variant="h3" gutterBottom component="div">
              <i className="fas fa-phone"></i>
            </Typography>
            <Box sx={{ p: 5 }}>
              <Typography variant="h5" gutterBottom component="div">
                Contact us Now
              </Typography>
              <Typography
                sx={{ textAlign: "center" }}
                variant="body"
                gutterBottom
                component="div"
              >
                +48583553853
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BannerServices;
