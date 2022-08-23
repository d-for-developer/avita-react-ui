import React from 'react';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const SocialIcons = () => {
    return (
        <>
            <Grid container spacing={2} direction="row" justifyContent="right" alignItems="right">
                <Grid item>
                    <IconButton aria-label="facebook" href="https://www.facebook.com/NOVITA.India.official">
                        <FaFacebook />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton aria-label="instagram" href="https://www.instagram.com/novita.india/">
                        <FaInstagram />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton aria-label="twitter" href="https://twitter.com/novitaindia">
                        <FaTwitter />
                    </IconButton>
                </Grid>
                {/* <Grid item>
                    <IconButton aria-label="delete">
                        <FaYoutube />
                    </IconButton>
                </Grid>
                */}
                <Grid item>
                    <IconButton aria-label="linkedin" href="https://www.linkedin.com/company/novita-india/">
                        <FaLinkedin />
                    </IconButton>
                </Grid> 
            </Grid>
        </>
    )
}
