import React from 'react'
import { Grid, useMediaQuery, useTheme } from '@mui/material'
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



export const FooterTop = () => {


    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <section className='container-fluid' sx={{ backgroundColor:'#fff'}}>
            {
                matchDownMd ? (
                <> 
                 <Grid container sx={{ overflowY:'hidden', height:'60px'}}>
                    <Grid item xs={12}>
                        <Item >
                            <SocialIcon network="facebook" className='socialicon' style={{ height: 30, width: 30 }} />
                            <SocialIcon network="instagram" className='socialicon' style={{ height: 30, width: 30 }} />
                            <SocialIcon network="twitter" className='socialicon' style={{ height: 30, width: 30 }} />
                            <SocialIcon network="linkedin" className='socialicon' style={{ height: 30, width: 30 }} />
                            <SocialIcon network="youtube" className='socialicon' style={{ height: 30, width: 30 }} />
                            <SocialIcon network="whatsapp" className='socialicon' style={{ height: 30, width: 30 }} />
                        </Item>
                    </Grid>
                </Grid>

                
                </>
                ) : (
                <> 
                <Grid container>
                    <Grid item xs={3}>
                        <Item>
                            <img
                                height="26"
                                src={`${Logo}`}
                                srcSet={`${Logo}`}
                                loading="lazy"
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>

                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>
                            <SocialIcon network="facebook" className='socialicon' style={{ height: 30, width: 30 }} />
                            <SocialIcon network="instagram" className='socialicon' style={{ height: 30, width: 30 }} />
                            <SocialIcon network="twitter" className='socialicon' style={{ height: 30, width: 30 }} />
                            <SocialIcon network="linkedin" className='socialicon' style={{ height: 30, width: 30 }} />
                            <SocialIcon network="youtube" className='socialicon' style={{ height: 30, width: 30 }} />
                            <SocialIcon network="whatsapp" className='socialicon' style={{ height: 30, width: 30 }} />
                        </Item>
                    </Grid>
                </Grid>
                </>
                )
            }

        </section>
    )
}
