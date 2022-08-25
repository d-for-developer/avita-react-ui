import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import HdRoundedIcon from '@mui/icons-material/HdRounded';
import SettingsPowerRoundedIcon from '@mui/icons-material/SettingsPowerRounded';
import BatteryChargingFullRoundedIcon from '@mui/icons-material/BatteryChargingFullRounded';
import PhoneBluetoothSpeakerRoundedIcon from '@mui/icons-material/PhoneBluetoothSpeakerRounded';
import KeyboardVoiceRoundedIcon from '@mui/icons-material/KeyboardVoiceRounded';
import EventRepeatRoundedIcon from '@mui/icons-material/EventRepeatRounded';



function ProductSpecCard() {
    return (
        <>
            <div className='bg-gray' style={{height:'40vh', paddingTop:'5%'}}>

                <Container>
                    <Row className='text-center'>
                        <Col>
                            <HdRoundedIcon/>
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                UHD TrueHue™ display
                            </Typography>
                        </Col>
                        <Col>
                            <SettingsPowerRoundedIcon />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Always-On Enabled
                            </Typography>
                        </Col>
                        <Col>
                            <BatteryChargingFullRoundedIcon />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Wireless Charging with SnapCharge™
                            </Typography>
                        </Col>


                    </Row>

                    <Row className='text-center'>
                        <Col>
                            <PhoneBluetoothSpeakerRoundedIcon />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Bluetooth voice calling
                            </Typography>
                        </Col>
                        <Col>
                            <KeyboardVoiceRoundedIcon />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Voice Assistants
                            </Typography>
                        </Col>
                        <Col>
                            <EventRepeatRoundedIcon />
                            <Typography variant='p' component='p' mt={1} mb={4}>
                                Up to 15 Days Battery
                            </Typography>
                        </Col>


                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ProductSpecCard