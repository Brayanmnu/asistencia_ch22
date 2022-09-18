import React, { useState, useEffect, Fragment } from "react";
//Imports material-ui
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog'
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';
import Pagination from "@mui/material/Pagination";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
//Servicios
import { MakerService } from "../services/MakerService";
import { AsistenciaService } from "../services/AsistenciaService";

//Vistas
import MakersQrModal from "./MakersQrModal";


export default function MakerAdmin(props) {
    const makerService = new MakerService();
    const asistenciaService = new AsistenciaService();

    const [page, setPage] = useState(1);
    const [tableBody, setTableBody] = useState();
    const [openQr, setOpenQr] = useState(false);
    const [idMakerEvento, setIdMakerEvento] = useState("");
   
    const [tableData, setTableData] = useState();

    const [cantiRegistros, setCantiRegistros] = useState('10');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [nroDoc, setNroDoc] = useState('');
    const [cantPaginas,setCantPaginas] = useState(0)
    const [totalElemnts,setTotalElemnts] = useState(0)
    const [totalCartillaEntregadas,setTotalCartillaEntregadas] = useState(0)

    const theme = createTheme({
        palette: {
          primary: {
            main: '#6abf69',
          },
          warning :{
            main: '#fbc02d'
          },
          addReg: {
            main :'#0d47a1',
            contrastText: '#fff',
          }
        },
    });
    
    const columns= [
        { id: 'asistencia',align: 'center', label: 'Asistencia', minWidth: 170 , format: 'string'},
        { id: 'nombres',align: 'center', label: 'Nombres', minWidth: 170 , format: 'string'},
        { id: 'apellidos',align: 'center', label: 'Apellidos', minWidth: 170, format: 'string' },
        { id: 'nroDoc',align: 'center', label: 'Nro. Documento.', minWidth: 170, format: 'string' },
        { id: 'email',align: 'center', label: 'Correo', minWidth: 170, format: 'string'},
        { id: 'celular',align: 'center', label: 'Celular', minWidth: 170, format: 'string' },
        { id: 'ciudad',align: 'center', label: 'Ciudad',  minWidth: 170, format: 'string' },
        { id: 'iglesia',align: 'center', label: 'Iglesia', minWidth: 170, format: 'string' },
        { id: 'acciones',align: 'center', label: 'Acciones', minWidth: 10 , format: "string"}
    ];

    
    var rows = [];


    async function reloadAllMakers(cantReg,nroPag,nom,apell,nroD) {
        const makersAll =  await makerService.getMakersByFiltersAndPagination(cantReg,nroPag,nom,apell,nroD);
        if (makersAll.status === 200){
            const rowsDentro = await makersAll.data;
            var cantPaginas=0;
            rows = rowsDentro;
            setTableBody(
                <TableBody>
                        {rows
                        .map((row) => {
                                cantPaginas = Math.ceil(row.total_elements / cantReg );
                                setTotalElemnts(row.total_elements);
                                setCantPaginas(cantPaginas)
                                var asistencias =''
                                var asisAux =''
                                if(row.nro_asistencia==""){
                                    asistencias = <HighlightOffIcon/>
                                }else{
                                    var asisAux = row.nro_asistencia.map((p) => (
                                        p.nro_ponencia
                                    ))
                                    var palabra='';
                                    var pulsera='';
                                    var logo = '';
                                    if (asisAux.includes(6)){
                                        pulsera = <CheckCircleIcon/> 
                                    }
                                    if (asisAux.includes(1) ){
                                        palabra = ' IN '
                                    }
                                    if (asisAux.includes(2) ){
                                        palabra+=' PO'
                                    }
                                    if (asisAux.includes(3) ){
                                        palabra+='SI'
                                    }
                                    if (asisAux.includes(4) ){
                                        palabra+='BLE'
                                    }
                                    if (asisAux.includes(5) ){
                                        logo= <EmojiEmotionsIcon/>
                                    }
                                    asistencias = <div>{pulsera} {palabra} {logo}</div>
                                    
                                }
                                setTotalCartillaEntregadas(row.cant_cartillas)
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id_producto}>
                                        <TableCell key="asistencia">
                                            {asistencias}
                                        </TableCell>
                                        <TableCell key="nombres">
                                            {row.nombres}
                                        </TableCell>
                                        <TableCell key="apellidos">
                                            {row.apellidos}
                                        </TableCell>
                                        <TableCell key="nro_doc">
                                            {row.nro_doc}
                                        </TableCell>
                                        <TableCell key="email">
                                            {row.email}
                                        </TableCell>
                                        <TableCell key="celular">
                                            {row.celular}
                                        </TableCell>
                                        <TableCell key="ciudad">
                                            {row.ciudad}
                                        </TableCell>
                                        <TableCell key="iglesia">
                                            {row.iglesia}
                                        </TableCell>
                                        <TableCell key="options">
                                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                                                <ThemeProvider theme={theme}>
                                                    <Grid item xs={4} sm={4} md={4}>
                                                        <Button color="primary"  variant="contained" value={row.id_maker_evento} onClick={handleClickOpenQr} size="small">QR</Button>                                
                                                    </Grid>
                                                </ThemeProvider>
                                                
                                            </Grid>
                                        </TableCell>
                                    </TableRow>
                                    );
                        })}
                    </TableBody>
            );

            setTableData(rows)
        }
    }

    
    const handleClickOpenQr = (event) => {
        setOpenQr(true);
        setIdMakerEvento(event.target.value);
    };

    
    const handleChangeCantReg = (event) => {
        setCantiRegistros(event.target.value);
    };

    async function aplicarFiltro() {
        reloadAllMakers(cantiRegistros,0,nombre,apellidos,nroDoc)
        setPage(1);
    }

    async function clearFiltro() {
        setCantiRegistros('10')
        setNombre('')
        setApellidos('')
        setNroDoc('')
        reloadAllMakers(10,0,"","","")
        setPage(1);
    }

    const handleChangePagina = (event, value) => {
        reloadAllMakers(cantiRegistros,(value-1)*cantiRegistros,nombre,apellidos,nroDoc)
        setPage(value);
    };
    

    useEffect(() => {
        reloadAllMakers(10,0,"","","")
    }, []);

    return(
        <Grid container rowSpacing={2}>
            <Grid item xs={12} xm={12} md={12}>
            <Paper sx={{maxWidth: 970, margin: 'auto', overflow: 'hidden' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }} style={{padding: "6px"}}>
                        <Grid item xs={12} sm={12} md={12}>
                            Filtros
                        </Grid>
                        <Grid item xs={3} sm={2} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Cantidad de registros</InputLabel>
                                <Select
                                    labelId="cant-registros-label"
                                    id="cant-registros-label"
                                    value={cantiRegistros}
                                    label="Cantidad de registros"
                                    onChange={handleChangeCantReg}
                                    fullWidth
                                >
                                    <MenuItem value="10">10</MenuItem>
                                    <MenuItem value="50">50</MenuItem>
                                    <MenuItem value="100">100</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={9} sm={4} md={3}>
                            <TextField
                                    margin="dense"
                                    id="nombre"
                                    label="Nombres"
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                    value = {nombre}
                                    autoComplete="off"
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                        </Grid>
                        <Grid item xs={9} sm={4} md={3}>
                            <TextField
                                    margin="dense"
                                    id="apellidos"
                                    label="Apellidos"
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                    value = {apellidos}
                                    autoComplete="off"
                                    onChange={(e) => setApellidos(e.target.value)}
                                />
                        </Grid>
                        <Grid item xs={3} sm={4} md={2}>
                            <TextField
                                    margin="dense"
                                    id="nroDoc"
                                    label="Nro. Doc."
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                    value = {nroDoc}
                                    autoComplete="off"
                                    onChange={(e) => setNroDoc(e.target.value)}
                                />
                        </Grid>
                        <Grid item xs={6} sm={2} md={2} >
                            <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                                <Grid item>
                                <Button onClick={aplicarFiltro} variant="contained"><ManageSearchIcon/></Button>
                                </Grid>
                                <Grid item>
                                    <Button onClick={clearFiltro} variant="contained"><ClearIcon/></Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                    </Grid>
            </Paper>
            </Grid>
            <Grid item xs={12} xm={12} md={12}>     
                <Paper sx={{width:1030, margin: 'auto', overflow: 'hidden' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={12} md={12}>
                            <TableContainer sx={{ maxHeight: 800 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                                >
                                                {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    {tableBody}
                                </Table>
                            </TableContainer>
                            <Grid container>
                                <Grid item xs={8} sm={8} md={8}>
                                    <Pagination
                                        count={cantPaginas}
                                        page={page}
                                        variant="outlined"
                                        color="primary"
                                        onChange={handleChangePagina}
                                    />
                                </Grid>
                                <Grid item xs={4} sm={4} md={4}>
                                    Total: {totalElemnts} makers /  {totalCartillaEntregadas} pulseras entregadas
                                </Grid>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                    <Dialog open={openQr} onClose={() => setOpenQr(false)}>
                        <MakersQrModal 
                        setOpenCreate={setOpenQr} 
                        idMakerEvento={idMakerEvento}/>
                    </Dialog>
                </Paper>
            </Grid>
            <div style={{position:"fixed", bottom:"0px"}}>
                <Typography style={{ color: '#28434A' }} fontSize={11}>
                    © CONGRESO HACEDORES 2022. | Powered by <Link underline="hover"  target="_blank" color='#7164BB' href="https://www.instagram.com/soybrayanneyra/">MUTec</Link>
                </Typography>
            </div>
        </Grid>
    );
}