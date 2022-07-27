import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typography from '@mui/material/Typography';


export default function FooterTop() {
  return (
    <div className='footerTop'>    
    <Container className='mt-4 mb-4'>

<Row>
  <Col>
    <Typography className='footerHeading' variant="h6" component="div" gutterBottom>
        Hassel Free Replacement
      </Typography>
      <Typography className='footerText' variant="p" component="div" gutterBottom>
        10 days easy replacement
      </Typography>
   </Col>
   <Col>
   <Typography className='footerHeading' variant="h6" component="div" gutterBottom>
        100% Secure Payments
      </Typography>
      <Typography className='footerText' variant="p" component="div" gutterBottom>
        We support cards, wallets, EMI and COD
      </Typography>
   </Col>
   <Col>
   <Typography className='footerHeading' variant="h6" component="div" gutterBottom>
        Vast Service Network
      </Typography>
      <Typography className='footerText' variant="p" component="div" gutterBottom>
        1,000+ service centers across INDIA
      </Typography>
   </Col>

</Row>
</Container></div>
  )
}
