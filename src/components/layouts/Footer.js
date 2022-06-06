import React from 'react'
import { FooterTop } from './FooterTop'
import { Copyright } from './Copyright'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#f8f9fa' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));



export default function Footer() {
  return (
    <>
      <FooterTop />
      <section className='container'>
            <Grid container>
                <Grid item xs={2}>
                    <Item>
                       <ul>
                         <li>Products</li>
                         <li>News</li>
                         <li>About Us</li>
                         <li>Blogs</li>
                       </ul>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                    <ul>
                         <li></li>
                         <li></li>
                         <li></li>
                         <li></li>
                       </ul>

                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                    <ul>
                         <li></li>
                         <li></li>
                         <li></li>
                         <li></li>
                       </ul>

                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                    <ul>
                         <li></li>
                         <li></li>
                         <li></li>
                         <li></li>
                       </ul>

                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                      <h6>INDIA</h6>
                    </Item>
                </Grid>
            </Grid>
        </section>
      <Copyright />
    </>
  )
}
