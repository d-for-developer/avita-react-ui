import React from 'react'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Grid, useMediaQuery, useTheme } from '@mui/material'
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { FooterTop } from './FooterTop-1';
import { Copyright } from './Copyright';
import PublicIcon from '@mui/icons-material/Public';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#f8f9fa' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));




export default function FooterOld() {



  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <section className='container-fluid'>
      {
        matchDownMd ? (
          <>
            <FooterTop />
            <div className='footer mt-4'>
              <List style={{ display: 'flex', flexDirection: 'row', padding: 2 }}>
              <List dense>
                <ListItem>
                  <ListItemText>Products</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>News</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>About Us</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Blogs</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Where to Buy</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Career</ListItemText>
                </ListItem>
              </List>

              <List dense>
                <ListItem>
                  <ListItemText>Contact AVITA</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Services</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Repair Terms and Condition</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Terms of Use Notice</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Privacy Policy</ListItemText>
                </ListItem>

              </List>

              </List>


            </div>
            <div className='container-fluid mt-4'><h6><PublicIcon/> INDIA</h6></div>
            

            <Copyright />
          </>
        )
          :
          (
            <>
              <FooterTop />

              <section className='container'>
                <Grid container>
                  <Grid item xs={2}>
                    <Item>
                      <List>
                        <ListItem>
                          <ListItemText>Products</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>News</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>About Us</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>Blogs</ListItemText>
                        </ListItem>
                      </List>
                    </Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>
                      <List>
                        <ListItem>
                          <ListItemText>Where to Buy</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>Contact AVITA</ListItemText>
                        </ListItem>
                      </List>
                    </Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>
                      <List>
                        <ListItem>
                          <ListItemText>Services</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>Repair Terms and Condition</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>Terms of Use Notice</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>Privacy Policy</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>Career</ListItemText>
                        </ListItem>
                      </List>
                    </Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>
                      <List>
                        <ListItem>
                          <ListItemText>NEXSTMALL</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>Flipkart</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>Amazon</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>Paytm Mall</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>Reliance Digital</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>Tata Cliq</ListItemText>
                        </ListItem>
                      </List>
                    </Item>
                  </Grid>
                  <Grid item xs={2}>

                  </Grid>

                  <Grid item xs={2}>
                    <Item>
                      <h6><PublicIcon/> INDIA</h6>
                    </Item>
                  </Grid>
                </Grid>

              </section>
              <Copyright />
            </>
          )

      }
    </section>

  )
}
