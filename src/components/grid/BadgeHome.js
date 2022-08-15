import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CountUp from 'react-countup';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const BadgeHome = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (

    <Container className='mt-4 mb-4'>
            {matches?(<h4 style={{textAlign:'center', marginBottom:'25px'}}>AVITA <br/> EMBRACE INNOVATION</h4>):(<Divider sx={{ fontSize:'26px', overflowY:'hidden', marginBottom: '35px' }}>NOVITA | EMBRACE INNOVATION</Divider>)}

    {
      matches?( 
        <>
        <Row>
        <Col className='badgeColumn'>
        <Typography className='badgeHeading' variant="h5" component="div" gutterBottom>
        INDIA'S NO.
         </Typography>
          <CountUp
            start={100}
            end={1}
            duration={2.75}
            separator=" "
            className='homeBadge' 
                       
          >
           
          </CountUp>
          <Typography className='badgeText'  variant="p" component="div" gutterBottom>
        WEARABLE WATCH BRAND
      </Typography>
         </Col>
         </Row>
         <Row>
         <Col className='badgeColumn'>
         <Typography  className='badgeHeading' variant="h5" component="div" gutterBottom>
        APAC NO.
      </Typography>
          <CountUp
            start={100}
            end={4}
            duration={2.75}
            separator=" "
            className='homeBadge'            

          >
           
          </CountUp>
          <Typography  className='badgeText' variant="p" component="div" gutterBottom>
        WEARABLE WATCH BRAND
      </Typography>
         </Col>
         </Row>
         <Row>
         <Col className='badgeColumn'>
         <Typography  className='badgeHeading' variant="h5" component="div" gutterBottom>
        GLOBALLY NO.
      </Typography>
          <CountUp
            start={100}
            end={5}
            duration={2.75}
            separator=" "
            className='homeBadge'            

          >
           
          </CountUp>
          <Typography  className='badgeText' variant="p" component="div" gutterBottom>
        WEARABLE WATCH BRAND
      </Typography>
         </Col>
         </Row>
         <Row>
         <Col className='badgeColumn'>
         <Typography  className='badgeHeading' variant="h5" component="div" gutterBottom>
        AVAILABLE INTO
      </Typography>
          <CountUp
            start={100}
            end={10}
            duration={2.75}
            separator=" "
            className='homeBadge'>
           
          </CountUp>
          <Typography  className='badgeText' variant="p" component="div" gutterBottom>
        WEARABLE WATCH BRAND
      </Typography>
         </Col>
      </Row>
      </>
      ):(  
        <Row>
        <Col className='badgeColumn'>
        <Typography className='badgeHeading' variant="h5" component="div" gutterBottom>
        INDIA'S NO.
         </Typography>


          <CountUp
            start={100}
            end={1}
            duration={2.75}
            separator=" "
            className='homeBadge' 
                       
          >
           
          </CountUp>
          <Typography className='badgeText'  variant="p" component="div" gutterBottom>
        WEARABLE WATCH BRAND
      </Typography>
         </Col>
         <Col className='badgeColumn'>
         <Typography  className='badgeHeading' variant="h5" component="div" gutterBottom>
        APAC NO.
      </Typography>
          <CountUp
            start={100}
            end={4}
            duration={2.75}
            separator=" "
            className='homeBadge'            

          >
           
          </CountUp>
          <Typography  className='badgeText' variant="p" component="div" gutterBottom>
        WEARABLE WATCH BRAND
      </Typography>
         </Col>
         <Col className='badgeColumn'>
         <Typography  className='badgeHeading' variant="h5" component="div" gutterBottom>
        GLOBALLY NO.
      </Typography>
          <CountUp
            start={100}
            end={5}
            duration={2.75}
            separator=" "
            className='homeBadge'            

          >
           
          </CountUp>
          <Typography  className='badgeText' variant="p" component="div" gutterBottom>
        WEARABLE WATCH BRAND
      </Typography>
         </Col>
         <Col className='badgeColumn'>
         <Typography  className='badgeHeading' variant="h5" component="div" gutterBottom>
        AVAILABLE INTO
      </Typography>
          <CountUp
            start={100}
            end={10}
            duration={2.75}
            separator=" "
            className='homeBadge'            

          >
           
          </CountUp>
          <Typography  className='badgeText' variant="p" component="div" gutterBottom>
        WEARABLE WATCH BRAND
      </Typography>
         </Col>
      </Row>
      )
    }
    </Container>

  )
}

export default BadgeHome