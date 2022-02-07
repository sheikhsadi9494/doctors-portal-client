import { Grid } from "@mui/material";
import React from "react";
import Typography from '@mui/material/Typography';

const Doctor = ({ doctor }) => {
  const { name, image} = doctor;
  return (
    <>
      <Grid item xs={12} md={4}>
          <img style={{width: '350px', height: '350px'}} src={`data:image/png;base64,${image}`} alt="" />
        <Typography sx={{textAlign: 'center'}} variant="h4" gutterBottom component="div">
           {name}
        </Typography>
      </Grid>
    </>
  );
};

export default Doctor;
