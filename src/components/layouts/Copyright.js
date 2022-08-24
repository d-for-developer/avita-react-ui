import React from 'react'
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Copyright() {


  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <>
      {
        matches ? (
          <div className='container m-2 text-center'>
              <Typography style={{ fontWeight: '300', fontSize: '10px'}} variant="p" >

                @2022 | NEXSTGO TECHNOLOGIES INDIA PRIVATE LIMITED | ALL RIGHTS RESERVED
              </Typography>

           
        </div>
        ) : (
          <>
        <Container className='copyright' sx={{ marginTop: '10%', textAlign: 'center' }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography sx={{ mb: 2, fontWeight: '300', fontSize: '12px' }} variant="p" >

                @2022 | NEXSTGO TECHNOLOGIES INDIA PRIVATE LIMITED | ALL RIGHTS RESERVED
              </Typography>

            </Grid>
          </Grid>
        </Container>
        </>
        )
      }
    </>
  )
}

