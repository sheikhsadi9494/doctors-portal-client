import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Comment = ({ comment }) => {
  const { name, discription, img, address } = comment;

  return (
    <Grid item xs={4} sm={4} md={4}>
      <Paper sx={{p:5}} elevation={3}>
        <Typography sx={{textAlign: 'left', mb: 5}} variant="body1" gutterBottom>
          {discription}
        </Typography>
        <Box sx={{display: 'flex', justifyContent: 'left'}}>
          <Box sx={{mx: 2}}>
            <img style={{width: '80%'}} src={img} alt="" />
          </Box>
          <Box>
            <Typography sx={{color: '#3ECFB8'}} variant="h6" gutterBottom component="div">
              {name}
            </Typography>
            <Typography sx={{color: 'text.secondary'}} variant="subtitle2" gutterBottom component="div">
              {address}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Comment;
