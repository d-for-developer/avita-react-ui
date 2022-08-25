import React from 'react'
import Row from 'react-bootstrap/Row';
import mob1 from '../../../../components/assets/product/Wristio2/mob1.jpg';
import web1 from '../../../../components/assets/product/Wristio2/web1.jpg';
import mob2 from '../../../../components/assets/product/Wristio2/mob2.jpg';
import web2 from '../../../../components/assets/product/Wristio2/web2.jpg';
import mob3 from '../../../../components/assets/product/Wristio2/mob3.jpg';
import web3 from '../../../../components/assets/product/Wristio2/web3.jpg';
import mob4 from '../../../../components/assets/product/Wristio2/mob4.jpg';
import web4 from '../../../../components/assets/product/Wristio2/web4.jpg';
import mob5 from '../../../../components/assets/product/Wristio2/mob5.jpg';
import web5 from '../../../../components/assets/product/Wristio2/web5.jpg';
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

            <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} >
            The Ultimate Smartwatch 

            </Typography>
            <Typography variant='p' component='p' mt={4} mb={4} pt={4}>
              <span className='text-white'>The Spectra series are made to profess our love for fashion, technology, and art. These charmers possess benchmark Display, Music Storage* and Bluetooth calling setup to ensure you have the best on your wrist.</span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              src={matches ? (
                mob1
              ) : (
                web1
              )}
              alt="First slide" />
          </Row>
          <Row className='text-center'>

            <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} >
              Immersive Superior Displays
            </Typography>
            <Typography variant='p' component='p' mt={4} mb={4} pt={4}>
              <span className='text-white'>The Spectra series are made to profess our love for fashion, technology, and art. These charmers possess benchmark Display, Music Storage* and Bluetooth calling setup to ensure you have the best on your wrist. </span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              src={matches ? (
                mob2
              ) : (
                web2
              )}
              alt="Second slide" />
          </Row>
          <Row className='text-center'>

            <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} >
                Retina AMOLED

            </Typography>
            <Typography variant='p' component='p' mt={4} mb={4} pt={4}>
              <span className='text-white'>As real as it can be, the supreme class of displays is chosen…just for you! The Retina AMOLED screen delivers absolutely life-like visual clarity backed by 368x448 pixels making everything impressive and immersive. Additionally, a 60Hz refresh rate backed by a HyperSenseTM technology guarantees the watch's smoothest traverse through your favorite functions.</span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              src={matches ? (
                mob3
              ) : (
                web3
              )}
              alt="Third slide" />
          </Row>
          <Row className='text-center'>

            <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} >
              3D Curvature Bezel
            </Typography>
            <Typography variant='p' component='p' mt={4} mb={4} pt={4}>
              <span className='text-white'>The Spectra series come with a premium 3D curved sapphire glass; this is the top most preferred combination by many high-profile watchmakers as well. We also ensured you get the best.  </span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              src={matches ? (
                mob4
              ) : (
                web4
              )}
              alt="Fourth slide" />
          </Row>
          <Row className='text-center'>

            <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} >
                Buds to your watch
            </Typography>
            <Typography variant='p' component='p' mt={4} mb={4} pt={4}>
              <span className='text-white'>Up for a run? You can leave your phone behind this time! Connect your TWS or Neckband earphones to the Spectra Plus and enjoy music on the go with built-in music storage.</span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              src={matches ? (
                mob5
              ) : (
                web5
              )}
              alt="Fifth slide" />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ProductFeatureDark