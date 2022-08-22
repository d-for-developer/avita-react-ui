import React, { useState } from 'react';
import { Drawer, List, ListItemIcon, ListItemText, ListItemButton, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Logo from '../../Logo';
import Nav from 'react-bootstrap/Nav';


const SideDrawer = () => {

 

    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <React.Fragment>
            <Drawer anchor='top' open={openDrawer} onClose={() => setOpenDrawer(false)} >
                <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ color: "#000", right: '40%', top: '15px' }} >
                    <CloseOutlinedIcon />
                </IconButton>
                <div className='text-center mt-4'>
                    <Logo />
                </div>
               
                <List sx={{ height: '100vh' }} >
                    
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText> <Nav.Link href="/">Home</Nav.Link></ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText> <Nav.Link href="/laptops">Laptops & Tabs</Nav.Link></ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText> <Nav.Link href="/smart-lighting">Smart Lighting</Nav.Link></ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText> <Nav.Link href="/smart-watch">Smart Watch</Nav.Link></ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    {/* <ListItemButton>
                        <ListItemIcon>
                            <ListItemText> <Nav.Link href="/contact">Contact</Nav.Link></ListItemText>
                        </ListItemIcon>
                    </ListItemButton> */}
                </List>
                
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ color: "#fff", marginRight: 'auto' }} >
                <MenuIcon />
            </IconButton>

        </React.Fragment>
    )
}

export default SideDrawer