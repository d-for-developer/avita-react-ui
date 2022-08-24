import React from 'react'
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const Footer = () => {

    
  return (
    <Container className='footerMain' sx={{marginTop:'12%'}}>
      <Grid container spacing={0} direction="row">
        <Grid item xs={2}>
           <Typography sx={{ mb:2, fontWeight: '800' }} variant="p" >
              SUPPORT
            </Typography>
          <List>
           
            <ListItem>
              <ListItemText>
                <a href='/support'>Customer Support</a>
                </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Shipping FAQ</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Service Centres</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Warranty Registration</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Extend Warranty</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Complaint Register</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>User Guide</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={2}>
        <Typography sx={{ mb:2, fontWeight: '800'  }} variant="p">
              SHOP
            </Typography>
          <List>
        
            <ListItem>
              <ListItemText>Laptops</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Smart Lighting</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Smart Wearable</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Accessories</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={2}>
        <Typography sx={{ mb:2, fontWeight: '800'  }} variant="p">
              RETAIL STORE
            </Typography>
          <List>
            
            <ListItem>
              <ListItemText>NOVITA Home</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Authorized Stores</ListItemText>
            </ListItem>
         
          </List>
        </Grid>
        <Grid item xs={2}>
        <Typography sx={{ mb:2, fontWeight: '800'  }} variant="p">
              ABOUT US
            </Typography>
          <List>
           
            <ListItem>
              <ListItemText>NOVITA</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Privacy Policy</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Terms of Service</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>User Agreement</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>E-Waste Management</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Trust Center</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Service Quality</ListItemText>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={2}>
        <Typography sx={{ mb:2, fontWeight: '800'  }} variant="p">
              CONTACT US
            </Typography>
          <List>
            
            <ListItem>
              <ListItemText>Email</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Careers</ListItemText>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={2}>
        <Typography sx={{ mb:2, fontWeight: '800'  }} variant="p">
              CHAT
            </Typography>
          <List>
      
            <ListItem>
              <ListItemText>Chat Bot</ListItemText>
            </ListItem>
          
          </List>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer