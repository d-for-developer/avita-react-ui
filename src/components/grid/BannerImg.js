import React from 'react'
import Image from "react-bootstrap/Image";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';



const BannerImg = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {
                matches ? (
                    <Container className='mt-4'>
      <Row>
        <Col>
          <Figure>
            <Figure.Image
              width={398}
              height={230}
              alt="398x230"
              src="https://img.freepik.com/premium-vector/7-july-shopping-day-flash-sale-design-with-3d-77-number-podium-falling-confetti_1314-3476.jpg"
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
              src="https://img.freepik.com/premium-vector/7-july-shopping-day-flash-sale-design-with-3d-77-number-podium-falling-confetti_1314-3476.jpg"
            />

          </Figure>
        </Col>
        </Row>
        </Container>

                ) : (
                    <div className='container mt-4' style={{ display: "flex", justifyContent: "space-between" }}>

                        <Image
                            src=
                            "https://img.freepik.com/premium-vector/7-july-shopping-day-flash-sale-design-with-3d-77-number-podium-falling-confetti_1314-3476.jpg"
                            rounded />
                        <Image
                            src=
                            "https://img.freepik.com/premium-vector/7-july-shopping-day-flash-sale-design-with-3d-77-number-podium-falling-confetti_1314-3476.jpg"
                            rounded />

                    </div>)
            }
        </>
    )
}

export default BannerImg;