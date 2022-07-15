import { AppBar, Toolbar, Box, Tabs, Tab, useTheme, useMediaQuery } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import React, { useState } from 'react';
import Logo from '../../img/Logo.png'
import SideDrawer from './SideDrawer';


const Header = () => {

    const PAGES = ["Products", "News", "Where to Buy", "Service", "Sales Enquiry", "Contact"];
    const [value, setValue] = useState();

    const styles = {

        largeIcon: {
            width: 32,
            height: 32,
            color: '#692c90',
        },

    };

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));


    return (
        <React.Fragment>
            <AppBar sx={{ background: '#fff' }} >
                <Toolbar className='container'>

                    {
                        isMatch ? (
                            <>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 21,
                                        position: 'absolute', 
                                        left: '50%', 
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                       
                                    }}
                                    alt="Your logo."
                                    src={Logo}
                                />
                                <SideDrawer />


                            </>

                        ) : (

                            <>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 32,
                                    }}
                                    alt="Your logo."
                                    src={Logo}
                                />
                                <Tabs sx={{ width: '100%', color: '#692c90',  }} value={value} onChange={(e, value) => setValue(value)} indicator='#692c90'>
                                    {
                                        PAGES.map((pages, index) => (
                                            <Tab sx={{ marginLeft:'5%' }} key={index} label={pages} />

                                        ))
                                    }
                                  
                                </Tabs>
                                <PersonOutlineIcon sx={styles.largeIcon} />

                            </>
                        )


                    }



                </Toolbar>
            </AppBar>

        </React.Fragment>
    )
}

export default Header