import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';

const AppointmentAvailable = ({date}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [appointmentSuccessful, setAppointmentSuccessful] = useState(false);

    useEffect(() => {
        fetch('./appointmentDetails.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])
    return (
        <Container>
             <Typography sx={{fontWeight: 500, color:'#03a9f4', my: 5}} variant="h4" gutterBottom component="div">
                Appointment available On {date.toDateString()}
             </Typography>
             {appointmentSuccessful && (
              <Alert sx={{ mx: 12, my: 3 }} severity="success">
                Appointment Book Successfully
              </Alert>
            )}
           
            <Grid container spacing={2}>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption
                     key={appointmentOption.id}
                     appointmentOption = {appointmentOption}
                     date={date}
                     setAppointmentSuccessful={setAppointmentSuccessful}
                    ></AppointmentOption>)
                }
            </Grid>
        </Container>
    );
};

export default AppointmentAvailable;