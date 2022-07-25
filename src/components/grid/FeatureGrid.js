import React from 'react';
import Figure from 'react-bootstrap/Figure';
import image1 from '../assets/grid/1.jpg';
import image2 from '../assets/grid/2.jpg';
import image3 from '../assets/grid/3.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const FeatureGrid = () => {
  return (
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


  
  )
}

export default FeatureGrid