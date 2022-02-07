import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import img from  '../../../images/treatment.png'

const DentalCare = () => {
  return (
    <Box sx={{ flexGrow: 1, my: 13}}>
      <Grid
        container
        spacing={{ xs: 2, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={6}>
          <Box>
            <img style={{ width: "55%" }} src={img} alt="" />
          </Box>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
          <Box sx={{ textAlign: "left", m: 5}}>
              <Typography variant="h4" sx={{ fontWeight: "bold", my: 6}}>
              Exceptional Dental <br />
              Care, On Your Terms
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "300", fontSize: "16", width: '85%', mb: 5}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis commodi quis officiis pariatur enim, dolore ipsam consequuntur expedita, dolores asperiores obcaecati neque odio blanditiis? Sed, excepturi blanditiis deleniti voluptates numquam magnam error soluta ea modi aliquid iusto doloribus ratione dolores consequatur, quidem, laboriosam aspernatur nisi corrupti earum! Qui, distinctio eveniet.
            </Typography>
            <Button style={{ backgroundColor: "#3ECFB8" }} variant="contained">
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DentalCare;
