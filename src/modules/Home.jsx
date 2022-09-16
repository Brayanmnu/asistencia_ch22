import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export default function Home() {
    return(
        <div style={{position:"fixed", bottom:"0px"}}>
            <Typography style={{ color: '#28434A' }} fontSize={11}>
                © CONGRESO HACEDORES 2022. | Powered by <Link underline="hover"  target="_blank" color='#7164BB' href="https://www.instagram.com/soybrayanneyra/">MUTec</Link>
            </Typography>
        </div>
    )
}