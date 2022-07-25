import { Carousel } from 'react-bootstrap';
import image1 from '../assets/banner/1.jpg';
import image2 from '../assets/banner/2.jpg';
import image3 from '../assets/banner/3.jpg';
import Row from 'react-bootstrap/Row';



function HomeBanner() {
  return (
    <Row>

    <Carousel>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
      />
    
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image2}
        alt="Second slide"
      />

   
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image3}
        alt="Third slide"
      />

    </Carousel.Item>
  </Carousel>
  </Row>
  );
}

export default HomeBanner;