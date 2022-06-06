import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Brochure from '../brochure/Brochure';


export default function Subscribe() {

    
    return (
        <section className='newsLetter'>
            <h3>Join the AVITA Community</h3>
            <p>What is the most popular laptop pattern after "Snowflakes"? Subscribe to us!</p>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
                 >
                <div>
                    <TextField
                        id="subscribe"
                        email
                        label="Enter Your Email"
                        helperText="Subscribe to our newsletter"
                    >
                      
                    </TextField>
                    <Button  variant="outlined" size="large" sx={{ top:'15px'}}>
                        Subscribe
                    </Button>
                </div>
            </Box>
            <Brochure/>
        </section>

    )
}
