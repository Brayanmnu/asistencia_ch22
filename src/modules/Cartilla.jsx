import React, { useState, useEffect } from "react";
import ImageBackground from '../img/in_posible_fondo_web.png'; // Import using relative path
import ImageLogo from '../img/logo_blanco.png'; // Import using relative path
import Image22 from '../img/22.png'; // Import using relative path
import ImageIn from '../img/IN_2.png'; // Import using relative path
import ImagePo from '../img/PO.png'; // Import using relative path
import ImageSi from '../img/SI.png'; // Import using relative path
import ImageBle from '../img/BLE.png'; // Import using relative path
import Grid from '@mui/material/Grid';
import { AsistenciaService } from '../services/AsistenciaService'
import {useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import Alert from '../components/Alert'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';


const asistenciaService = new AsistenciaService();


const theme = createTheme({
    palette: {
      text: {
        primary: '#FFF',
        secondary: '#FFF',
      },
      primary: {
        main: '#FFF',
      },
      register: {
        main: '#B227B3',
        contrastText: '#fff',
      }
    },
  });


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
    const [isDisabledSexta,setIsDisabledSexta]= useState(false);

    const [msgAlert,setMsgAlert]= useState('');
    const [svtAlert,setSvtAlert]= useState('');
    const [statusRegistred, setStatusRegistred] = useState("")
    const [disabledButton, setDisabledButton] = useState(false)
    const [nombres, setNombres] = useState('')
    

    async function registrarAsistencia() {
        if(idPonencia===""){
            setOpenAlert(true)
            setMsgAlert('Necesita seleccionar una opción')
            setSvtAlert('error')
        }else{
            setDisabledButton(true)
            var dataAsistencia = {
                id_maker_evento: idMakerEvento,
                id_ponencia: idPonencia
            }
            const asistenciaResponse =  await asistenciaService.registrarAsistencia(dataAsistencia);
            if (asistenciaResponse.status === 200){
                const asistenciaResponseData = await asistenciaResponse.data;
                if(asistenciaResponseData.status==="insertado"){
                    setDisabledButton(false)
                    setOpenAlert(true)
                    setMsgAlert('Registrado correctamente')
                    setSvtAlert('success')
                    setStatusRegistred("ok")
                }
            }
        }
        
        
    }

    const handleChange = (event) => {
        setIdPonencia('')
        if (event.target.value =="1"){
            if(event.target.checked){
                setIdPonencia(event.target.value)
                setIsDisabledSegunda(true);
                setIsDisabledTercera(true)
                setIsDisabledCuarta(true)
                setIsDisabledQuinta(true)
                setIsDisabledSexta(true)
            }else{
                setIsDisabledSegunda(false);
                setIsDisabledTercera(false)
                setIsDisabledCuarta(false)
                setIsDisabledQuinta(false)
                setIsDisabledSexta(false)
            }
        }else  if (event.target.value =="2"){
            if(event.target.checked){
                setIdPonencia(event.target.value)
                setIsDisabledPrimera(true);
                setIsDisabledTercera(true)
                setIsDisabledCuarta(true)
                setIsDisabledQuinta(true)
                setIsDisabledSexta(true)
            }else{
                setIsDisabledPrimera(false);
                setIsDisabledTercera(false)
                setIsDisabledCuarta(false)
                setIsDisabledQuinta(false)
                setIsDisabledSexta(false)
            }
        }else  if (event.target.value =="3"){
            if(event.target.checked){
                setIdPonencia(event.target.value)
                setIsDisabledPrimera(true);
                setIsDisabledSegunda(true)
                setIsDisabledCuarta(true)
                setIsDisabledQuinta(true)
                setIsDisabledSexta(true)
            }else{
                setIsDisabledPrimera(false);
                setIsDisabledSegunda(false)
                setIsDisabledCuarta(false)
                setIsDisabledQuinta(false)
                setIsDisabledSexta(false)
            }
        }else  if (event.target.value =="4"){
            if(event.target.checked){
                setIdPonencia(event.target.value)
                setIsDisabledPrimera(true);
                setIsDisabledSegunda(true)
                setIsDisabledTercera(true)
                setIsDisabledQuinta(true)
                setIsDisabledSexta(true)
            }else{
                setIsDisabledPrimera(false);
                setIsDisabledSegunda(false)
                setIsDisabledTercera(false)
                setIsDisabledQuinta(false)
                setIsDisabledSexta(false)
            }
        }else  if (event.target.value =="5"){
            if(event.target.checked){
                setIdPonencia(event.target.value)
                setIsDisabledPrimera(true);
                setIsDisabledSegunda(true)
                setIsDisabledTercera(true)
                setIsDisabledCuarta(true)
                setIsDisabledSexta(true)
            }else{
                setIsDisabledPrimera(false);
                setIsDisabledSegunda(false)
                setIsDisabledTercera(false)
                setIsDisabledCuarta(false)
                setIsDisabledSexta(false)
            }
        }else  if (event.target.value =="6"){
            if(event.target.checked){
                setIdPonencia(event.target.value)
                setIsDisabledPrimera(true);
                setIsDisabledSegunda(true)
                setIsDisabledTercera(true)
                setIsDisabledCuarta(true)
                setIsDisabledQuinta(true)
            }else{
                setIsDisabledPrimera(false);
                setIsDisabledSegunda(false)
                setIsDisabledTercera(false)
                setIsDisabledCuarta(false)
                setIsDisabledQuinta(false)
            }
        }
    };

    useEffect(() => {
        setStatusRegistred('')
        setIdPonencia('')
        setIsDisabledPrimera(false);
        setIsDisabledSegunda(false)
        setIsDisabledTercera(false)
        setIsDisabledCuarta(false)
        setIsDisabledQuinta(false)
        setIsDisabledSexta(false)
        const getAsistenciaByMaker = async () => {
            const { data: detalle } =  await asistenciaService.getAsistenciaByMaker(idMakerEvento);
            var asistenciasPonencias = detalle.asistencias;
            setNombres(detalle.nombres)
            const itemsPonencia = asistenciasPonencias.map((p) => (p.nro_ponencia))
            setAsistencias(itemsPonencia)
            if(itemsPonencia==''){
                setIsDisabledPrimera(true);
                setIsDisabledSegunda(true)
                setIsDisabledTercera(true)
                setIsDisabledCuarta(true)
                setIsDisabledQuinta(true)
            }
        }
    
        Promise.all([
            getAsistenciaByMaker(),
        ])

        props.setIsCartilla(false)
        
    }, [statusRegistred,]);
    
  return (
    <Grid container  component="main" sx={{ height: '100vh' }} >
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
            <div style={{justifyContent:"center",display:"flex" , paddingTop:'100px'}}>
            <Grid container rowSpacing={-8} columnSpacing={-10} style={{width:"350px"}}>
                <Grid item  xs={12} sm={12}  md={12}>
                    <Typography
                        style={{ color: 'white', textAlign: 'center'}}
                        gutterBottom
                        variant="h3"
                        fontFamily="Mokoto,Roboto,Helvetica"
                        fontSize={11}
                    >
                        CONGRESO
                    </Typography>
                </Grid>
                <Grid item  xs={12} sm={12}  md={12}>
                    <Typography
                        style={{ color: 'white', textAlign: 'center', paddingBottom:'20px'}}
                        gutterBottom
                        variant="h3"
                        fontFamily="Mokoto,Roboto,Helvetica"
                        fontSize={10}
                    >
                        HACEDORES
                    </Typography>
                </Grid>
                {/* <Grid item  xs={3} sm={3}  md={3}>
                    <Box
                        justifyContent="right"
                        alignItems="right"
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 1,
                            width: 50,
                            height: 20,
                            },
                        }}
                    >
                        <Paper variant="outlined" square="true" style={{background:"transparent", borderColor:"#B227B3", borderWidth:"2px"}}>
                            <Typography
                                style={{ color: 'white', textAlign: 'center', padding:'1px'}}
                                gutterBottom
                                variant="h3"
                                fontFamily="Alienscows,Roboto,Helvetica"
                                fontSize={15}
                            >
                                YO SOY
                            </Typography>
                        </Paper>
                    </Box>
                </Grid> */}
                    <Grid item  xs={12} sm={12}  md={12}>
                            <Box
                                justifyContent="center"
                                alignItems="center"
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap'
                                }}
                            >
                                <Paper>
                                    <Typography
                                        style={{ color: 'black', textAlign: 'center', padding:'4px'}}
                                        gutterBottom
                                        variant="h3"
                                        fontFamily="Mokoto,Roboto,Helvetica"
                                        fontSize={14}
                                    >
                                        {nombres}
                                    </Typography>
                                </Paper>
                            </Box>
                        
                    </Grid>
                <Grid item  xs={12} sm={12}  md={12} paddingTop={4}>
                        <Box
                            justifyContent="center"
                            alignItems="center"
                             sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                  m: 1,
                                  width: 100,
                                  height: 70,
                                },
                              }}
                        >
                            <Paper variant="outlined" square="true" style={{background:"transparent", borderColor:"white", borderWidth:"2px"}}>
                            {asistencias.includes(1)?
                                    <Grid container sx={{ height: '100%' }}>
                                            <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={12}
                                            sx={{
                                                backgroundImage: `url(${ImageIn})`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: '80%',
                                                backgroundPosition: 'center',
                                            }}/> 
                                        </Grid>
                                        
                                    :null
                                }
                                {props.isLogin && !asistencias.includes(1)? 
                                    <div style={{ textAlign: 'center', padding:"12px"   }}>
                                        <Checkbox
                                        sx={{
                                            color: grey[50],
                                            '&.Mui-checked': {
                                              color: grey[50],
                                            },
                                          }}
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
                        justifyContent="center"
                        alignItems="center"
                             sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                  m: 1,
                                  width: 100,
                                  height: 70,
                                },
                              }}
                        >
                            <Paper variant="outlined"  square="true" style={{background:"transparent", borderColor:"white", borderWidth:"2px"}}>
                                {asistencias.includes(2)?
                                    <Grid container sx={{ height: '100%' }}>
                                            <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={12}
                                            sx={{
                                                backgroundImage: `url(${ImagePo})`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: '80%',
                                                backgroundPosition: 'center',
                                            }}/> 
                                        </Grid>
                                        
                                    :null
                               }
                                {props.isLogin && !asistencias.includes(2)? 
                                    <div style={{ textAlign: 'center' , padding:"12px" }}>
                                        <Checkbox
                                        disabled={isDisabledSegunda}
                                        sx={{
                                            color: grey[50],
                                            '&.Mui-checked': {
                                              color: grey[50],
                                            },
                                          }}
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
                        <Box
                            justifyContent="center"
                            alignItems="center"
                             sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                  m: 1,
                                  width: 100,
                                  height: 70,
                                },
                              }}
                        >
                            <Paper variant="outlined"  square="true" style={{background:"transparent", borderColor:"white", borderWidth:"2px"}}>
                                {asistencias.includes(3)?
                                    <Grid container sx={{ height: '100%' }}>
                                            <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={12}
                                            sx={{
                                                backgroundImage: `url(${ImageSi})`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: '80%',
                                                backgroundPosition: 'center',
                                            }}/> 
                                        </Grid>
                                        
                                    :null
                                }
                                {props.isLogin && !asistencias.includes(3)?
                                    <div style={{ textAlign: 'center', padding:"12px"  }}>
                                        <Checkbox
                                        sx={{
                                            color: grey[50],
                                            '&.Mui-checked': {
                                              color: grey[50],
                                            },
                                          }}
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
                            justifyContent="center"
                            alignItems="center"
                             sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                  m: 1,
                                  width: 100,
                                  height: 70,
                                },
                              }}
                        >
                            <Paper variant="outlined"  square="true" style={{background:"transparent", borderColor:"white", borderWidth:"2px"}}>
                                {asistencias.includes(4)?
                                    <Grid container sx={{ height: '100%' }}>
                                            <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={12}
                                            sx={{
                                                backgroundImage: `url(${ImageBle})`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: '80%',
                                                backgroundPosition: 'center',
                                            }}/> 
                                        </Grid>
                                        
                                    :null
                                }
                                {props.isLogin && !asistencias.includes(4)?
                                    <div style={{ textAlign: 'center' , padding:"12px"  }}>
                                        <Checkbox
                                        sx={{
                                            color: grey[50],
                                            '&.Mui-checked': {
                                              color: grey[50],
                                            },
                                          }}
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
                    <Grid item  xs={12} sm={12}  md={12}>
                        <Box
                            justifyContent="center"
                            alignItems="center"
                             sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                  m: 1,
                                  width: 100,
                                  height: 70,
                                },
                              }}
                        >
                            <Paper variant="outlined"  square="true" style={{background:"transparent", borderColor:"white", borderWidth:"2px"}}>
                                {asistencias.includes(5)?
                                        <Grid container sx={{ height: '100%' }}>
                                        <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        sx={{
                                            backgroundImage: `url(${ImageLogo})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: '60%',
                                            backgroundPosition: 'center',
                                        }}/> 
                                    </Grid>:null
                                }
                                {props.isLogin && !asistencias.includes(5)? 
                                    <div style={{ textAlign: 'center', padding:"12px"  }}>
                                        <Checkbox
                                        sx={{
                                            color: grey[50],
                                            '&.Mui-checked': {
                                              color: grey[50],
                                            },
                                          }}
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
                    <Grid item  xs={12} sm={12}  md={12}>
                        <Box
                            justifyContent="center"
                            alignItems="center"
                             sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                  m: 1,
                                  width: 100,
                                  height: 70,
                                },
                              }}
                        >
                            <Paper variant="outlined" square="true" style={{background:"transparent", borderColor:"white", borderWidth:"2px"}}>
                                {asistencias.includes(6)?
                                    <Grid container sx={{ height: '100%' }}>
                                            <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={12}
                                            sx={{
                                                backgroundImage: `url(${Image22})`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: '80%',
                                                backgroundPosition: 'center',
                                            }}/> 
                                        </Grid>
                                        
                                    :null
                                }
                                {props.isLogin && !asistencias.includes(6)? 
                                    <div style={{ textAlign: 'center', padding:"12px"   }}>
                                        <Checkbox
                                        sx={{
                                            color: grey[50],
                                            '&.Mui-checked': {
                                              color: grey[50],
                                            },
                                          }}
                                            disabled={isDisabledSexta}
                                            color="secondary" 
                                            id="6" 
                                            value="6" 
                                            onChange={handleChange}
                                        />
                                    </div>
                                    :
                                    null
                                }
                            </Paper>
                        </Box>
                    </Grid>
                    {props.isLogin && 
                    !(asistencias.includes(1) && asistencias.includes(2) 
                    && asistencias.includes(3) && asistencias.includes(4)
                    && asistencias.includes(5) && asistencias.includes(6))? 
                    <Grid item  xs={12} sm={12}  md={12}>
                        <div style={{ textAlign: 'center' }}>
                            <ThemeProvider theme={theme}>
                            <Button disabled={disabledButton} onClick={registrarAsistencia} variant="contained" fullWidth="true" color="register">
                                    Registrar
                                </Button>
                            </ThemeProvider>
                        </div>
                    </Grid> : null
                    }
                </Grid> 
            </div>
            <div style={{position:"fixed", bottom:"0px"}}>
                <Typography style={{ color: '#95B1B8' }} fontSize={11}>
                    © CONGRESO HACEDORES 2022. | Powered by <Link underline="hover"  target="_blank" color='#A1CFDB' href="https://www.instagram.com/soybrayanneyra/">MUTec</Link>
                </Typography>
            </div>     
        </Grid>
           
        
        <Alert openAlert={openAlert} setOpenAlert={setOpenAlert} mensaje={msgAlert} severity={svtAlert}/>
    </Grid>
  );
}
