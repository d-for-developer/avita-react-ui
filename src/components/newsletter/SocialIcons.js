import React from 'react';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export const SocialIcons = () => {
    return (
        <>
            <Grid container spacing={2} direction="row" justifyContent="right" alignItems="right">
                <Grid item>
                    <IconButton aria-label="delete">
                        <FaFacebook />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton aria-label="delete">
                        <FaInstagram />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton aria-label="delete">
                        <FaTwitter />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton aria-label="delete">
                        <FaYoutube />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    )
}
