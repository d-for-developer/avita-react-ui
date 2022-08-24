import React from 'react';
import { Grid } from '@mui/material';
import { Subscribe } from '../newsletter/Subscribe';
import { SocialIcons } from '../newsletter/SocialIcons';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function FooterMiddle() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {
                matches ? (<>

                    <Container className='mt-4 mb-4 pb-4 '>

                        <Row>
                            <Col>
                                <Typography variant="h6" component="div" gutterBottom fontSize={18} style={{ marginLeft: '20%' }}>
                                    LET'S STAY IN TOUCH
                                </Typography>
                                <Typography variant="p" component="div" gutterBottom fontSize={12} style={{ marginLeft: '15%' }}>
                                    Get updates on sales specials and more
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='mt-2'>
                                <FormControl style={{ marginLeft: '15%' }}>
                                    <InputLabel style={{ marginTop: '1%' }} htmlFor="my-input">Email address</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" />
                                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                                </FormControl>
                                <IconButton variant="outlined">
                                    <SendOutlinedIcon style={{ fontSize: '30px', marginTop: '20px' }} />

                                </IconButton>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Typography variant="h6" component="div" gutterBottom fontSize={18} style={{ marginLeft: '37%', marginTop: '45px' }}>
                                    Follow Us
                                </Typography>
                                <Typography variant="p" component="div" gutterBottom fontSize={12} style={{ marginLeft: '30%' }}>
                                    <IconButton aria-label="facebook" href="https://www.facebook.com/NOVITA.India.official">
                                        <FaFacebook />
                                    </IconButton>
                                    <IconButton aria-label="instagram" href="https://www.instagram.com/novita.india/">
                                        <FaInstagram />
                                    </IconButton>
                                    <IconButton aria-label="twitter" href="https://twitter.com/novitaindia">
                                        <FaTwitter />
                                    </IconButton>
                                    {/* <IconButton aria-label="youtube">
                                        <FaYoutube />
                                    </IconButton>
                                     */}
                                    <IconButton aria-label="linkedIn" href="https://www.linkedin.com/company/novita-india/">
                                        <FaLinkedin />
                                    </IconButton>

                                </Typography>
                            </Col>
                        </Row>
                    </Container>

                </>) : (

                    <Container className='mt-4 mb-4 pb-4'>
                        <Grid container spacing={12} direction="row" justifyContent="left" alignItems="left">

                            <Grid item xs={6}>
                                <Subscribe />
                            </Grid>


                            <Grid item xs={6}>
                                <SocialIcons />
                                <Grid container spacing={12} direction="row" justifyContent="left" alignItems="left">
                                <Grid item xs={6}>
                                </Grid>
                                    <Grid item xs={2}>
                                        <List>
                                            <ListItem>
                                                <ListItemText>
                                                    <a href='/support'>Support</a>
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <List>
                                            <ListItem>
                                                <ListItemText>
                                                    <a href='/'>About Us</a>
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>)
            }
        </>
    )


}
