import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Video from '../../components/assets/video/home.mp4'
import CardMedia from '@mui/material/CardMedia';


function VideoSection() {
    return (
        <Container className='mt-4 mb-4'>
            <Row>
                <Col>
                    <CardMedia
                        component="video"
                        src={Video}
                        title='Smart Watch Teaser'
                        type="video/mp4"
                        autoPlay
                        loop
                        controls
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default VideoSection