import React, { useState } from 'react';
import { Drawer, List, ListItemIcon, ListItemText, ListItemButton, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Logo from '../../Logo';


const SideDrawer = () => {

    const PAGES = ["Home", "Laptops & Tablets", "Smart Lighting", "TV", "Fitness"];

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
                        PAGES.map((pages, index) => (
                            <ListItemButton key={index}>
                                <ListItemIcon>
                                    <ListItemText>{pages}<hr /></ListItemText>
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