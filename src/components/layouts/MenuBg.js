import React from 'react';
import Row from 'react-bootstrap/Row';
import bg from '../assets/bg.jpg';
import { Carousel } from 'react-bootstrap';


function MenuBg() {
    return (
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bg}
                            alt="Background"
                        />
                    </Carousel.Item>
                </Carousel>
            </Row>
           
    )
}

export default MenuBg