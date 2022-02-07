import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import bg from '../../../images/appointment-bg.png'

const Contact = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        background: `url(${bg})`,
        backgroundPosition:  '15% 20%',
        p: 5,
        backgroundColor: "rgba(14, 19, 44, 0.8)",
        backgroundBlendMode: "darken, luminosity",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h6" sx={{color: '#3ECFB8'}} gutterBottom component="div">
          Contact us
      </Typography>
      <Typography variant="h3" sx={{color: 'white', mb: 7}} gutterBottom component="div">
          Always Contact With Us
      </Typography>
     <Box>
        <TextField
          sx={{ bgcolor: 'white', borderRadius: 1}}
          label="Name"
          id="outlined-size-normal"
        />
        <br />
        <TextField
          sx={{bgcolor: 'white', borderRadius: 1}}
          label="Email"
          id="outlined-size-normal"
        />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Enter your message"
          sx={{bgcolor: 'white', borderRadius: 1}}
          multiline
          rows={4}
        /> <br />
        <Button type="submit" sx={{backgroundColor: '#3ECFB8'}} variant="contained">Submit</Button>
        </Box>
    </Box>
  );
};

export default Contact;
