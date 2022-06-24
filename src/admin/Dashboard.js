import { useTheme, useMediaQuery } from '@mui/material';
import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Sidebar from './layouts/Sidebar';
import SideDrawer from './layouts/SideDrawer';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const data = [{ name: '01 March', uv: 400, pv: 2400, amt: 2000 },
{ name: '08 March', uv: 800, pv: 2100, amt: 3400 },
{ name: '15 March', uv: 3500, pv: 2700, amt: 5400 },
{ name: '22 March', uv: 400, pv: 2400, amt: 2400 },
{ name: '29 March', uv: 1000, pv: 2100, amt: 3400 }
];

export default function Dashboard() {

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <Grid container spacing={2} sx={{ height: '100vh', overflowY: 'hidden' }}>
      <Grid item xs={2} md={2}>
        {
          isMatch ? <Sidebar /> : <SideDrawer />
        }

      </Grid>

      <Grid item xs={10} md={10}>
        <Typography variant="h5" component="div" align="center">
          Admin Home

        </Typography>

        <Grid container spacing={2} sx={{ height: '100vh', overflowY: 'hidden' }}>
        
              <Grid item xs={12} md={3}>
                <Item>

                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <PersonOutlinedIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Total" secondary="123 Customers" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <HowToRegOutlinedIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Registered" secondary="100 Customers" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <TodayOutlinedIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Last Week" secondary="15 Customers" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <CalendarMonthOutlinedIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Last Month" secondary="150 Customers" />
                    </ListItem>
                  </List>
                  <h6 className='text-center p-3'><a href='/'>View More</a></h6>


                </Item>
              </Grid>
          
                <Grid item xs={12} md={3}>
                  <Item>

                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <PersonOutlinedIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Total" secondary="123 Customers" />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <HowToRegOutlinedIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Registered" secondary="100 Customers" />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <TodayOutlinedIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Last Week" secondary="15 Customers" />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <CalendarMonthOutlinedIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Last Month" secondary="150 Customers" />
                      </ListItem>
                    </List>
                    <h6 className='text-center p-3'><a href='/'>View More</a></h6>


                  </Item>
                </Grid>
              

        </Grid>
      </Grid>
    </Grid>

  )
}
