import React from 'react'
import Header from '../layouts/Header'
// import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SideDrawer from '../layouts/SideDrawer'
import Container from 'react-bootstrap/Container';
import Divider from '@mui/material/Divider';
import MenuBg from '../layouts/MenuBg';
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import SupportForm from './SupportForm';
import SupportInfo from './SupportInfo';
// import FooterMiddle from '../layouts/FooterMiddle';

function Support() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  
  return (
    <>

      {matches ? <SideDrawer/> : <Header />}
      <MenuBg/>
      <div className='container mt-4'>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        color="inherit"
                        href="/"
                        >
                        Home
                    </Link>
                  
                    <Typography color="textPrimary">
                        Support
                    </Typography>
                </Breadcrumbs>
            </div>
      <>
        <Container className='mt-4 mb-4'>
          {matches ? (<h4 style={{ textAlign: 'center', marginBottom: '25px' }}> <br /> Have a question?</h4>) : (<Divider sx={{ fontSize: '36px', overflowY: 'hidden', marginBottom: '35px' }}>  Have a question?</Divider>)}
          <p className='text-center'>Drop us an email at the ID mentioned below. Our expertes will get back to you within 24 hours. </p>
        <SupportInfo/>
        <SupportForm/>
        </Container>
      </>
      {/* {matches ? <></> : <Footer />} */}
      {/* <FooterMiddle/> */}
      <Copyright />
    </>
  )
}

export default Support