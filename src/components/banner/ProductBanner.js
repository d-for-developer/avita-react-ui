import { Carousel } from 'react-bootstrap';
import mobBanner1 from '../assets/product/mobBanner/1.jpeg';
import mobBanner2 from '../assets/product/mobBanner/2.jpeg';
import mobBanner3 from '../assets/product/mobBanner/3.jpeg';
import mobBanner4 from '../assets/product/mobBanner/4.jpeg';
import webBanner1 from '../assets/product/webBanner/1.jpg';
import webBanner2 from '../assets/product/webBanner/2.jpg';
import webBanner3 from '../assets/product/webBanner/3.jpg';
import webBanner4 from '../assets/product/webBanner/4.jpg';
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
              mobBanner3
            ) : (
              webBanner3
            )}
            alt="Third slide"
          />

        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={matches ? (
              mobBanner4
            ) : (
              webBanner4
            )}
            alt="Fourth slide"
          />

        </Carousel.Item>
      </Carousel>
    </Row>
  );
}

export default ProductBanner;