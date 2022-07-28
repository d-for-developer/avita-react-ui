import React from 'react';
import Container from 'react-bootstrap/Container';
import { Grid } from '@mui/material';
import { Subscribe } from '../newsletter/Subscribe';
import { SocialIcons } from '../newsletter/SocialIcons';

export default function FooterMiddle() {
    return (
        <Container className='mt-4 mb-4 pb-4'>
            <Grid container spacing={12} direction="row" justifyContent="center" alignItems="center">

                <Grid item xs={6}>
                    <Subscribe/>
                </Grid>


                <Grid item xs={6}>
                    <SocialIcons/>
                </Grid>
            </Grid>
        </Container>
    )
}
