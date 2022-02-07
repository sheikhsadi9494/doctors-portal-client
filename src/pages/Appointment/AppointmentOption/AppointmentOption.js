import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import AppointmentModal from "../AppointmentModal/AppointmentModal";

const AppointmentOption = ({appointmentOption, date, setAppointmentSuccessful}) => {
  const { name, space, time, price} = appointmentOption;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  return (
    <>
    <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ py: 5 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, color: '#03a9f4' }} gutterBottom component="div">
                  {name}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                  {time}
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                  {space} avialable appointment
              </Typography>
              <Typography variant="h6" display="block" gutterBottom>
                  price : $ {price}
              </Typography>
              <Button onClick={handleBookingOpen} variant="contained">Book Appointment</Button>
          </Paper>
      </Grid>
          <AppointmentModal
           appointmentOption={appointmentOption}
           openBooking={openBooking}
           handleBookingClose={handleBookingClose}
           date={date}
           setAppointmentSuccessful={setAppointmentSuccessful}
           >
          </AppointmentModal>
          </>
  );
};

export default AppointmentOption;
