import React from 'react';
import Figure from 'react-bootstrap/Figure';
import image1 from '../assets/grid/1.png';
import image2 from '../assets/grid/2.png';
import image3 from '../assets/grid/3.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export default function FeatureGrid () {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    matches ? (
      <Container className='mt-4'>
      <Row>
        <Col>
          <Figure>
            <Figure.Image
              width={398}
              height={230}
              alt="398x230"
              src={image1}
            />

          </Figure>
        </Col>
        </Row>
        <Row>
        <Col>
          <Figure>
            <Figure.Image
              width={398}
              height={230}
              alt="398x230"
              src={image2}
            />

          </Figure>
        </Col>
        </Row>
        <Row>
        <Col>
          <Figure>
            <Figure.Image
              width={398}
              height={230}
              alt="398x230"
              src={image3}
            />

          </Figure>
        </Col>
      </Row>
    </Container>
  
  ) : (
  <Container className='mt-4'>
      <Row>
        <Col>
          <Figure style={{marginLeft:'2%'}}>
            <Figure.Image
              width={398}
              height={230}
              alt="398x230"
              src={image1}
            />

          </Figure>
        </Col>
        <Col>
          <Figure style={{marginLeft:'2%'}}>
            <Figure.Image
              width={398}
              height={230}
              alt="398x230"
              src={image2}
            />

          </Figure>
        </Col>
        <Col>
          <Figure style={{marginLeft:'2%'}}>
            <Figure.Image
              width={398}
              height={230}
              alt="398x230"
              src={image3}
            />

          </Figure>
        </Col>
      </Row>
    </Container>
    )





  )
}

