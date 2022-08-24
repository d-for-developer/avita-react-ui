import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const futureDate = new Date(2022, 8, 31);
const getDateDiff = (date1, date2) => {
    const diff = new Date(date2.getTime() - date1.getTime());
    return {
        year: diff.getUTCFullYear() - 1970,
        month: diff.getUTCMonth(),
        day: diff.getUTCDate() - 1,
        hour: diff.getUTCHours(),
        minute: diff.getUTCMinutes(),
        second: diff.getUTCSeconds()
    };
};

// const formatDate = (date) => {
//     let d = new Date(date),
//         month = (d.getMonth() + 1).toString(),
//         day = d.getDate().toString(),
//         year = d.getFullYear().toString();

//     if (month.length < 2) month = "0" + month;
//     if (day.length < 2) day = "0" + day;

//     return [year, month, day].join("-");
// };



function CountDownTimer() {

    const [diff, setDiff] = useState({});

    useEffect(() => {
        const timer = setInterval(() => {
            setDiff(getDateDiff(new Date(), futureDate));
        }, 1000);
        return () => clearInterval(timer);
    }, []);


    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container className='countDown mt-4 mb-4 p-4' style={{height:'30vh'}}>
            {/* {matches ? (<h4 style={{ textAlign: 'center', marginBottom: '25px' }}> <br /> EMBRACE INNOVATION</h4>) : (<Divider sx={{ fontSize: '26px', overflowY: 'hidden', marginBottom: '35px', fontFamily:'Orbitron' }}>  EMBRACE INNOVATION</Divider>)} */}

            {
                matches ? (
                    <>
                        <Row>
                            <Col className='badgeColumn'>

                                <span className="homeBadge" >
                                    {diff.day}
                                </span>

                                <Typography className='badgeHeading' variant="h5" component="div" gutterBottom sx={{ fontFamily:'Orbitron', textAlign:'center' }}>
                                    DAYS
                                </Typography>
                            </Col>
                     
                            <Col className='badgeColumn'>

                                 <span className="homeBadge" >
                                    {diff.hour}
                                </span>
                                <Typography className='badgeHeading' variant="h5" component="div" gutterBottom sx={{ fontFamily:'Orbitron' }}>
                                    HOURS
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='badgeColumn'>

                            <span className="homeBadge" style={{ marginLeft:'35%' }} >
                                    {diff.minute}
                                </span>

                                <Typography className='badgeHeading' variant="h5" component="div" gutterBottom sx={{ fontFamily:'Orbitron' }}>
                                    MINUTES
                                </Typography>
                            </Col>
                       
                            <Col className='badgeColumn'>

                                 <span className="homeBadge"  style={{ marginLeft:'30%' }} >
                                    {diff.second}
                                </span>
                                <Typography className='badgeHeading' variant="h5" component="div" gutterBottom sx={{ fontFamily:'Orbitron' }}>
                                    SECONDS
                                </Typography>
                            </Col>
                        </Row>
                    </>
                ) : (
                    <Row>
                        <Col className='badgeColumn'>

                        <span className="homeBadge" style={{ marginLeft:'45%' }} >
                                    {diff.day}
                                </span>
                            <Typography className='badgeHeading' variant="h5" component="div" gutterBottom sx={{ fontFamily:'Orbitron' }}>
                                DAYS
                            </Typography>
                        </Col>
                        <Col className='badgeColumn'>


                        <span className="homeBadge" >
                                    {diff.hour}
                                </span>
                            <Typography className='badgeHeading' variant="h5" component="div" gutterBottom sx={{ fontFamily:'Orbitron' }}>
                                HOURS
                            </Typography>
                        </Col>
                        <Col className='badgeColumn'>

                        <span className="homeBadge" >
                                    {diff.minute}
                                </span>
                            <Typography className='badgeHeading' variant="h5" component="div" gutterBottom sx={{ fontFamily:'Orbitron' }}>
                                MINUTES
                            </Typography>
                        </Col>
                        <Col className='badgeColumn'>

                        <span className="homeBadge" >
                                    {diff.second}
                                </span>
                            <Typography className='badgeHeading' variant="h5" component="div" gutterBottom sx={{ fontFamily:'Orbitron' }}>
                                SECONDS
                            </Typography>
                        </Col>
                    </Row>
                )
            }
        </Container>

    )
}

export default CountDownTimer