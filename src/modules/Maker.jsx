import React, { useState, useEffect, Fragment } from "react";
//Imports material-ui
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog'
import Paper from '@mui/material/Paper';
import { createTheme,ThemeProvider } from '@mui/material/styles';

//componentes
import Alert from '../components/Alert'

export default function MakerAdmin(props) {
    
    return (
        <Grid container rowSpacing={2}>
            <Grid item xs={3} sm={3} md={3}>
                hola
            </Grid>
        </Grid>
    );
        
}