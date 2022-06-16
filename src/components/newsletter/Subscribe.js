import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Brochure from '../brochure/Brochure';
import { useMediaQuery, useTheme } from '@mui/material';


export default function Subscribe() {

    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (
        <section className='newsLetter'>
            <h3>Join the AVITA Community</h3>
            <p>Receiving AVITA's latest news, promotions and offer</p>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: `${matchDownMd ? '35ch' : '50ch'}`},
                }}
                noValidate
                autoComplete="off"
                 >
                <div className='subscribe'>
                    <TextField
                        id="subscribe"
                        email
                        label="Enter Your Email"
                        helperText="Subscribe to our newsletter"
                    >
                      
                    </TextField>
                    <Button  variant="outlined" size="large" sx={{ top:`${matchDownMd ? '10px' : '15px'}`}}>
                        Subscribe
                    </Button>
                </div>
            </Box>
            <Brochure/>

        </section>

    )
}
