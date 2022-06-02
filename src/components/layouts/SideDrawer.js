import React, {useState} from 'react';
import { Drawer, List, ListItemIcon, ListItemText, ListItemButton, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const SideDrawer = () => {

    const PAGES = ["Products", "News", "Where to Buy", "Service", "Sales Enquiry", "Contact"];
    
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <React.Fragment>
            <Drawer anchor='top' open={openDrawer} onClose={()=> setOpenDrawer(false)} >
                <List sx={{ marginTop: '2%'}} >
                {
                    PAGES.map((pages, index) => (
                        <ListItemButton key={index}>
                        <ListItemIcon>
                            <ListItemText>{pages}</ListItemText>
                        </ListItemIcon>
                     </ListItemButton>   
                    ))
                }
                     
                </List>
            </Drawer>
            <IconButton onClick={()=> setOpenDrawer(!openDrawer)} sx={{ color: "#692c90", marginLeft: 'auto'}} >
                <MenuIcon />
            </IconButton>
        
        </React.Fragment>
    )
}

export default SideDrawer