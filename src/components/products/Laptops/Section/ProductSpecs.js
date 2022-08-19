import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from '../../../assets/product/Spec/battery.png';
import image2 from '../../../assets/product/Spec/hd.png';
import image3 from '../../../assets/product/Spec/processor.png';
import image4 from '../../../assets/product/Spec/ram.png';
import image5 from '../../../assets/product/Spec/ssd.png';
import image6 from '../../../assets/product/Spec/trackpad.png';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



function ProductSpecs() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {
                matches ? (<>
                    <Container className='mt-4 mb-4 w-100 p-4'>
                        <Row>
                            <Col className='specColumn'>

                                <img
                                    className="specImg"
                                    src={image1}
                                    alt="Battery Life"
                                />
                                <Typography align="center" className='specHeading' variant="h6" component="div" gutterBottom>
                                    10 Hours* Battery Life
                                </Typography>
                            </Col>
                        </Row>

                        <Row className='specRow mt-4'>
                            <Col className='specColumn'>

                                <img
                                    className="specImg"
                                    src={image2}
                                    alt="Battery Life"
                                />
                                <Typography align="center" className='specHeading' variant="h6" component="div" gutterBottom>
                                    Full HD Display
                                </Typography>
                            </Col>

                        </Row>

                        <Row className='specRow mt-4'>
                            <Col className='specColumn'>
                                <img
                                    className="specImg center"
                                    src={image3}
                                    alt="Battery Life"
                                />
                                <Typography align="center" className='specHeading' variant="h6" component="div" gutterBottom>
                                    Intel<sup>&#174;</sup> Core i5 Processor
                                </Typography>
                            </Col>
                        </Row>

                        <Row className='specRow mt-4'>
                            <Col className='specColumn'>

                                <img
                                    className="specImg"
                                    src={image4}
                                    alt="Battery Life"
                                />
                                <Typography align="center" className='specHeading' variant="h6" component="div" gutterBottom>
                                    8GB DDR4 RAM
                                </Typography>
                            </Col>

                        </Row>

                        <Row className='specRow mt-4'>

                            <Col className='specColumn'>

                                <img
                                    className="specImg"
                                    src={image5}
                                    alt="Battery Life"
                                />
                                <Typography align="center" className='specHeading' variant="h6" component="div" gutterBottom>
                                    512GB SSD Storage
                                </Typography>
                            </Col>
                        </Row>

                        <Row className='specRow mt-4'>
                            <Col className='specColumn'>

                                <img
                                    className="specImg"
                                    src={image6}
                                    alt="Battery Life"
                                    align="center"
                                />
                                <Typography align="center" className='specHeading' variant="h6" component="div" gutterBottom>
                                    Large Trackpad
                                </Typography>
                            </Col>
                        </Row>
                    </Container>

                </>) : (<>
                    <Container className='mt-4 mb-4 w-100 p-4'>
                        <Row>
                            <Col className='specColumn'>

                                <img
                                    className="specImg"
                                    src={image1}
                                    alt="Battery Life"
                                />
                                <Typography align="center" className='specHeading' variant="h6" component="div" gutterBottom>
                                    10 Hours* Battery Life
                                </Typography>
                            </Col>
                            <Col className='specColumn'>

                                <img
                                    className="specImg"
                                    src={image2}
                                    alt="Battery Life"
                                />
                                <Typography align="center" className='specHeading' variant="h6" component="div" gutterBottom>
                                    Full HD Display
                                </Typography>
                            </Col>
                            <Col className='specColumn'>
                                <img
                                    className="specImg center"
                                    src={image3}
                                    alt="Battery Life"
                                />
                                <Typography align="center" className='specHeading' variant="h6" component="div" gutterBottom>
                                    Intel<sup>&#174;</sup> Core i5 Processor
                                </Typography>
                            </Col>
                        </Row>

                        <Row className='specRow mt-4'>
                            <Col className='specColumn'>

                                <img
                                    className="specImg"
                                    src={image4}
                                    alt="Battery Life"
                                />
                                <Typography align="center" className='specHeading' variant="h6" component="div" gutterBottom>
                                    8GB DDR4 RAM
                                </Typography>
                            </Col>
                            <Col className='specColumn'>

                                <img
                                    className="specImg"
                                    src={image5}
                                    alt="Battery Life"
                                />
                                <Typography align="center" className='specHeading' variant="h6" component="div" gutterBottom>
                                    512GB SSD Storage
                                </Typography>
                            </Col>
                            <Col className='specColumn'>

                                <img
                                    className="specImg"
                                    src={image6}
                                    alt="Battery Life"
                                    align="center"
                                />
                                <Typography align="center" className='specHeading' variant="h6" component="div" gutterBottom>
                                    Large Trackpad
                                </Typography>
                            </Col>
                        </Row>
                    </Container>

                </>)
            }
        </>
    )
}

export default ProductSpecs