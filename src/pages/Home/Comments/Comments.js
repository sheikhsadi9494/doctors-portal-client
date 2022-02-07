import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Comment from '../Comment/Comment';
import { Typography } from '@mui/material';


const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('./Comments.json')
        .then(res => res.json())
        .then(data => setComments(data));
    }, [])

    return (
      <Box sx={{ flexGrow: 1, mx: 5, my: 15}}>
          <Typography sx={{color: '#3ECFB8', textAlign: 'left', fontWeight: 'bold'}} variant="h6" gutterBottom component="div">
               TESTMONIL
            </Typography>
          <Typography sx={{textAlign: 'left', my: 3, fontWeight: 420}} variant="h4" gutterBottom component="div">
               Whats Yours Petients <br /> Says
            </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                comments.map(comment => <Comment
                  key={comment.id}
                  comment={comment}
                ></Comment>)
            }
        </Grid>
      </Box>     
    );
};

export default Comments;