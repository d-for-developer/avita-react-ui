import React, { useState } from 'react';
import { Drawer, List, Box, ListItemIcon, ListItemText, ListItemButton, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Logo from '../../img/Logo.png'


const SideDrawer = () => {

    const PAGES = ["Products", "News", "Where to Buy", "Service", "Sales Enquiry", "Contact"];

    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <React.Fragment>
            <Drawer anchor='top' open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ color: "#692c90", right: '40%', top: '15px' }} >
                    <CloseOutlinedIcon />
                </IconButton>
                <Box
                    component="img"
                    sx={{
                        height: 21,
                        position: 'absolute',
                        left: '50%',
                        top: '5%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: '1'
                    }}
                    alt="Your logo."
                    src={Logo}
                />
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
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ color: "#692c90", marginRight: 'auto' }} >
                <MenuIcon />
            </IconButton>

        </React.Fragment>
    )
}

export default SideDrawer