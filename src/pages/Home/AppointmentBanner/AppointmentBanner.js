import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import { Button, Typography } from "@mui/material";
import bg from "../../../images/appointment-bg.png";

const appointmentBg = {
  background: `url(${bg})`,
  marginTop: "170px",
  backgroundColor: "rgba(14, 19, 44, 0.9)",
  backgroundBlendMode: "darken, luminosity",
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "400px", marginTop: "-110px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{display : 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
          <Box sx={{textAlign: 'left', px: 5, py: 3}}>
            <Typography variant="h6" sx={{ color: "#3ECFB8" }}>
              Appointment
            </Typography>
            <Typography variant="h4" style={{ color: "white" }} sx={{my: 3}} >
              Make Your Appointment today
            </Typography>
            <Typography variant="h6" sx={{my: 3}} style={{ fontSize: 14, fontWeight: 'lighter', color: 'whitesmoke'}}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et a
              modi error impedit deserunt est voluptate,<br /> nam placeat laudantium
              saepe!
            </Typography>
            <Button style={{backgroundColor: "#3ECFB8"}} variant="contained">Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
