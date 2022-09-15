import React, { useState, useEffect } from "react";
import ImageBackground from '../img/in_posible_fondo_web.png'; // Import using relative path
import Grid from '@mui/material/Grid';
import { AsistenciaService } from '../services/AsistenciaService'
import {useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import Alert from '../components/Alert'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';


const asistenciaService = new AsistenciaService();

export default function Cartilla (props) {
    const { idMakerEvento } = useParams()
    const [asistencias, setAsistencias] = useState([]);
    const [idPonencia, setIdPonencia] = useState("");
    const [openAlert, setOpenAlert] = useState(false);
    const [isDisabledPrimera,setIsDisabledPrimera]= useState(false);
    const [isDisabledSegunda,setIsDisabledSegunda]= useState(false);
    const [isDisabledTercera,setIsDisabledTercera]= useState(false);
    const [isDisabledCuarta,setIsDisabledCuarta]= useState(false);
    const [isDisabledQuinta,setIsDisabledQuinta]= useState(false);
    const [msgAlert,setMsgAlert]= useState('');
    const [svtAlert,setSvtAlert]= useState('');
    const [statusRegistred, setStatusRegistred] = useState("")

    async function registrarAsistencia() {
        console.log('idPonencia: '+idPonencia)
        if(idPonencia===""){
            setOpenAlert(true)
            setMsgAlert('Necesita seleccionar una opción')
            setSvtAlert('error')
        }else{
            setStatusRegistred("ok")
        }
        
        // var dataAsistencia = {
        //     id_maker_evento: props.idMakerEvento,
        //     id_ponencia: idPonencia
        // }
        // const asistenciaResponse =  await asistenciaService.registrarAsistencia(dataAsistencia);
        // if (asistenciaResponse.status === 200){
        //     const asistenciaResponseData = await asistenciaResponse.data;
        //     if(asistenciaResponseData.status==="insertado"){
        //         props.setRegistrado(true);
        //         setOpenAlert(true)
        //     }
        // }
    }

    const handleChange = (event) => {
        console.log('event.target.value: '+event.target.value)
        setIdPonencia('')
        if (event.target.value =="1"){
            if(event.target.checked){
                setIdPonencia(event.target.value)
                setIsDisabledSegunda(true);
                setIsDisabledTercera(true)
                setIsDisabledCuarta(true)
                setIsDisabledQuinta(true)
            }else{
                setIsDisabledSegunda(false);
                setIsDisabledTercera(false)
                setIsDisabledCuarta(false)
                setIsDisabledQuinta(false)
            }
        }else  if (event.target.value =="2"){
            if(event.target.checked){
                setIdPonencia(event.target.value)
                setIsDisabledPrimera(true);
                setIsDisabledTercera(true)
                setIsDisabledCuarta(true)
                setIsDisabledQuinta(true)
            }else{
                setIsDisabledPrimera(false);
                setIsDisabledTercera(false)
                setIsDisabledCuarta(false)
                setIsDisabledQuinta(false)
            }
        }else  if (event.target.value =="3"){
            if(event.target.checked){
                setIdPonencia(event.target.value)
                setIsDisabledPrimera(true);
                setIsDisabledSegunda(true)
                setIsDisabledCuarta(true)
                setIsDisabledQuinta(true)
            }else{
                setIsDisabledPrimera(false);
                setIsDisabledSegunda(false)
                setIsDisabledCuarta(false)
                setIsDisabledQuinta(false)
            }
        }else  if (event.target.value =="4"){
            if(event.target.checked){
                setIdPonencia(event.target.value)
                setIsDisabledPrimera(true);
                setIsDisabledSegunda(true)
                setIsDisabledTercera(true)
                setIsDisabledQuinta(true)
            }else{
                setIsDisabledPrimera(false);
                setIsDisabledSegunda(false)
                setIsDisabledTercera(false)
                setIsDisabledQuinta(false)
            }
        }else  if (event.target.value =="5"){
            if(event.target.checked){
                setIdPonencia(event.target.value)
                setIsDisabledPrimera(true);
                setIsDisabledSegunda(true)
                setIsDisabledTercera(true)
                setIsDisabledCuarta(true)
            }else{
                setIsDisabledPrimera(false);
                setIsDisabledSegunda(false)
                setIsDisabledTercera(false)
                setIsDisabledCuarta(false)
            }
        }
    };

    useEffect(() => {
        setIsDisabledPrimera(false);
        setIsDisabledSegunda(false)
        setIsDisabledTercera(false)
        setIsDisabledCuarta(false)
        setIsDisabledQuinta(false)
        const getAsistenciaByMaker = async () => {
            const { data: ponencias } =  await asistenciaService.getAsistenciaByMaker(idMakerEvento);
            const itemsPonencia = ponencias.map((p) => (p.nro_ponencia))
            setAsistencias(itemsPonencia)
            if(statusRegistred==="ok"){
                setAsistencias(['1'])
            }
        }
    
        Promise.all([
            getAsistenciaByMaker(),
        ])

        props.setIsCartilla(false)
        
    }, [statusRegistred,]);
    
  return (
    <Grid container  component="main" sx={{ height: '100vh' }}>
        <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
                backgroundImage: `url(${ImageBackground})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}> 
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                    <Grid item  xs={4} sm={4}  md={4}>
                        <Box
                             sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                  m: 1,
                                  width: 100,
                                  height: 50,
                                },
                              }}
                        >
                            <Paper  elevation={2}>
                                {asistencias.includes('1')?
                                    <Grid container sx={{ height: '100%' }}>
                                    <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    sx={{
                                        backgroundImage: `url(${ImageBackground})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}/> 
                                </Grid>:null
                               }
                                {props.isLogin && !asistencias.includes('1')? 
                                    <div style={{ textAlign: 'center' }}>
                                        <Checkbox
                                        disabled={isDisabledPrimera}
                                        color="secondary" 
                                        id="1" 
                                        value="1" 
                                        onChange={handleChange}
                                        />
                                    </div>
                                    :
                                    null
                                }
                                
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item  xs={4} sm={4}  md={4}>
                        <Box
                             sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                  m: 1,
                                  width: 100,
                                  height: 50,
                                },
                              }}
                        >
                            <Paper  elevation={2}>
                                {asistencias.includes('2')?
                                        <Grid container sx={{ height: '100%' }}>
                                        <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        sx={{
                                            backgroundImage: `url(${ImageBackground})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}/> 
                                    </Grid>:null
                                }
                                {props.isLogin && !asistencias.includes('2')?
                                    <div style={{ textAlign: 'center' }}>
                                        <Checkbox
                                            disabled={isDisabledSegunda}
                                            color="secondary" 
                                            id="2" 
                                            value="2" 
                                            onChange={handleChange}
                                        />
                                    </div>
                                    :
                                    null
                                }
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item  xs={4} sm={4}  md={4}>
                    </Grid>
                    <Grid item  xs={4} sm={4}  md={4}>
                        <Box
                             sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                  m: 1,
                                  width: 100,
                                  height: 50,
                                },
                              }}
                        >
                            <Paper  elevation={2}>
                                {asistencias.includes('3')?
                                        <Grid container sx={{ height: '100%' }}>
                                        <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        sx={{
                                            backgroundImage: `url(${ImageBackground})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}/> 
                                    </Grid>:null
                                }
                                {props.isLogin && !asistencias.includes('3')?
                                    <div style={{ textAlign: 'center' }}>
                                        <Checkbox
                                            disabled={isDisabledTercera}
                                            color="secondary" 
                                            id="3" 
                                            value="3" 
                                            onChange={handleChange}
                                        />
                                    </div>
                                    :
                                    null
                                }
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item  xs={4} sm={4}  md={4}>
                        <Box
                             sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                  m: 1,
                                  width: 100,
                                  height: 50,
                                },
                              }}
                        >
                            <Paper  elevation={2}>
                                {asistencias.includes('4')?
                                        <Grid container sx={{ height: '100%' }}>
                                        <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        sx={{
                                            backgroundImage: `url(${ImageBackground})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}/> 
                                    </Grid>:null
                                }
                                {props.isLogin && !asistencias.includes('4')? 
                                    <div style={{ textAlign: 'center' }}>
                                        <Checkbox
                                        disabled={isDisabledCuarta}
                                        color="secondary" 
                                        id="4" 
                                        value="4" 
                                        onChange={handleChange}
                                        />
                                    </div>
                                    :
                                    null
                                }
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item  xs={4} sm={4}  md={4}>
                        <Box
                             sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                  m: 1,
                                  width: 100,
                                  height: 50,
                                },
                              }}
                        >
                            <Paper  elevation={2}>
                                {asistencias.includes('5')?
                                        <Grid container sx={{ height: '100%' }}>
                                        <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        sx={{
                                            backgroundImage: `url(${ImageBackground})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}/> 
                                    </Grid>:null
                                }
                                {props.isLogin && !asistencias.includes('5')? 
                                    <div style={{ textAlign: 'center' }}>
                                        <Checkbox
                                            disabled={isDisabledQuinta}
                                            color="secondary" 
                                            id="5" 
                                            value="5" 
                                            onChange={handleChange}
                                        />
                                    </div>
                                    :
                                    null
                                }
                            </Paper>
                        </Box>
                    </Grid>
                    {props.isLogin? 
                    <Grid item  xs={12} sm={12}  md={12}>
                        <div style={{ textAlign: 'center' }}>
                            <Button onClick={registrarAsistencia} variant="contained">
                                Registrar
                            </Button>
                        </div>
                    </Grid> : null
                    }
                </Grid>
                
        </Grid>
        <Alert openAlert={openAlert} setOpenAlert={setOpenAlert} mensaje={msgAlert} severity={svtAlert}/>
    </Grid>
  );
}
