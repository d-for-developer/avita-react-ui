import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CountUp from 'react-countup';
import Typography from '@mui/material/Typography';



const BadgeHome = () => {
  return (
    <Container>

      <Row>
        <Col>
        <Typography variant="h4" component="div" gutterBottom>
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
          <Typography variant="p" component="div" gutterBottom>
        WEARABLE WATCH BRAND
      </Typography>
         </Col>
         <Col>
         <Typography variant="h4" component="div" gutterBottom>
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
          <Typography variant="p" component="div" gutterBottom>
        WEARABLE WATCH BRAND
      </Typography>
         </Col>
         <Col>
         <Typography variant="h4" component="div" gutterBottom>
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
          <Typography variant="p" component="div" gutterBottom>
        WEARABLE WATCH BRAND
      </Typography>
         </Col>
         <Col>
         <Typography variant="h4" component="div" gutterBottom>
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
          <Typography variant="p" component="div" gutterBottom>
        WEARABLE WATCH BRAND
      </Typography>
         </Col>
      </Row>
    </Container>

  )
}

export default BadgeHome