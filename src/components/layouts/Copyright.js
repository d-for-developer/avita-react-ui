import React from 'react'
import { Grid, Box } from '@mui/material'
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
  return (
    <>
    <Grid container>
        <Grid item xs={3}>
            <Item>
               
            </Item>
        </Grid>
        <Grid item xs={6}>
            <Item>
                   
            </Item>
        </Grid>
        <Grid item xs={3}>
            <Item>
           <small>© NEXSTGO COMPANY LTD. ALL RIGHTS RESERVED.</small>
            </Item>
        </Grid>
    </Grid>
</>
  )
}
