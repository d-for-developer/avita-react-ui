import React from 'react'
import Header from '../../layouts/Header'
import Copyright from '../../layouts/Copyright'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SideDrawer from '../../layouts/SideDrawer'
import Container from 'react-bootstrap/Container';
import Divider from '@mui/material/Divider';
import MenuBg from '../../layouts/MenuBg';
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MainImg from '../../assets/product/Wristio1/MAIN.png'
import Button from '@mui/material/Button';


function TechSpec() {
    

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <>

    {matches ? <SideDrawer /> : <Header />}
    <MenuBg />
    <div className='container mt-4'>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          color="inherit"
          href="/"
        >
          Home
        </Link>
        <Link
          color="inherit"
          href="/products/wristio1"
        >
          Wristio 1
        </Link>

        <Typography color="textPrimary">
          Tech Spec
        </Typography>
      </Breadcrumbs>
    </div>
    <>
      <Container className='mt-4 mb-4'>
        {matches ? (<h4 style={{ textAlign: 'center', marginBottom: '25px' }}> <br />  Technical Specification</h4>) : (<Divider sx={{ fontSize: '36px', overflowY: 'hidden', marginBottom: '35px' }}>  Technical Specification</Divider>)}
        <div className='text-center'>
        <img
            src={MainImg}
            alt="Fourth slide" />
        </div>
        <p className='text-center'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
        <br />
        <div>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                PRODUCT SPECIFICATIONS
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <b>Product Dimensions</b>
                <p> 2.4*3.9*1.2 cms</p>
              </Typography>
              <Typography>
                <b>Mounting Hardware </b>
                <p> REALTEK8763</p>
              </Typography>
              <Typography>
                <b>Material</b>
                <p> Premium Metal</p>
              </Typography>
              <Typography>
                <b>Product Weight </b>
                <p> 50 gms</p>
              </Typography>
              <Typography>
                <b>IP rating </b>
                <p> IP68 Water-Resistant</p>
              </Typography>

            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>CONNECTIVITY</Typography>

            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <b>Compatibility</b>
                <p> iOS9 & above | Android 4.4 & above</p>
              </Typography>
              <Typography>
                <b>Bluetooth version</b>
                <p> 5.2</p>
              </Typography>
              <Typography>
                <b>Operating System </b>
                <p> REALTEK 8763</p>
              </Typography>
              <Typography>
                <b>Wireless type </b>
                <p> Bluetooth</p>
              </Typography>
              <Typography>
                <b>Device interface (primary) </b>
                <p> Android & iOS</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                DISPLAY
              </Typography>

            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <b>Screen  </b>
                <p> Full touch TrueHUE™ display</p>
              </Typography>
              <Typography>
                <b>Color </b>
                <p> 99.5% wide color gamut</p>
              </Typography>

              <Typography>
                <b>Brightness </b>
                <p> 600 nits</p>
              </Typography>

              <Typography>
                <b>Size </b>
                <p> 1.75”</p>
              </Typography>

              <Typography>
                <b>Resolution </b>
                <p> 320*385</p>
              </Typography>

              <Typography>
                <b>Watch faces </b>
                <p> 200+ & Customizable </p>
              </Typography>
              <Typography>
                <b>Triple theme</b>
                <p> Yes</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                SENSORS
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>
                <b>Heart rate</b>
                <p> Yes</p>
              </Typography>
              <Typography>
                <b>Accelerometer</b>
                <p> Yes</p>
              </Typography>

              <Typography>
                <b>SpO2</b>
                <p> Yes</p>
              </Typography>

              <Typography>
                <b>BP</b>
                <p> Yes</p>
              </Typography>

              <Typography>
                <b>Multi-motion activity</b>
                <p> Yes</p>
              </Typography>


            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                BATTERY & CHARGING
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <b>Battery description </b>
                <p> Yes</p>
              </Typography>
              <Typography>
                <b>Battery Capacity </b>
                <p> Yes</p>
              </Typography>

              <Typography>
                <b>Battery Included </b>
                <p> Yes</p>
              </Typography>

              <Typography>
                <b>Battery Required</b>
                <p> Yes</p>
              </Typography>

              <Typography>
                <b>Connector type</b>
                <p> Magnetic charging cable</p>
              </Typography>

              <Typography>
                <b>Typical Use </b>
                <p> Up to 7 days</p>
              </Typography>
              <Typography>
                <b>With Calling </b>
                <p> Up to 2 days</p>
              </Typography>

              <Typography>
                <b>Standby time </b>
                <p> Up to 20 Days</p>
              </Typography>

              <Typography>
                <b>Charging time </b>
                <p> 75 mins</p>
              </Typography>

            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>HEALTH FEATURES</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <b>Heart Rate</b>
              </Typography>
              <Typography>
                <b>Blood Pressure</b>
              </Typography>
              <Typography>
                <b>SpO2</b>
              </Typography>
              <Typography>
                <b>Breath Training</b>
              </Typography>
              <Typography>
                <b>Step Count</b>
              </Typography>
              <Typography>
                <b>Sleep Tracking</b>
              </Typography>
              <Typography>
                <b>Stress Monitor</b>
              </Typography>
              <Typography>
                <b>Emotion Test</b>
              </Typography>
              <Typography>
                <b>Fatigue Test</b>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel7bh-content"
              id="panel7bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                SPECIAL FEATURES
             </Typography>
            
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <b>Segment’s slimmest Single-chip Bluetooth calling Smartwatch</b>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel8bh-content"
              id="panel8bh-header"
            >
             <Typography sx={{ width: '33%', flexShrink: 0 }}>
             SMART FEATURES


             </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <b>Notifications</b>
              </Typography>
              <Typography>
                <b>Weather</b>
              </Typography>
              <Typography>
                <b>Voice assistant</b>
              </Typography>
              <Typography>
                <b>Camera shutter</b>
              </Typography>
              <Typography>
                <b>Music control</b>
              </Typography>
              <Typography>
                <b>Timer</b>
              </Typography>
              <Typography>
                <b>Water in-take reminder</b>
              </Typography>
              <Typography>
                <b>Stopwatch</b>
              </Typography>
              <Typography>
                <b>Calculator</b>
              </Typography>
              <Typography>
                <b>DND mode</b>
              </Typography>
              <Typography>
                <b>Tilt to view</b>
              </Typography>
              <Typography>
                <b>Sedentary reminder</b>
              </Typography>
              <Typography>
                <b>Stress Monitor</b>
              </Typography>
              <Typography>
                <b>Emotion Test</b>
              </Typography>
              <Typography>
                <b>Fatigue Test</b>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel9bh-content"
              id="panel9bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  SMART APP
              </Typography>
              
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <b>GLORYFIT</b>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel10bh-content"
              id="panel10bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>MANUFACTURER DETAILS</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <b>Brand</b>
                <p> CROSSBEATS</p>
              </Typography>
              <Typography>
                <b>Manufacturer</b>
                <p> SBT Digital</p>
              </Typography>
              <Typography>
                <b>Model Name</b>
                <p> CB-ST-WATCH74</p>
              </Typography>
              <Typography>
                <b>Model Year</b>
                <p> 2022</p>
              </Typography>
              <Typography>
                <b>Country of Origin</b>
                <p> INDIA</p>
              </Typography>
              <Typography>
                <b>Generic name</b>
                <p> Ignite Grande</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />

        </div>
    <div className='text-center'>
        <Button variant="outlined" href="#outlined-buttons" >
      Download User Manual
    </Button>
    </div>
      </Container>
    </>
    <Copyright />
  </>
  )
}

export default TechSpec