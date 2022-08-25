import React from 'react';
import Row from 'react-bootstrap/Row';
import Typography from '@mui/material/Typography';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import NotListedLocationOutlinedIcon from '@mui/icons-material/NotListedLocationOutlined';

function SupportInfo() {
    return (
        <>
            <Container>
                <Row className='text-center'>
                    <Col>
                    <LocalPostOfficeOutlinedIcon/>
                    
                <Typography variant='span' component='span' mx={2}>

                  support@novita-global.com 

            </Typography>
            </Col>

            <Col>
                    <NotListedLocationOutlinedIcon/>
                    
                <Typography variant='span' component='span' mx={2}>

                    PAN INDIA SERVICE 

            </Typography>
            </Col>
           
                </Row>
            </Container>
        </>
    )
}

export default SupportInfo