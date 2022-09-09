import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import ImageBanner from '../img/in_posible_banner.png'; // Import using relative path
import Grid from '@mui/material/Grid';
import RegistroAsistencia from '../components/RegistroAsistencia'
import { AsistenciaService } from '../services/AsistenciaService'
import {useParams } from 'react-router-dom'


const asistenciaService = new AsistenciaService();

export default function Cartilla (props) {
    const { idMakerEvento } = useParams()
    const [asistencias, setAsistencias] = useState([]);


    useEffect(() => {
        const getAsistenciaByMaker = async () => {
            const { data: ponencias } =  await asistenciaService.getAsistenciaByMaker(idMakerEvento);
            console.log('data:'+ponencias[0].nro_ponencia)
            const itemsPonencia = ponencias.map((p) => (p.nro_ponencia))
            setAsistencias(itemsPonencia)
        }
    
        Promise.all([
            getAsistenciaByMaker(),
        ])

        props.setIsCartilla(false)
    }, [,]);
    
  return (
    <Grid container  component="main" sx={{ height: '100vh' }}>
        <Grid
            item
            xs={12}
            sm={12}
            md={4}
            sx={{
                backgroundImage: `url(${ImageBanner})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        />
        <Grid item   xs={12}
            sm={12}
            md={12}>
            {props.isLogin? <RegistroAsistencia idMakerEvento={idMakerEvento}/>:null}
        </Grid>
    </Grid>
  );
}
