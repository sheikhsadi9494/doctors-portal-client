import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Container, Grid, Typography } from "@mui/material";
import Service from '../Service/Service'

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h6" sx={{ fontWeight: '600', mt: 8, color: 'info.main'}}>OUR SERVICES</Typography>
      <Typography variant="h4" sx={{ fontWeight: '600', mt: 3, mb: 8 }}>SERVICES WE PROVIDE</Typography>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
