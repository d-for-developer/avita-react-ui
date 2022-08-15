import React from 'react'
import Container from 'react-bootstrap/Container';
import Typography from '@mui/material/Typography';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { Grid } from '@mui/material';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function FooterTop() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {
        matches ? (
          <>
          <div className='footerTop'>
              <Container className='mt-4 mb-4 pb-4'>

                <Row>
                  <Col>
                
                        <CachedOutlinedIcon style={{ fontSize: '50px', opacity: '0.7', marginLeft:'40%'}} />
                    
                        <Typography className='footerHeading' variant="h6" component="div" gutterBottom>

                          Hassel Free Replacement
                        </Typography>
                        <Typography className='footerText' variant="p" component="div" gutterBottom>
                          10 days easy replacement
                        </Typography>
                  
                  </Col>
                  </Row>
                  <Row>

                  <Col>
                 
                        <GppGoodOutlinedIcon style={{ fontSize: '50px', opacity: '0.7' , marginLeft:'40%'}} />
                  
                        <Typography className='footerHeading' variant="h6" component="div" gutterBottom>
                          100% Secure Payments
                        </Typography>
                        <Typography className='footerText' variant="p" component="div" gutterBottom>
                          We support cards, wallets, EMI and COD
                        </Typography>
                    
                  </Col>
                  </Row>
                  <Row>
                  <Col>
                  
                        <MapOutlinedIcon style={{ fontSize: '50px', opacity: '0.7', marginLeft:'40%'}} />
                 
                        <Typography className='footerHeading' variant="h6" component="div" gutterBottom>
                          Vast Service Network
                        </Typography>
                        <Typography className='footerText' variant="p" component="div" gutterBottom>
                          1,000+ service centers across INDIA
                        </Typography>
                    

                  </Col>
                </Row>
              </Container>


            </div>
        </>
        ) : (
          <>
            <div className='footerTop'>
              <Container className='mt-4 mb-4 pb-4'>

                <Row>
                  <Col>
                    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">

                      <Grid item>
                        <CachedOutlinedIcon style={{ fontSize: '50px', opacity: '0.7' }} />
                      </Grid>
                      <Grid item>
                        <Typography className='footerHeading' variant="h6" component="div" gutterBottom>

                          Hassel Free Replacement
                        </Typography>
                        <Typography className='footerText' variant="p" component="div" gutterBottom>
                          10 days easy replacement
                        </Typography>
                      </Grid>
                    </Grid>
                  </Col>

                  <Col>
                    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">

                      <Grid item>
                        <GppGoodOutlinedIcon style={{ fontSize: '50px', opacity: '0.7' }} />
                      </Grid>
                      <Grid item>
                        <Typography className='footerHeading' variant="h6" component="div" gutterBottom>
                          100% Secure Payments
                        </Typography>
                        <Typography className='footerText' variant="p" component="div" gutterBottom>
                          We support cards, wallets, EMI and COD
                        </Typography>
                      </Grid>
                    </Grid>
                  </Col>
                  <Col>
                    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">

                      <Grid item>
                        <MapOutlinedIcon style={{ fontSize: '50px', opacity: '0.7' }} />
                      </Grid>
                      <Grid item>
                        <Typography className='footerHeading' variant="h6" component="div" gutterBottom>
                          Vast Service Network
                        </Typography>
                        <Typography className='footerText' variant="p" component="div" gutterBottom>
                          1,000+ service centers across INDIA
                        </Typography>
                      </Grid>
                    </Grid>

                  </Col>
                </Row>
              </Container>


            </div>
          </>)
      }
    </>
  )
}
