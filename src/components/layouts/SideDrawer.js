import React, { useState } from 'react';
import { Drawer, List, ListItemIcon, ListItemText, ListItemButton, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Logo from '../../Logo';
import { Link } from "react-router-dom";


const SideDrawer = () => {

    const PAGES = ["Home", "Laptops & Tablets", "Smart Lighting", "Smart Watch", "Contact"];


    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <React.Fragment>
            <Drawer anchor='top' open={openDrawer} onClose={() => setOpenDrawer(false)} >

                
                <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ color: "#692c90", right: '40%', top: '15px'}} >
                    <CloseOutlinedIcon />
                </IconButton>
                <Logo />

                <List sx={{ marginLeft: '2%', marginTop: '15%', height: '100vh' }} >

                    {
                        PAGES.map((pages, index, link) => (
                            <ListItemButton key={index}>
                                <ListItemIcon>
                                    <ListItemText component={Link} to={link}>{pages}<hr /></ListItemText>
                                </ListItemIcon>

                            </ListItemButton>


                        ))
                    }

                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ color: "#fff", marginRight: 'auto' }} >
                <MenuIcon />
            </IconButton>

        </React.Fragment>
    )
}

export default SideDrawer