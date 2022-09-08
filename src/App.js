import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import ImageBanner from './img/in_posible_banner.png'; // Import using relative path
import Grid from '@mui/material/Grid';

export default function App () {
  return (
    <Grid container sx={{height:'50vh', width:'50vh'}} justifyContent="center">
        <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
                backgroundImage: `url(${ImageBanner})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        />
    </Grid>
  );
}
