import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import ImageBanner from '../img/in_posible_banner.png'; // Import using relative path
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { AsistenciaService } from '../services/AsistenciaService'
import Alert from './Alert'


const asistenciaService = new AsistenciaService();

export default function RegistroAsistencia (props) {
    const [ponencia, setPonencia] = useState([]);
    const [idPonencia, setIdPonencia] = useState("");
    const [openAlert, setOpenAlert] = useState(false);

    async function registrarAsistencia() {
        var dataAsistencia = {
            id_maker_evento: props.idMakerEvento,
            id_ponencia: idPonencia
        }
        const asistenciaResponse =  await asistenciaService.registrarAsistencia(dataAsistencia);
        if (asistenciaResponse.status === 200){
            const asistenciaResponseData = await asistenciaResponse.data;
            if(asistenciaResponseData.status==="insertado"){
                props.setRegistrado(true);
                setOpenAlert(true)
            }
        }
    }

    
    const handleChangePonencia = (event) => {
        setIdPonencia(event.target.value);
    };
    
    useEffect(() => {
    const getPonencia = async () => {
      const { data: ponencias } =  await asistenciaService.getAllPonencias();
      const itemsPonencia = ponencias.map(({ id, descripcion }) => ({ id, descripcion }))
      setPonencia(itemsPonencia)
    }

    Promise.all([
        getPonencia(),
      ])
    }, []);

    return(
        <Grid container>
            <Grid item  xs={12}>
                <FormControl fullWidth>
                    <InputLabel>Seleccionar ponencia</InputLabel>
                    <Select
                    required
                    labelId="ponencia-label"
                    id="ponencia-select"
                    label="ponencia"
                    fullWidth
                    variant="standard"
                    autoComplete="off"
                    name="ponencia"
                    value={idPonencia}
                    onChange={handleChangePonencia}
                    >
                    {ponencia.map(({ id, descripcion }) => (
                        <MenuItem key={id} value={id}>
                        {descripcion}
                        </MenuItem>
                        ))
                    }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item  xs={12}>
                <Button onClick={registrarAsistencia} variant="contained">
                    Registrar
                </Button>
            </Grid>
            <Alert openAlert={openAlert} setOpenAlert={setOpenAlert} mensaje="Asistencia registrada" severity="success"/>
        </Grid>
    );
}