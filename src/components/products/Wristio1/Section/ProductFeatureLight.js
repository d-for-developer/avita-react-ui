import React from 'react'
import Row from 'react-bootstrap/Row';
import mob6 from '../../../assets/product/Wristio1/Mob/Music.jpg';
import web6 from '../../../assets/product/Wristio1/Web/Music.jpg';
import web7 from '../../../assets/product/Wristio1/Web/Sports.jpg'
import mob7 from '../../../assets/product/Wristio1/Mob/Sports.jpg'
import web8 from '../../../assets/product/Wristio1/Web/Battery.jpg'
import mob8 from '../../../assets/product/Wristio1/Mob/Battery.jpg'
import web9 from '../../../assets/product/Wristio1/Web/WatchFace.jpg'
import mob9 from '../../../assets/product/Wristio1/Mob/WatchFace.jpg'
import web10 from '../../../assets/product/Wristio1/Web/Weather.jpg'
import mob10 from '../../../assets/product/Wristio1/Mob/Weather.jpg'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import { Container } from 'react-bootstrap';


function ProductFeatureLight() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <div className='bg-light text-black'>
        <Container>
          <Row className='text-center'>

          <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} style={{
              background: "-webkit-linear-gradient(30deg, #8C928D 40%, #4E4F4E 60%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}  >
                              Your Mood. Your Music

            </Typography>
            <Typography variant='p' component='p' mt={2} mb={4}>
              <span className='text-dark'>Don't settle! Explore music for every mood. Pause, play, or skip all the banger tunes just on your wrist. </span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              width='100%'
              height='100%'
              src={matches ? (
                mob6
              ) : (
                web6
              )}
              alt="First slide" />
          </Row>
          <Row className='text-center'>

          <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} style={{
              background: "-webkit-linear-gradient(30deg, #8C928D 40%, #4E4F4E 60%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}  >
                              Train with Convenience/ Be your own health guard
            </Typography>
            <Typography variant='p' component='p' mt={2} mb={4}>
              <span className='text-dark'>Guard your health in a chic way.  Running, cycling, walking, swimming, or playing multiple sports, do whatever your body demands to stay fit. Carry your gym wherever you go.</span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              width='100%'
              height='100%'
              src={matches ? (
                mob7
              ) : (
                web7
              )}
              alt="Second slide" />
          </Row>
          <Row className='text-center'>

          <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} style={{
              background: "-webkit-linear-gradient(30deg, #8C928D 40%, #4E4F4E 60%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}  >
                              Up To 22 Days Battery Life (typical use, with BT calling, charging time and standby time)
            </Typography>
            <Typography variant='p' component='p' mt={2} mb={4}>
              <span className='text-dark'>Never out of charge. Wristio 1 stays with you anytime, anywhere. Charged within minutes and goes on for days. </span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              width='100%'
              height='100%'
              src={matches ? (
                mob8
              ) : (
                web8
              )}
              alt="Third slide" />
          </Row>
          <Row className='text-center'>

          <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} style={{
              background: "-webkit-linear-gradient(30deg, #8C928D 40%, #4E4F4E 60%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}  >
                              Explore Multi UIs
            </Typography>
            <Typography variant='p' component='p' mt={2} mb={4}>
              <span className='text-dark'>Never go out of style. 250+ watch face for all your occasions to complement the look in a perfect way. </span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              width='100%'
              height='100%'
              src={matches ? (
                mob9
              ) : (
                web9
              )}
              alt="Fourth slide" />
          </Row>
          <Row className='text-center'>

          <Typography variant='h3' component='h3' mt={4} mb={4} pt={4} style={{
              background: "-webkit-linear-gradient(30deg, #8C928D 40%, #4E4F4E 60%)",
              webkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}  >
                                Keep a weather check
            </Typography>
            <Typography variant='p' component='p' mt={2} mb={4}>
              <span className='text-dark'>Be every weather ready. Bad weather will no longer be a hindrance; stay updated with Wristio 1 live weather check and plan accordingly. </span>

            </Typography>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              width='100%'
              height='100%'
              src={matches ? (
                mob10
              ) : (
                web10
              )}
              alt="Fifth slide" />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ProductFeatureLight