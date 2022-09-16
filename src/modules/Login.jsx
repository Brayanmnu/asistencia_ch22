import React, { useState, useEffect, Fragment } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from '../img/login.png'; // Import using relative path
import { UserService } from "../services/UserService";
import Alert from '../components/Alert'
import Dashboard from './Dashboard';
import Link from '@mui/material/Link';

export default function Login(props) {

    
    const theme = createTheme();
    const [openAlert, setOpenAlert] = React.useState(false);

    const userService = new UserService();
    async function handleSubmit (event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const credentials = {
            usuario: data.get('usuario'),
            password: data.get('pwd')
        }
        console.log('usuario:'+credentials.usuario)
        console.log('pwd:'+credentials.password)
        const loginResponse =  await userService.login(credentials);
        console.log('loginResponse:'+loginResponse.status)
        if (loginResponse.status === 200){
            const loginResponseData = await loginResponse.data; 
            if(loginResponseData.status=="1"){
                props.setIsLogin(true)
                window.localStorage.setItem(
                    'loggedMaker' , JSON.stringify(loginResponseData)
                )
            }else{
                setOpenAlert(true);
            }
        }else{
            setOpenAlert(true);
        }
    };

    
  return props.isLogin?<Dashboard setIsLogin={props.setIsLogin}/>:(
        <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                backgroundImage: `url(${Image})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
                sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Login
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="usuario"
                    label="Usuario"
                    name="usuario"
                    autoComplete="usuario"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="pwd"
                    label="Contraseña"
                    type="password"
                    id="pwd"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Ingresar
                </Button>
                </Box>
            </Box>
            </Grid>
            <div style={{position:"fixed", bottom:"0px"}}>
                <Typography style={{ color: '#95B1B8' }} fontSize={11}>
                    © CONGRESO HACEDORES 2022. | Powered by <Link underline="hover"  target="_blank" color='#A1CFDB' href="https://www.instagram.com/soybrayanneyra/">MUTec</Link>
                </Typography>
            </div>   
            <Alert openAlert={openAlert} setOpenAlert={setOpenAlert} mensaje="Credenciales incorrectas" severity="error"/>
      </Grid>
    </ThemeProvider>
  );
}