import React, { useState, useEffect, Fragment } from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { AsistenciaService } from '../services/AsistenciaService'
import Alert from '../components/Alert'


const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  

export default function CartillaAdmin(props) {
    const asistenciaService = new AsistenciaService();

    const [stickersActivos, setStickersActivos] = useState('');
    const [openAlert, setOpenAlert] = useState(false);

    const [msgAlert,setMsgAlert]= useState('');
    const [svtAlert,setSvtAlert]= useState('');

    async function actualizarPermisos(){
        var dataPermisos = {
            activos: stickersActivos
        }

        const asistenciaResponse =  await asistenciaService.actualizarPermisos(dataPermisos);
            if (asistenciaResponse.status === 200){
                const asistenciaResponseData = await asistenciaResponse.data;
                if(asistenciaResponseData.status==="ok"){
                    setMsgAlert('Actualizado correctamente')
                    setSvtAlert('success')            
                    setOpenAlert(true)

                }else{
                    setOpenAlert(true)
                    setMsgAlert('Ocurrió un error al actualizar')
                    setSvtAlert('error')
                }
            }else{
                setOpenAlert(true)
                setMsgAlert('Ocurrió un error al actualizar')
                setSvtAlert('error')
            }
    }

    const cambiaEstado = (event) => {
        var activos = stickersActivos;
        if (event.target.value=='1'){
            if(event.target.checked){
                activos+='1'
            }else{
                activos = activos.replace('1','')
            }
        }
        if (event.target.value=='2'){
            if(event.target.checked){
                activos+='2'
            }else{
                activos= activos.replace('2','')
            }
        }
        if (event.target.value=='3'){
            if(event.target.checked){
                activos+='3'
            }else{
                activos= activos.replace('3','')
            }
        }
        if (event.target.value=='4'){
            if(event.target.checked){
                activos+='4'
            }else{
                activos= activos.replace('4','')
            }
        }
        if (event.target.value=='5'){
            if(event.target.checked){
                activos+='5'
            }else{
                activos= activos.replace('5','')
            }
        }
        setStickersActivos(activos)

    };

    
    useEffect(() => {
        const getPermisosAsistencia = async () => {
            const { data: detalle } =  await asistenciaService.getAsistenciaPermisos();
            const itemsPermisos = detalle.map((p) => (p.nro_sticker))
            var permisosAux = itemsPermisos.toString();
            permisosAux = permisosAux.replaceAll(',','')
            setStickersActivos(permisosAux)
        }
        Promise.all([
            getPermisosAsistencia(),
        ])
        
    }, [,]);
    
    return(
        <Grid container rowSpacing={2}>
        <Grid item xs={12} xm={12} md={12}>
        <Paper sx={{maxWidth: 970, margin: 'auto', overflow: 'hidden' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }} style={{padding: "6px"}}>
                    
                    <Grid item xs={4} sm={4} md={4}>
                        <FormGroup>
                            <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }} checked={stickersActivos.includes(1)} value="1" onChange={cambiaEstado} />}
                                label="IN"
                            />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <FormGroup>
                            <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }}  checked={stickersActivos.includes(2)} value="2" onChange={cambiaEstado} />}
                                label="PO"
                            />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <FormGroup>
                            <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }} checked={stickersActivos.includes(3)} value="3" onChange={cambiaEstado}  />}
                                label="SI"
                            />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <FormGroup>
                            <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }} checked={stickersActivos.includes(4)} value="4" onChange={cambiaEstado}  />}
                                label="BLE"
                            />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <FormGroup>
                            <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }} checked={stickersActivos.includes(5)} value="5" onChange={cambiaEstado}  />}
                                label={<EmojiEmotionsIcon/>}
                            />
                        </FormGroup>
                    </Grid>
                    
                    <Grid item xs={4} sm={4} md={4} >
                        <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                            <Grid item>
                                <Button onClick={actualizarPermisos}  variant="contained">Actualizar</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
        </Paper>
        </Grid>
        <div style={{position:"fixed", bottom:"0px"}}>
            <Typography style={{ color: '#28434A' }} fontSize={11}>
                © CONGRESO HACEDORES 2022. | Powered by <Link underline="hover"  target="_blank" color='#7164BB' href="https://www.instagram.com/soybrayanneyra/">MUTec</Link>
            </Typography>
        </div>
        <Alert openAlert={openAlert} setOpenAlert={setOpenAlert} mensaje={msgAlert} severity={svtAlert}/>
    </Grid>
    );
}