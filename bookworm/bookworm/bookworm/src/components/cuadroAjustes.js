import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper2() {
  return (
    <Box
      sx={{ 
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          backgroundColor: 'rgb(55, 107, 104)',
          m: 1,
          width: 1000,
          height: 500,
        },
      }}
    >
      <Paper elevation={3}>Ajustes</Paper> 
    </Box>
  );
}