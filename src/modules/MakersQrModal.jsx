import React, { useState, useEffect, Fragment, Image} from "react";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { MakerService } from "../services/MakerService";

export default function MakersQrModal(props) {

    const makerService = new MakerService();
    const [imgDisplay, setImgDisplay] = useState('');
    const [nombreDisplay, setNombreDisplay] = useState('');
    async function getBase64ById(idMakerEvent) {
        const makerBase64 =  await makerService.getQrMakerById(idMakerEvent);
        if(makerBase64.status=200){
            const makerJson = await makerBase64.data;
            var base64Data = makerJson.codigo_qr;
            setNombreDisplay(makerJson.nombres_apellidos)
            base64Data = "data:image/jpg;base64,"+base64Data;
            setImgDisplay(
                <img style={{ maxHeight: '50vh' }} class="card-img-top" src={base64Data}  />
            )
        }
    }

    useEffect(() => {
        getBase64ById(props.idMakerEvento);
    }, [,]);
    

    return(
        <div >
            <div style={{ maxWidth: '1020px', textAlign: 'center'}}>
                {imgDisplay}
            </div>
            <Divider/>
            <div>
                <div style={{ textAlign: 'center' }}>
                    <Typography  variant="h4">
                        {nombreDisplay}
                    </Typography>  
                </div>
            </div>
        </div>);
}