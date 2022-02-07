import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

const Service = (props) => {
  const {name, discription, img} = props.service;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardMedia
          component="img"
          style={{width: 'auto', height: '80px', margin: 'auto'}}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: '500', my: 2}} component="div" color='text.secondary'>
            {name}
          </Typography>
          <Typography className="text-secondery" variant="body2" color='text.secondary'>
            {discription}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
