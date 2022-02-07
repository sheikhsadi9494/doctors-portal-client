import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useAuth from "../../../hook/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AppointmentModal = ({
  openBooking,
  handleBookingClose,
  appointmentOption,
  date,
  setAppointmentSuccessful,
}) => {
  const { name, time, price } = appointmentOption;
  const { user } = useAuth();
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phoneNumber: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleBlur = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // collact data
    const appointment = {
      ...bookingInfo,
      time,
      price,
      serviceName: name,
      date: date.toLocaleDateString(),
    };
    // send data to the server
    fetch("https://morning-depths-55912.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setAppointmentSuccessful(true);
          handleBookingClose();
        }
      });
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Time"
              id="outlined-read-only-input"
              sx={{ width: "100%", m: 1 }}
              defaultValue={time}
              InputProps={{
                readOnly: true,
              }}
              size="small"
            />
            <TextField
              label="Name"
              sx={{ width: "100%", m: 1 }}
              name="patientName"
              onBlur={handleBlur}
              defaultValue={user.displayName}
              size="small"
            />
            <TextField
              label="Email"
              sx={{ width: "100%", m: 1 }}
              name="email"
              onBlur={handleBlur}
              defaultValue={user.email}
              size="small"
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              onBlur={handleBlur}
              sx={{ width: "100%", m: 1 }}
              size="small"
            />
            <TextField
              label="Date"
              sx={{ width: "100%", m: 1 }}
              defaultValue={date.toDateString()}
              size="small"
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AppointmentModal;
