import React, { useState } from 'react';
import { Drawer, List, ListItemIcon, ListItemText, ListItemButton, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Logo from '../../Logo';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


const SideDrawer = () => {

    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
      setShow(!show);
    }
    const hideDropdown = e => {
      setShow(false);
    }

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
                            <ListItemText> <Nav.Link title="Home" id="basic-nav-dropdown" href="/">Home</Nav.Link></ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText> <Nav.Link title="Laptops" id="basic-nav-dropdown" href="/">Laptops</Nav.Link></ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText> <Nav.Link title="Tablets" id="basic-nav-dropdown" href="/">Tablets</Nav.Link></ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    {/* <ListItemButton>
                        <ListItemIcon>
                            <ListItemText> <Nav.Link title="Smart Lighting" id="basic-nav-dropdown" href="/">Smart Lighting</Nav.Link></ListItemText>
                        </ListItemIcon>
                    </ListItemButton> */}
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>
                                <NavDropdown title="Smart Wearables" id="basic-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                                    <NavDropdown.Item className='nav-dropdown' href="/">WRISTIO 1 [Launching Soon]</NavDropdown.Item>
                                    <NavDropdown.Item className='nav-dropdown' href="/">WRISTIO 2 [Launching Soon]</NavDropdown.Item>
                                </NavDropdown>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText> <Nav.Link href="/support">Support</Nav.Link></ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>

            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ color: "#fff", marginRight: 'auto' }} >
                <MenuIcon />
            </IconButton>

        </React.Fragment>
    )
}

export default SideDrawer