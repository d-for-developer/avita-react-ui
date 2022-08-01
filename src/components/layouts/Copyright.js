import React from 'react'
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const Copyright = () => {

  return (
    <Container className='copyright' sx={{marginTop:'24%', textAlign:'center'}}>
      <Grid container>
        <Grid item xs={12}>
        <Typography sx={{ mb:2, fontWeight: '300', fontSize:'14px' }} variant="p" >

            @2022 | NEXSTGO TECHNOLOGIES INDIA PRIVATE LIMITED | ALL RIGHTS RESERVED
            </Typography>

        </Grid>
      </Grid>
    </Container>
  )
}

export default Copyright