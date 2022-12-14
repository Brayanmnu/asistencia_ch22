import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom";
import GroupsIcon from '@mui/icons-material/Groups';  
import StyleIcon from '@mui/icons-material/Style';

export default function SideBar(props) {

  const menu =  [
    { id: 'Makers', icon: <GroupsIcon /> , url: "/maker-dashboard", permisos:'1,2'},
    { id: 'Cartilla', icon: <StyleIcon /> , url: "/cartilla-admin", permisos:'1'}
  ]

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 16, color: '#fff' }}>
           Congreso Hacedores
        </ListItem>
        <Link key="home" to="/"  style={{ textDecoration: 'none' }}>
            <ListItem sx={{ ...item, ...itemCategory }}>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText>Inicio</ListItemText>
            </ListItem>
        </Link>
          <Box sx={{ bgcolor: '#101F33' }}>
            {menu.map(({ id: childId, icon, active, url, permisos }) => {
                return (
                  permisos.includes(props.tipoUsuario)?
                    <Link key={childId} to={url}  style={{ textDecoration: 'none' }}>
                        <ListItem disablePadding key={childId}>
                        <ListItemButton selected={active} sx={item}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText>{childId}</ListItemText>
                        </ListItemButton>
                        </ListItem>
                        <Divider sx={{ mt: 2 }} />
                    </Link>
                  :
                  null
                )
            })}
          </Box>
      </List>
    </Drawer>
  );
}