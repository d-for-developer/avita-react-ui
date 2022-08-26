import React from 'react'
import Row from 'react-bootstrap/Row';
import mob1 from '../../../assets/product/Wristio1/Mob/Intro.png';
import web1 from '../../../assets/product/Wristio1/Web/Intro.png';
import web2 from '../../../assets/product/Wristio1/Web/Display.jpg'
import mob2 from '../../../assets/product/Wristio1/Mob/Display.jpg'
import web3 from '../../../assets/product/Wristio1/Web/Health.jpg'
import mob3 from '../../../assets/product/Wristio1/Mob/Health.jpg'
import web4 from '../../../assets/product/Wristio1/Web/Calling.png'
import mob4 from '../../../assets/product/Wristio1/Mob/Calling.png'
import web5 from '../../../assets/product/Wristio1/Web/WaterProof.jpg'
import mob5 from '../../../assets/product/Wristio1/Mob/WaterProof.jpg'


import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import { Container } from 'react-bootstrap';


function ProductFeatureDark() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <div className='bg-dark text-white'>
        <Container>
          <Row className='text-center'>

            <Typography variant='p' component='p' mt={2} mb={4}>
              <span className='text-white'>Classy, prudent, and personal, all the things a watch should be. A perfect companion for all the good and lukewarm moments in your life. Be it working or working out, sleeping or going out, Wristio 1 stays with you like an organ.</span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              width='100%'
              height='100%'
              src={matches ? (
                mob1
              ) : (
                web1
              )}
              alt="First slide" />
          </Row>
          <Row className='text-center'>

            <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} style={{
              background: "-webkit-linear-gradient(30deg, #8C928D 40%, #FF8E53 60%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }} >
              Immersive Superlative Display
            </Typography>
            <Typography variant='p' component='p' mt={2} mb={4}>
              <span className='text-white'>Impress your everyday hustles with the best of a kind. A whopping 1.69' TFT HD display to have a crystal-clear focus on primary and essential things. Treat your eyes with the comfort they deserve. </span>
            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              width='100%'
              height='100%'
              src={matches ? (
                mob2
              ) : (
                web2
              )}
              alt="Second slide" />
          </Row>
          <Row className='text-center'>

            <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} style={{
              background: "-webkit-linear-gradient(30deg, #8C928D 40%, #FF8E53 60%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }} >
              AI Monitored Health Metrics

            </Typography>
            <Typography variant='p' component='p' mt={2} mb={4}>
              <span className='text-white'>Need a go-to companion to keep your well-being on track? Wristio 1 got you all. Equipped with advanced AI health sensors, it helps you to maintain your vitals and triggers the alarm when needed. </span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              width='100%'
              height='100%'
              src={matches ? (
                mob3
              ) : (
                web3
              )}
              alt="Third slide" />
          </Row>
          <Row className='text-center'>

            <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} style={{
              background: "-webkit-linear-gradient(30deg, #8C928D 40%, #FF8E53 60%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}  >
              Phone-like Calling
            </Typography>
            <Typography variant='p' component='p' mt={2} mb={4}>
              <span className='text-white'>It's an era of smartwatches!<br />Ditch your phone for every time calling. Pick your calls in a flash and experience muffle-free and hassle-free calling through the embedded speaker and microphone. </span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              width='100%'
              height='100%'
              src={matches ? (
                mob4
              ) : (
                web4
              )}
              alt="Fourth slide" />
          </Row>
          <Row className='text-center'>

            <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} style={{
              background: "-webkit-linear-gradient(30deg, #8C928D 40%, #FF8E53 60%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}  >
              Splatter Ready
            </Typography>
            <Typography variant='p' component='p' mt={2} mb={4}>
              <span className='text-white'>Worried about wearing your watch out in your favorite monsoon weather? Or stressed about any accidental splashes on your precious watch. Worry not. Wristio 1 can bear it all with its IP67 water resistance display. </span>
            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              width='100%'
              height='100%'
              src={matches ? (
                mob5
              ) : (
                web5
              )}
              alt="Fifth slide" />
              <br/>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ProductFeatureDark