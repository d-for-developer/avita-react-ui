import React from 'react'
import { Grid } from '@mui/material'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { SocialIcon } from 'react-social-icons';
import Logo from '../../img/Logo.png'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#f8f9fa' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));


export const Copyright = () => {
  return (
    <section className='container'>
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

    </section>
  )
}
