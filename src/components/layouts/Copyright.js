import React from 'react'
import { Grid, useMediaQuery, useTheme } from '@mui/material'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#f8f9fa' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));


export const Copyright = () => {

  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <section className='container-fluid'>
      {
        matchDownMd?(
        <div className='m-2'>                     
         <p>© NEXSTGO COMPANY LTD. ALL RIGHTS RESERVED.</p>
        </div>
          
        ):(
          <>
          <Grid container sx={{marginTop:'15%'}}>
                <Grid item xs={8}>
                    <Item>
                       
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                      <p>© NEXSTGO COMPANY LTD. ALL RIGHTS RESERVED.</p>
                    </Item>
                </Grid>
                
            </Grid>
        </>
        )
      }
        
    </section>
  )
}
