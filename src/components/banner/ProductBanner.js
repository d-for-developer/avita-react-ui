import { Carousel } from 'react-bootstrap';
import mobBanner1 from '../assets/product/Wristo/1.png';
import mobBanner2 from '../assets/product/Wristo/2.png';
import webBanner1 from '../assets/product/Wristo/1.jpg';
import webBanner2 from '../assets/product/Wristo/2.jpg';

import Row from 'react-bootstrap/Row';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


function ProductBanner() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Row>

      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={matches ? (
              mobBanner1
            ) : (
              webBanner1
            )}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={matches ? (
              mobBanner2
            ) : (
              webBanner2
            )}
            alt="Second slide"
          />


        </Carousel.Item>
       
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={matches ? (
              mobBanner1
            ) : (
              webBanner1
            )}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={matches ? (
              mobBanner2
            ) : (
              webBanner2
            )}
            alt="Second slide"
          />


        </Carousel.Item>
       
      </Carousel>
    </Row>
  );
}

export default ProductBanner;